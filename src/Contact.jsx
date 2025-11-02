// Contact.jsx
import { useMemo, useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const mailtoHref = useMemo(() => {
    const to = "tanya.gyanmote@gmail.com";
    const subject = encodeURIComponent(`Portfolio message from ${form.name || "—"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    return `mailto:${to}?subject=${subject}&body=${body}`;
  }, [form]);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const valid =
    form.name.trim() && /\S+@\S+\.\S+/.test(form.email) && form.message.trim();

  return (
    <div className="contact-wrap">
      <header className="contact-hero">
        <h1 className="contact-title">let’s talk</h1>
        <p className="contact-sub">Reach out for collabs, roles, or questions.</p>
      </header>

      <section className="contact-grid">
        {/* Left: quick links */}
        <nav className="contact-links" aria-label="Quick links">
          <a href="mailto:tanya.gyanmote@gmail.com" className="contact-link">
            <FaEnvelope className="contact-icon" />
            <span>tanya.gyanmote@gmail.com</span>
          </a>
          <a
            href="https://linkedin.com/in/tanyagyanmote"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <FaLinkedin className="contact-icon" />
            <span>linkedin.com/in/tanyagyanmote</span>
          </a>
          <a
            href="https://github.com/tanyagyanmote"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <FaGithub className="contact-icon" />
            <span>github.com/tanyagyanmote</span>
          </a>
        </nav>

        {/* Right: mailto form */}
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            if (valid) window.location.href = mailtoHref;
          }}
        >
          <label className="field">
            <span className="field-label">name</span>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="your name"
              required
            />
          </label>

          <label className="field">
            <span className="field-label">email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="you@example.com"
              required
            />
          </label>

          <label className="field">
            <span className="field-label">message</span>
            <textarea
              name="message"
              rows={6}
              value={form.message}
              onChange={onChange}
              placeholder=".…"
              required
            />
          </label>

          <div className="contact-actions">
            <a
              className={`send-btn ${valid ? "" : "is-disabled"}`}
              href={valid ? mailtoHref : undefined}
              onClick={(e) => !valid && e.preventDefault()}
            >
              FEATURE NOT SET UP YET
            </a>
            {/* <span className="contact-hint">opens your default mail app</span> */}
          </div>
        </form>
      </section>
    </div>
  );
}
