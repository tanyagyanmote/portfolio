import { useEffect, useRef, useState } from "react";
import star from "./assets/star.png";

export default function StarNote() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const boxRef = useRef(null);

  // (optional) auto-open once per browser using localStorage
  useEffect(() => {
    const seen = localStorage.getItem("starHintSeen");
    if (!seen) {
      setOpen(true);
      localStorage.setItem("starHintSeen", "1");
    }
  }, []);

  // close if clicked outside the bubble
  useEffect(() => {
    const onDocClick = (e) => {
      if (!open) return;
      if (!btnRef.current?.contains(e.target) && !boxRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [open]);

  return (
    <div className="star-menu">{/* uses your existing positioning */} 
      <button
        ref={btnRef}
        className="star-btn"
        onClick={() => setOpen((o) => !o)}
        aria-label="Show hint"
        title="Hint"
      >
        <img src={star} alt="" />
      </button>

      {/* note bubble instead of a menu */}
      <div
        ref={boxRef}
        className={`star-note ${open ? "open" : ""}`}
        role="status"
        aria-live="polite"
      >
        💡 Main portfolio is inside the <b>laptop</b>.  
        The rest of the desk is interactive too — try clicking around!
      </div>
    </div>
  );
}
