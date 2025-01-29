import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { NavItem } from "@/types/nav"
import { buttonVariants } from './ui/button';

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/dashboard/todo" className="flex items-center space-x-2">
        <h1 className="text-xl font-bold">Todo App</h1>
      </Link>
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )} 
        </nav>
      ) : null}
    </div>
  )
}