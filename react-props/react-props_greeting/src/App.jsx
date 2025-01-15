export function App() {
  return <Greeting name="Jahzy" />;
}

function Greeting({ name }) {
  return <h1>Hello {name === "Gimena" ? "coach" : name}!</h1>;
}
