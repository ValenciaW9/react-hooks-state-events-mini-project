import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import CategoryFilter from "../components/CategoryFilter";
import App from "../components/App";
import { CATEGORIES } from "../data";

const tasks = [
  { id: 1, name: "Task 1" },
  { id: 2, name: "Task 2" },
  // ...
];

test("displays a button for each category", () => {
  render(<CategoryFilter categories={CATEGORIES} tasks={tasks} />);
  for (const category of CATEGORIES) {
    expect(screen.queryByText(category)).toBeInTheDocument();
  }
});

test("clicking the category button adds a class of 'selected' to the button", () => {
  render(<App tasks={tasks} />);

  const codeButton = screen.queryByRole("button", { name: "Code" });
  const allButton = screen.queryByRole("button", { name: "All" });

  fireEvent.click(codeButton);

  expect(codeButton.classList).toContain("selected");
  expect(allButton.classList).not.toContain("selected");
});

test("clicking the category button filters the task list", () => {
  render(<App tasks={tasks} />);

  const codeButton = screen.queryByRole("button", { name: "Code" });

  fireEvent.click(codeButton);

  expect(screen.queryByText("Build a todo app")).toBeInTheDocument();
  expect(screen.queryByText("Buy rice")).not.toBeInTheDocument();
});

test("displays all tasks when the 'All' button is clicked", () => {
  render(<App tasks={tasks} />);

  const allButton = screen.queryByRole("button", { name: "All" });

  fireEvent.click(allButton);

  expect(screen.queryByText("Build a todo app")).toBeInTheDocument();
  expect(screen.queryByText("Buy rice")).toBeInTheDocument();
});
