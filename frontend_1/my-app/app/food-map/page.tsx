import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Search } from "lucide-react"

export default function FoodMap() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Food Map</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Nearby Food Donations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-200 h-96 flex items-center justify-center">
              <p className="text-gray-500">Map placeholder - Integrate with Google Maps or similar service</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Search Locations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Input placeholder="Enter location" />
              <Button size="icon">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Nearby Donations</h3>
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-start space-x-2">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Food Donation {item}</p>
                    <p className="text-sm text-gray-600">0.{item} miles away</p>
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full">View All Nearby Donations</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

