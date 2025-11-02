// Finder.jsx
import { useMemo, useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";

import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Projects from "./Projects";

import { FaUser, FaFolderOpen, FaBriefcase, FaEnvelope, FaLink } from "react-icons/fa";
import { FaRegMoon, FaRegSun, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

import bg from "./assets/finder-bg.png";
import clickSfx from "./assets/sounds/click.mp3";
import backSfx from "./assets/sounds/back.mp3";
import lightOnSfx from "./assets/sounds/lights-on.mp3";
import lightOffSfx from "./assets/sounds/lights-off.mp3";


export default function Finder({ onClose }) {
  const [isPhone, setIsPhone] = useState(false);
    useEffect(() => {
      const mq = window.matchMedia("(max-width: 800px)");
      const apply = () => setIsPhone(mq.matches);
      apply();
      mq.addEventListener ? mq.addEventListener("change", apply) : mq.addListener(apply);
      return () => mq.removeEventListener ? mq.removeEventListener("change", apply) : mq.removeListener(apply);
    }, []);

  const [active, setActive] = useState("Home");
  const [dark, setDark] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  const clickAudio = useMemo(() => new Audio(clickSfx), []);
  const backAudio  = useMemo(() => new Audio(backSfx), []);
  const lightOnAudio = useMemo(() => new Audio(lightOnSfx), []);
  const lightOffAudio= useMemo(() => new Audio(lightOffSfx), []);


  const playClick = () => { if (soundOn) { clickAudio.currentTime = 0; void clickAudio.play(); } };
  const playBack  = () => { if (soundOn) { backAudio.currentTime  = 0; void backAudio.play(); } };
  const playLightOn  = () => { if (soundOn) { lightOnAudio.currentTime = 0; void lightOnAudio.play(); } };
  const playLightOff = () => { if (soundOn) { lightOffAudio.currentTime = 0; void lightOffAudio.play(); } };

  const handleTile = (id, fn) => () => {
    playClick();
    if (typeof fn === "function") fn();
    else setActive(id);
  };

  const handleBack = () => {
    playBack();
    setActive("Home");
  };

  const tiles = [
    { id: "About",     label: "about",     Icon: FaUser,        onClick: () => setActive("About") },
    { id: "Projects",  label: "projects",  Icon: FaFolderOpen,  onClick: () => setActive("Projects") },
    { id: "Experience",label: "experience",Icon: FaBriefcase,   onClick: () => setActive("Experience") },
    { id: "Contact",   label: "contact",   Icon: FaEnvelope,    onClick: () => setActive("Contact") },
    // { id: "Links",     label: "links",     Icon: FaLink,        onClick: () => window.open("https://linktr.ee/tgyanmot","_blank") },
  ];

  const overlay = (
    <div
      className="finder-overlay"
      role="dialog"
      aria-modal="true"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "100% 100%" }}
      onClick={() => { if (!isPhone) { playClick(); onClose(); } }}
    >
      <div
        className={`finder-window ${dark ? "is-dark" : ""}`}
        role="document"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="finder-titlebar">
          {active !== "Home" ? (
            <button className="back-btn" onClick={handleBack} aria-label="Back">←</button>
          ) : (
            <div className="title-placeholder" />
          )}

          <div className="title-controls">
            <button
                className="title-icon"
                onClick={() => {
                    setDark((d) => {
                    if (soundOn) {
                        d ? playLightOn() : playLightOff(); 
                    }
                    return !d;
                    });
                }}
                aria-label="Toggle dark mode"
                title="Toggle dark mode"
                >
                {dark ? <FaRegSun /> : <FaRegMoon />}
            </button>

            <button
              className="title-icon"
              onClick={() => setSoundOn((s) => !s)}
              aria-label="Toggle sound"
              title="Toggle sound"
            >
              {soundOn ? <FaVolumeUp /> : <FaVolumeMute />}
            </button>

            {!isPhone && (
              <button
                className="close-btn"
                onClick={() => { playClick(); onClose(); }}
                aria-label="Close"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        <div className="finder-body">
          <section className="finder-content">
            {active === "Home" && (
              <div className="home-intro">
                <div className="intro-line">
                  <span className="intro-hi">hi!</span>{" "}
                  <span className="intro-name">i’m tanya</span>
                </div>
                <p className="intro-sub">developer, designer, and problem-solver</p>

                <div className="home-icons">
                  {tiles.map(({ id, label, Icon, onClick }) => (
                    <button
                      key={id}
                      className="icon-tile"
                      onClick={handleTile(id, onClick)}
                      aria-label={label}
                    >
                      <Icon className="icon-svg" size={48} />
                      <span className="icon-label">{label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {active === "About" && <About />}
            {active === "Projects" && <Projects />}
            {active === "Experience" && <Experience />}
            {active === "Contact" && <Contact />}
          </section>
        </div>
      </div>
    </div>
  );

  return createPortal(overlay, document.body);
}
