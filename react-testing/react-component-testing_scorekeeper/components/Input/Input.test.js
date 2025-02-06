import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  const handleChange = jest.fn();
  render(
    <Input
      name="Name"
      labelText="LabelText"
      placeholder="Name of Player"
      value="Bernd"
      onChange={handleChange}
      required
    />
  );

  const input = screen.getByLabelText("LabelText");

  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("name", "Name");
  expect(input).toHaveAttribute("placeholder", "LabelText");
  expect(input).toHaveAttribute("value", "Bernd");
  expect(input).toBeRequired();
});

test("calls callback on every user input", async () => {
  const handleChange = jest.fn();
  const user = userEvent.setup();

  render(<Input label="Name" name="playerName" onChange={handleChange} />);

  const input = screen.getByLabelText("LabelText");
  expect();
  await userEvent.type(input, "John");

  expect(handleChange).toHaveBeenCalledTimes(4); // "J", "o", "h", "n"
});
