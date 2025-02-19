import { TodoProps } from "./todo";

export interface TodoContextType {
  todos: TodoProps[];
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
  handleTodoToggle: (todo: TodoProps) => void;
  handleDelete: (id: number, setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>) => void;
  handleFormSubmit: (e: React.FormEvent, todoText: string, setTodoText: React.Dispatch<React.SetStateAction<string>>) => void;
}