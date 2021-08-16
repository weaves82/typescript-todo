import type { AppDispatch } from "./store";
import { v4 as uuid } from "uuid";

export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";

//delete action

export const deleteTodo = (id: string) => async (dispatch: AppDispatch) => {
  dispatch({
    type: DELETE_TODO,
    payload: {
      id,
    },
  });
};

//add action
export const addTodo = (task: string) => async (dispatch: AppDispatch) => {
  dispatch({
    type: ADD_TODO,
    payload: {
      id: uuid(),
      task,
      completed: false,
    },
  });
};

//edit action
export const updateTodo =
  (id: string, completed: boolean) => async (dispatch: AppDispatch) => {
    dispatch({
      type: UPDATE_TODO,
      payload: {
        id,
        completed,
      },
    });
  };
