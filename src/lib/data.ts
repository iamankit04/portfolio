import { Code2, Server, Database, Globe, Layers, Laptop, PenTool, GitBranch, Terminal } from "lucide-react";
import { 
  SiCplusplus, 
  SiTypescript, 
  SiJavascript, 
  SiPython, 
  SiC, 
  SiHtml5, 
  SiCss, 
  SiNextdotjs, 
  SiReact, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiRedux, 
  SiGreensock, 
  SiMongodb,
  SiGit,
  SiGithub,
  SiMysql
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const personalData = {
  name: "Ankit Kumar Gupta",
  title: "Full Stack Developer & Problem Solver",
  role: "Full Stack Developer",
  shortIntro: "I'm a B.Tech CSE student passionate about building scalable web applications and solving complex problems. Focusing on MERN stack, System Design, and competitive programming.",
  contact: {
    email: "ankitkumargup143@gmail.com",
    phone: "6295157674",
    linkedin: "https://linkedin.com/in/iamankit04",
    github: "https://github.com/iamankit04",
  },
  stats: {
    problemsSolved: "1000+",
    leetcodeRating: "1500+",
    majorProjects: "2",
  }
};

export const education = [
  {
    institution: "G.L. Bajaj Institute of Technology and Management, Greater Noida, India",
    degree: "B.Tech CSE",
    period: "2023–2027",
    score: "CGPA 7.91",
  },
  {
    institution: "RLJDMC DAV Public School, Raniganj, India",
    degree: "Intermediate",
    period: "2022",
    score: "86%",
  },
  {
    institution: "St. Michael's School, Durgapur, India",
    degree: "High School",
    period: "2020",
    score: "86%",
  }
];

export const projects = [
  {
    title: "Rydex",
    description: "Multi-Partner Vehicle Booking Platform featuring multi-role dashboards, automated revenue split, real-time tracking, and video KYC.",
    longDescription: "A comprehensive ride-booking platform with User, Partner, and Admin dashboards. Implemented Razorpay for a 90/10 automated revenue split, real-time ride tracking, pickup/drop OTP verification, AI-powered in-ride chat, and Jigo Cloud Video KYC for partner verification.",
    techStack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Razorpay", "NextAuth.js", "Redux Toolkit", "Cloudinary"],
    links: {
      github: "https://github.com/iamankit04/3.rydex",
      live: "https://3-rydex-nu.vercel.app",
    },
    features: [
      "User, Partner, and Admin dashboards",
      "NextAuth.js Google OAuth + Email/OTP login",
      "Razorpay integration (90/10 split)",
      "Real-time tracking & OTP verification",
      "AI-powered in-ride chat",
      "Jigo Cloud video KYC"
    ]
  },
  {
    title: "MultiCart",
    description: "Multi-Vendor E-Commerce Platform with vendor verification, complex return/refund workflows, and AI support.",
    longDescription: "An expansive e-commerce marketplace supporting User, Vendor, and Admin roles. Features robust vendor verification workflows, Stripe payment integration, OTP-based order delivery verification, seamless returns and refunds processing, and AI-powered customer support chat.",
    techStack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Stripe", "NextAuth.js", "Redux Toolkit", "Tailwind CSS"],
    links: {
      github: "https://github.com/iamankit04/multicart",
      live: "https://multicart-bay.vercel.app",
    },
    features: [
      "User, Vendor, and Admin roles",
      "Vendor verification & approval flow",
      "Stripe payments integration",
      "OTP-based delivery verification",
      "Returns and refunds management",
      "AI chat support"
    ]
  }
];

export const skills = {
  languages: [
    { name: "C++", icon: SiCplusplus },
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Python", icon: SiPython },
    { name: "C", icon: SiC },
    { name: "HTML/CSS", icon: SiHtml5 }
  ],
  frameworks: [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React", icon: SiReact },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Redux", icon: SiRedux },
    { name: "GSAP", icon: SiGreensock },
  ],
  databases: [
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: SiMysql }
  ],
  tools: [
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "VS Code", icon: VscVscode }
  ],
  coreConcepts: [
    "Data Structures & Algorithms (DSA)",
    "Object-Oriented Programming (OOP)",
    "Database Management Systems (DBMS)",
    "Operating Systems (OS)",
    "Computer Networks (CN)"
  ]
};

export const highlights = [
  {
    title: "Competitive Programming",
    items: [
      "Solved 1000+ coding problems across platforms",
      "Achieved a 1500+ rating on LeetCode"
    ]
  },
  {
    title: "Hackathons",
    items: [
      "Smart India Hackathon (SIH) participant",
      "IIIT Delhi Hackathon participant"
    ]
  },
  {
    title: "Certifications",
    items: [
      "Building AI Apps with MongoDB with AWS (MongoDB)",
      "Cisco Cybersecurity Virtual Internship"
    ]
  }
];
