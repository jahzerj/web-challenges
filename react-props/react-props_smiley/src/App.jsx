export default function App() {
  return <Smiley isHappy={"angry"} />;
}

function Smiley({ isHappy }) {
  return <h2>{isHappy === true ? "😊" : "😢"}</h2>;
}
