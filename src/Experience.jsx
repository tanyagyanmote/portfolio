// Experience.jsx
export default function Experience() {
    const jobs = [
      {
        role: "Data and AI Engineering Intern",
        company: "Xoriant",
        location: "Sunnyvale, CA",
        date: "June 2024 – Aug 2024",
        bullets: [
          "Enhanced Microsoft Fabric demos with a Real-Time Intelligence scenario; validated new features across envs.",
          "Improved Data Warehouse workflows using Fabric Copilot for smoother demo integrations."
        ],
      },
      {
        role: "Office Assistant",
        company: "UCSC Mathematics Department",
        location: "Santa Cruz, CA",
        date: "Nov 2023 – June 2025",
        bullets: [
          "Supported admin ops, maintained spreadsheets, and coordinated event setup logistics."
        ],
      },
      {
        role: "Technology Officer",
        company: "FLEO",
        location: "San Ramon, CA",
        date: "Aug 2020 – Aug 2021",
        bullets: [
          "Improved nonprofit site for clearer navigation and accessibility to support financial literacy."
        ],
      },
      {
        role: "Front-End Software Developer",
        company: "APCS Academy",
        location: "San Ramon, CA",
        date: "June 2020 – Aug 2020",
        bullets: [
          "Built a Kelley Blue Book prototype using advanced Java concepts with a small dev team."
        ],
      },
      {
        role: "Teaching Assistant",
        company: "APCS Academy",
        location: "San Ramon, CA",
        date: "May 2020 – Sep 2020",
        bullets: [
          "Led creation of a beginner Java online course; authored materials for varied learning styles."
        ],
      },
    ];
  
    return (
      <section className="experience-wrap">
        <h1 className="experience-title">Experience</h1>
  
        <ol className="xp-list">
          {jobs.map((j, i) => (
            <li key={i} className="xp-item">
              <header className="xp-head">
                <h2 className="xp-role">{j.role}</h2>
                <div className="xp-meta">
                  <span className="xp-company">{j.company}</span>
                  <span className="xp-dot" aria-hidden>•</span>
                  <span className="xp-location">{j.location}</span>
                  <span className="xp-date">{j.date}</span>
                </div>
              </header>
  
              <ul className="xp-bullets">
                {j.bullets.map((b, k) => (
                  <li key={k}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>
    );
  }
  