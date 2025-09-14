// Contact.jsx
import ctaImg from "./assets/Contact.png";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div
        className="contact__canvas"
        style={{ "--cta-bg": `url(${ctaImg})` }}
        aria-label="Let's work together"
      >
        <nav className="contact__links" aria-label="Contact links">
          <a
            className="contact__btn contact__btn--email"
            href="mailto:tanyagyanmote@gmail.com"
            aria-label="Email Tanya"
          >
            <EmailIcon /> Email
          </a>

          <a
            className="contact__btn contact__btn--ln"
            href="https://www.linkedin.com/in/tanyagyanmote/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Tanya on LinkedIn"
          >
            <LinkedInIcon /> LinkedIn
          </a>

          <a
            className="contact__btn contact__btn--gh"
            href="https://github.com/tanyagyanmote"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Tanya on GitHub"
          >
            <GitHubIcon /> GitHub
          </a>
        </nav>
      </div>
    </section>
  );
}

/* Tiny inline SVGs (no extra files needed) */
function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/>
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M4.98 3.5A2.5 2.5 0 1 1 2.5 6a2.5 2.5 0 0 1 2.48-2.5ZM3 8.5h4v12H3zM9 8.5h3.8v1.7h.05c.53-.95 1.82-1.95 3.75-1.95 4 0 4.75 2.64 4.75 6.07v6.18h-4v-5.48c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9v5.58H9z"/>
    </svg>
  );
}
function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.17-3.37-1.17-.46-1.16-1.12-1.47-1.12-1.47-.92-.64.07-.63.07-.63 1.02.07 1.56 1.05 1.56 1.05.91 1.55 2.4 1.1 2.98.85.09-.66.36-1.1.65-1.35-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.57 9.57 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.68-4.57 4.93.37.32.7.94.7 1.9v2.81c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/>
    </svg>
  );
}
