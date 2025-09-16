import { useState } from "react";

/** Replace with your assets */
import cameraPNG from "./assets/camera-horizontal.png"; // camera in landscape
import p1 from "./assets/photos/p1.jpg";
import p2 from "./assets/photos/p2.jpg";
import p3 from "./assets/photos/p3.jpg";
import p4 from "./assets/photos/p4.jpg";
import p5 from "./assets/photos/p5.jpg";
import p6 from "./assets/photos/p6.jpg";
import p7 from "./assets/photos/p7.jpg";
import p8 from "./assets/photos/p8.jpg";
import p9 from "./assets/photos/p9.jpg";



const PHOTOS = [p1, p2, p3,p4,p5,p6,p7,p8,p9];

export default function Extras() {
  return (
    <section id="extras" className="extras">
      <div className="extras__container">
        <h2 className="extras__title">Photography</h2>
        <p className="extras__hint">(click the camera screen to turn on & click through)</p>
        <CameraShowcase photos={PHOTOS} />
      </div>
    </section>
  );
}

function CameraShowcase({ photos }) {
  const [on, setOn] = useState(false);
  const [i, setI] = useState(0);

  const handleScreenClick = () => {
    if (!on) {
      setOn(true);
      setI(0);
      return;
    }
    setI((n) => (n + 1) % photos.length);
  };

  return (
    <div
      className="camera-horizontal"
      style={{
        "--cam-width": "min(980px, 95vw)",
        "--screen-left": "67%",   // %
        "--screen-top":  "50%",   // %
        "--screen-w":    "40%",   // %
        "--screen-h":    "58%",   // %
        "--screen-radius": "10px"
      }}
    >
      <img src={cameraPNG} alt="Digital camera" className="camera__img" draggable="false" />
      <button
        className="camera__screen"
        onClick={handleScreenClick}
        aria-label={on ? "Next photo" : "Turn camera on"}
      >
        {on ? (
          <img src={photos[i]} alt="" className="camera__photo" draggable="false" />
        ) : (
          <div className="camera__off">tap to power on</div>
        )}
      </button>
    </div>
  );
}
