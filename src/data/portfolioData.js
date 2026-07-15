import { FaGithub, FaLinkedin, FaReact, FaNodeJs } from "react-icons/fa";

import {
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiExpress,
  SiVite,
  SiGit,
} from "react-icons/si";

import { Mail } from "lucide-react";

export const personal = {
  name: "Andreas Lampah",

  logo: "ANDREAS.DEV",

  role: "Backend Software Engineer",

  headline:
    "Building scalable backend systems for healthcare and modern businesses.",

  description:
    "Backend Software Engineer with experience developing Hospital Information Systems (SIMRS), RESTful APIs, database architecture, and production-ready applications. Passionate about building clean, scalable, and maintainable software.",

  email: "email@gmail.com",

  github: "https://github.com/yourusername",

  linkedin: "https://linkedin.com/in/yourusername",

  cv: "#",
};

export const stats = [
  {
    value: "6+",
    label: "Years Experience",
  },

  {
    value: "20+",
    label: "Completed Projects",
  },

  {
    value: "Production",
    label: "Hospital System",
  },
];

export const highlights = [
  {
    title: "Backend Development",

    description:
      "Designing scalable backend services with clean architecture and RESTful APIs.",
  },

  {
    title: "Database Engineering",

    description:
      "Building optimized MySQL and PostgreSQL databases with efficient query design.",
  },

  {
    title: "System Integration",

    description:
      "Integrating frontend, backend, and third-party services into reliable production systems.",
  },
];

export const expertise = [
  {
    title: "Backend Engineering",

    description:
      "Building scalable backend services with Node.js, Express.js, authentication, authorization, JWT, RBAC, and REST API.",

    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "JWT",
      "RBAC",
      "Clean Architecture",
    ],
  },

  {
    title: "Database Engineering",

    description:
      "Designing relational databases with performance optimization and production-ready schema.",

    skills: [
      "MySQL",
      "PostgreSQL",
      "Prisma ORM",
      "SQL Optimization",
      "Indexing",
      "Database Design",
    ],
  },

  {
    title: "Frontend Engineering",

    description:
      "Building responsive interfaces with reusable React components and modern UI practices.",

    skills: ["React", "Vite", "JavaScript", "Responsive UI", "Axios"],
  },
];

export const projects = [
  {
    title: "SIMRS Operational Dashboard",

    badge: "Production",

    description:
      "Real-time dashboard for monitoring hospital operations including emergency department, inpatient rooms, bed availability, outpatient clinics, and staff attendance.",

    stack: ["React", "Go", "MySQL", "REST API"],

    github: "#",

    demo: "#",
  },

  {
    title: "Online Patient Registration",

    badge: "Production",

    description:
      "Online registration platform that simplifies patient appointments and queue management for hospitals.",

    stack: ["React", "Express.js", "Prisma", "MySQL"],

    github: "#",

    demo: "#",
  },

  {
    title: "Inventory Management System",

    badge: "Personal",

    description:
      "Full-stack inventory application with authentication, role-based access control, reporting, and product management.",

    stack: ["React", "Node.js", "Express", "MySQL"],

    github: "#",

    demo: "#",
  },
];

export const experiences = [
  {
    company: "RSU Tumpaan Medical Center",

    position: "Software Developer",

    period: "2023 - Present",

    description:
      "Developing and maintaining Hospital Information Systems used in production.",

    responsibilities: [
      "Developed Hospital Information System (SIMRS).",

      "Built scalable RESTful APIs using Express.js.",

      "Designed and optimized MySQL databases.",

      "Developed operational dashboards for hospital management.",

      "Integrated frontend and backend services.",

      "Implemented authentication and role-based access control.",

      "Maintained deployment and production environments.",
    ],
  },

  {
    company: "Timedoor Academy",

    position: "Programming Lecturer",

    period: "2022 - 2023",

    description:
      "Teaching web development and mentoring students through project-based learning.",

    responsibilities: [
      "Taught HTML, CSS, JavaScript, and React.",

      "Mentored students in developing web applications.",

      "Conducted code reviews and debugging sessions.",

      "Prepared learning materials and practical assignments.",
    ],
  },
];

export const technologies = [
  {
    name: "React",

    icon: FaReact,

    category: "Frontend Library",
  },

  {
    name: "Node.js",

    icon: FaNodeJs,

    category: "Runtime",
  },

  {
    name: "Express",

    icon: SiExpress,

    category: "Backend Framework",
  },

  {
    name: "Prisma",

    icon: SiPrisma,

    category: "ORM",
  },

  {
    name: "MySQL",

    icon: SiMysql,

    category: "Database",
  },

  {
    name: "PostgreSQL",

    icon: SiPostgresql,

    category: "Database",
  },

  {
    name: "Git",

    icon: SiGit,

    category: "Version Control",
  },

  {
    name: "Vite",

    icon: SiVite,

    category: "Build Tool",
  },
];

export const socials = [
  {
    icon: FaGithub,

    url: "https://github.com/yourusername",

    label: "GitHub",
  },

  {
    icon: FaLinkedin,

    url: "https://linkedin.com/in/yourusername",

    label: "LinkedIn",
  },

  {
    icon: Mail,

    url: "mailto:email@gmail.com",

    label: "Email",
  },
];
