"use client";

import { DropdownTodo } from "./dropdown-todo";
import { updateTodoStatusAction } from "@/app/_action";
import { Checkbox } from "@/components/ui/checkbox";
import { Todo } from "@prisma/client";
import { useTransition } from "react";

type TodoProps = {
  todo: Todo;
};

function TodoList({ todo }: TodoProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <li className="flex items-center gap-3 p-4 border-b transition-colors hover:bg-muted/50">
      <Checkbox
        id={todo?.title}
        defaultChecked={todo?.done}
        onCheckedChange={(checked: boolean) => {
          startTransition(() => {
            updateTodoStatusAction(todo?.id, checked);
          });
        }}
      />
      <label
        htmlFor={todo?.title}
        className="flex items-center gap-3 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        <span>{todo?.id}.</span>
        <span>{todo?.title}</span>
      </label>
      <span className="ml-auto text-sm text-slate-500 peer-checked:line-through">
        {todo.updatedAt.toUTCString()}
      </span>
      <DropdownTodo id={todo?.id} currentTitle={todo?.title} />{" "}
      {/* Menambahkan currentTitle */}
    </li>
  );
}

export default TodoList;
