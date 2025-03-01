"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState<"ngo" | "donor">("donor")
  const router = useRouter()
  const { signup } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const requestBody = {
      email,
      password,
      name,
      role
    }
  
    console.log("Request Body:", requestBody) // ✅ Log the body before sending

    try {
      await signup(email, password, name, role)
      if(role === "donor"){router.push("/")} else if(role === "ngo"){router.push("/")}
    } catch (error) {
      console.error("Signup failed:", error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[calc(100vh-4rem)]">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Create an Account</CardTitle>
          <CardDescription>Join our food sharing community</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <Input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <label className="text-sm font-medium">Password</label>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div>
              <label className="text-sm font-medium block mb-2">I am a:</label>
              <RadioGroup value={role} onValueChange={(value: "ngo" | "donor") => setRole(value)}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Donor" id="donor" />
                  <Label htmlFor="Donor">Food Supplier</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="ngo" id="ngo" />
                  <Label htmlFor="ngo">NGO</Label>
                </div>
              </RadioGroup>
            </div>
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}