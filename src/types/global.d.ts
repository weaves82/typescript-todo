import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./app/actions";

declare global {
  interface TodoItem {
    id: string;
    task?: string;
    completed?: boolean;
  }

  type TodoState = TodoItem[];

  interface AddTodoAction {
    type: typeof ADD_TODO;
    payload: TodoItem;
  }

  interface UpdateTodoAction {
    type: typeof UPDATE_TODO;
    payload: TodoItem;
  }

  interface DeleteTodoAction {
    type: typeof DELETE_TODO;
    payload: TodoItem;
  }

  type TodoAction = AddTodoAction | UpdateTodoAction | DeleteTodoAction;

  type DispatchType = (args: TodoAction) => TodoAction;
}

// Adding this exports the declaration file which Typescript/CRA can now pickup:
export {};
