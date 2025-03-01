import Link from "next/link"
import { Calendar, Clock, MapPin, MessageCircle, Phone, Share2, Star, ThumbsUp } from "lucide-react"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DonationDetailPage({ params }: { params: { id: string } }) {
  // Mock data for demonstration
  const donation = {
    id: params.id,
    title: "Fresh Vegetables Assortment",
    description:
      "A variety of fresh, locally-grown vegetables including carrots, broccoli, peppers, and leafy greens. All organic and harvested today. Perfect for a family meal or community kitchen.",
    category: "Perishable",
    quantity: "5-6 servings",
    bestBefore: "Today, 8:00 PM",
    distance: "0.8 miles away",
    address: "123 Green Street, City Center",
    donorName: "Green Market",
    donorType: "Local Business",
    donorRating: 4.9,
    donorImage: "/placeholder.svg?height=50&width=50",
    donorReviewCount: 128,
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    dietary: ["Vegetarian", "Vegan", "Gluten-Free"],
    timePosted: "2 hours ago",
  }

  const similarDonations = [
    {
      id: 2,
      title: "Fresh Fruit Basket",
      image: "/placeholder.svg?height=100&width=100",
      distance: "1.2 miles",
    },
    {
      id: 3,
      title: "Organic Salad Mix",
      image: "/placeholder.svg?height=100&width=100",
      distance: "0.5 miles",
    },
    {
      id: 4,
      title: "Vegetable Soup",
      image: "/placeholder.svg?height=100&width=100",
      distance: "2.1 miles",
    },
  ]

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Donation Details</h1>
        <Button variant="ghost" size="sm" className="h-9">
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg bg-muted">
            <img
              src={donation.images[0] || "/placeholder.svg"}
              alt={donation.title}
              className="h-full w-full object-cover"
            />
          </AspectRatio>

          <div>
            <div className="mb-2 flex items-center gap-2">
              <Badge variant="outline">{donation.category}</Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-1 h-3 w-3" />
                <span>Posted {donation.timePosted}</span>
              </div>
            </div>
            <h2 className="mb-2 text-2xl font-bold">{donation.title}</h2>
            <div className="mb-4 flex flex-wrap gap-1">
              {donation.dietary.map((tag) => (
                <Badge key={tag} variant="secondary" className="rounded-sm">
                  {tag}
                </Badge>
              ))}
            </div>
            <p className="text-muted-foreground">{donation.description}</p>
          </div>

          <Card>
            <CardContent className="p-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Best Before</p>
                    <p className="text-sm text-muted-foreground">{donation.bestBefore}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 text-muted-foreground">🍽️</div>
                  <div>
                    <p className="text-sm font-medium">Quantity</p>
                    <p className="text-sm text-muted-foreground">{donation.quantity}</p>
                  </div>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Pickup Location</p>
                  <p className="text-sm text-muted-foreground">{donation.address}</p>
                  <p className="text-sm text-primary">{donation.distance}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div>
            <h2 className="mb-4 text-lg font-semibold">Similar Donations</h2>
            <div className="grid grid-cols-3 gap-4">
              {similarDonations.map((item) => (
                <Link key={item.id} href={`/donation/${item.id}`} className="rounded-lg border p-3 hover:bg-accent">
                  <AspectRatio ratio={1} className="mb-2 overflow-hidden rounded-md bg-muted">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </AspectRatio>
                  <h3 className="text-sm font-medium line-clamp-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.distance}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="mb-4 text-lg font-semibold">Donor Information</h2>
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12 rounded-md">
                  <AvatarImage src={donation.donorImage} />
                  <AvatarFallback>{donation.donorName[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{donation.donorName}</h3>
                    <Badge variant="secondary" className="h-5 px-1 text-xs">
                      Verified
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{donation.donorType}</p>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <span className="text-sm">{donation.donorRating}</span>
                    <span className="text-xs text-muted-foreground">({donation.donorReviewCount} reviews)</span>
                  </div>
                </div>
              </div>
            </div>
            <Button variant="outline" className="mt-2 w-full" asChild>
              <Link href={`/donor/${donation.id}`}>View Profile</Link>
            </Button>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold">Request This Donation</h2>
            <Tabs defaultValue="pickup">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="pickup">Self Pickup</TabsTrigger>
                <TabsTrigger value="delivery">Request Delivery</TabsTrigger>
              </TabsList>
              <TabsContent value="pickup" className="mt-4 space-y-4">
                <p className="text-sm text-muted-foreground">
                  You'll need to pick up this donation from the location shown above.
                </p>
                <div className="flex gap-2">
                  <Button className="flex-1" asChild>
                    <Link href={`/donation/${donation.id}/request`}>Request Now</Link>
                  </Button>
                  <Button variant="outline" size="icon">
                    <Calendar className="h-4 w-4" />
                    <span className="sr-only">Schedule</span>
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Message Donor
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Donor
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="delivery" className="mt-4 space-y-4">
                <p className="text-sm text-muted-foreground">
                  Request a volunteer to deliver this donation to your location.
                </p>
                <div className="rounded-lg border bg-accent/30 p-3 text-sm">
                  <p>Delivery may be available depending on volunteer availability.</p>
                </div>
                <Button className="w-full" asChild>
                  <Link href={`/donation/${donation.id}/request-delivery`}>Request Delivery</Link>
                </Button>
              </TabsContent>
            </Tabs>
          </div>

          <div className="text-center">
            <Button variant="secondary" className="gap-2 w-full" asChild>
              <Link href="/">
                <ThumbsUp className="h-4 w-4" />
                Recommend to Others
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

