import "./Card.css";
//include color prop in the Card function so it can be used from the array
export default function Card({ name, color }) {
  const colorClass = `card--${color.toLowerCase()}`;

  return <p className={`card ${colorClass}`}>{name}</p>;
  //This is how you can apply the colorClass to each card using props
}
