import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"
import { MainNav } from "@/components/main-nav"
import { Sidebar } from "@/components/sidebar"
import { UserNav } from "@/components/user-nav"
import { AuthProvider } from "@/contexts/auth-context" // ✅ Import AuthProvider

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Left2Right - Food Donation Platform",
  description: "Bridging the gap between food surplus and scarcity",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider> {/* ✅ Wrap everything inside AuthProvider */}
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 border-b bg-background">
              <div className="flex h-16 items-center px-6">
                <MainNav className="mx-6" />
                <div className="ml-auto flex items-center space-x-4">
                  <UserNav />
                </div>
              </div>
            </header>
            <div className="flex flex-1">
              <aside className="hidden w-64 shrink-0 md:block">
                <Sidebar className="h-full" userType="NGO" />
              </aside>
              <main className="flex-1">{children}</main>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
