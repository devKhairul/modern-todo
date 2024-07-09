import { toast } from "react-toastify";

export default function DeleteButton({ id, setTodos }) {

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
