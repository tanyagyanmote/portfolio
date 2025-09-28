// Projects.jsx
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Scrum Tools",
    stack: ["React", "Material-UI", "Express", "PostgreSQL"],
    date: "Jan 2024 – Jun 2024",
    bullets: [
      "Built a Scrum-specific project management tool to enforce strict Scrum practices.",
      "Added user stories, planning poker, and release plan management.",
      "Implemented auth, project selection, and privacy controls."
    ],
    links: {
      demo: null,          // e.g., "https://your-demo.com"
      repo: null           // e.g., "https://github.com/tanyagyanmote/scrum-tools"
    }
  },
  {
    title: "Slack-Style Messaging System",
    stack: ["Node.js", "Express", "React", "PostgreSQL", "Material-UI", "Docker"],
    date: "Mar 2024 – Apr 2024",
    bullets: [
      "SPA + REST API with secure auth, workspaces, and channel management.",
      "Responsive UI with Material-UI.",
      "Dockerized PostgreSQL for local deployment."
    ],
    links: { demo: null, repo: null }
  },
  {
    title: "Robot Ear",
    stack: ["Python", "HTML", "JavaScript"],
    date: "Sep 2023 – Dec 2023",
    bullets: [
      "Web app that transcribes audio to sheet music using frequency & ML-based classifiers.",
      "Auth + DB to save audio uploads and generated PDFs."
    ],
    links: { demo: null, repo: null }
  }
];

export default function Projects() {
  return (
    <div className="projects-wrap">
      <h1 className="projects-title">Projects</h1>

      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p.title} className="project-card">
            <header className="project-head">
              <h2 className="project-name">{p.title}</h2>
              <span className="project-date">{p.date}</span>
            </header>

            <ul className="project-stack">
              {p.stack.map((t) => (
                <li key={t} className="stack-chip">{t}</li>
              ))}
            </ul>

            <ul className="project-bullets">
              {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>

            {(p.links.demo || p.links.repo) && (
              <div className="project-links">
                {p.links.demo && (
                  <a href={p.links.demo} target="_blank" rel="noreferrer" className="plink">
                    <FaExternalLinkAlt aria-hidden /> Live
                  </a>
                )}
                {p.links.repo && (
                  <a href={p.links.repo} target="_blank" rel="noreferrer" className="plink">
                    <FaGithub aria-hidden /> Code
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
