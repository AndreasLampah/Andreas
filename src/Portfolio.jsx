import { useState } from "react";
import { FaGithub, FaLinkedin, FaCheck, FaCopy } from "react-icons/fa";

import { MdEmail, MdLocationOn } from "react-icons/md";
const EXPERIENCE = [
  {
    period: "Saat ini",
    title: "Software Developer",
    org: "RSU Tumpaan Medical Center",
    body: "Membangun dan merawat sistem produksi: bed monitoring, manajemen rawat inap, absensi staf, pencarian pasien, dan modul pendaftaran online dengan pelacakan antrean near real-time.",
    tags: ["Node.js", "Express", "Prisma", "MySQL", "React"],
  },
  {
    period: "Sebelumnya",
    title: "Programming Lecturer",
    org: "Timedoor Academy",
    body: "Mengajar dasar dan praktik pemrograman, membimbing peserta memahami konsep fundamental hingga penerapan proyek nyata.",
    tags: ["Teaching", "Fundamentals"],
  },
  {
    period: "Awal karier",
    title: "Fullstack JavaScript Developer Bootcamp",
    org: "Course-Net Indonesia",
    body: "Menyelesaikan pelatihan intensif fullstack JavaScript sebagai fondasi untuk berkarier sebagai software developer.",
    tags: ["JavaScript", "Fullstack"],
  },
];

const PROJECTS = [
  {
    title: "Pendaftaran Pasien Online",
    status: "live",
    desc: "Modul pendaftaran dengan pelacakan antrean near real-time, dirancang untuk mencegah data pasien ganda dan konflik nomor antrean lewat transaksi database dan penguncian baris.",
    tags: ["Prisma Transactions", "Row-level Lock"],
  },
  {
    title: "Dashboard Bed Monitoring",
    status: "live",
    desc: "Dashboard operasional untuk memantau ketersediaan tempat tidur, rawat inap, dan pencarian pasien secara real-time bagi staf rumah sakit.",
    tags: ["React", "Polling"],
  },
  {
    title: "Sistem Presensi Staf",
    status: "live",
    desc: "Sistem presensi staf yang terintegrasi dengan database tunggal sebagai sumber kebenaran bersama untuk seluruh modul SIMRS.",
    tags: ["Express", "MySQL", "RBAC"],
  },
  {
    title: "Eksperimen Arsitektur Go",
    status: "progress",
    desc: "Reimplementasi fitur inti SIMRS menggunakan Go dengan Clean Architecture sebagai perbandingan langsung dengan implementasi Node.js/Express.",
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
    group: "Keamanan & Praktik",
    items: ["JWT Auth", "RBAC", "Validasi (Zod)"],
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
  { href: "#about", label: "Tentang" },
  { href: "#experience", label: "Pengalaman" },
  { href: "#projects", label: "Proyek" },
  { href: "#skills", label: "Keahlian" },
  { href: "#contact", label: "Kontak" },
];

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const onCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    });
  };
  return (
    <button className="copy-btn" onClick={onCopy} aria-label={`Salin ${text}`}>
      {copied ? <FaCheck size={13} /> : <FaCopy size={13} />}
      {copied ? "Tersalin" : "Salin"}
    </button>
  );
}

export default function Portfolio() {
  return (
    <div className="page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700;800&display=swap');

        :root{
          --bg: #0b1120;
          --surface: #121a2c;
          --surface-2: #17223a;
          --border: #223049;
          --text: #e9edf6;
          --muted: #8a97b0;
          --accent: #4ade80;
          --accent-dim: #1c3d2c;
          --mono: 'JetBrains Mono', monospace;
          --sans: 'Inter', sans-serif;
        }
        *{ box-sizing:border-box; }
        .page{
          background: var(--bg);
          color: var(--text);
          font-family: var(--sans);
          line-height:1.65;
          background-image: linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px);
          background-size:56px 56px;
          min-height:100vh;
        }
        .page a{ color:inherit; text-decoration:none; }
        .wrap{ max-width:920px; margin:0 auto; padding:0 24px; position:relative; z-index:1; }
        .page ::selection{ background: var(--accent-dim); color: var(--accent); }
        .page a:focus-visible, .page button:focus-visible{ outline:2px solid var(--accent); outline-offset:3px; }

        .eyebrow{ font-family:var(--mono); font-size:12.5px; letter-spacing:0.06em; text-transform:uppercase; color:var(--accent); margin-bottom:10px; display:block; }

        nav{ position:sticky; top:0; z-index:50; background:rgba(11,17,32,0.85); backdrop-filter:blur(10px); border-bottom:1px solid var(--border); }
        nav .wrap{ display:flex; align-items:center; justify-content:space-between; height:64px; }
        .logo{ font-weight:800; font-size:16px; }
        .logo span{ color:var(--accent); }
        .navlinks{ display:flex; gap:26px; font-size:14px; color:var(--muted); }
        .navlinks a:hover{ color:var(--text); }
        @media (max-width:640px){ .navlinks{ display:none; } }
        .status-pill{ display:flex; align-items:center; gap:8px; font-size:13px; color:var(--muted); border:1px solid var(--border); padding:6px 13px; border-radius:20px; }
        .dot{ width:7px; height:7px; border-radius:50%; background:var(--accent); box-shadow:0 0 8px var(--accent); }

        .hero{ padding:84px 0 60px; }
        .hero-grid{ display:grid; grid-template-columns:auto 1fr; gap:36px; align-items:center; }
        @media (max-width:680px){ .hero-grid{ grid-template-columns:1fr; text-align:left; } }
        .avatar{ width:132px; height:132px; border-radius:20px; flex-shrink:0; background:linear-gradient(160deg, var(--surface-2), #0d1626 75%); border:1px solid var(--border); display:flex; align-items:center; justify-content:center; font-family:var(--mono); font-weight:600; font-size:38px; color:var(--accent); }
        .hero-name{ font-weight:800; font-size:clamp(28px,4.2vw,40px); line-height:1.15; margin-bottom:8px; }
        .hero-role{ color:var(--muted); font-size:17px; margin-bottom:18px; max-width:56ch; }
        .hero-cta{ display:flex; gap:12px; flex-wrap:wrap; }
        .btn{ font-size:14px; font-weight:600; padding:11px 20px; border-radius:8px; border:1px solid var(--border); transition:.15s ease; cursor:pointer; }
        .btn-primary{ background:var(--accent); color:#08130d; border-color:var(--accent); }
        .btn-primary:hover{ box-shadow:0 0 0 3px var(--accent-dim); }
        .btn-ghost{ color:var(--text); background:transparent; }
        .btn-ghost:hover{ border-color:var(--accent); color:var(--accent); }

        section{ padding:56px 0; }
        .sec-title{ font-weight:800; font-size:clamp(22px,3vw,27px); margin-bottom:26px; }

        .about-panel{ background:var(--surface); border:1px solid var(--border); border-radius:12px; padding:30px; }
        .about-panel p{ margin-bottom:14px; max-width:70ch; }
        .about-panel p:last-child{ margin-bottom:0; }
        .about-panel .muted{ color:var(--muted); }

        .timeline{ border-left:2px solid var(--border); margin-left:6px; }
        .tl-item{ position:relative; padding:2px 0 32px 28px; }
        .tl-item:last-child{ padding-bottom:0; }
        .tl-item::before{ content:""; position:absolute; left:-7px; top:5px; width:12px; height:12px; border-radius:50%; background:var(--bg); border:2px solid var(--accent); }
        .tl-period{ font-family:var(--mono); font-size:12.5px; color:var(--muted); margin-bottom:5px; display:block; }
        .tl-title{ font-weight:700; font-size:17px; margin-bottom:6px; }
        .tl-org{ color:var(--accent); font-weight:600; font-size:14.5px; }
        .tl-body{ color:var(--muted); font-size:14.5px; max-width:64ch; margin-top:6px; }
        .tl-tags{ display:flex; gap:8px; flex-wrap:wrap; margin-top:12px; }
        .tag{ font-size:12px; padding:4px 10px; border-radius:6px; border:1px solid var(--border); color:var(--muted); }

        .projects-grid{ display:grid; grid-template-columns:1fr 1fr; gap:16px; }
        @media (max-width:720px){ .projects-grid{ grid-template-columns:1fr; } }
        .proj-card{ background:var(--surface); border:1px solid var(--border); border-radius:12px; padding:22px; transition:transform .15s ease, border-color .15s ease; }
        .proj-card:hover{ transform:translateY(-3px); border-color:var(--accent); }
        .proj-top{ display:flex; justify-content:space-between; align-items:flex-start; gap:10px; margin-bottom:10px; }
        .proj-title{ font-weight:700; font-size:16px; }
        .badge{ font-size:11px; font-weight:600; padding:4px 10px; border-radius:20px; white-space:nowrap; }
        .badge-live{ background:rgba(74,222,128,0.12); color:var(--accent); border:1px solid var(--accent-dim); }
        .badge-progress{ background:rgba(255,255,255,0.06); color:var(--muted); border:1px solid var(--border); }
        .proj-desc{ color:var(--muted); font-size:14px; margin-bottom:14px; }
        .proj-tags{ display:flex; gap:6px; flex-wrap:wrap; }

        .skills-grid{ display:grid; grid-template-columns:1fr 1fr; gap:22px 30px; }
        @media (max-width:680px){ .skills-grid{ grid-template-columns:1fr; } }
        .skill-group h3{ font-size:14px; font-weight:700; margin-bottom:12px; }
        .skill-chips{ display:flex; flex-wrap:wrap; gap:8px; }
        .chip{ font-size:13px; padding:7px 13px; border-radius:8px; background:var(--surface); border:1px solid var(--border); color:var(--text); }

        .contact-panel{ background:var(--surface); border:1px solid var(--border); border-radius:12px; padding:30px; }
        .contact-list{ display:grid; gap:14px; }
        .contact-row{ display:flex; align-items:center; justify-content:space-between; gap:14px; padding:14px 16px; background:var(--surface-2); border:1px solid var(--border); border-radius:8px; flex-wrap:wrap; }
        .contact-left{ display:flex; align-items:center; gap:12px; }
        .contact-icon{ color:var(--accent); display:flex; }
        .contact-row .field{ font-family:var(--mono); font-size:11.5px; color:var(--muted); display:block; }
        .contact-row .value{ font-size:14.5px; font-weight:600; }
        .contact-row a.value:hover{ color:var(--accent); }
        .copy-btn{ display:flex; align-items:center; gap:6px; font-size:12px; color:var(--muted); border:1px solid var(--border); padding:5px 11px; border-radius:6px; cursor:pointer; background:transparent; }
        .copy-btn:hover{ color:var(--accent); border-color:var(--accent); }

        footer{ padding:30px 0 50px; text-align:center; }
        footer .wrap{ font-size:13px; color:var(--muted); border-top:1px solid var(--border); padding-top:22px; }
      `}</style>

      <nav>
        <div className="wrap">
          <div className="logo">
            Andreas<span>.</span>
          </div>
          <div className="navlinks">
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </div>
          <div className="status-pill">
            <span className="dot" /> Terbuka untuk peluang baru
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="wrap hero-grid">
          <div className="avatar">AD</div>
          <div>
            <h1 className="hero-name">Andreas</h1>
            <p className="hero-role">
              Fullstack Developer dengan fokus backend — membangun sistem yang
              andal, dari arsitektur database sampai antarmuka yang mudah
              dipakai.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">
                Lihat proyek
              </a>
              <a href="#contact" className="btn btn-ghost">
                Hubungi saya
              </a>
            </div>
          </div>
        </div>
      </header>

      <section id="about">
        <div className="wrap">
          <span className="eyebrow">Tentang</span>
          <h2 className="sec-title">Sedikit tentang saya</h2>
          <div className="about-panel">
            <p>
              Saya seorang <strong>Software Developer</strong> yang saat ini
              membangun dan merawat Sistem Informasi Manajemen Rumah Sakit
              (SIMRS) — mulai dari dashboard operasional real-time, modul
              pendaftaran pasien online dengan antrean live, sampai arsitektur
              database yang menjadi satu sumber kebenaran untuk seluruh sistem.
            </p>
            <p className="muted">
              Fokus utama saya ada di backend: autentikasi dan otorisasi,
              validasi data, penanganan konflik data (race condition) dengan
              transaksi database, hingga logging dan penanganan error yang rapi.
              Di sisi frontend, saya terbiasa membangun antarmuka React yang
              informatif dan mudah dipakai.
            </p>
            <p className="muted">
              Selain pekerjaan sehari-hari, saya sedang memperdalam{" "}
              <strong>Go</strong> sebagai bahasa backend kedua, dan terbuka
              untuk peran fullstack maupun backend di berbagai industri — tidak
              terbatas pada kesehatan.
            </p>
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="wrap">
          <span className="eyebrow">EXPERIENCE</span>
          <h2 className="sec-title">Perjalanan karier</h2>
          <div className="timeline">
            {EXPERIENCE.map((e) => (
              <div className="tl-item" key={e.title}>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="wrap">
          <span className="eyebrow">PROJECTS</span>
          <h2 className="sec-title">Yang pernah saya bangun</h2>
          <div className="projects-grid">
            {PROJECTS.map((p) => (
              <div className="proj-card" key={p.title}>
                <div className="proj-top">
                  <div className="proj-title">{p.title}</div>
                  <span
                    className={`badge ${p.status === "live" ? "badge-live" : "badge-progress"}`}
                  >
                    {p.status === "live" ? "Produksi" : "Berjalan"}
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
            ))}
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="wrap">
          <span className="eyebrow">Skills</span>
          <h2 className="sec-title">Tools & teknologi</h2>
          <div className="skills-grid">
            {SKILLS.map((s) => (
              <div className="skill-group" key={s.group}>
                <h3>{s.group}</h3>
                <div className="skill-chips">
                  {s.items.map((i) => (
                    <span className="chip" key={i}>
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="wrap">
          <span className="eyebrow">Contact</span>
          <h2 className="sec-title">Mari terhubung</h2>
          <div className="contact-panel">
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
                    <span className="field">Lokasi</span>
                    <span className="value">Indonesia · remote-friendly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">© 2026 Andreas.</div>
      </footer>
    </div>
  );
}
