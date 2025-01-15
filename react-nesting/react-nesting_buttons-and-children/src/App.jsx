import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>This</Button>
      <Button>is</Button>
      <Button>a</Button>
      <Button>raid!</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
