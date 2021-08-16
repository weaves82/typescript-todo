import { createStore, applyMiddleware, Store } from "redux";
import ReduxThunk from "redux-thunk";
import reducer from "./reducer";

export const middlewares = [ReduxThunk];

export const thunkMiddle = applyMiddleware(...middlewares);

const store: Store<TodoState, TodoAction> & {
  dispatch: DispatchType;
} = createStore(reducer, thunkMiddle);

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
