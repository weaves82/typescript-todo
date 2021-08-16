import { useAppSelector } from "../../app/hooks";

const TodoCount: React.FC = () => {
  const state = useAppSelector((state) => state);

  const completed = state.reduce((acc, item) => {
    acc = acc + (item.completed ? 1 : 0);
    return acc;
  }, 0);

  return (
    <p>
      {completed}/{state.length} Todos Done
    </p>
  );
};

export default TodoCount;
