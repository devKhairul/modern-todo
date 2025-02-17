import { Todo } from "../types/todo";

export default function Counter({todos} : {todos: Todo[]}) {
  return (
    <p>
      <b>{ todos.filter(todo => todo.isCompleted).length }</b> / {todos.length} todos completed
    </p>
  )
}
