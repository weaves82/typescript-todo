import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./actions";

const reducer = (state: TodoState = [], action: TodoAction) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((item) => {
        return item.id !== action.payload.id;
      });
    case UPDATE_TODO:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            completed: action.payload.completed,
          };
        }
        return item;
      });
    default:
      return state;
  }
};

export default reducer;
