"use client"

import Link from "next/link"
import { useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { 
  Calendar, 
  Clock, 
  Filter, 
  Grid, 
  List, 
  MapPin, 
  Search, 
  Star 
} from "lucide-react"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DonationsPage() {
  const { user } = useAuth()
  const userType = user?.role || "ngo"
  
  // State for view mode (grid or list)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  
  // Mock data for demonstration
  const donations = [
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
      description: "A variety of fresh, locally-grown vegetables including carrots, broccoli, peppers, and leafy greens.",
      dietary: ["Vegetarian", "Vegan", "Gluten-Free"],
      timePosted: "2 hours ago",
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
      description: "Freshly prepared lunch meals suitable for immediate consumption. Includes vegetarian options.",
      dietary: ["Cooked", "Ready-to-eat"],
      timePosted: "3 hours ago",
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
      description: "Assorted canned goods including beans, vegetables, and soups. Long shelf-life and nutritious.",
      dietary: ["Non-Perishable", "Canned"],
      timePosted: "1 day ago",
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
      description: "Assorted bread, rolls, and pastries from today's baking. Good for immediate consumption.",
      dietary: ["Baked Goods", "Contains Gluten"],
      timePosted: "5 hours ago",
    },
    {
      id: 5,
      title: "Rice and Pasta Bundle",
      category: "Non-Perishable",
      distance: "2.0 miles away",
      timeLeft: "1 week left",
      donorName: "Grocery Express",
      donorRating: 4.5,
      donorImage: "/placeholder.svg?height=40&width=40",
      image: "/placeholder.svg?height=200&width=300",
      description: "Bulk rice, pasta, and grains suitable for distribution or community kitchens.",
      dietary: ["Non-Perishable", "Staples"],
      timePosted: "2 days ago",
    },
    {
      id: 6,
      title: "Fruit Basket",
      category: "Perishable",
      distance: "0.7 miles away",
      timeLeft: "1 day left",
      donorName: "Fresh Foods Market",
      donorRating: 4.9,
      donorImage: "/placeholder.svg?height=40&width=40",
      image: "/placeholder.svg?height=200&width=300",
      description: "Assorted seasonal fruits including apples, oranges, and bananas. Fresh and ready to eat.",
      dietary: ["Fresh", "Vegan"],
      timePosted: "6 hours ago",
    },
  ]

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Available Donations</h1>
        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="icon"
            className="h-9 w-9"
            onClick={() => setViewMode("grid")}
          >
            <Grid className="h-4 w-4" />
            <span className="sr-only">Grid view</span>
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="icon"
            className="h-9 w-9"
            onClick={() => setViewMode("list")}
          >
            <List className="h-4 w-4" />
            <span className="sr-only">List view</span>
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input type="search" placeholder="Search for food donations..." className="pl-9" />
        </div>
        <Select defaultValue="recent">
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">Most Recent</SelectItem>
            <SelectItem value="expiring">Expiring Soon</SelectItem>
            <SelectItem value="distance">Nearest First</SelectItem>
          </SelectContent>
        </Select>
        <Button size="icon" variant="outline">
          <Filter className="h-4 w-4" />
          <span className="sr-only">Filter</span>
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="perishable">Perishable</TabsTrigger>
          <TabsTrigger value="non-perishable">Non-Perishable</TabsTrigger>
          <TabsTrigger value="cooked">Cooked</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          {viewMode === "grid" ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {donations.map((donation) => (
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
                      <Link href={`/donation/${donation.id}`}>
                        {userType === "ngo" ? "Request Donation" : "View Details"}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {donations.map((donation) => (
                <Card key={donation.id}>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-48">
                      <AspectRatio ratio={1} className="h-full">
                        <img
                          src={donation.image || "/placeholder.svg"}
                          alt={donation.title}
                          className="h-full w-full object-cover"
                        />
                      </AspectRatio>
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <Badge variant="outline">{donation.category}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="mr-1 h-3 w-3" />
                          {donation.timeLeft}
                        </div>
                      </div>
                      <h3 className="mb-2 font-semibold">{donation.title}</h3>
                      <p className="mb-2 line-clamp-2 text-sm text-muted-foreground">{donation.description}</p>
                      <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {donation.distance}
                      </div>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={donation.donorImage} />
                            <AvatarFallback>{donation.donorName[0]}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">{donation.donorName}</span>
                          <div className="flex items-center">
                            <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                            <span className="text-xs">{donation.donorRating}</span>
                          </div>
                        </div>
                        <Button asChild>
                          <Link href={`/donation/${donation.id}`}>
                            {userType === "ngo" ? "Request Donation" : "View Details"}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
        <TabsContent value="perishable" className="mt-6">
          <div className={viewMode === "grid" ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3" : "space-y-4"}>
            {donations
              .filter(donation => donation.category === "Perishable")
              .map((donation) => (
                <Card key={donation.id} className={viewMode === "list" ? "" : "overflow-hidden"}>
                  {viewMode === "grid" ? (
                    <>
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
                          <Link href={`/donation/${donation.id}`}>
                            {userType === "ngo" ? "Request Donation" : "View Details"}
                            </Link>
                        </Button>
                      </CardFooter>
                    </>
                  ) : (
                    <div className="flex flex-col sm:flex-row">
                      <div className="w-full sm:w-48">
                        <AspectRatio ratio={1} className="h-full">
                          <img
                            src={donation.image || "/placeholder.svg"}
                            alt={donation.title}
                            className="h-full w-full object-cover"
                          />
                        </AspectRatio>
                      </div>
                      <div className="flex flex-1 flex-col p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <Badge variant="outline">{donation.category}</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="mr-1 h-3 w-3" />
                            {donation.timeLeft}
                          </div>
                        </div>
                        <h3 className="mb-2 font-semibold">{donation.title}</h3>
                        <p className="mb-2 line-clamp-2 text-sm text-muted-foreground">{donation.description}</p>
                        <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {donation.distance}
                        </div>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={donation.donorImage} />
                              <AvatarFallback>{donation.donorName[0]}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm font-medium">{donation.donorName}</span>
                            <div className="flex items-center">
                              <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                              <span className="text-xs">{donation.donorRating}</span>
                            </div>
                          </div>
                          <Button asChild>
                            <Link href={`/donation/${donation.id}`}>
                              {userType === "ngo" ? "Request Donation" : "View Details"}
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="non-perishable" className="mt-6">
          <div className={viewMode === "grid" ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3" : "space-y-4"}>
            {donations
              .filter(donation => donation.category === "Non-Perishable")
              .map((donation) => (
                <Card key={donation.id} className={viewMode === "list" ? "" : "overflow-hidden"}>
                  {viewMode === "grid" ? (
                    <>
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
                          <Link href={`/donation/${donation.id}`}>
                            {userType === "ngo" ? "Request Donation" : "View Details"}
                          </Link>
                        </Button>
                      </CardFooter>
                    </>
                  ) : (
                    <div className="flex flex-col sm:flex-row">
                      <div className="w-full sm:w-48">
                        <AspectRatio ratio={1} className="h-full">
                          <img
                            src={donation.image || "/placeholder.svg"}
                            alt={donation.title}
                            className="h-full w-full object-cover"
                          />
                        </AspectRatio>
                      </div>
                      <div className="flex flex-1 flex-col p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <Badge variant="outline">{donation.category}</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="mr-1 h-3 w-3" />
                            {donation.timeLeft}
                          </div>
                        </div>
                        <h3 className="mb-2 font-semibold">{donation.title}</h3>
                        <p className="mb-2 line-clamp-2 text-sm text-muted-foreground">{donation.description}</p>
                        <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {donation.distance}
                        </div>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={donation.donorImage} />
                              <AvatarFallback>{donation.donorName[0]}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm font-medium">{donation.donorName}</span>
                            <div className="flex items-center">
                              <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                              <span className="text-xs">{donation.donorRating}</span>
                            </div>
                          </div>
                          <Button asChild>
                            <Link href={`/donation/${donation.id}`}>
                              {userType === "ngo" ? "Request Donation" : "View Details"}
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="cooked" className="mt-6">
          <div className={viewMode === "grid" ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3" : "space-y-4"}>
            {donations
              .filter(donation => donation.category === "Cooked")
              .map((donation) => (
                <Card key={donation.id} className={viewMode === "list" ? "" : "overflow-hidden"}>
                  {viewMode === "grid" ? (
                    <>
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
                          <Link href={`/donation/${donation.id}`}>
                            {userType === "ngo" ? "Request Donation" : "View Details"}
                          </Link>
                        </Button>
                      </CardFooter>
                    </>
                  ) : (
                    <div className="flex flex-col sm:flex-row">
                      <div className="w-full sm:w-48">
                        <AspectRatio ratio={1} className="h-full">
                          <img
                            src={donation.image || "/placeholder.svg"}
                            alt={donation.title}
                            className="h-full w-full object-cover"
                          />
                        </AspectRatio>
                      </div>
                      <div className="flex flex-1 flex-col p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <Badge variant="outline">{donation.category}</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="mr-1 h-3 w-3" />
                            {donation.timeLeft}
                          </div>
                        </div>
                        <h3 className="mb-2 font-semibold">{donation.title}</h3>
                        <p className="mb-2 line-clamp-2 text-sm text-muted-foreground">{donation.description}</p>
                        <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {donation.distance}
                        </div>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={donation.donorImage} />
                              <AvatarFallback>{donation.donorName[0]}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm font-medium">{donation.donorName}</span>
                            <div className="flex items-center">
                              <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                              <span className="text-xs">{donation.donorRating}</span>
                            </div>
                          </div>
                          <Button asChild>
                            <Link href={`/donation/${donation.id}`}>
                              {userType === "ngo" ? "Request Donation" : "View Details"}
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8 flex justify-center">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" className="px-4">
            1
          </Button>
          <Button variant="outline" size="sm" className="px-4">
            2
          </Button>
          <Button variant="outline" size="sm" className="px-4">
            3
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}