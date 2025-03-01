"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "Jan", wasteReduced: 4000, donationsMade: 2400 },
  { name: "Feb", wasteReduced: 3000, donationsMade: 1398 },
  { name: "Mar", wasteReduced: 2000, donationsMade: 9800 },
  { name: "Apr", wasteReduced: 2780, donationsMade: 3908 },
  { name: "May", wasteReduced: 1890, donationsMade: 4800 },
  { name: "Jun", wasteReduced: 2390, donationsMade: 3800 },
]

export default function WasteAnalytics() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Food Waste Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Waste Reduction Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="wasteReduced" fill="#8884d8" />
                <Bar dataKey="donationsMade" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Key Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">Total Waste Reduced</h3>
              <p className="text-2xl font-bold">15,060 kg</p>
            </div>
            <div>
              <h3 className="font-semibold">Total Donations Made</h3>
              <p className="text-2xl font-bold">26,106</p>
            </div>
            <div>
              <h3 className="font-semibold">Carbon Footprint Reduced</h3>
              <p className="text-2xl font-bold">5,271 kg CO2e</p>
            </div>
            <Button className="w-full">Generate Detailed Report</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

