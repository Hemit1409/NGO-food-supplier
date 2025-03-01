"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await login(email, password)
      router.push("/dashboard")
    } catch (error) {
      console.error("Login failed:", error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[calc(100vh-4rem)] bg-green-50">
      <Card className="w-full max-w-md shadow-lg border border-green-200">
        <CardHeader className="bg-green-100 p-4 rounded-t-lg">
          <CardTitle className="text-green-800">Welcome Back</CardTitle>
          <CardDescription className="text-green-600">Login to your account</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-green-700">Email</label>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 p-2 border border-green-300 rounded-md focus:border-green-500 focus:ring-green-500" />
            </div>
            <div>
              <label className="text-sm font-medium text-green-700">Password</label>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="mt-1 p-2 border border-green-300 rounded-md focus:border-green-500 focus:ring-green-500" />
            </div>
            <Button type="submit" className="w-full bg-green-600 text-white hover:bg-green-700">
              Login
            </Button>
          </form>
          <p className="text-center mt-4 text-green-700">
            Don't have an account?{" "}
            <Link href="/signup" className="text-green-600 hover:underline">
              Sign up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}