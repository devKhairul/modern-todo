import { useContext } from "react";
import { TodoContext } from "../contexts/TodosContextProvider";
import { TodoProps } from "../types/todo";

export default function DeleteButton({ id, setTodos } : { id: number, setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>> }) {

  const context = useContext(TodoContext);
  
  if (!context) {
    throw new Error('TodoContext is not provided');
  }

  const { handleDelete } = context;

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        handleDelete(id, setTodos);
      }}
    >
      ❌
    </button>
  )
}
