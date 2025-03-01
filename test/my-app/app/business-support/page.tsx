import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Building, Users, DollarSign } from "lucide-react"

export default function BusinessSupport() {
  const businesses = [
    { id: 1, name: "Local Bakery", type: "Food Producer", supporters: 50, raised: 3001 },
    { id: 2, name: "Community Farm", type: "Agriculture", supporters: 75, raised: 7500 },
    { id: 3, name: "Neighborhood Cafe", type: "Restaurant", supporters: 30, raised: 3000 },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Small-Scale Business Support</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Featured Businesses</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Business Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Supporters</TableHead>
                  <TableHead>Raised</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {businesses.map((business) => (
                  <TableRow key={business.id}>
                    <TableCell>{business.name}</TableCell>
                    <TableCell>{business.type}</TableCell>
                    <TableCell>{business.supporters}</TableCell>
                    <TableCell>${business.raised}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        Support
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
            <CardTitle>Business Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center">
              <Building className="w-5 h-5 mr-2 text-primary" />
              <span>15 Registered Businesses</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-primary" />
              <span>500+ Supporters</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="w-5 h-5 mr-2 text-primary" />
              <span>$50,000+ Raised</span>
            </div>
            <Button className="w-full">Register Your Business</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

