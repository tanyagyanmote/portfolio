import React, { useState } from "react";
import phoneOn from "./assets/phone-on.png";
import phoneOff from "./assets/phone-off.png";
import "./App.css";

export default function Phone() {
  const [isOn, setIsOn] = useState(false);

  const togglePhone = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div className="phone-wrap">
      <img
        src={isOn ? phoneOn : phoneOff}
        alt="phone"
        className="phone-img"
        draggable="false"
      />
      <button
        className="phone-hitbox"
        aria-label="toggle phone screen"
        onClick={togglePhone}
      />
    </div>
  );
}
