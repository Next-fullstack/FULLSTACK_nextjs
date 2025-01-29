"use server";

import {
  createTodo,
  deleteTodoById,
  updateTodoStatus,
  updateTodoTitle,
} from "@/lib/todo";
import { revalidatePath } from "next/cache";

export async function createTodoAction(title: string) {
  await createTodo(title);
  revalidatePath("/");
}

export async function updateTodoStatusAction(id: number, done: boolean) {
  await updateTodoStatus(id, done);
  revalidatePath("/");
}

export async function deleteTodoAction(id: number) {
  await deleteTodoById(id);
  revalidatePath("/");
}

// Menambahkan fungsi untuk mengupdate title Todo
export async function updateTodoTitleAction(id: number, title: string) {
  await updateTodoTitle(id, title);
  revalidatePath("/");
}
