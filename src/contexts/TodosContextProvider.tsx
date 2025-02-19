import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { TodoProps } from "../types/todo";
import { TodoContextType } from "../types/TodoContextType";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";


export const TodoContext = createContext<TodoContextType | null>(null);

const getInitialTodos = () => {
  const storedTodos = localStorage.getItem("todos");
  return storedTodos ? JSON.parse(storedTodos) : [];
};

const TodosContextProvider = ({children} : {children: React.ReactNode}) => {
  
  const [todos, setTodos] = useState<TodoProps[]>(getInitialTodos());

  const { isAuthenticated } = useKindeAuth();

  
  const handleFormSubmit = (e : React.FormEvent, todoText: string, setTodoText: React.Dispatch<React.SetStateAction<string>>) => {
    e.preventDefault();

    if (!isAuthenticated && todos.length >= 3) {
        toast.error("You have reached the maximum number of todos. Please register to add more.");
        return;
    }
    
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

  // save todos to local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  
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


  return (
    <TodoContext.Provider value={{ todos, setTodos, handleTodoToggle, handleDelete, handleFormSubmit }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodosContextProvider