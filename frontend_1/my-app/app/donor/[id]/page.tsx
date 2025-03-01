import Link from "next/link"
import {
  Badge,
  Calendar,
  ChevronLeft,
  ExternalLink,
  Info,
  MapPin,
  MessageCircle,
  Phone,
  Share2,
  Star,
} from "lucide-react"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DonorProfilePage({ params }: { params: { id: string } }) {
  // Mock data for demonstration
  const donor = {
    id: params.id,
    name: "Green Market",
    type: "Local Business",
    verified: true,
    description:
      "We are a local grocery store specializing in fresh, locally-sourced produce. We donate fresh fruits and vegetables regularly to reduce food waste and help our community.",
    address: "123 Green Street, City Center",
    phone: "+1 (555) 123-4567",
    website: "www.greenmarket.com",
    email: "contact@greenmarket.com",
    hours: "Mon-Sat: 8am-8pm, Sun: 9am-6pm",
    rating: 4.9,
    reviewCount: 128,
    memberSince: "January 2022",
    donationCount: 156,
    activeListings: 4,
    avatar: "/placeholder.svg?height=100&width=100",
    coverImage: "/placeholder.svg?height=300&width=600",
    badges: ["Top Donor", "Consistent Giver", "Community Champion"],
  }

  const activeDonations = [
    {
      id: 1,
      title: "Fresh Vegetables Assortment",
      category: "Perishable",
      bestBefore: "Today, 8:00 PM",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      id: 2,
      title: "Fruit Basket",
      category: "Perishable",
      bestBefore: "Tomorrow, 12:00 PM",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      id: 3,
      title: "Organic Salad Mix",
      category: "Perishable",
      bestBefore: "Today, 10:00 PM",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      id: 4,
      title: "Fresh Herbs Bundle",
      category: "Perishable",
      bestBefore: "Tomorrow, 9:00 AM",
      image: "/placeholder.svg?height=150&width=150",
    },
  ]

  const reviews = [
    {
      id: 1,
      author: "John D.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "2 weeks ago",
      text: "Great quality produce! The vegetables were fresh and the pickup process was very smooth.",
    },
    {
      id: 2,
      author: "Sarah M.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "1 month ago",
      text: "Such a reliable donor. Always lists accurate descriptions and the staff is friendly and helpful.",
    },
    {
      id: 3,
      author: "Community Kitchen",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "2 months ago",
      text: "We regularly get donations from Green Market and they're always high quality. Our community kitchen greatly appreciates their consistent support!",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center px-4">
          <Link href="/" className="mr-2">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Button>
          </Link>
          <h1 className="text-xl font-bold">Donor Profile</h1>
          <Button variant="ghost" size="icon" className="ml-auto">
            <Share2 className="h-5 w-5" />
            <span className="sr-only">Share</span>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <div className="relative">
          <AspectRatio ratio={16 / 5} className="bg-muted">
            <img
              src={donor.coverImage || "/placeholder.svg"}
              alt={`${donor.name} cover image`}
              className="h-full w-full object-cover"
            />
          </AspectRatio>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
            <div className="container px-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-16 w-16 border-2 border-white">
                  <AvatarImage src={donor.avatar} />
                  <AvatarFallback>{donor.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold">{donor.name}</h2>
                    {donor.verified && <Badge className="h-5 bg-primary px-1 text-xs">Verified</Badge>}
                  </div>
                  <p className="text-sm text-white/80">{donor.type}</p>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{donor.rating}</span>
                    <span className="text-xs text-white/80">({donor.reviewCount} reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-4 py-6">
          <Tabs defaultValue="about">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="donations">Donations</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="mt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold">About {donor.name}</h3>
                  <p className="text-sm text-muted-foreground">{donor.description}</p>
                </div>

                <div className="grid gap-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Member Since</p>
                      <p className="text-sm text-muted-foreground">{donor.memberSince}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Total Donations</p>
                      <p className="text-sm text-muted-foreground">{donor.donationCount} items donated</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Address</p>
                      <p className="text-sm text-muted-foreground">{donor.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">{donor.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <ExternalLink className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Website</p>
                      <p className="text-sm text-primary">{donor.website}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Info className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Business Hours</p>
                      <p className="text-sm text-muted-foreground">{donor.hours}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold">Recognition</h3>
                  <div className="flex flex-wrap gap-2">
                    {donor.badges.map((badge) => (
                      <div
                        key={badge}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {badge}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Message
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Phone className="mr-2 h-4 w-4" />
                    Call
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="donations" className="mt-6">
              <div className="mb-4">
                <h3 className="font-semibold">Active Listings ({donor.activeListings})</h3>
                <p className="text-sm text-muted-foreground">Currently available donations from {donor.name}</p>
              </div>

              <div className="grid gap-4">
                {activeDonations.map((donation) => (
                  <Link
                    key={donation.id}
                    href={`/donation/${donation.id}`}
                    className="flex items-center gap-3 rounded-lg border p-3 transition-colors hover:bg-accent"
                  >
                    <div className="h-16 w-16 overflow-hidden rounded-md bg-muted">
                      <AspectRatio ratio={1}>
                        <img
                          src={donation.image || "/placeholder.svg"}
                          alt={donation.title}
                          className="h-full w-full object-cover"
                        />
                      </AspectRatio>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{donation.title}</h3>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="rounded-sm text-xs">
                          {donation.category}
                        </Badge>
                        <p className="text-xs text-muted-foreground">Best before: {donation.bestBefore}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Button variant="outline">View All Donations</Button>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">Reviews ({donor.reviewCount})</h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span>{donor.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">What people are saying about {donor.name}</p>
              </div>

              <div className="space-y-4">
                {reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-4">
                      <div className="mb-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={review.avatar} />
                            <AvatarFallback>{review.author[0]}</AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{review.author}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <div className="flex">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground">{review.date}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{review.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Button variant="outline">View All Reviews</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

