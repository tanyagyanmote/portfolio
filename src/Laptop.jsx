import { useEffect, useState } from "react";
import laptop from "./assets/laptop.png";
import Finder from "./Finder";

export default function Laptop() {
  const [open, setOpen] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 800px)");
    const apply = () => setIsPhone(mq.matches);
    apply();
    mq.addEventListener ? mq.addEventListener("change", apply) : mq.addListener(apply);
    return () =>
      mq.removeEventListener ? mq.removeEventListener("change", apply) : mq.removeListener(apply);
  }, []);
  useEffect(() => {
    if (isPhone) setOpen(true);
  }, [isPhone]);
  return (
    <>
      <img src={laptop} alt="Laptop" className="laptop-img" draggable="false" />
      {!isPhone && (
        <button
          className="laptop-hitbox"
          aria-label="Open laptop"
          onClick={() => setOpen(true)}
        />
      )}
      {open && <Finder onClose={() => setOpen(false)} />}
    </>
  );
}
