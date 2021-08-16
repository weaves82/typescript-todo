import { ChangeEvent } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { updateTodo, deleteTodo } from "../../../app/actions";

interface TodoItemProps {
  data: TodoItem;
}

const TodoListItem: React.FC<TodoItemProps> = ({ data }) => {
  const { id, task, completed } = data;

  const dispatch = useAppDispatch();
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    dispatch(updateTodo(id, e.target.checked));
  };
  const onClickDeleteHandler = (id: string) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => onChangeHandler(e, id)}
        data-testid="todo-input"
      />
      <span>{task}</span>
      <button onClick={() => onClickDeleteHandler(id)}>Remove</button>
    </div>
  );
};

export default TodoListItem;
