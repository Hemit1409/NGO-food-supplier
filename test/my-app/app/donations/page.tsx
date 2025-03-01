"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

export default function Donations() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Donation Request and Scheduling</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Request Donation</CardTitle>
            <CardDescription>Fill in the details to request a food donation</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium">Food Item</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select food item" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="item1">Food Item 1</SelectItem>
                    <SelectItem value="item2">Food Item 2</SelectItem>
                    <SelectItem value="item3">Food Item 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium">Quantity</label>
                <Input type="number" placeholder="Enter quantity" min="1" />
              </div>
              <div>
                <label className="text-sm font-medium">Pickup Date</label>
                <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
              </div>
              <div>
                <label className="text-sm font-medium">Pickup Time</label>
                <Input type="time" />
              </div>
              <Button type="submit">Submit Request</Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Scheduled Donations</CardTitle>
            <CardDescription>Your upcoming donation pickups</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {[1, 2, 3].map((item) => (
                <li key={item} className="border-b pb-4 last:border-b-0">
                  <h3 className="font-semibold">Food Item {item}</h3>
                  <p className="text-sm text-gray-600">Quantity: 5</p>
                  <p className="text-sm text-gray-600">Date: May 15, 2023</p>
                  <p className="text-sm text-gray-600">Time: 2:00 PM</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Cancel
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

