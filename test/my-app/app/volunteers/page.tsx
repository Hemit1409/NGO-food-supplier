"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, CalendarIcon, Trophy, Clock } from "lucide-react"
import { useState } from "react"

export default function Volunteers() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const upcomingTasks = [
    {
      id: 1,
      title: "Food Distribution",
      location: "Community Center",
      date: "Tomorrow, 2:00 PM",
      volunteers: 5,
      needed: 8,
      status: "Urgent",
    },
    {
      id: 2,
      title: "Food Packaging",
      location: "Food Bank",
      date: "Next Monday, 10:00 AM",
      volunteers: 12,
      needed: 15,
      status: "Open",
    },
    {
      id: 3,
      title: "Delivery Route",
      location: "Various Locations",
      date: "Next Wednesday, 1:00 PM",
      volunteers: 3,
      needed: 4,
      status: "Almost Full",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Volunteer Management</h1>
          <p className="text-gray-600">Organize and manage volunteer activities</p>
        </div>
        <Button>Register as Volunteer</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Tabs defaultValue="tasks">
            <TabsList className="mb-4">
              <TabsTrigger value="tasks">Available Tasks</TabsTrigger>
              <TabsTrigger value="schedule">My Schedule</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>

            <TabsContent value="tasks">
              <div className="space-y-4">
                {upcomingTasks.map((task) => (
                  <Card key={task.id}>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">{task.title}</h3>
                          <p className="text-sm text-gray-600">{task.location}</p>
                          <div className="flex items-center mt-2">
                            <Clock className="h-4 w-4 text-gray-500 mr-2" />
                            <span className="text-sm text-gray-600">{task.date}</span>
                          </div>
                        </div>
                        <Badge variant={task.status === "Urgent" ? "destructive" : "secondary"}>{task.status}</Badge>
                      </div>
                      <div className="mt-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span>Volunteers</span>
                          <span>
                            {task.volunteers}/{task.needed}
                          </span>
                        </div>
                        <Progress value={(task.volunteers / task.needed) * 100} />
                      </div>
                      <Button className="w-full mt-4">Sign Up</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-blue-600 mr-2" />
                <div>
                  <p className="text-sm font-medium">Total Volunteers</p>
                  <p className="text-2xl font-bold">256</p>
                </div>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 text-blue-600 mr-2" />
                <div>
                  <p className="text-sm font-medium">Active Tasks</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
              </div>
              <div className="flex items-center">
                <Trophy className="h-5 w-5 text-blue-600 mr-2" />
                <div>
                  <p className="text-sm font-medium">Hours Contributed</p>
                  <p className="text-2xl font-bold">1,234</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

