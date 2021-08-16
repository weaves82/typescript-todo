import { storeFactory } from "./test/testUtils";
import { fireEvent, render, screen } from "@testing-library/react";
import * as redux from "react-redux";
import App from "./App";

const setup = () => {
  const store = storeFactory([]);
  return render(
    <redux.Provider store={store}>
      <App />
    </redux.Provider>
  );
};

beforeEach(() => {
  setup();
});

test("renders title text", () => {
  const linkElement = screen.getByText(/TODO APP/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders initial Todo count text", () => {
  const textElement = screen.getByText("0/0 Todos Done");
  expect(textElement).toBeInTheDocument();
});

test("updates text after todos are removed/added", () => {
  const todoInput = screen.getByPlaceholderText(/Add Todo...../);
  expect(todoInput).toBeInTheDocument();

  fireEvent.change(todoInput, { target: { value: "Buy Some Dinner" } });

  const addButton = screen.getByText(/Add/);
  fireEvent.click(addButton);

  const textElement = screen.getByText("0/1 Todos Done");
  expect(textElement).toBeInTheDocument();

  fireEvent.change(todoInput, { target: { value: "Buy Some Chicken" } });
  fireEvent.click(addButton);
  const textElement2 = screen.getByText("0/2 Todos Done");
  expect(textElement2).toBeInTheDocument();

  const removeButton = screen.getAllByText(/Remove/);
  fireEvent.click(removeButton[0]);
  const textElement3 = screen.getByText("0/1 Todos Done");
  expect(textElement3).toBeInTheDocument();

  const todoCheckbox = screen.getByTestId("todo-input");
  fireEvent.click(todoCheckbox);
  const textElement4 = screen.getByText("1/1 Todos Done");
  expect(textElement4).toBeInTheDocument();
});

test("updates text for updated todos", () => {
  const todoInput = screen.getByPlaceholderText(/Add Todo...../);
  expect(todoInput).toBeInTheDocument();

  fireEvent.change(todoInput, { target: { value: "Buy Some Dinner" } });

  const addButton = screen.getByText(/Add/);
  fireEvent.click(addButton);

  const textElement3 = screen.getByText("0/1 Todos Done");
  expect(textElement3).toBeInTheDocument();

  const todoCheckbox = screen.getByTestId("todo-input");
  fireEvent.click(todoCheckbox);
  const textElement = screen.getByText("1/1 Todos Done");
  expect(textElement).toBeInTheDocument();
});
