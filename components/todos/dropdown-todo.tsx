import { deleteTodoAction, updateTodoTitleAction } from "@/app/_action";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";

export function DropdownTodo({
  id,
  currentTitle,
}: {
  id: number;
  currentTitle: string;
}) {
  const [newTitle, setNewTitle] = useState(currentTitle); // Set nilai awal input dengan currentTitle
  const [isEditing, setIsEditing] = useState(false); // Untuk memeriksa apakah dalam mode pengeditan

  const deleteTodo = () => deleteTodoAction(id);

  const handleUpdateTitle = async () => {
    if (newTitle && newTitle !== currentTitle) {
      // Memastikan ada perubahan judul
      await updateTodoTitleAction(id, newTitle); // Memanggil fungsi untuk memperbarui judul
      setIsEditing(false); // Keluar dari mode pengeditan setelah mengubah judul
    }
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">...</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuItem>High</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setIsEditing(true)}>
            Medium
          </DropdownMenuItem>
          <DropdownMenuItem>Low</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">...</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          {isEditing ? (
            <>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)} // Memperbarui state saat mengetik
                placeholder="New title"
                className="mt-4 p-4 border rounded-lg border-gray-300"
              />
              <button
                onClick={handleUpdateTitle}
                className="mt-2 text-blue-600"
              >
                Save
              </button>
            </>
          ) : (
            <DropdownMenuItem onClick={() => setIsEditing(true)}>
              Edit
            </DropdownMenuItem> // Mengaktifkan mode pengeditan
          )}
          <DropdownMenuItem onClick={deleteTodo}>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
