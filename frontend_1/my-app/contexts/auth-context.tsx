"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

// Define the UserRole type as a union of string literals
type UserRole = "ngo" | "donor"

interface User {
  id: string
  name: string
  email: string
  role: UserRole
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string, name: string, role: UserRole) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Check for saved user in localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("user")
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser)
        // Make sure the role is a valid UserRole
        if (parsedUser.role === "ngo" || parsedUser.role === "donor") {
          setUser(parsedUser as User)
        } else {
          // If the role is invalid, remove the corrupted data
          localStorage.removeItem("user")
        }
      } catch (error) {
        console.error("Error parsing saved user:", error)
        localStorage.removeItem("user")
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true)
      // In a real app, this would be an API call to your auth backend
      // For demo purposes, we'll simulate a successful login with mock data
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // For demo, we'll check if the email contains "ngo" to determine role
      // In a real app, this would come from your backend
      const role: UserRole = email.toLowerCase().includes("ngo") ? "ngo" : "donor"
      
      const userData: User = {
        id: "user-123",
        name: email.split("@")[0],
        email,
        role
      }
      
      // Save user to localStorage
      localStorage.setItem("user", JSON.stringify(userData))
      
      // Update state
      setUser(userData)
      
      // Redirect to dashboard
      router.push("/")
    } catch (error) {
      console.error("Login failed:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  // const signup = async (email: string, password: string, name: string, role: "ngo" | "donor") => {
  //   // Simulate API call
  //   const mockUser = {
  //     id: "1",
  //     name,
  //     email,
  //     role,
  //   }
  //   setUser(mockUser)
  //   localStorage.setItem("user", JSON.stringify(mockUser))
  // }

  // const signup = async (email: string, password: string, name: string, role: UserRole) => {
  //   try {
  //     setIsLoading(true)
  //     // In a real app, this would be an API call to your auth backend
  //     // For demo purposes, we'll simulate a successful registration
      
  //     // Simulate API delay
  //     await new Promise(resolve => setTimeout(resolve, 500))
      
  //     const userData: User = {
  //       id: "user-" + Date.now(),
  //       name,
  //       email,
  //       role
  //     }
      
  //     // Save user to localStorage
  //     localStorage.setItem("user", JSON.stringify(userData))
      
  //     // Update state
  //     setUser(userData)
      
  //     // Redirect to dashboard
  //     router.push("/")
  //   } catch (error) {
  //     console.error("Signup failed:", error)
  //     throw error
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }
  const signup = async (email: string, password: string, name: string, role: "ngo" | "donor") => {
    try {
      const response = await fetch("/api/donor/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name }),
        credentials: "include",
      })
  
      if (!response.ok) {
        throw new Error("Signup failed")
      }
  
      const user = await response.json()
      setUser(user)
      localStorage.setItem("user", JSON.stringify(user))
    } catch (error) {
      console.error("Signup error:", error)
    }
  }



  const logout = () => {
    // Remove user from localStorage
    localStorage.removeItem("user")
    
    // Update state
    setUser(null)
    
    // Redirect to login
    router.push("/login")
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}