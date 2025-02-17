import { useState } from "react";
import Button from "./Button";
import { toast } from "react-toastify";
import { Todo } from "../types/todo";

export default function AddTodoForm({ todos, setTodos } : { todos: Todo[]; setTodos: React.Dispatch<React.SetStateAction<Todo[]>> }) {
  const [todoText, setTodoText] = useState("");

  const handleFormSubmit = (e : React.FormEvent) => {
    e.preventDefault();
    if (todoText.trim() !== "") {
      if (todos.length >= 3) {
        toast.error("Maximum 3 todos reached.");
      } else {
        setTodos([
          ...todos,
          { id: todos.length + 1, text: todoText, isCompleted: false },
        ]);
        setTodoText("");
        toast.success("Todo added successfully");
      }
    } else {
      toast.error("Please enter a valid todo.");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h2 className="text-[#231d15] font-semibold">Add a todo</h2>
      <input
        type="text"
        className="h-[45px] border border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full px-[10px]"
        value={todoText}
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
      />

      <Button buttonType="">Add todo</Button>
    </form>
  );
}
