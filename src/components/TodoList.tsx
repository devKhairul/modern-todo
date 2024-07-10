import DeleteButton from "./DeleteButton";

interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

export default function TodoList({
  todos,
  setTodos,
}: {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}) {
  const handleClick = (todo: Todo) => {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id ? { ...t, isCompleted: !t.isCompleted } : t
    );
    setTodos(updatedTodos);
  };

  return (
    <ul>
      {todos.length === 0 && (
        <li className="h-full flex justify-center items-center al font-semibold text-gray-400">
          Add your first todo!
        </li>
      )}

      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%] hover:bg-[#efefef6d]"
          onClick={() => {
            handleClick(todo);
          }}
        >
          <span className={todo.isCompleted ? "line-through text-[#ccc]" : ""}>
            {todo.text}
          </span>
          <DeleteButton id={todo.id} setTodos={setTodos} />
        </li>
      ))}
    </ul>
  );
}
