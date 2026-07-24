import { useState, useEffect, useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaCheck,
  FaCopy,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import profilAndreas from "./assets/profilAndreas.png";

import { MdEmail, MdLocationOn } from "react-icons/md";
const EXPERIENCE = [
  {
    period: "Current",
    title: "Software Developer",
    org: "RSU Tumpaan Medical Center",
    body: "Developing and maintaining production systems including an operational monitoring dashboard, online patient registration, bed monitoring, and a staff monitoring system to improve operational efficiency and support near real-time, data-driven decision making.",
    tags: ["Node.js", "Express", "Prisma", "MySQL", "React"],
  },
  {
    period: "Previous",
    title: "Programming Lecturer",
    org: "Timedoor Academy",
    body: "Taught programming fundamentals and practice, guiding students from core concepts through to real-world project implementation using HTML, CSS, and JavaScript.",
    tags: ["Html", "Css", "Javascript", "Teaching", "Fundamentals"],
  },
  {
    period: "Previous",
    title: "Fullstack JavaScript Developer Bootcamp",
    org: "Course-Net Indonesia",
    body: "Completed an intensive Full Stack JavaScript program, designing and building a web-based inventory system covering product, category, stock, and transaction management. This project laid the foundation for understanding modern full stack development with React, Node.js, Express.js, Prisma ORM, and PostgreSQL.",
    tags: ["JavaScript", "Node.js", "Express.js", "React", "Mysql"],
  },
];

const PROJECTS = [
  {
    title: "Real-time Monitoring Dashboard",
    status: "live",
    desc: "Tracks patient data, ER services, laboratory results, registrations, and activity across all outpatient clinics — helping hospital staff monitor operations and make fast, accurate decisions.",
    tags: ["Express.js", "React", "Prisma ORM", "MySQL", "Node.js"],
  },
  {
    title: "Online Patient Registration",
    status: "live",
    desc: "Built a patient registration module that streamlines the sign-up process and tracks queues in near real time, helping staff deliver faster service, reduce wait times, and improve data accuracy.",
    tags: ["Express.js", "React", "Prisma ORM", "MySQL", "Node.js"],
  },
  {
    title: "Bed Monitoring Dashboard",
    status: "live",
    desc: "An operational dashboard for tracking bed availability, inpatient admissions, and patient lookups in real time for hospital staff.",
    tags: ["Node.js", "Express.js", "React", "Prisma ORM", "MySQL"],
  },
  {
    title: "Staff Monitoring System",
    status: "live",
    desc: "A staff monitoring system integrated with a Solution X-100C fingerprint device to track attendance in real time and present accurate presence data for hospital operations.",
    tags: ["Express", "MySQL", "React"],
  },
  {
    title: "Inventory Management System",
    status: "live",
    desc: "A web-based inventory application providing product, category, stock, and transaction management through a REST API. Built with a structured backend architecture, JWT-based authentication, data validation, and query optimization using Prisma ORM.",
    tags: ["Express.js", "React", "Prisma ORM", "PostgreSQL", "Node.js"],
  },
  {
    title: "Go Architecture Experiment",
    status: "progress",
    desc: "Reimplementing core SIMRS features in Go with Clean Architecture, as a direct comparison against the existing Node.js/Express implementation.",
    tags: ["Go", "Gin", "GORM"],
  },
];

const SKILLS = [
  {
    group: "Backend",
    items: [
      "Javascript",
      "Typescript",
      "Node.js",
      "Express.js",
      "NestJS",
      "Prisma ORM",
    ],
  },
  {
    group: "Database",
    items: ["MySQL", "PostgreSQL"],
  },
  { group: "Frontend", items: ["React.js", "Axios", "Polling / Real-time UI"] },
  {
    group: "Security & Practices",
    items: ["JWT Auth", "RBAC", "Validation (Zod)"],
  },
];

const CONTACTS = [
  {
    field: "Email",
    value: "andreaslampah97@gmail.com",
    href: "andreaslampah97@gmail.com",
    icon: MdEmail,
  },
  {
    field: "LinkedIn",
    value: "linkedin.com/in/andreaslampah",
    href: "https://www.linkedin.com/in/andreaslampah",
    icon: FaLinkedin,
  },
  {
    field: "GitHub",
    value: "github.com/AndreasLampah",
    href: "https://github.com/AndreasLampah",
    icon: FaGithub,
  },
];

const NAV = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const ROLES = [
  "Backend-focused Engineer",
  "Full Stack Developer",
  "REST API Builder",
  "Hospital Systems Developer",
];

const REDUCED_MOTION =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Scroll-reveal wrapper: fades/slides an element in once it enters the viewport ---------- */
function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (REDUCED_MOTION) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ---------- Typewriter role text under the hero name ---------- */
function RoleRotator() {
  const [text, setText] = useState(REDUCED_MOTION ? ROLES[0] : "");
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (REDUCED_MOTION) return;
    const current = ROLES[roleIndex];
    let charIndex = 0;
    let phase = "typing"; // typing -> holding -> deleting
    let timeoutId;

    const tick = () => {
      if (phase === "typing") {
        charIndex++;
        setText(current.slice(0, charIndex));
        if (charIndex >= current.length) {
          phase = "holding";
          timeoutId = setTimeout(tick, 1500);
          return;
        }
        timeoutId = setTimeout(tick, 55);
        return;
      }
      if (phase === "holding") {
        phase = "deleting";
        timeoutId = setTimeout(tick, 30);
        return;
      }
      if (phase === "deleting") {
        charIndex--;
        setText(current.slice(0, charIndex));
        if (charIndex <= 0) {
          timeoutId = setTimeout(() => {
            setRoleIndex((i) => (i + 1) % ROLES.length);
          }, 250);
          return;
        }
        timeoutId = setTimeout(tick, 28);
        return;
      }
    };

    timeoutId = setTimeout(tick, 55);
    return () => clearTimeout(timeoutId);
  }, [roleIndex]);

  return (
    <span className="role-rotator" aria-live="polite">
      <span className="role-rotator-text">{text}</span>
      <span className="role-caret" aria-hidden="true" />
    </span>
  );
}

/* ---------- Splits a heading into words that stagger in on reveal ---------- */
function SplitWords({ text, className = "" }) {
  const words = text.split(" ");
  return (
    <span className={`split-words ${className}`}>
      {words.map((w, i) => (
        <span className="split-word-mask" key={`${w}-${i}`}>
          <span
            className="split-word"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            {w}&nbsp;
          </span>
        </span>
      ))}
    </span>
  );
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const onCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    });
  };
  return (
    <button className="copy-btn" onClick={onCopy} aria-label={`Copy ${text}`}>
      {copied ? <FaCheck size={13} /> : <FaCopy size={13} />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

/* ---------- Magnetic hover: button drifts gently toward the cursor ---------- */
function useMagnetic(strength = 0.35) {
  const onMouseMove = (e) => {
    if (REDUCED_MOTION) return;
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${relX * strength}px, ${relY * strength}px)`;
  };
  const onMouseLeave = (e) => {
    e.currentTarget.style.transform = "translate(0, 0)";
  };
  return { onMouseMove, onMouseLeave };
}

/* ---------- Tilt-on-hover for project cards ---------- */
function useTilt(max = 7) {
  const onMouseMove = (e) => {
    if (REDUCED_MOTION) return;
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * max * 2;
    const rotateX = (0.5 - py) * max * 2;
    el.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };
  const onMouseLeave = (e) => {
    e.currentTarget.style.transform =
      "perspective(700px) rotateX(0deg) rotateY(0deg) translateY(0)";
  };
  return { onMouseMove, onMouseLeave };
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const pageRef = useRef(null);
  const magnetPrimary = useMagnetic(0.25);
  const magnetGhost = useMagnetic(0.25);
  const tilt = useTilt(6);

  useEffect(() => {
    const t = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(t);
  }, []);

  // Cursor-follow spotlight
  useEffect(() => {
    const el = pageRef.current;
    if (!el || REDUCED_MOTION) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = null;
    const onMove = (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--mx", `${e.clientX}px`);
        el.style.setProperty("--my", `${e.clientY + window.scrollY}px`);
        raf = null;
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Scroll progress bar
  useEffect(() => {
    const bar = document.getElementById("scroll-progress-bar");
    if (!bar) return;
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const h = document.documentElement;
        const scrolled = h.scrollTop;
        const max = h.scrollHeight - h.clientHeight;
        const pct = max > 0 ? (scrolled / max) * 100 : 0;
        bar.style.width = `${pct}%`;
        raf = null;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`page ${loaded ? "page-loaded" : ""}`} ref={pageRef}>
      <div id="scroll-progress-bar" className="scroll-progress" />
      <div className="ambient-blob blob-a" />
      <div className="ambient-blob blob-b" />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700;800&display=swap');

        :root{
          --bg: #0b1120;
          --surface: #121a2c;
          --surface-2: #17223a;
          --border: #162235;
          --text: #e9edf6;
          --muted: #cccccc;
          --accent: #4ade80;
          --accent-2: #38bdf8;
          --accent-dim: #1c3d2c;
          --mono: 'JetBrains Mono', monospace;
          --sans: 'Inter', sans-serif;
        }
        *{ box-sizing:border-box; }
        .page{
          position:relative;
          background: var(--bg);
          color: var(--text);
          font-family: var(--sans);
          line-height:1.65;
          background-image: linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px);
          background-size:56px 56px;
          background-position:0 0;
          min-height:100vh;
          overflow-x:hidden;
          animation: gridPan 90s linear infinite;
          --mx: 50%;
          --my: 30%;
        }
        .page::before{
          content:"";
          position:absolute;
          inset:0;
          background: radial-gradient(480px circle at var(--mx) var(--my), rgba(74,222,128,0.08), transparent 62%);
          pointer-events:none;
          z-index:0;
          transition: opacity .3s ease;
        }
        @keyframes gridPan{
          to{ background-position:560px 560px; }
        }

        .scroll-progress{
          position:fixed; top:0; left:0; height:3px; width:0%;
          background: linear-gradient(90deg, var(--accent), var(--accent-2));
          z-index:100;
          box-shadow: 0 0 10px rgba(74,222,128,.5);
          transition: width .08s linear;
        }

        .ambient-blob{
          position:absolute; z-index:0; border-radius:50%;
          filter: blur(90px); pointer-events:none;
        }
        .blob-a{
          width:420px; height:420px; top:-100px; left:-120px;
          background: radial-gradient(circle, rgba(74,222,128,0.16), transparent 70%);
          animation: driftA 26s ease-in-out infinite;
        }
        .blob-b{
          width:460px; height:460px; top:420px; right:-160px;
          background: radial-gradient(circle, rgba(56,189,248,0.13), transparent 70%);
          animation: driftB 32s ease-in-out infinite;
        }
        @keyframes driftA{
          0%, 100%{ transform:translate(0,0) scale(1); }
          50%{ transform:translate(60px, 40px) scale(1.12); }
        }
        @keyframes driftB{
          0%, 100%{ transform:translate(0,0) scale(1); }
          50%{ transform:translate(-50px, -30px) scale(1.08); }
        }

        .page a{ color:inherit; text-decoration:none; }
        .wrap{ max-width:920px; margin:0 auto; padding:0 24px; position:relative; z-index:1; }
        .page ::selection{ background: var(--accent-dim); color: var(--accent); }
        .page a:focus-visible, .page button:focus-visible{ outline:2px solid var(--accent); outline-offset:3px; }

        .eyebrow{ font-family:var(--mono); font-size:15.5px; letter-spacing:0.06em; text-transform:uppercase; color:var(--accent); margin-bottom:10px; display:block; }

        /* ---------- Scroll reveal ---------- */
        .reveal{
          opacity:0;
          transform:translateY(22px);
          transition:opacity .7s cubic-bezier(.16,.8,.24,1), transform .7s cubic-bezier(.16,.8,.24,1);
          will-change:opacity, transform;
        }
        .reveal-visible{ opacity:1; transform:translateY(0); }

        /* ---------- Split-word heading stagger ---------- */
        .split-word-mask{ display:inline-block; overflow:hidden; vertical-align:top; }
        .split-word{
          display:inline-block;
          transform:translateY(110%);
          transition: transform .6s cubic-bezier(.16,.8,.24,1);
        }
        .reveal-visible .split-word{ transform:translateY(0); }

        nav{ position:sticky; top:0; z-index:50; background:rgba(11,17,32,0.85); backdrop-filter:blur(10px); border-bottom:1px solid var(--border); transition: border-color .3s ease; }
        nav .wrap{ display:flex; align-items:center; justify-content:space-between; height:64px; flex-wrap:wrap; }
        .logo{ font-weight:800; font-size:16px; }
        .logo span{ color:var(--accent); }
        .navlinks{ display:flex; gap:26px; font-size:14px; color:var(--muted); }
        .navlinks a{ position:relative; padding:4px 0; transition:color .2s ease; }
        .navlinks a::after{
          content:"";
          position:absolute; left:0; bottom:-2px;
          width:0; height:1.5px; background:var(--accent);
          transition:width .25s ease;
        }
        .navlinks a:hover{ color:var(--text); }
        .navlinks a:hover::after{ width:100%; }
        .status-pill{ display:flex; align-items:center; gap:8px; font-size:13px; color:var(--muted); border:1px solid var(--border); padding:6px 13px; border-radius:20px; transition: border-color .2s ease; }
        .status-pill:hover{ border-color:var(--accent-dim); }
        .dot{ width:7px; height:7px; border-radius:50%; background:var(--accent); box-shadow:0 0 8px var(--accent); animation: dotPulse 2.2s ease-in-out infinite; }
        @keyframes dotPulse{
          0%, 100%{ box-shadow:0 0 0 0 rgba(74,222,128,.55); }
          50%{ box-shadow:0 0 0 6px rgba(74,222,128,0); }
        }

        .nav-toggle{ display:none; }
        @media (max-width:640px){
          nav .wrap{ flex-wrap:wrap; row-gap:10px; padding-top:12px; padding-bottom:12px; height:auto; }
          .logo{ order:1; }
          .status-pill{ order:2; }
          .nav-toggle{
            display:flex; align-items:center; justify-content:center;
            gap:8px; width:100%; order:3;
            padding:10px 0; border-radius:8px;
            border:1px solid var(--border); background:transparent; color:var(--text);
            cursor:pointer; font-size:13px; font-weight:600;
            transition: border-color .2s ease, color .2s ease;
          }
          .nav-toggle:hover{ border-color:var(--accent); color:var(--accent); }
          .navlinks{ display:none; flex-direction:column; align-items:center; gap:14px; width:100%; order:4; padding:14px 0 4px; }
          .navlinks.open{ display:flex; animation: fadeInUp .3s ease both; }
        }

        .hero{ padding:84px 0 60px; position:relative; }
        .hero-grid{ display:grid; grid-template-columns:auto 1fr; gap:36px; align-items:center; }
        @media (max-width:680px){ .hero-grid{ grid-template-columns:1fr; text-align:left; } }

        @keyframes fadeInUp{
          from{ opacity:0; transform:translateY(18px); }
          to{ opacity:1; transform:translateY(0); }
        }
        @keyframes avatarIn{
          from{ opacity:0; transform:translateY(14px) scale(.94); }
          to{ opacity:1; transform:translateY(0) scale(1); }
        }
        @keyframes floatY{
          0%, 100%{ transform:translateY(0); }
          50%{ transform:translateY(-9px); }
        }

        .avatar {
          width: 220px;
          height: 220px;
          border-radius: 20px;
          overflow: hidden;
          flex-shrink: 0;
          border: 1px solid var(--border);
          opacity:0;
          position:relative;
          transition: border-color .3s ease;
        }
        .avatar::after{
          content:"";
          position:absolute; inset:0;
          border-radius:20px;
          box-shadow: 0 0 0 0 rgba(74,222,128,0);
          transition: box-shadow .3s ease;
          pointer-events:none;
        }
        .avatar:hover{ border-color: var(--accent-dim); }
        .avatar:hover::after{ box-shadow: 0 0 0 4px rgba(74,222,128,0.12); }
        .page-loaded .avatar{
          animation: avatarIn .7s cubic-bezier(.16,.8,.24,1) .05s forwards, floatY 5s ease-in-out .8s infinite;
        }

        .avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .5s ease;
        }
        .avatar:hover img{ transform: scale(1.05); }

        .hero-text{ opacity:0; }
        .page-loaded .hero-text{ animation: fadeInUp .7s cubic-bezier(.16,.8,.24,1) .18s forwards; }

        .hero-name{
          font-weight:800; font-size:clamp(28px,4.2vw,40px); line-height:1.15; margin-bottom:8px;
          background: linear-gradient(100deg, var(--text) 30%, var(--accent) 50%, var(--text) 70%);
          background-size:220% auto;
          -webkit-background-clip:text; background-clip:text; color:transparent;
          animation: nameShimmer 6s ease-in-out 1.2s infinite;
        }
        @keyframes nameShimmer{
          0%{ background-position:0% 50%; }
          50%{ background-position:100% 50%; }
          100%{ background-position:0% 50%; }
        }

        .role-rotator{ display:inline-flex; align-items:center; height:1.5em; font-family:var(--mono); font-size:15px; font-weight:600; color:var(--accent); }
        .role-caret{
          display:inline-block; width:2px; height:1em; background:var(--accent);
          margin-left:3px; animation: caretBlink 0.9s step-end infinite;
        }
        @keyframes caretBlink{ 0%, 100%{ opacity:1; } 50%{ opacity:0; } }

        .hero-role{ color:var(--muted); font-size:17px; margin:10px 0 18px; max-width:56ch; }
        .hero-cta{ display:flex; gap:12px; flex-wrap:wrap; opacity:0; }
        .page-loaded .hero-cta{ animation: fadeInUp .7s cubic-bezier(.16,.8,.24,1) .32s forwards; }

        .btn{ font-size:14px; font-weight:600; padding:11px 20px; border-radius:8px; border:1px solid var(--border); transition: box-shadow .18s ease, border-color .18s ease, background .18s ease; cursor:pointer; }
        .btn-primary{ background:var(--accent); color:#08130d; border-color:var(--accent); }
        .btn-primary:hover{ box-shadow:0 0 0 4px var(--accent-dim); }
        .btn-ghost{ color:var(--text); background:transparent; }
        .btn-ghost:hover{ border-color:var(--accent); color:var(--accent); }

        section{ padding:56px 0; }
        .sec-title{ font-weight:800; font-size:clamp(22px,3vw,27px); margin-bottom:26px; }

        .about-panel{ background:var(--surface); border:1px solid var(--border); border-radius:12px; padding:30px; transition: border-color .25s ease; }
        .about-panel:hover{ border-color:#1e2c46; }
        .about-panel p{ margin-bottom:14px; max-width:70ch; }
        .about-panel p:last-child{ margin-bottom:0; }
        .about-panel .muted{ color:var(--muted); }

        .timeline{ border-left:2px solid var(--border); margin-left:6px; }
        .tl-item{ position:relative; padding:2px 0 32px 28px;}
        .tl-item:last-child{ padding-bottom:0; }
        .tl-item::before{
          content:""; position:absolute; left:-7px; top:5px; width:12px; height:12px; border-radius:50%;
          background:var(--accent); border:2px solid var(--accent);
          transform:scale(0); transition: transform .4s cubic-bezier(.34,1.56,.64,1);
        }
        .reveal-visible.tl-item::before{ transform:scale(1); }
        .tl-period{ font-family:var(--mono); font-size:15.5px; color:var(--muted); margin-bottom:5px; display:block; }
        .tl-title{ font-weight:700; font-size:17px; margin-bottom:6px; }
        .tl-org{ color:var(--accent); font-weight:600; font-size:14.5px; }
        .tl-body{ color:var(--muted); font-size:14.5px; max-width:64ch; margin-top:6px; }
        .tl-tags{ display:flex; gap:8px; flex-wrap:wrap; margin-top:12px;}
        .tag{ font-size:12px; padding:4px 10px; border-radius:6px; border:1px solid var(--text); color:var(--muted); transition: border-color .2s ease, color .2s ease; }
        .tl-item:hover .tag{ border-color:var(--accent-dim); }

        .projects-grid{ display:grid; grid-template-columns:1fr 1fr; gap:16px; }
        @media (max-width:720px){ .projects-grid{ grid-template-columns:1fr; } }
        .proj-card{
          background:var(--surface); border:1px solid var(--border); border-radius:12px; padding:22px;
          transition: border-color .2s ease, box-shadow .2s ease, transform .12s ease-out;
          position:relative; overflow:hidden; transform-style:preserve-3d;
        }
        .proj-card::before{
          content:""; position:absolute; inset:0;
          background: linear-gradient(115deg, transparent 40%, rgba(74,222,128,0.08) 50%, transparent 60%);
          transform: translateX(-120%);
          transition: transform .6s ease;
          pointer-events:none;
        }
        .proj-card:hover{ border-color:var(--accent); box-shadow:0 16px 30px -18px rgba(74,222,128,0.3); }
        .proj-card:hover::before{ transform: translateX(120%); }
        .proj-top{ display:flex; justify-content:space-between; align-items:flex-start; gap:10px; margin-bottom:10px; }
        .proj-title{ font-weight:700; font-size:16px; }
        .badge{ font-size:11px; font-weight:600; padding:4px 10px; border-radius:20px; white-space:nowrap; }
        .badge-live{ background:rgba(74,222,128,0.12); color:var(--accent); border:1px solid var(--accent-dim); position:relative; }
        .badge-live::before{
          content:""; display:inline-block; width:6px; height:6px; border-radius:50%;
          background:var(--accent); margin-right:6px; animation: dotPulse 2.2s ease-in-out infinite;
        }
        .badge-progress{ background:rgba(255,255,255,0.06); color:var(--muted); border:1px solid var(--border); }
        .proj-desc{ color:var(--muted); font-size:14px; margin-bottom:14px; }
        .proj-tags{ display:flex; gap:6px; flex-wrap:wrap; }

        .skills-grid{ display:grid; grid-template-columns:1fr 1fr; gap:22px 30px; }
        @media (max-width:680px){ .skills-grid{ grid-template-columns:1fr; } }
        .skill-group h3{ font-size:14px; font-weight:700; margin-bottom:12px; }
        .skill-chips{ display:flex; flex-wrap:wrap; gap:8px; }
        .chip{ font-size:13px; padding:7px 13px; border-radius:8px; background:var(--surface); border:1px solid var(--border); color:var(--text); transition: transform .18s ease, border-color .18s ease, color .18s ease; }
        .chip:hover{ transform:translateY(-3px) scale(1.04); border-color:var(--accent); color:var(--accent); }

        .contact-panel{ background:var(--surface); border:1px solid var(--border); border-radius:12px; padding:30px; }
        .contact-list{ display:grid; gap:14px; }
        .contact-row{ display:flex; align-items:center; justify-content:space-between; gap:14px; padding:14px 16px; background:var(--surface-2); border:1px solid var(--border); border-radius:8px; flex-wrap:wrap; transition: border-color .2s ease, transform .2s ease; }
        .contact-row:hover{ border-color:var(--accent-dim); transform:translateX(4px); }
        .contact-left{ display:flex; align-items:center; gap:12px; }
        .contact-icon{ color:var(--accent); display:flex; transition: transform .25s ease; }
        .contact-row:hover .contact-icon{ transform:scale(1.2) rotate(-6deg); }
        .contact-row .field{ font-family:var(--mono); font-size:11.5px; color:var(--muted); display:block; }
        .contact-row .value{ font-size:14.5px; font-weight:600; }
        .contact-row a.value:hover{ color:var(--accent); }
        .copy-btn{ display:flex; align-items:center; gap:6px; font-size:12px; color:var(--muted); border:1px solid var(--border); padding:5px 11px; border-radius:6px; cursor:pointer; background:transparent; transition: border-color .2s ease, color .2s ease, transform .15s ease; }
        .copy-btn:hover{ color:var(--accent); border-color:var(--accent); }
        .copy-btn:active{ transform:scale(.9); }

        footer{ padding:30px 0 50px; text-align:center; }
        footer .wrap{ font-size:13px; color:var(--muted); border-top:1px solid var(--border); padding-top:22px; }

        @media (prefers-reduced-motion: reduce){
          .page{ animation:none; }
          .ambient-blob{ animation:none; }
          .reveal{ transition:none; opacity:1; transform:none; }
          .split-word{ transform:none; }
          .avatar, .hero-text, .hero-cta{ opacity:1; animation:none; }
          .dot, .badge-live::before, .role-caret{ animation:none; }
          .hero-name{ animation:none; background:none; -webkit-background-clip:initial; background-clip:initial; color:var(--text); }
        }
      `}</style>

      <nav>
        <div className="wrap">
          <div className="logo">
            Andreas<span>.</span>
          </div>
          <div className={`navlinks ${menuOpen ? "open" : ""}`}>
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)}>
                {n.label}
              </a>
            ))}
          </div>
          <div className="status-pill">
            <span className="dot" /> Open to new opportunities
          </div>
          <button
            className="nav-toggle"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes size={14} /> : <FaBars size={14} />}
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      <header className="hero">
        <div className="wrap hero-grid">
          <div className="avatar">
            <img src={profilAndreas} alt="Andreas Lampah" />
          </div>
          <div className="hero-text">
            <h1 className="hero-name">Andreas Lampah</h1>
            <RoleRotator />
            <p className="hero-role">
              Full Stack Developer focused on backend engineering — designing
              REST APIs, managing databases, and building end-to-end
              applications from backend to frontend with React.
            </p>
            <div className="hero-cta">
              <a
                href="#projects"
                className="btn btn-primary"
                {...magnetPrimary}
              >
                View projects
              </a>
              <a href="#contact" className="btn btn-ghost" {...magnetGhost}>
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </header>

      <section id="about">
        <div className="wrap">
          <Reveal as="span" className="eyebrow">
            About
          </Reveal>
          <Reveal as="h2" className="sec-title" delay={60}>
            <SplitWords text="A bit about me" />
          </Reveal>
          <Reveal className="about-panel" delay={120}>
            <p>
              I'm a Full Stack Developer with a primary focus on backend
              development. I currently build and maintain a Hospital Information
              System (SIMRS), covering an operational monitoring dashboard, an
              online patient registration module, a bed monitoring dashboard,
              and a staff monitoring system. I develop backend services that
              read from the production SIMRS database using Prisma ORM and SQL
              queries, turning that data into secure, efficient, and reliable
              REST APIs, then integrate them with a React application to present
              operational information in near real time.
            </p>
            <p className="muted">
              My core focus is backend development — designing REST APIs,
              authentication and authorization, data validation, database
              management, and logging and error handling to build services that
              are secure, reliable, and easy to maintain. On the frontend, I use
              React to build interfaces that connect to the backend through
              APIs, presenting data in a way that's informative, responsive, and
              easy to use.
            </p>
            <p className="muted">
              Alongside my day-to-day work, I'm continuing to deepen my skills
              in <strong>Go</strong> as a second backend language. I'm committed
              to continuous learning, sharpening my skills, staying current with
              new technologies, and growing as a software engineer to build
              higher-quality solutions with greater impact.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="experience">
        <div className="wrap">
          <Reveal as="span" className="eyebrow">
            Experience
          </Reveal>
          <Reveal as="h2" className="sec-title" delay={60}>
            <SplitWords text="Career journey" />
          </Reveal>
          <div className="timeline">
            {EXPERIENCE.map((e, i) => (
              <Reveal
                as="div"
                className="tl-item"
                delay={i * 100}
                key={e.title}
              >
                <span className="tl-period">{e.period}</span>
                <div className="tl-title">{e.title}</div>
                <div className="tl-org">{e.org}</div>
                <div className="tl-body">{e.body}</div>
                <div className="tl-tags">
                  {e.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="wrap">
          <Reveal as="span" className="eyebrow">
            Projects
          </Reveal>
          <Reveal as="h2" className="sec-title" delay={60}>
            <SplitWords text="What I've built" />
          </Reveal>
          <div className="projects-grid">
            {PROJECTS.map((p, i) => (
              <Reveal
                as="div"
                className="proj-card"
                delay={(i % 2) * 80 + Math.floor(i / 2) * 80}
                key={p.title}
              >
                <div
                  onMouseMove={tilt.onMouseMove}
                  onMouseLeave={tilt.onMouseLeave}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="proj-top">
                    <div className="proj-title">{p.title}</div>
                    <span
                      className={`badge ${p.status === "live" ? "badge-live" : "badge-progress"}`}
                    >
                      {p.status === "live" ? "Live" : "In progress"}
                    </span>
                  </div>
                  <div className="proj-desc">{p.desc}</div>
                  <div className="proj-tags">
                    {p.tags.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="wrap">
          <Reveal as="span" className="eyebrow">
            Skills
          </Reveal>
          <Reveal as="h2" className="sec-title" delay={60}>
            <SplitWords text="Tools & technologies" />
          </Reveal>
          <div className="skills-grid">
            {SKILLS.map((s, i) => (
              <Reveal
                as="div"
                className="skill-group"
                delay={i * 90}
                key={s.group}
              >
                <h3>{s.group}</h3>
                <div className="skill-chips">
                  {s.items.map((it) => (
                    <span className="chip" key={it}>
                      {it}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="wrap">
          <Reveal as="span" className="eyebrow">
            Contact
          </Reveal>
          <Reveal as="h2" className="sec-title" delay={60}>
            <SplitWords text="Let's connect" />
          </Reveal>
          <Reveal className="contact-panel" delay={120}>
            <div className="contact-list">
              {CONTACTS.map((c) => {
                const Icon = c.icon;
                return (
                  <div className="contact-row" key={c.field}>
                    <div className="contact-left">
                      <span className="contact-icon">
                        <Icon size={16} />
                      </span>
                      <div>
                        <span className="field">{c.field}</span>
                        <a
                          href={c.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="value"
                        >
                          {c.value}
                        </a>
                      </div>
                    </div>
                    <CopyButton text={c.value} />
                  </div>
                );
              })}
              <div className="contact-row">
                <div className="contact-left">
                  <span className="contact-icon">
                    <MdLocationOn size={16} />
                  </span>
                  <div>
                    <span className="field">Location</span>
                    <span className="value">Indonesia · remote-friendly</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer>
        <div className="wrap">© 2026 Andreas.</div>
      </footer>
    </div>
  );
}
