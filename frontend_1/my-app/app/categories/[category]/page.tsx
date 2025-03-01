import Link from "next/link"
import { ChevronLeft, Clock, Filter, MapPin, Search, SlidersHorizontal, Star } from "lucide-react"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function CategoryPage({ params }: { params: { category: string } }) {
  // Capitalize the category name for display
  const categoryName = params.category.charAt(0).toUpperCase() + params.category.slice(1)

  // Mock data for demonstration
  const donations = [
    {
      id: 1,
      title: "Fresh Fruits Basket",
      description: "Assortment of apples, oranges, and bananas",
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
      title: "Fresh Vegetables",
      description: "Carrots, broccoli, and leafy greens",
      category: "Perishable",
      distance: "1.2 miles away",
      timeLeft: "6 hours left",
      donorName: "City Farm",
      donorRating: 4.7,
      donorImage: "/placeholder.svg?height=40&width=40",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Organic Salad Mix",
      description: "Ready-to-eat mixed greens",
      category: "Perishable",
      distance: "1.5 miles away",
      timeLeft: "3 hours left",
      donorName: "Organic Growers",
      donorRating: 4.8,
      donorImage: "/placeholder.svg?height=40&width=40",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Seasonal Berries",
      description: "Strawberries, blueberries, and raspberries",
      category: "Perishable",
      distance: "2.1 miles away",
      timeLeft: "5 hours left",
      donorName: "Berry Farm",
      donorRating: 4.6,
      donorImage: "/placeholder.svg?height=40&width=40",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center px-4">
          <Link href="/categories" className="mr-2">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Button>
          </Link>
          <h1 className="text-xl font-bold">{categoryName}</h1>
          <Button variant="outline" size="icon" className="ml-auto mr-2">
            <Filter className="h-4 w-4" />
            <span className="sr-only">Filter</span>
          </Button>
          <Button variant="outline" size="icon">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <div className="container px-4 py-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Available Items</h2>
              <p className="text-sm text-muted-foreground">{donations.length} items found</p>
            </div>
            <Button variant="outline" size="sm" className="gap-1">
              <SlidersHorizontal className="h-4 w-4" />
              <span>Sort</span>
            </Button>
          </div>

          <div className="grid gap-4">
            {donations.map((donation) => (
              <Card key={donation.id} className="overflow-hidden">
                <div className="flex">
                  <div className="h-[120px] w-[120px] shrink-0">
                    <AspectRatio ratio={1}>
                      <img
                        src={donation.image || "/placeholder.svg"}
                        alt={donation.title}
                        className="h-full w-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <div className="mb-1 flex items-center justify-between">
                      <Badge variant="outline">{donation.category}</Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="mr-1 h-3 w-3" />
                        {donation.timeLeft}
                      </div>
                    </div>
                    <h3 className="mb-1 font-semibold">{donation.title}</h3>
                    <p className="mb-1 text-xs text-muted-foreground line-clamp-1">{donation.description}</p>
                    <div className="mb-2 flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {donation.distance}
                    </div>
                    <div className="mt-auto flex items-center gap-2">
                      <Avatar className="h-5 w-5">
                        <AvatarImage src={donation.donorImage} />
                        <AvatarFallback>{donation.donorName[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-xs">{donation.donorName}</span>
                      <div className="ml-auto flex items-center">
                        <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                        <span className="text-xs">{donation.donorRating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Separator />
                <CardFooter className="p-3">
                  <Button size="sm" className="w-full" asChild>
                    <Link href={`/donation/${donation.id}`}>Request Donation</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="my-6 text-center">
            <Button variant="outline">Load More</Button>
          </div>
        </div>
      </main>
    </div>
  )
}

