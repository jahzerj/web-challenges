export default function App() {
  function handleClick() {
    console.log("My click is sensitive");
  }
  return (
    <Button
      color={"orange"}
      disabled={false}
      text={"I am a button"}
      fontsize={"100px"}
      onClick={handleClick}
    />
  );
}

function Button({ color, disabled, text, fontsize, onClick }) {
  return (
    <button
      disabled={disabled}
      style={{ backgroundColor: color, height: fontsize }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
