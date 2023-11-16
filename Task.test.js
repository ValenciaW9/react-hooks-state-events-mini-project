import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";
import Task from "../components/Task";

const tasks = [
  { id: 1, text: "Buy rice", category: "Groceries" },
  { id: 2, text: "Walk the dog", category: "Errands" },
  // ...
];

test("displays the task text", () => {
  render(<Task text={"text!"} category={"category!"} tasks={tasks} />);
  expect(screen.queryByText("text!")).toBeInTheDocument();
});

test("displays the task category", () => {
  render(<Task text={"text!"} category={"category!"} tasks={tasks} />);
  expect(screen.queryByText("category!")).toBeInTheDocument();
});

test("is removed from the list when the delete button is clicked", () => {
  render(<App tasks={tasks} />);
  const task = screen.queryByText(/Buy rice/);
  const deleteButton = task.parentElement.querySelector("button");

  fireEvent.click(deleteButton);

  expect(screen.queryByText(/Buy rice/)).not.toBeInTheDocument();
});