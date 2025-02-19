import { useState, useContext, useCallback } from "react";
import Button from "./Button";

import { TodoContext } from "../contexts/TodosContextProvider";


export default function AddTodoForm() {
  const [todoText, setTodoText] = useState("");

  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('TodoContext is not provided');
  }

  const { handleFormSubmit } = context;

  const handleSubmit = useCallback((e : React.FormEvent) => handleFormSubmit(e, todoText, setTodoText), [handleFormSubmit, todoText, setTodoText]);

  return (
    <form onSubmit={handleSubmit}>
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