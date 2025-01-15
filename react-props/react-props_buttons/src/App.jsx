export default function App() {
  return (
    <Button
      color={"orange"}
      disabled={true}
      text={"I am a button"}
      fontsize={"14px"}
    />
  );
}

function Button({ color, disabled, text, fontsize }) {
  return (
    <button disabled={disabled} color={color} fontsize={fontsize}>
      {text}
    </button>
  );
}
