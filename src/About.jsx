// About.jsx
import pfp from "./assets/pfp.jpg";

export default function About() {
  return (
    <div className="about-wrap">
      <header className="about-hero">
        <img src={pfp} alt="Tanya portrait" className="about-avatar" />
        <div className="about-headings">
          <h1 className="about-name">Tanya Gyanmote</h1>
          <p className="about-tagline">Bay Area–based developer, designer</p>
          <p className="about-sub">
            Former Data & AI Intern at <a href="https://www.xoriant.com" target="_blank" rel="noreferrer">Xoriant</a>
          </p>
        </div>
      </header>

      <hr className="about-divider" />

      <section className="about-intro">
        <p>hi! i’m tanya, a developer and web designer. i…</p>
        <ul className="about-bullets">
          <li>build full-stack projects and clean, responsive UIs,</li>
          <li>sketch wireframes and iterate on UX flows, and</li>
          <li>do frontend web development!</li>
        </ul>
      </section>

      <section className="about-section">
        <h2 className="about-section-title">EDUCATION</h2>
        <div className="about-card">
          <div className="about-card-bar" />
          <div>
            <p className="about-card-main">B.S. in Computer Science — UC Santa Cruz</p>
            <p className="about-card-sub">Graduated June 2025 • Dean’s List</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2 className="about-section-title">OTHER INTERESTS</h2>
        <ul className="about-list">
          <li>game development & AI tools</li>
          <li>portfolio/design experiments</li>
          <li>photography & travel</li>
        </ul>
      </section>

      <section className="about-section">
        <h2 className="about-section-title">LANGUAGE PROFICIENCY</h2>
        <div className="about-card">
          <div className="about-card-bar" />
          <div>
            <p className="about-card-main">fluent in English and Marathi; conversational Hindi</p>
            <p className="about-card-sub">can understand Spanish and Telugu!</p>
          </div>
        </div>
      </section>
    </div>
  );
}
