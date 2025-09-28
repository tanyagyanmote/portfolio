import { useEffect, useMemo, useRef, useState } from "react";
import nails1 from "./assets/nails1.png";
import nails2 from "./assets/nails2.png";
import nails3 from "./assets/nails3.png";

export default function Nails({ hitpad = 16, animate = true }) {
  const FRAMES = useMemo(() => [nails1, nails2, nails3], []);
  const [frame, setFrame] = useState(0);
  const timers = useRef([]);

  // preload
  useEffect(() => { FRAMES.forEach(src => { const i = new Image(); i.src = src; }); }, [FRAMES]);
  useEffect(() => () => { timers.current.forEach(clearTimeout); }, []);

  const handleClick = () => {
    if (!animate) return setFrame(i => (i + 1) % FRAMES.length);
    if (timers.current.length) return;
    const seq = [1, 2, 0];  // mid → tipped → reset
    const stepMs = 480;
    seq.forEach((f, k) => {
      const id = setTimeout(() => {
        setFrame(f);
        if (k === seq.length - 1) timers.current = [];
      }, stepMs * (k + 1));
      timers.current.push(id);
    });
  };

  return (
    <div className="nails-wrap" style={{ "--hitpad": `${hitpad}px` }}>
      {/* visual art (no pointer events) */}
      <img
        src={FRAMES[frame]}
        alt="Nail polish"
        className={`nails-img frame-${frame}`}
        draggable="false"
      />
      {/* invisible hitbox overlay (bigger than art) */}
      <button
        className="nails-hitbox"
        onClick={handleClick}
        aria-label="Tip the nail polish"
        title="Tip the nail polish"
      />
    </div>
  );
}
