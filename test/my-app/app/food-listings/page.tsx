import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export default function FoodListings() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Food Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Category</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="perishable">Perishable</SelectItem>
                    <SelectItem value="non-perishable">Non-Perishable</SelectItem>
                    <SelectItem value="cooked">Cooked</SelectItem>
                    <SelectItem value="raw">Raw Ingredients</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium">Location</label>
                <Input type="text" placeholder="Enter location" />
              </div>
              <div>
                <label className="text-sm font-medium">Freshness</label>
                <Slider defaultValue={[50]} max={100} step={1} />
              </div>
              <Button className="w-full">Apply Filters</Button>
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item}>
                <CardHeader>
                  <CardTitle>Food Item {item}</CardTitle>
                  <CardDescription>Category: Perishable</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Freshness: 90%</p>
                  <p className="mb-2">Location: City Center</p>
                  <Button className="w-full">Request Donation</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

