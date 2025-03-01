import Link from "next/link"
import { Search, SlidersHorizontal } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CategoriesPage() {
  // Mock data for demonstration
  const categories = [
    { name: "Perishable", icon: "🍎", count: 28 },
    { name: "Non-Perishable", icon: "🥫", count: 42 },
    { name: "Cooked", icon: "🍲", count: 17 },
    { name: "Raw", icon: "🥦", count: 23 },
    { name: "Vegetarian", icon: "🥗", count: 19 },
    { name: "Bakery", icon: "🥖", count: 12 },
    { name: "Dairy", icon: "🧀", count: 9 },
    { name: "Beverages", icon: "🧃", count: 15 },
    { name: "Grains", icon: "🌾", count: 22 },
    { name: "Fruits", icon: "🍇", count: 18 },
    { name: "Vegetables", icon: "🥕", count: 24 },
    { name: "Protein", icon: "🥩", count: 14 },
  ]

  const popularFilters = ["Vegetarian", "Gluten-Free", "Halal", "Kosher", "Vegan", "Dairy-Free", "Organic"]

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Food Categories</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-9">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Advanced Filters
          </Button>
          <Button variant="outline" size="sm" className="h-9">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </div>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold">Popular Filters</h2>
        <ScrollArea className="pb-2">
          <div className="flex gap-2">
            {popularFilters.map((filter) => (
              <Badge key={filter} variant="outline" className="whitespace-nowrap">
                {filter}
              </Badge>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <Tabs defaultValue="categories">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="map">Map View</TabsTrigger>
          
        </TabsList>
        <TabsContent value="categories" className="mt-4">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/categories/${category.name.toLowerCase()}`}
                className="rounded-lg border bg-card p-4 text-center shadow-sm transition-colors hover:bg-accent"
              >
                <div className="mb-2 text-3xl">{category.icon}</div>
                <h3 className="font-medium">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} items</p>
              </Link>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="map">
          <div className="rounded-lg border bg-card p-4 text-center">
            <div className="mb-4 h-[400px] bg-muted">
              {/* Map will go here */}
              <div className="grid h-full place-items-center">
                <p className="text-muted-foreground">Map View Coming Soon</p>
                
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Find donations near you using our interactive map</p>
          </div>
        </TabsContent>
      </Tabs>

      <div>
        <h2 className="mb-3 text-lg font-semibold">Advanced Filters</h2>
        <Card>
          <CardHeader className="p-4 pb-2">
            <h3 className="text-sm font-medium">Refine Your Search</h3>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <label className="mb-1 block text-sm font-medium">Distance</label>
                <div className="grid grid-cols-3 gap-2">
                  <Button size="sm" variant="outline">
                    0.5 mi
                  </Button>
                  <Button size="sm" variant="outline" className="bg-primary/10">
                    1 mi
                  </Button>
                  <Button size="sm" variant="outline">
                    5 mi
                  </Button>
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Freshness</label>
                <div className="grid grid-cols-3 gap-2">
                  <Button size="sm" variant="outline">
                    New
                  </Button>
                  <Button size="sm" variant="outline" className="bg-primary/10">
                    Today
                  </Button>
                  <Button size="sm" variant="outline">
                    Any
                  </Button>
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Donor Rating</label>
                <div className="grid grid-cols-3 gap-2">
                  <Button size="sm" variant="outline">
                    4.5+
                  </Button>
                  <Button size="sm" variant="outline" className="bg-primary/10">
                    4.0+
                  </Button>
                  <Button size="sm" variant="outline">
                    Any
                  </Button>
                </div>
              </div>
              <div className="md:col-span-2 lg:col-span-3">
                <Separator className="my-2" />
                <label className="mb-1 block text-sm font-medium">Dietary Restrictions</label>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Vegetarian</Badge>
                  <Badge variant="outline">Vegan</Badge>
                  <Badge variant="outline">Gluten-Free</Badge>
                  <Badge variant="outline">Dairy-Free</Badge>
                  <Badge variant="outline">Nut-Free</Badge>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button className="w-full">Apply Filters</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

