import './App.css'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="layout">
      {/* Sidebar */}
      <aside className="gingham-strip">
        <div className="archive-box">
          <h2 className="archive-text">Tanya's <br /> Archive</h2>
        </div>

        {/* Sidebar Navigation */}
        <nav className="sidebar-nav">
          <ul>
            <li 
              className={activeSection === "about" ? "active" : ""} 
              onClick={() => setActiveSection("about")}
            >
              About
            </li>
            <li 
              className={activeSection === "skills" ? "active" : ""} 
              onClick={() => setActiveSection("skills")}
            >
              Skills
            </li>
            <li 
              className={activeSection === "projects" ? "active" : ""} 
              onClick={() => setActiveSection("projects")}
            >
              Projects
            </li>
            <li 
              className={activeSection === "experience" ? "active" : ""} 
              onClick={() => setActiveSection("experience")}
            >
              Experience
            </li>
          </ul>
        </nav>

        {/* Resume button */}
        <a href="/Tanya_Resume.pdf" className="resume-btn" download>
          Download Resume
        </a>

        {/* Social icons */}
        <div className="social-icons">
          <a href="https://github.com/tanyagyanmote" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/tanyagyanmote/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href="mailto:tanyagyanmote@gmail.com">
            <FaEnvelope className="icon" />
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="content">
        {activeSection === "about" && (
          <section id="about" className="about-section">
            <h2>About Me</h2>
            <p>
              Hi! I’m Tanya Gyanmote, a recent Computer Science graduate from the 
              University of California, Santa Cruz (Class of 2025 🎓). During my time 
              at UCSC, I focused on full-stack development, data engineering, and 
              software design — all while maintaining a 3.73 GPA and earning Dean’s 
              List recognition. 
            </p>
            <p>
              Beyond academics, I completed a Data & AI Engineering Internship at 
              Xoriant, where I enhanced Microsoft Fabric demos, implemented Real-Time 
              Intelligence scenarios, and optimized Data Warehouse workflows with Copilot. 
              These experiences sharpened my skills in React, SQL, cloud workflows, and 
              modern software engineering practices.
            </p>
            <p>
              Outside of coding, I’m passionate about real estate and design, love 
              working on creative projects like building games and websites, and enjoy 
              traveling ✈️. I’m now looking to apply my technical and creative skills 
              in the professional world as a post-grad.
            </p>
          </section>
        )}


        {activeSection === "skills" && (
          <section id="skills">
            <h2>Technical Skills</h2>
            <div className="skills-list">
              <span className="pill">Java</span>
              <span className="pill">Python</span>
              <span className="pill">C</span>
              <span className="pill">C++</span>
              <span className="pill">JavaScript</span>
              <span className="pill">HTML/CSS</span>
              <span className="pill">LaTeX</span>
            </div>

            <h3>Developer Tools</h3>
            <div className="skills-list">
              <span className="pill">GitHub</span>
              <span className="pill">Linux</span>
              <span className="pill">Unix</span>
              <span className="pill">Docker</span>
              <span className="pill">VS Code</span>
              <span className="pill">Visual Studio</span>
              <span className="pill">PyCharm</span>
              <span className="pill">Eclipse</span>
              <span className="pill">RARS</span>
            </div>
          </section>
        )}

        {activeSection === "projects" && (
          <section id="projects">
            <h2>Projects</h2>

            <div className="project-card">
              <h3>Scrum Tools</h3>
              <p><em>Jan 2024 – Jun 2024</em></p>
              <p>
                Developed a Scrum-specific project management tool to enforce strict Scrum practices. 
                Implemented features for user stories, planning poker, and managing release plans. 
                Enhanced functionality for authentication, project selection, and privacy controls.
              </p>
              <div className="tech-stack">
                <span className="pill">React</span>
                <span className="pill">Material UI</span>
                <span className="pill">Express</span>
                <span className="pill">PostgreSQL</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank" rel="noopener noreferrer">View Demo</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Code</a>
              </div>
            </div>

            <div className="project-card">
              <h3>Slack Style Messaging System</h3>
              <p><em>Mar 2024 – Apr 2024</em></p>
              <p>
                Built a SPA and REST API with Node.js and React, supporting authentication, workspace, and channel management. 
                Built a responsive UI with React and Material-UI, supporting authentication, workspace, and channel management. 
                Used Docker for containerization and deployment of the PostgreSQL database.
              </p>
              <div className="tech-stack">
                <span className="pill">Node.js</span>
                <span className="pill">Express</span>
                <span className="pill">React</span>
                <span className="pill">PostgreSQL</span>
                <span className="pill">Material UI</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank" rel="noopener noreferrer">View Demo</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Code</a>
              </div>
            </div>

            <div className="project-card">
              <h3>Robot Ear</h3>
              <p><em>Sep 2023 – Dec 2023</em></p>
              <p>
                Developed a web application that transcribes audio files to sheet music using frequency and ML-based classifiers. 
                Implemented login and database features for saving audio and PDF files.
              </p>
              <div className="tech-stack">
                <span className="pill">Python</span>
                <span className="pill">HTML</span>
                <span className="pill">JavaScript</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank" rel="noopener noreferrer">View Demo</a>
              </div>
            </div>
          </section>
        )}

        {activeSection === "experience" && (
          <section id="experience">
            <h2>Experience</h2>

            <div className="job-card">
              <h3>Data and AI Engineering Intern</h3>
              <p><em>Xoriant • Sunnyvale, CA (Jun 2024 – Aug 2024)</em></p>
              <p>
                Contributed to enhancing Microsoft Fabric demos, including implementing a Real-Time Intelligence scenario 
                and testing new features in various environments. Collaborated on the Data Warehouse experience using 
                Microsoft Fabric Copilot, optimizing workflows and integrating new features for demo showcases.
              </p>
              <strong>Key Achievements:</strong>
              <ul>
                <li>Enhanced Microsoft Fabric demos with Real-Time Intelligence</li>
                <li>Optimized Data Warehouse workflows using Microsoft Fabric Copilot</li>
                <li>Integrated new features for demo showcases</li>
              </ul>
            </div>

            <div className="job-card">
              <h3>Office Assistant</h3>
              <p><em>UCSC Mathematics Department • Santa Cruz, CA (Nov 2023 – June 2025)</em></p>
              <p>
                Provided administrative support, managed spreadsheets, and handled event setups for the Mathematics Department.
              </p>
              <strong>Key Achievements:</strong>
              <ul>
                <li>Managed administrative spreadsheets and data</li>
                <li>Organized and supported department events</li>
                <li>Provided consistent administrative support</li>
              </ul>
            </div>

            <div className="job-card">
              <h3>Technology Officer</h3>
              <p><em>FLEO • San Ramon, CA (Aug 2020 – Aug 2021)</em></p>
              <p>
                Enhanced website development for a non-profit to improve financial literacy education. Designed and optimized 
                the website for intuitive navigation and accessibility.
              </p>
              <strong>Key Achievements:</strong>
              <ul>
                <li>Improved financial literacy education website</li>
                <li>Enhanced website navigation and accessibility</li>
                <li>Supported non-profit technology initiatives</li>
              </ul>
            </div>

            <div className="job-card">
              <h3>Front-End Software Developer</h3>
              <p><em>APCS Academy • San Ramon, CA (Jun 2020 – Aug 2020)</em></p>
              <p>
                Collaborated on a prototype for the Kelly Blue Book website using advanced Java concepts.
              </p>
              <strong>Key Achievements:</strong>
              <ul>
                <li>Developed Kelly Blue Book website prototype</li>
                <li>Applied advanced Java programming concepts</li>
                <li>Collaborated effectively with development team</li>
              </ul>
            </div>

            <div className="job-card">
              <h3>Teaching Assistant</h3>
              <p><em>APCS Academy • San Ramon, CA (May 2020 – Sep 2020)</em></p>
              <p>
                Led development of an online beginner Java course during the COVID-19 pandemic. Created coursework and adapted 
                materials for diverse learning styles.
              </p>
              <strong>Key Achievements:</strong>
              <ul>
                <li>Led online Java course development during COVID-19</li>
                <li>Created coursework for diverse learning styles</li>
                <li>Adapted teaching materials for remote learning</li>
              </ul>
            </div>
          </section>
        )}

      </main>
    </div>
  )
}

export default App
