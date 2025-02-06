import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1224,
      name: "🍏 Apple",
      color: "green",
    },
    {
      id: 1557,
      name: "🍍 Pineapple",
      color: "yellow",
    },
    {
      id: 12,
      name: "🍊 Orange",
      color: "orange",
    },
    {
      id: 1435,
      name: "🥝 Kiwi",
      color: "green",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card name={fruit.name} key={fruit.id} color={fruit.color} />
      ))}
    </div>
  );
}

/* <Card name="🍌 banana" /> */
