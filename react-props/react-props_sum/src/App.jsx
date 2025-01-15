export default function App() {
  return <Sum valueA={15} valueB={13} />;
}

function Sum({ valueA, valueB }) {
  return <h2>{valueA + valueB}</h2>;
}
