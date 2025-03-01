"use client"

import { useAuth } from "@/contexts/auth-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Package, Users, TrendingUp, Award } from "lucide-react"

const data = [
  { name: "Mon", donations: 4, collections: 3 },
  { name: "Tue", donations: 3, collections: 2 },
  { name: "Wed", donations: 5, collections: 4 },
  { name: "Thu", donations: 2, collections: 2 },
  { name: "Fri", donations: 6, collections: 5 },
  { name: "Sat", donations: 4, collections: 3 },
  { name: "Sun", donations: 3, collections: 2 },
]

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {user?.name}</h1>
          <p className="text-gray-600">Here's what's happening with your food sharing activities</p>
        </div>
        <Button>Create New Listing</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="flex items-center p-6">
            <Package className="h-8 w-8 text-blue-600 mr-4" />
            <div>
              <p className="text-sm font-medium text-gray-600">Total Donations</p>
              <h3 className="text-2xl font-bold">27</h3>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <Users className="h-8 w-8 text-blue-600 mr-4" />
            <div>
              <p className="text-sm font-medium text-gray-600">People Helped</p>
              <h3 className="text-2xl font-bold">142</h3>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <TrendingUp className="h-8 w-8 text-blue-600 mr-4" />
            <div>
              <p className="text-sm font-medium text-gray-600">Food Saved (kg)</p>
              <h3 className="text-2xl font-bold">324</h3>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <Award className="h-8 w-8 text-blue-600 mr-4" />
            <div>
              <p className="text-sm font-medium text-gray-600">Impact Score</p>
              <h3 className="text-2xl font-bold">92</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Weekly Activity</CardTitle>
            <CardDescription>Your donations and collections this week</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="donations" stroke="#2563eb" />
                <Line type="monotone" dataKey="collections" stroke="#16a34a" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest donations and collections</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-start space-x-4 border-b pb-4 last:border-0">
                  <Package className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Food Package #{item}</p>
                    <p className="text-sm text-gray-600">Donated 2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

