import React, { useState } from "react";
import journal1 from "./assets/journal1.png";
import journal2 from "./assets/journal2.png";
import journal3 from "./assets/journal3.png";
import "./App.css";

export default function Journal() {
  const pages = [journal1, journal2, journal3];
  const [idx, setIdx] = useState(0);        // current image index
  const [animating, setAnimating] = useState(false);
  const [fading, setFading] = useState(false);

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const runSequence = async () => {
    if (animating) return;          // ignore if already mid-animation
    setAnimating(true);

    // sequence after click: 1 -> 2 -> 0
    const sequence = [1, 2, 0];
    for (const next of sequence) {
      setFading(true);              // fade out current
      await sleep(220);
      setIdx(next);                 // swap image
      setFading(false);             // fade in next
      await sleep(360);
    }

    setAnimating(false);
  };

  return (
    <div className="journal-wrap">
      <img
        src={pages[idx]}
        alt={`journal page ${idx + 1}`}
        className={`journal-img ${fading ? "is-fading" : ""}`}
        draggable="false"
      />
      <button
        className="journal-hitbox"
        aria-label="toggle journal pages"
        onClick={runSequence}
        disabled={animating}       // prevents double-taps mid animation
      />
    </div>
  );
}
