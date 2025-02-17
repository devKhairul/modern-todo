import Counter from "./Counter";
import Logo from "./Logo";
import { Todo } from "../types/todo";

export default function Header({todos} : {todos: Todo[]}) {
    return (
        <header className="flex justify-between items-center px-4 col-[1/3] row-[1/2] bg-[#fbf5ed] border-b border-black/[0.08]">
            <Logo />
            <Counter todos={todos} />            
        </header>
    )
}