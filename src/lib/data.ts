import { Code2 } from "lucide-react";
import {
  SiCplusplus,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiC,
  SiHtml5,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiGit,
  SiGithub,
  SiMysql,
  SiLeetcode,
  SiGeeksforgeeks,
  SiCodechef,
  SiCodeforces,
  SiExpress,
  SiDocker,
  SiOpenjdk,
  SiVercel,
  SiJenkins,
  SiGitlab,
  SiGnubash,
  SiKubernetes,
  SiTerraform,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import type { IconType } from "react-icons";

export type SkillItem = {
  name: string;
  icon: IconType;
};

export const personalData = {
  name: "Ankit Kumar Gupta",
  title: "DevOps & Software Development Engineer",
  role: "DevOps & Full Stack Developer",
  shortIntro:
    "B.Tech CSE student focused on DevOps and cloud-native delivery — Docker, Kubernetes, Terraform, CI/CD, and AWS — while shipping full-stack apps with TypeScript and Next.js, grounded in strong DSA.",
  resumePath: "/Ankit_Kumar_Gupta_Resume.pdf",
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
  },
};

export const education = [
  {
    institution:
      "G.L. Bajaj Institute of Technology and Management, Greater Noida, India",
    degree: "B.Tech, Computer Science and Engineering",
    period: "2023 – 2027",
    score: "CGPA 8.0",
  },
  {
    institution: "RLJDMC DAV Public School, Raniganj, India",
    degree: "Intermediate (Class XII)",
    period: "2022",
    score: "86%",
  },
  {
    institution: "St. Michael's School, Durgapur, India",
    degree: "High School (Class X)",
    period: "2020",
    score: "86%",
  },
];

export const projects = [
  {
    title: "Rydex",
    description:
      "Multi-Partner Vehicle Booking Platform featuring multi-role dashboards, automated revenue split, real-time tracking, and video KYC.",
    longDescription:
      "A comprehensive ride-booking platform with User, Partner, and Admin dashboards. Implemented Razorpay for a 90/10 automated revenue split, real-time ride tracking, pickup/drop OTP verification, AI-powered in-ride chat, and Jigo Cloud Video KYC for partner verification.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Razorpay",
      "NextAuth.js",
      "Redux Toolkit",
      "Cloudinary",
    ],
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
      "Jigo Cloud video KYC",
    ],
  },
  {
    title: "MultiCart",
    description:
      "Multi-Vendor E-Commerce Platform with vendor verification, complex return/refund workflows, and AI support.",
    longDescription:
      "An expansive e-commerce marketplace supporting User, Vendor, and Admin roles. Features robust vendor verification workflows, Stripe payment integration, OTP-based order delivery verification, seamless returns and refunds processing, and AI-powered customer support chat.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Stripe",
      "NextAuth.js",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
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
      "AI chat support",
    ],
  },
];

export const skills = {
  languages: [
    { name: "C++", icon: SiCplusplus },
    { name: "Java", icon: SiOpenjdk },
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Python", icon: SiPython },
    { name: "C", icon: SiC },
    { name: "HTML/CSS", icon: SiHtml5 },
  ] as SkillItem[],
  frameworks: [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React", icon: SiReact },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Redux", icon: SiRedux },
  ] as SkillItem[],
  databases: [
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: SiMysql },
  ] as SkillItem[],
  tools: [
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "VS Code", icon: VscVscode },
  ] as SkillItem[],
  devops: [
    { name: "Docker", icon: SiDocker },
    { name: "Kubernetes", icon: SiKubernetes },
    { name: "Terraform", icon: SiTerraform },
    { name: "AWS", icon: FaAws },
    { name: "Vercel", icon: SiVercel },
    { name: "Jenkins", icon: SiJenkins },
    { name: "GitLab", icon: SiGitlab },
    { name: "Shell Scripting", icon: SiGnubash },
  ] as SkillItem[],
  coreConcepts: [
    "Data Structures & Algorithms (DSA)",
    "Object-Oriented Programming (OOP)",
    "Database Management Systems (DBMS)",
    "Operating Systems (OS)",
    "Computer Networks (CN)",
    "REST APIs & Agile/Scrum",
  ],
  aiPractices: [
    "GitHub Copilot & Cursor",
    "Generative AI & LLMs",
    "RAG (Retrieval-Augmented Generation)",
    "Prompt Engineering",
  ],
};

export const highlights = [
  {
    title: "Competitive Programming",
    items: [
      "Solved 1000+ coding problems across multiple platforms",
      "Achieved 1500+ rating on LeetCode",
    ],
  },
  {
    title: "Hackathons",
    items: [
      "Smart India Hackathon (SIH) participant",
      "IIIT Delhi Hackathon participant",
    ],
  },
  {
    title: "Certifications",
    items: [
      "Building AI Apps with MongoDB with AWS (MongoDB)",
      "Cisco Cybersecurity Virtual Internship (Cisco)",
    ],
  },
];

export const codingProfiles = {
  problemSolving: [
    {
      platform: "LeetCode",
      icon: SiLeetcode,
      link: "https://leetcode.com/u/iamankit07/",
      stats: "1500+ Rating | 700+ Solved",
    },
    {
      platform: "GeeksforGeeks",
      icon: SiGeeksforgeeks,
      link: "https://auth.geeksforgeeks.org/user/ankitfors9j0/",
      stats: "150+ Solved",
    },
    {
      platform: "CodeChef",
      icon: SiCodechef,
      link: "https://www.codechef.com/users/iamankit04",
      stats: "Max Rating: 1200+",
    },
    {
      platform: "Codeforces",
      icon: SiCodeforces,
      link: "https://codeforces.com/profile/iamankit04",
      stats: "CP",
    },
    {
      platform: "CodeStudio",
      icon: Code2,
      link: "https://www.naukri.com/code360/profile/iamankit",
      stats: "NINJA DOMINATOR",
    },
  ],
  development: {
    platform: "GitHub",
    icon: SiGithub,
    link: "https://github.com/iamankit04",
    username: "iamankit04",
    stats: [
      { label: "Public Repos", value: "20+" },
      { label: "Stars Earned", value: "10+" },
      { label: "Total Commits", value: "500+" },
    ],
  },
};
