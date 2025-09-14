import aboutBg from "./assets/About.png"; // your image

export default function About() {
  return (
    <section id="about" className="about">
      <div
        className="about__canvas"
        style={{ "--about-bg": `url(${aboutBg})` }}
      >

        {/* 2) Copy ON the note */}
        <div className="about__note">
          <p>
            I’m a new grad from UC Santa Cruz with a
            B.S. in Computer Science. I love building playful,
            accessible web UIs, wiring up APIs, and adding tiny
            motion details that make products feel alive.
          </p>
        </div>
      </div>
    </section>
  );
}

