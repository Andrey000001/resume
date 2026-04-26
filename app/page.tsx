const links = {
  email: "mailto:kovratovskyiandrii1999@gmail.com",
  phone: "tel:+19342332268",
  linkedin: "https://www.linkedin.com/in/andrii-kovratovskyi/",
  github: "https://github.com/Andrey000001",
  devEvents: {
    live: "https://devevents-seven-nu.vercel.app/",
    repo: "https://github.com/Andrey000001/devevents",
  },
  sociopedia: {
    live: "https://sociopedia-gold-ten.vercel.app/",
    repo: "https://github.com/Andrey000001/sociopedia",
  },
  ecomVision: {
    live: "https://ecomvision-frontend-9mua.onrender.com",
    repo: "https://github.com/Andrey000001/ecomvision",
  },
  certificate:
    "https://drive.google.com/file/d/1TNzEVbMS36_owBXdLzzCStji_pt0JlvO/view?usp=sharing",
};

const projects = [
  {
    title: "DevEvents",
    subtitle: "Cloud-Ready SaaS Platform",
    live: links.devEvents.live,
    repo: links.devEvents.repo,
    stack: ["Next.js 14", "TypeScript", "MongoDB", "Tailwind CSS", "Cloudinary", "PostHog"],
    bullets: [
      "Built complete auth flow — sign-up, login, protected routes — and full event booking system end-to-end",
      "Developed admin dashboard with complex filtering, pagination, and image upload via Cloudinary",
      "Integrated PostHog analytics to track user behavior across the booking funnel in real time",
    ],
  },
  {
    title: "EcomVision",
    subtitle: "Admin & Analytics Panel",
    live: links.ecomVision.live,
    repo: links.ecomVision.repo,
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Material UI"],
    bullets: [
      "Designed and built REST API from scratch with JWT authentication and role-based access control",
      "Created interactive KPI dashboards with charts for sales, users, and product performance metrics",
      "Structured reusable component library — reduced UI code duplication across the dashboard significantly",
    ],
  },
  {
    title: "Sociopedia",
    subtitle: "MERN Social Network",
    live: links.sociopedia.live,
    repo: links.sociopedia.repo,
    stack: ["React", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "JWT"],
    bullets: [
      "Implemented social features — profiles, posts, likes, comments — with optimistic UI updates via Redux",
      "Designed MongoDB schemas for users, posts, and relationships; handled nested population queries",
      "Built private/public route system with Redux-managed auth state and persistent sessions",
    ],
  },
];

const s = {
  wrap: {
    maxWidth: 820,
    margin: "0 auto",
    padding: "2rem 1.5rem",
    fontFamily: "system-ui, sans-serif",
    background: "#fff",
    color: "#0f172a",
  },
  name: { fontSize: 26, fontWeight: 500, letterSpacing: -0.3, marginBottom: 4 },
  subtitle: { fontSize: 14, color: "#64748b", marginBottom: 12 },
  contacts: { display: "flex", flexWrap: "wrap", gap: "6px 0", marginBottom: 12 },
  contactItem: { fontSize: 12.5, color: "#64748b", marginRight: 16, textDecoration: "none" },
  contactLink: { fontSize: 12.5, color: "#2563eb", marginRight: 16, textDecoration: "none" },
  badge: {
    display: "inline-flex", alignItems: "center", gap: 5,
    background: "#f0fdf4", color: "#15803d",
    fontSize: 11.5, fontWeight: 500,
    padding: "3px 10px", borderRadius: 6,
    border: "0.5px solid #bbf7d0",
  },
  divider: { height: 0.5, background: "#e2e8f0", margin: "16px 0" },
  sectionLabel: {
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: "#94a3b8",
    marginBottom: 10,
  },
  summary: { fontSize: 13.5, lineHeight: 1.75, color: "#334155" },
  skillRow: { display: "flex", gap: 6, fontSize: 13, color: "#334155", marginBottom: 5, flexWrap: "wrap" as const },
  skillLabel: { fontWeight: 500, color: "#64748b", minWidth: 72, flexShrink: 0 },
  project: { borderLeft: "2px solid #bfdbfe", paddingLeft: 14, marginBottom: 18 },
  projHead: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start" as const,
    flexWrap: "wrap" as const,
    gap: 4,
    marginBottom: 5,
  },
  projTitle: { fontSize: 13.5, fontWeight: 500 },
  projSub: { fontSize: 12.5, color: "#64748b", marginLeft: 6 },
  projLinks: { display: "flex", gap: 12 },
  projLink: { fontSize: 12, color: "#2563eb", textDecoration: "none" },
  tags: { display: "flex", flexWrap: "wrap" as const, gap: 4, marginBottom: 7 },
  tag: {
    fontSize: 11,
    padding: "2px 7px",
    borderRadius: 4,
    background: "#f8fafc",
    color: "#64748b",
    border: "0.5px solid #e2e8f0",
  },
  bullet: { fontSize: 13, color: "#334155", lineHeight: 1.7, marginBottom: 1 },
  eduName: { fontSize: 13.5, fontWeight: 500 },
  eduDate: { fontSize: 12.5, color: "#64748b" },
  eduDesc: { fontSize: 13, color: "#64748b", lineHeight: 1.65 },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginBottom: 18 }}>
      <p style={s.sectionLabel}>{title}</p>
      {children}
    </section>
  );
}

function ProjectCard({ p }: { p: (typeof projects)[0] }) {
  return (
    <div style={s.project}>
      <div style={s.projHead}>
        <div>
          <span style={s.projTitle}>{p.title}</span>
          <span style={s.projSub}>— {p.subtitle}</span>
        </div>
        <div style={s.projLinks}>
          <a href={p.live} target="_blank" rel="noreferrer" style={s.projLink}>
            Live Demo ↗
          </a>
          <a href={p.repo} target="_blank" rel="noreferrer" style={s.projLink}>
            GitHub ↗
          </a>
        </div>
      </div>
      <div style={s.tags}>
        {p.stack.map((t) => (
          <span key={t} style={s.tag}>
            {t}
          </span>
        ))}
      </div>
      <ul style={{ paddingLeft: 14, margin: 0 }}>
        {p.bullets.map((b, i) => (
          <li key={i} style={s.bullet}>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <div style={s.wrap}>
      <h1 style={s.name}>Andrii Kovratovskyi</h1>
      <p style={s.subtitle}>
        Full-Stack Developer · React / Next.js · TypeScript · Node.js
      </p>

      <div style={s.contacts}>
        <span style={s.contactItem}>Miami, FL</span>
        <a href={links.phone} style={s.contactLink}>
          +1 (934) 233-2268
        </a>
        <a href={links.email} style={s.contactLink}>
          kovratovskyiandrii1999@gmail.com
        </a>
        <a
          href={links.linkedin}
          target="_blank"
          rel="noreferrer"
          style={s.contactLink}
        >
          LinkedIn ↗
        </a>
        <a
          href={links.github}
          target="_blank"
          rel="noreferrer"
          style={s.contactLink}
        >
          GitHub ↗
        </a>
      </div>

      <span style={s.badge}>
        ✓ Authorized to work for any US employer — no sponsorship required
      </span>

      <div style={s.divider} />

      <Section title="Summary">
        <p style={s.summary}>
          Junior Full-Stack Developer with{" "}
          <strong>3 fully deployed production apps</strong> built with React,
          Next.js, Node.js, and TypeScript. Hands-on experience building auth
          systems, REST APIs, admin dashboards, and database models from
          scratch. Comfortable across the full stack — from MongoDB schemas to
          responsive UI. Fast learner, ships working code.
        </p>
      </Section>

      <Section title="Technical Skills">
        <div style={s.skillRow}>
          <b style={s.skillLabel}>Frontend</b>
          <span>
            React, Next.js 14, TypeScript, JavaScript (ES6+), Redux Toolkit,
            Tailwind CSS, Material UI
          </span>
        </div>
        <div style={s.skillRow}>
          <b style={s.skillLabel}>Backend</b>
          <span>
            Node.js, Express.js, REST APIs, JWT Auth, Prisma, PostgreSQL,
            MongoDB
          </span>
        </div>
        <div style={s.skillRow}>
          <b style={s.skillLabel}>Tools</b>
          <span>Git / GitHub, Vercel, Render, Cloudinary, PostHog</span>
        </div>
      </Section>

      <Section title="Featured Projects">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </Section>

      <Section title="Education">
        <div style={{ marginBottom: 14 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 4,
              marginBottom: 2,
            }}
          >
            <span style={s.eduName}>
              GoIT Academy — Full Stack Developer Program
            </span>
            <span style={s.eduDate}>Dec 2023 – Oct 2024</span>
          </div>
          <p style={s.eduDesc}>
            690+ hours: HTML/CSS, JavaScript, React, Node.js, TypeScript · 3
            team projects ·{" "}
            <a
              href={links.certificate}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#2563eb" }}
            >
              View Certificate ↗
            </a>
          </p>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 4,
              marginBottom: 2,
            }}
          >
            <span style={s.eduName}>
              National Technical University of Ukraine
            </span>
            <span style={s.eduDate}>2016 – 2019</span>
          </div>
          <p style={s.eduDesc}>
            Computer Engineering — transitioned to full-stack development
          </p>
        </div>
      </Section>
    </div>
  );
}