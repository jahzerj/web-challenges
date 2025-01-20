import { useState } from "react";
import ColoredNumber from "./ColoredNumber";

export default function Counter() {
  const [value, setValue] = useState(0);

  function handleMinusClick() {
    setValue(value - 1);
  }

  function handlePlusClick() {
    setValue(value + 1);
  }

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={value} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={handlePlusClick}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={handleMinusClick}
        >
          -
        </button>
      </div>
    </div>
  );
}
