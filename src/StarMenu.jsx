import { useEffect, useRef, useState } from "react";
import star from "./assets/star.png";

export default function StarNote() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const boxRef = useRef(null);
  const closeTimer = useRef(null);

  // open on every load, then auto-close after 10s
  useEffect(() => {
    setOpen(true);
    closeTimer.current = setTimeout(() => setOpen(false), 10000);
    return () => clearTimeout(closeTimer.current);
  }, []);

  // close if clicking outside the bubble
  useEffect(() => {
    const onDocClick = (e) => {
      if (!open) return;
      if (!btnRef.current?.contains(e.target) && !boxRef.current?.contains(e.target)) {
        setOpen(false);
        clearTimeout(closeTimer.current);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [open]);

  const handleToggle = () => {
    setOpen((o) => {
      const next = !o;
      clearTimeout(closeTimer.current);
      if (next) {
        // if user re-opens, give them another 10s
        closeTimer.current = setTimeout(() => setOpen(false), 10000);
      }
      return next;
    });
  };

  return (
    <div className="star-menu">
      <button
        ref={btnRef}
        className="star-btn"
        onClick={handleToggle}
        aria-label="Show hint"
        aria-controls="starNote"
        aria-expanded={open}
        title="Hint"
      >
        <img src={star} alt="" />
      </button>

      <div
        id="starNote"
        ref={boxRef}
        className={`star-note ${open ? "open" : ""}`}
        role="status"
        aria-live="polite"
      >
        💡 Main portfolio is inside the <b>laptop</b>. The rest of the desk is
        interactive too — try clicking around!
      </div>
    </div>
  );
}
