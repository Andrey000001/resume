export default function Home() {
  const links = {
    email: "mailto:kovratovskyiandrii1999@gmail.com",
    phone: "tel:+19342332268",
    linkedin: "https://www.linkedin.com/feed/", // лучше заменить на свой профиль URL
    github: "https://github.com/Andrey000001",
    devEvents: "https://devevents-seven-nu.vercel.app/",
    sociopedia: "https://sociopedia-gold-ten.vercel.app/",
    ecomVision: "https://ecomvision-frontend-9mua.onrender.com",
    certificate: "https://drive.google.com/file/d/1TNzEVbMS36_owBXdLzzCStji_pt0JlvO/view?usp=sharing"
  };

  return (
    <div className=" bg-zinc-50 text-zinc-900">
      {/* Page */}
      <main className="mx-auto print-onepage max-w-[900px] px-4 py-4">
        {/* Header */}
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">Andrii Kovratovskyi</h1>
          <p className="text-sm text-zinc-700">
            Full-Stack Developer (React/Next.js) • TypeScript • Node.js
          </p>

          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-zinc-700">
            <span>Miami, FL</span>
            <a className="underline underline-offset-2 hover:text-zinc-900" href={links.phone}>
              +1 (934) 233-2268
            </a>
            <a className="underline underline-offset-2 hover:text-zinc-900" href={links.email}>
              kovratovskyiandrii1999@gmail.com
            </a>
            <a className="underline underline-offset-2 hover:text-zinc-900" href={links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="underline underline-offset-2 hover:text-zinc-900" href={links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="text-zinc-600">Live:</span>
            <a className="underline underline-offset-2 hover:text-zinc-900" href={links.devEvents} target="_blank" rel="noreferrer">
              DevEvents
            </a>
            <span className="text-zinc-300">•</span>
            <a className="underline underline-offset-2 hover:text-zinc-900" href={links.ecomVision} target="_blank" rel="noreferrer">
              EcomVision
            </a>
            <span className="text-zinc-300">•</span>
            <a className="underline underline-offset-2 hover:text-zinc-900" href={links.sociopedia} target="_blank" rel="noreferrer">
              Sociopedia
            </a>
          </div>

          <div className="h-px w-full bg-zinc-300 mt-2 mb-1" />
        </header>

        {/* Sections */}
        <section className="grid gap-2">
          {/* Summary */}
          <div>
            <h2 className="text-sm font-semibold tracking-wide uppercase text-zinc-800">Summary</h2>
            <p className="text-sm leading-6 text-zinc-700">
              Full-stack developer focused on responsive React/Next.js applications with TypeScript, reusable UI components,
              and secure REST APIs. Strong in dashboards, auth flows, and deployment.
            </p>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-sm font-semibold tracking-wide uppercase text-zinc-800">Technical Skills</h2>

            <div className=" grid gap-2 text-sm text-zinc-700">
              <p>
                <span className="font-medium text-zinc-800">Frontend:</span>{" "}
                React, Next.js, TypeScript, JavaScript (ES6+), Redux Toolkit, Tailwind CSS, Material UI
              </p>
              <p>
                <span className="font-medium text-zinc-800">Backend:</span>{" "}
                Node.js, Express.js, REST APIs, JWT Auth, Prisma, PostgreSQL, MongoDB
              </p>
              <p>
                <span className="font-medium text-zinc-800">Tools:</span>{" "}
                Git/GitHub, Vercel, Render, PostHog, Cloudinary
              </p>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-sm font-semibold tracking-wide uppercase text-zinc-800">Projects</h2>

            <div className="mt-1 grid gap-2">
              <Project
                title="DevEvents — Cloud-Ready SaaS App"
                link={links.devEvents}
                bullets={[
                  "Built an events platform with authentication, booking flow, analytics, and image uploads.",
                  "Implemented admin dashboard features: complex forms, filtering, pagination, responsive layouts.",
                  "Stack: Next.js 14, TypeScript, Tailwind CSS, MongoDB, PostHog, Cloudinary.",
                ]}
              />

              <Project
                title="EcomVision — Admin & Analytics Panel"
                link={links.ecomVision}
                bullets={[
                  "Developed an admin dashboard with KPI charts, user/product management, and secure login.",
                  "Integrated REST API and improved maintainability with reusable component patterns.",
                  "Stack: React, Material UI, Node.js, Express.js, MongoDB.",
                ]}
              />

              <Project
                title="Sociopedia — MERN Social Platform"
                link={links.sociopedia}
                bullets={[
                  "Built social features: profiles, posts, likes, comments, protected routes, and roles.",
                  "Designed MongoDB data models and integrated APIs for a smooth UI experience.",
                  "Stack: React, Redux Toolkit, Node.js, Express.js, MongoDB, JWT, MUI.",
                ]}
              />
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-sm font-semibold tracking-wide uppercase text-zinc-800">Experience</h2>
            <div className="mt-3">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div className="text-sm">
                  <span className="font-semibold text-zinc-900">Full-Stack Developer</span>
                  <span className="text-zinc-500"> — Self-Employed</span>
                  <span className="text-zinc-500"> (Miami, FL)</span>
                </div>
                <div className="text-sm text-zinc-600">Feb 2023 — Present</div>
              </div>

              <ul className="mt-2 list-disc pl-5 text-sm leading-6 text-zinc-700">
                <li>Build and ship full-stack projects end-to-end (UI, APIs, auth, databases, deployment).</li>
                <li>Comfortable with remote collaboration, code reviews, and iterative improvement.</li>
                <li>Focus on maintainable components, predictable state management, and clean API integration.</li>
              </ul>
            </div>
          </div>

          {/* Education + Certificate */}
                <div className="grid gap-4 sm:grid-cols-2">
  <div>
    <h2 className="text-sm font-semibold tracking-wide uppercase text-zinc-800">Education</h2>

    <div className="mt-3 flex gap-7 space-y-4 text-sm text-zinc-700">
      <div>
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <div className="font-medium text-zinc-900">GoIT Academy</div>
          <a
            href={links.certificate}
            target="_blank"
            rel="noreferrer"
            className="text-xs underline underline-offset-2 text-zinc-700 hover:text-zinc-900"
          >
            Certificate
          </a>
        </div>
        <div>Full Stack Developer</div>
        <div className="text-zinc-600">Dec 2023 — Oct 2024</div>
      </div>

      <div>
        <div className="font-medium text-zinc-900">National Technical University of Ukraine</div>
        <div>B.S. in Computer Engineering</div>
        <div className="text-zinc-600">2016 — 2019</div>
      </div>
    </div>
  </div>
</div>


          <div className="h-px w-full bg-zinc-200" />

       
        </section>
      </main>
    </div>
  );
}

function Project({
  title,
  link,
  bullets,
}: {
  title: string;
  link: string;
  bullets: string[];
}) {
  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-4">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-sm font-semibold text-zinc-900">{title}</h3>
        <a
          className="text-sm underline underline-offset-2 text-zinc-700 hover:text-zinc-900"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          Live
        </a>
      </div>

      <ul className="mt-2 list-disc pl-5 text-sm leading-6 text-zinc-700">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </article>
  );
}
