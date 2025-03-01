import Link from "next/link"
import { ArrowRight, Award, Clock, Filter, MapPin, Plus, Search, Star } from "lucide-react"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HomePage() {
  // Mock data for demonstration
  const featuredDonations = [
    {
      id: 1,
      title: "Fresh Vegetables Assortment",
      category: "Perishable",
      distance: "0.8 miles away",
      timeLeft: "4 hours left",
      donorName: "Green Market",
      donorRating: 4.9,
      donorImage: "/placeholder.svg?height=40&width=40",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Prepared Lunch Meals",
      category: "Cooked",
      distance: "1.2 miles away",
      timeLeft: "2 hours left",
      donorName: "City Cafe",
      donorRating: 4.7,
      donorImage: "/placeholder.svg?height=40&width=40",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Canned Food Package",
      category: "Non-Perishable",
      distance: "0.5 miles away",
      timeLeft: "3 days left",
      donorName: "Community Pantry",
      donorRating: 4.8,
      donorImage: "/placeholder.svg?height=40&width=40",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Bakery Items",
      category: "Perishable",
      distance: "1.5 miles away",
      timeLeft: "6 hours left",
      donorName: "Local Bakery",
      donorRating: 4.6,
      donorImage: "/placeholder.svg?height=40&width=40",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const categories = [
    { name: "Perishable", icon: "🍎" },
    { name: "Non-Perishable", icon: "🥫" },
    { name: "Cooked", icon: "🍲" },
    { name: "Raw", icon: "🥦" },
    { name: "Vegetarian", icon: "🥗" },
    { name: "Bakery", icon: "🥖" },
    { name: "Dairy", icon: "🧀" },
    { name: "Beverages", icon: "🧃" },
  ]

  const nearbyDonors = [
    {
      id: 1,
      name: "Fresh Market",
      type: "Restaurant",
      distance: "0.8 miles away",
      rating: 4.9,
      image: "/placeholder.svg?height=60&width=60",
      verified: true,
    },
    {
      id: 2,
      name: "Community Kitchen",
      type: "NGO",
      distance: "1.5 miles away",
      rating: 4.8,
      image: "/placeholder.svg?height=60&width=60",
      verified: true,
    },
    {
      id: 3,
      name: "Local Bakery",
      type: "Small Business",
      distance: "2.1 miles away",
      rating: 4.7,
      image: "/placeholder.svg?height=60&width=60",
      verified: false,
    },
  ]

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-9">
            <MapPin className="mr-2 h-4 w-4" />
            Map View
          </Button>
          <Button size="sm" className="h-9">
            <Plus className="mr-2 h-4 w-4" />
            Add Donation
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input type="search" placeholder="Search for food donations..." className="pl-9" />
        </div>
        <Button size="icon" variant="outline">
          <Filter className="h-4 w-4" />
          <span className="sr-only">Filter</span>
        </Button>
      </div>

      <div>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xl font-bold">Categories</h2>
          <Link href="/categories" className="text-sm text-primary">
            See all
          </Link>
        </div>
        <ScrollArea className="pb-4">
          <div className="flex gap-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/categories/${category.name.toLowerCase()}`}
                className="flex flex-col items-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-2xl">
                  {category.icon}
                </div>
                <span className="mt-2 text-xs font-medium">{category.name}</span>
              </Link>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <Tabs defaultValue="nearby">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Available Donations</h2>
          <TabsList>
            <TabsTrigger value="nearby">Nearby</TabsTrigger>
            <TabsTrigger value="recent">Recent</TabsTrigger>
            <TabsTrigger value="expiring">Expiring Soon</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="nearby" className="mt-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredDonations.map((donation) => (
              <Card key={donation.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={donation.image || "/placeholder.svg"}
                      alt={donation.title}
                      className="h-full w-full object-cover"
                    />
                  </AspectRatio>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <Badge variant="outline">{donation.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      {donation.timeLeft}
                    </div>
                  </div>
                  <h3 className="mb-1 font-semibold">{donation.title}</h3>
                  <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {donation.distance}
                  </div>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={donation.donorImage} />
                      <AvatarFallback>{donation.donorName[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{donation.donorName}</span>
                    <div className="ml-auto flex items-center">
                      <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                      <span className="text-xs">{donation.donorRating}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full" asChild>
                    <Link href={`/donation/${donation.id}`}>Request Donation</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="recent">
          <div className="grid place-items-center py-12 text-center">
            <div className="space-y-2">
              <Clock className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="text-lg font-medium">Recent donations will appear here</h3>
              <p className="text-sm text-muted-foreground">Check back often for the latest available food donations</p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="expiring">
          <div className="grid place-items-center py-12 text-center">
            <div className="space-y-2">
              <Clock className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="text-lg font-medium">Expiring donations will appear here</h3>
              <p className="text-sm text-muted-foreground">Act quickly to save food that needs to be claimed soon</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xl font-bold">Nearby Donors</h2>
          <Link href="/donors" className="text-sm text-primary">
            See all
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {nearbyDonors.map((donor) => (
            <Link
              key={donor.id}
              href={`/donor/${donor.id}`}
              className="flex items-center gap-3 rounded-lg border p-3 transition-colors hover:bg-accent"
            >
              <Avatar className="h-12 w-12 rounded-md">
                <AvatarImage src={donor.image} />
                <AvatarFallback>{donor.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-1">
                  <h3 className="font-medium">{donor.name}</h3>
                  {donor.verified && (
                    <Badge variant="secondary" className="ml-1 h-5 px-1 text-xs">
                      Verified
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{donor.type}</span>
                  <span>•</span>
                  <span>{donor.distance}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <Star className="h-3 w-3 fill-primary text-primary" />
                <span>{donor.rating}</span>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          ))}
        </div>
      </div>

      <div className="rounded-lg bg-primary/10 p-6">
        <div className="mb-4 flex items-center gap-2">
          <Award className="h-6 w-6 text-primary" />
          <h2 className="text-xl font-bold">Rewards Program</h2>
        </div>
        <p className="mb-4 text-muted-foreground">
          Donate regularly and earn rewards, recognition, and special perks! Our supplier rewards system acknowledges
          your consistent contributions to the community.
        </p>
        <Button size="lg" className="w-full sm:w-auto" asChild>
          <Link href="/rewards">Learn More</Link>
        </Button>
      </div>
    </div>
  )
}

