import { add } from ".";
import { subtract } from ".";
import { multiply } from ".";
import { divide } from ".";

test("add -10 and 3, return -7", () => {
  const result = add(-10, 3);
  expect(result).toBeLessThan(0);
});

test("add 0.2 and 0.1, return 0.3", () => {
  const result = add(0.2, 0.1);
  expect(result).toBeCloseTo(0.3);
});

test("subtract 5 from 15, return 10", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});

test("subtract 10 from 3, return -7", () => {
  const result = subtract(3, 10);
  expect(result).toBeLessThan(0);
});

test("multiply 2 and 4, return 8", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});

test("multiply -2 and 4, return a negative value", () => {
  const result = multiply(-2, 4);
  expect(result).toBeLessThan(0);
});

test("multiply 2 and -4, return a negative value", () => {
  const result = multiply(2, -4);
  expect(result).toBeLessThan(0);
});

test("multiply -2 and -4, return a positive value", () => {
  const result = multiply(-2, -4);
  expect(result).toBeGreaterThan(0);
});

test("add the numbers 2 and 3, return 5", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

test("divide 9 by 3, return 3", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});

test("divide a number by 0, return 'You should not do this!'", () => {
  const result = divide(9, 0);
  expect(result).toBe("You should not do this!");
});
