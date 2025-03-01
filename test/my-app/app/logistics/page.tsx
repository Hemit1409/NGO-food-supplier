import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MapPin, Truck } from "lucide-react"

export default function Logistics() {
  const deliveries = [
    { id: 1, status: "In Transit", origin: "Restaurant A", destination: "Food Bank B", eta: "30 mins" },
    { id: 2, status: "Picked Up", origin: "Supermarket C", destination: "Shelter D", eta: "15 mins" },
    { id: 3, status: "Delivered", origin: "Bakery E", destination: "Community Center F", eta: "Completed" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Logistics and Tracking</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Active Deliveries</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Status</TableHead>
                  <TableHead>Origin</TableHead>
                  <TableHead>Destination</TableHead>
                  <TableHead>ETA</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {deliveries.map((delivery) => (
                  <TableRow key={delivery.id}>
                    <TableCell>{delivery.status}</TableCell>
                    <TableCell>{delivery.origin}</TableCell>
                    <TableCell>{delivery.destination}</TableCell>
                    <TableCell>{delivery.eta}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        Track
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Delivery Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center">
              <Truck className="w-5 h-5 mr-2 text-primary" />
              <span>5 Active Deliveries</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-primary" />
              <span>10 Completed Today</span>
            </div>
            <Button className="w-full">Schedule New Pickup</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

