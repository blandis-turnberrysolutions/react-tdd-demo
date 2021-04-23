import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
  it("should display the title", () => {
    render(<Counter />);

    screen.getByText("Counter Application");
  });

  it("should display the number", () => {
    render(<Counter />);

    const counter = screen.getByRole("figure", { name: "counter" });

    expect(counter).toHaveTextContent(0);
  });

  it("should have an increment button", () => {
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: "Increment" });

    expect(incrementButton).toBeInTheDocument();
  });

  it("should add 1 to the counter when the increment button is clicked", async () => {
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: "Increment" });

    userEvent.click(incrementButton);

    await waitFor(() => expect(incrementButton).toBeEnabled());

    const counter = screen.getByRole("figure", { name: "counter" });

    expect(counter).toHaveTextContent(1);
  });

  it("should have an decrement button", () => {
    render(<Counter />);

    const decrementButton = screen.getByRole("button", { name: "Decrement" });

    expect(decrementButton).toBeInTheDocument();
  });

  it("should subtract 1 from the counter when the decrement button is clicked", () => {
    render(<Counter />);

    const decrementButton = screen.getByRole("button", { name: "Decrement" });

    userEvent.click(decrementButton);

    const counter = screen.getByRole("figure", { name: "counter" });

    expect(counter).toHaveTextContent(-1);
  });
});
