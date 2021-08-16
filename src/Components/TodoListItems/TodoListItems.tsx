import TodoListItem from "./TodoListItem/TodoListItem";
import { useAppSelector } from "../../app/hooks";

const TodoListItems: React.FC = () => {
  const todoState = useAppSelector((state) => state);
  return (
    <>
      {todoState.map((item) => {
        return <TodoListItem key={item.id} data={item} />;
      })}
    </>
  );
};

export default TodoListItems;
