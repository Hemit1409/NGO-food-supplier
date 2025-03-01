import type React from "react"
import Link from "next/link"
import { Heart } from "lucide-react"

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="flex items-center space-x-2 font-bold text-xl">
        <Heart className="h-6 w-6 text-primary" />
        <span>Left2Right</span>
      </Link>
    </div>
  )
}

