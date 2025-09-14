import laptop from './assets/laptop.png';

export default function Laptop() {
  return (
    <img
      src={laptop}
      alt="Laptop"
      className="laptop-img"
      draggable="false"
    />
  );
}