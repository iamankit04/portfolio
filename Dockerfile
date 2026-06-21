# ─── Stage 1: Install dependencies ───────────────────────────────────────────
FROM node:20-alpine AS deps

# libc6-compat is required for some native modules on Alpine
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copy lockfile and package manifest first to leverage Docker layer caching
COPY package.json package-lock.json ./

# Install only production dependencies (ci for reproducible installs)
RUN npm ci --omit=dev


# ─── Stage 2: Build the application ─────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Bring in production node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy the full source
COPY . .

# next build needs devDependencies (TypeScript, ESLint, etc.) so install all
# deps here. We keep them separate from the runner to keep the final image lean.
RUN npm ci

# Disable Next.js telemetry during build
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build


# ─── Stage 3: Production runner ──────────────────────────────────────────────
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create a non-root user/group for security
RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

# Copy public assets and the pre-rendered static output
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copy the minimal standalone server bundle produced by `output: 'standalone'`
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

USER nextjs

EXPOSE 3000

# The standalone server.js respects PORT and HOSTNAME env vars (see Next.js docs)
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]
