import { createContext, useState } from "react";
import { toast } from "react-toastify";

import { TodoProps } from "../types/todo";
import { TodoContextType } from "../types/TodoContextType";


export const TodoContext = createContext<TodoContextType | null>(null);

const TodosContextProvider = ({children} : {children: React.ReactNode}) => {

  const [todos, setTodos] = useState<TodoProps[]>([]);

  const handleTodoToggle = (todo: TodoProps) => {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id ? { ...t, isCompleted: !t.isCompleted } : t
    );
    setTodos(updatedTodos);
  };

  const handleDelete = (id: number, setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>) => {
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

  const handleFormSubmit = (e : React.FormEvent, todoText: string, setTodoText: React.Dispatch<React.SetStateAction<string>>) => {
    e.preventDefault();

    if (todoText.trim() !== "") {
      setTodos([
        ...todos,
        { id: todos.length + 1, text: todoText, isCompleted: false },
      ]);
      setTodoText("");
      toast.success("Todo added successfully");
    } else {
      toast.error("Please enter a valid todo.");
    }
  };

  return (
    <TodoContext.Provider value={{ todos, setTodos, handleTodoToggle, handleDelete, handleFormSubmit }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodosContextProvider