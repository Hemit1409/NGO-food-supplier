"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import axios from "axios";

export default function Signup() {
  const [username, setName] = useState("")
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
      username,
      role,
      "address": "456 NGO Street",
      "city": "City2",
      "pincode": "654321",
      "certificate": "certificate.pdf",
      "isApproved": false,
      "phone": "9876543210"
    }
  
    console.log("Request Body:", requestBody)
    const response = await axios.post("http://localhost:5000/api/donor/register", requestBody);

    try {
      //await signup(email, password, username, role)
      if(role == "donor"){router.push("/verify-otp")} else if(role == "ngo"){router.push("/")}
    } catch (error) {
      console.error("Signup failed:", error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[calc(100vh-4rem)] bg-green-50">
      <Card className="w-full max-w-md shadow-lg border border-green-200">
        <CardHeader className="bg-green-100 p-4 rounded-t-lg">
          <CardTitle className="text-green-800">Create an Account</CardTitle>
          <CardDescription className="text-green-600">Join our food sharing community</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-green-700">Name</label>
              <Input type="text" value={username} onChange={(e) => setName(e.target.value)} required className="mt-1 p-2 border border-green-300 rounded-md focus:border-green-500 focus:ring-green-500" />
            </div>
            <div>
              <label className="text-sm font-medium text-green-700">Email</label>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 p-2 border border-green-300 rounded-md focus:border-green-500 focus:ring-green-500" />
            </div>
            <div>
              <label className="text-sm font-medium text-green-700">Password</label>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="mt-1 p-2 border border-green-300 rounded-md focus:border-green-500 focus:ring-green-500" />
            </div>
            <div>
              <label className="text-sm font-medium block mb-2 text-green-700">I am a:</label>
              <RadioGroup value={role} onValueChange={(value: "ngo" | "donor") => setRole(value)}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="donor" id="donor" />
                  <Label htmlFor="donor">Food Supplier</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="ngo" id="ngo" />
                  <Label htmlFor="ngo">NGO</Label>
                </div>
              </RadioGroup>
            </div>
            <Button type="submit" className="w-full bg-green-600 text-white hover:bg-green-700">
              Sign Up
            </Button>
          </form>
          <p className="text-center mt-4 text-green-700">
            Already have an account?{" "}
            <Link href="/login" className="text-green-600 hover:underline">
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}