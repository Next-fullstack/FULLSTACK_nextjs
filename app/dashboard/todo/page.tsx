import { authOptions } from "@/lib/auth"
import { TodoForm } from "@/components/todos/todo-form"
import TodoList from "@/components/todos/todo-list"
import { getTodos } from "@/lib/todo"
import { getServerSession } from "next-auth"

export default async function IndexPage() {
  const session = await getServerSession(authOptions)
  const { todos } = await getTodos()

  if (session?.user) {
    return (
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            {session?.user?.username} Todo List
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Create your Todo list.
          </p>
        </div>
        <TodoForm />
        <ul className="flex h-full w-full flex-col overflow-hidden bg-popover text-popover-foreground rounded-lg border shadow-md">
          {
            todos?.map((todo) => (
              <TodoList key={todo?.id} todo={todo} />
            ))
          }
        </ul>
      </section>
    )
  }

  return (
    <h2>Please Login Before Go To Todo List</h2>
  )
}
