import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("Initial State", () => {
  // ... (previous tests)
});

describe("Checkbox Interaction", () => {
  // ... (previous tests)

  test("selected topping disappears when checked a second time", () => {
    render(<App />);
    const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
    userEvent.click(addPepperoni);
    expect(addPepperoni).toBeChecked();
    expect(screen.getByText("Cheese")).toBeInTheDocument();
    expect(screen.getByText("Pepperoni")).toBeInTheDocument();

    userEvent.click(addPepperoni);
    expect(addPepperoni).not.toBeChecked();
    expect(screen.getByText("Cheese")).toBeInTheDocument();
    expect(screen.queryByText("Pepperoni")).not.toBeInTheDocument();
  });
});