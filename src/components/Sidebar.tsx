import AddTodoForm from "./AddTodoForm";
import Button from "./Button";
import { TodoProps } from "../types/todo";

export default function Sidebar({ todos, setTodos } : {todos: TodoProps[], setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>}) {
  return (
    <section className="flex flex-col justify-between col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08] px-[25px] pt-[18px] pb-[28px]">
      <AddTodoForm todos={todos} setTodos={setTodos} />

      <div className="flex flex-col gap-2">
        <Button buttonType="secondary">Login</Button>
        <Button buttonType="secondary">Register</Button>
      </div>
    </section>
  )
}
