import { useContext } from "react";

import { TodoContext } from "../contexts/TodosContextProvider";
import DeleteButton from "./DeleteButton";


export default function TodoList() {
  
  const context = useContext(TodoContext);
  
  if (!context) {
    throw new Error('TodoContext is not provided');
  }

  const { todos, setTodos, handleTodoToggle } = context;
  
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
            handleTodoToggle(todo);
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