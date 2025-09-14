import { useState, useRef, useEffect } from "react";
import star from "./assets/star.png";

export default function StarMenu() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (!open) return;
      if (!btnRef.current?.contains(e.target) && !boxRef.current?.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [open]);

  return (
    <div className="star-menu">
      <button ref={btnRef} className="star-btn" onClick={() => setOpen(o => !o)}>
        <img src={star} alt="Open menu" />
      </button>

      <nav ref={boxRef} className={`star-dropdown ${open ? "open" : ""}`}>
        <a href="#top">Home</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
}
