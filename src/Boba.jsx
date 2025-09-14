import { useRef, useState, useEffect } from "react";
import baseCup from "./assets/boba.png";
import layer1 from "./assets/layer1.png";
import layer2 from "./assets/layer2.png";
import layer3 from "./assets/layer3.png";

export default function Boba({ stepMs = 1000 }) {
  const [frame, setFrame] = useState(0);
  const playingRef = useRef(false);
  const timers = useRef([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };
  useEffect(() => () => clearTimers(), []);

  const playCycle = () => {
    if (playingRef.current) return;
    playingRef.current = true;
    setFrame(0);
    timers.current.push(setTimeout(() => setFrame(1), stepMs));
    timers.current.push(setTimeout(() => setFrame(2), stepMs * 2));
    timers.current.push(setTimeout(() => {
      setFrame(0);
      playingRef.current = false;
    }, stepMs * 3));
  };

  const onKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      playCycle();
    }
  };

  return (
    <div
      className="boba"
      role="button"
      tabIndex={0}
      aria-label="Boba drink level"
      onClick={playCycle}
      onKeyDown={onKey}
    >
      <img src={baseCup} alt="" className="boba-base" draggable="false" />

      <img src={layer1} alt="" className={`boba-layer ${frame === 0 ? "show" : ""}`} draggable="false" />
      <img src={layer2} alt="" className={`boba-layer ${frame === 1 ? "show" : ""}`} draggable="false" />
      <img src={layer3} alt="" className={`boba-layer ${frame === 2 ? "show" : ""}`} draggable="false" />
    </div>
  );
}
