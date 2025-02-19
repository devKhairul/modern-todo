import { useContext } from "react";
import { TodoContext } from "../contexts/TodosContextProvider";

export default function Counter() {

  const context = useContext(TodoContext);

  if (!context) {
    return <p>Loading...</p>;
  }

  const { todos } = context;

  return (
    <p>
      <b>{ todos.filter(todo => todo.isCompleted).length }</b> / {todos.length} todos completed
    </p>
  )
}