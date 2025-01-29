import { db } from "@/lib/prisma";

export async function getTodos() {
  try {
    const todos = await db.todo.findMany();
    return { todos };
  } catch (error) {
    return { error };
  }
}

export async function createTodo(title: string) {
  try {
    const todo = await db.todo.create({ data: { title } });
    return { todo };
  } catch (error) {
    return { error };
  }
}

export async function updateTodoStatus(id: number, done: boolean) {
  try {
    const todo = await db.todo.update({ where: { id }, data: { done } });
    return { todo };
  } catch (error) {
    return { error };
  }
}

// Menambahkan fungsi untuk mengedit title
export async function updateTodoTitle(id: number, title: string) {
  try {
    const todo = await db.todo.update({ where: { id }, data: { title } });
    return { todo };
  } catch (error) {
    return { error };
  }
}

export async function deleteTodoById(id: number) {
  try {
    const todo = await db.todo.delete({ where: { id } });
    return { todo };
  } catch (error) {
    return { error };
  }
}
