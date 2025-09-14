import nails from "./assets/nails.png";

export default function Nails() {
  return (
    <img
      src={nails}
      alt="Nail polish"
      className="nails-img"
      draggable="false"
    />
  );
}
