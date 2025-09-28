import { useState, useCallback } from "react";
import jewel1 from "./assets/jewel1.png";
import jewel2 from "./assets/jewel2.png";
import jewel3 from "./assets/jewel3.png";

const FRAMES = [jewel1, jewel2, jewel3];

export default function JewelryBox() {
  const [idx, setIdx] = useState(0);

  const advance = useCallback(() => {
    setIdx((i) => (i + 1) % FRAMES.length);  // loop 1→2→3→1
  }, []);

  const onKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      advance();
    }
  };

  return (
    <div className="jewel-wrap">
      <img
        className="jewel-img"
        src={FRAMES[idx]}
        alt="Jewelry box"
        draggable="false"
      />
      <button
        className="jewel-hitbox"
        aria-label="Toggle jewelry"
        onClick={advance}
        onKeyDown={onKey}
      />
    </div>
  );
}
