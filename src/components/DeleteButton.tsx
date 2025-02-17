import { toast } from "react-toastify";
import { Todo } from "../types/todo";

export default function DeleteButton({ id, setTodos } : { id: number; setTodos: React.Dispatch<React.SetStateAction<Todo[]>> }) {

  const handleDelete = () => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    toast.warn('Todo deleted!', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      progress: undefined,
      theme: "light",
      });
  };

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        handleDelete();
      }}
    >
      ❌
    </button>
  )
}
