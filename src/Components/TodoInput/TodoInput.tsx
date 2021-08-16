import { FormEvent, useState, useCallback } from "react";
import { useAppDispatch } from "../../app/hooks";
import { addTodo } from "../../app/actions";

const TodoInput: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const dispatch = useAppDispatch();
  // const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   dispatch(addTodo(value));
  //   setValue("");
  // };

  const onSubmitHandler = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(addTodo(value));
      setValue("");
    },
    [dispatch, value]
  );

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add Todo....."
      />
      <button>Add</button>
    </form>
  );
};

export default TodoInput;
