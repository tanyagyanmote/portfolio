import { useRef, useEffect } from "react";
import cameraImg from "./assets/camera.png";
import flashImg from "./assets/flash.png";

export default function Camera({ pulses = 3, pulseMs = 250 }) {
  const flashRef = useRef(null);

  useEffect(() => {
    const el = flashRef.current;
    if (!el) return;
    const onEnd = () => el.classList.remove("triple");
    el.addEventListener("animationend", onEnd);
    return () => el.removeEventListener("animationend", onEnd);
  }, []);

  const trigger = () => {
    const el = flashRef.current;
    if (!el) return;
    el.style.setProperty("--flash-count", pulses);
    el.style.setProperty("--flash-dur", `${pulseMs}ms`);

    el.classList.remove("triple");
    el.offsetWidth;
    el.classList.add("triple");
  };

  return (
    <div className="camera" onClick={trigger} role="button" tabIndex={0} aria-label="Camera">
      <img src={cameraImg} alt="Camera" className="camera-img" draggable="false" />
      <img ref={flashRef} src={flashImg} alt="" className="camera-flash" draggable="false" />
    </div>
  );
}
