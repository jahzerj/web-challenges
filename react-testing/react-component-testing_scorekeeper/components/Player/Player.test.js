import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {});

test("calls callbacks when increasing or decreasing score", async () => {
  const increaseScore = jest.fn();
  const decreaseScore = jest.fn();

  render(
    <Player
      name="John Doe"
      score={5}
      onIncrease={increaseScore}
      onDecrease={decreaseScore}
    />
  );
});
