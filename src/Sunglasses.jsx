import { useRef } from "react";
import sunglasses from "./assets/sunglasses.png";

export default function Sunglasses({ shakeMs = 900 }) {
  const imgRef = useRef(null);

  const shake = () => {
    const el = imgRef.current;
    if (!el) return;
    el.style.setProperty("--shake-dur", `${shakeMs}ms`);
    // restart animation on every click
    el.classList.remove("is-shaking");
    void el.offsetWidth; // force reflow
    el.classList.add("is-shaking");
  };

  const onKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      shake();
    }
  };

  return (
    <div className="sunglasses-wrap">
      <img
        ref={imgRef}
        src={sunglasses}
        alt="Sunglasses"
        className="sunglasses-img"
        draggable="false"
      />
      <button
        className="sunglasses-hitbox"
        aria-label="Shake sunglasses"
        onClick={shake}
        onKeyDown={onKey}
      />
    </div>
  );
}
