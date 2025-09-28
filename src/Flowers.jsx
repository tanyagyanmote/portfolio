import { useRef } from "react";
import flowers from "./assets/flowers.png";

export default function Flowers({ swayMs = 800 }) {
  const imgRef = useRef(null);

  const sway = () => {
    const el = imgRef.current;
    if (!el) return;
    el.style.setProperty("--sway-dur", `${swayMs}ms`);
    el.classList.remove("is-swaying");
    void el.offsetWidth;
    el.classList.add("is-swaying");
  };

  return (
    <div className="flowers-wrap">
      <img ref={imgRef} className="flowers-img" src={flowers} alt="Flowers" draggable="false" />
      <button className="flowers-hitbox" aria-label="Flowers" onClick={sway}
              onKeyDown={(e)=> (e.key==='Enter'||e.key===' ') && (e.preventDefault(),sway())}/>
    </div>
  );
}
