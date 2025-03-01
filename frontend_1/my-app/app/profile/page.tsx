import Link from "next/link"
import {
  Award,
  Calendar,
  ChevronRight,
  CreditCard,
  Edit,
  Facebook,
  Heart,
  HelpCircle,
  History,
  Instagram,
  LogOut,
  MapPin,
  MessageSquare,
  Settings,
  Share2,
  Star,
  Twitter,
  User,
} from "lucide-react"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfilePage() {
  // Mock data for demonstration
  const user = {
    name: "Jane Doe",
    type: "Donor & Recipient",
    memberSince: "January 2023",
    verified: true,
    bio: "I'm passionate about reducing food waste and helping my community. I regularly donate from my garden and local business.",
    donationsGiven: 23,
    donationsReceived: 12,
    rating: 4.8,
    reviewCount: 15,
    avatar: "/placeholder.svg?height=100&width=100",
    coverImage: "/placeholder.svg?height=300&width=600",
    address: "123 Main Street, City Center",
    phone: "+1 (555) 123-4567",
    email: "jane.doe@example.com",
    badges: ["Food Hero", "Regular Donor", "Volunteer"],
    preferredCategories: ["Vegetables", "Fruits", "Bakery"],
  }

  const upcomingActivities = [
    {
      id: 1,
      type: "Pickup",
      title: "Fresh Vegetables Assortment",
      from: "Green Market",
      date: "Today, 3:00 PM",
      address: "123 Green Street, City Center",
      status: "Scheduled",
    },
    {
      id: 2,
      type: "Donation",
      title: "Homemade Bread",
      to: "Community Kitchen",
      date: "Tomorrow, 10:00 AM",
      address: "456 Main Street, Downtown",
      status: "Confirmed",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="relative">
        <AspectRatio ratio={16 / 5} className="bg-muted">
          <img src={user.coverImage || "/placeholder.svg"} alt="Cover image" className="h-full w-full object-cover" />
        </AspectRatio>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
          <div className="container px-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-16 w-16 border-2 border-white">
                <AvatarImage src={user.avatar} />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold">{user.name}</h2>
                  {user.verified && <Badge className="h-5 bg-primary px-1 text-xs">Verified</Badge>}
                </div>
                <p className="text-sm text-white/80">{user.type}</p>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">{user.rating}</span>
                  <span className="text-xs text-white/80">({user.reviewCount} reviews)</span>
                </div>
              </div>
              <Button variant="secondary" size="icon" className="ml-auto">
                <Edit className="h-4 w-4" />
                <span className="sr-only">Edit Profile</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1">
        <div className="container px-4 py-6">
          <Tabs defaultValue="profile">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="social">Social</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="mt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold">About</h3>
                  <p className="text-sm text-muted-foreground">{user.bio}</p>
                </div>

                <div className="grid gap-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Member Since</p>
                      <p className="text-sm text-muted-foreground">{user.memberSince}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Donation Statistics</p>
                      <p className="text-sm text-muted-foreground">
                        {user.donationsGiven} given • {user.donationsReceived} received
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Address</p>
                      <p className="text-sm text-muted-foreground">{user.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Contact Information</p>
                      <p className="text-sm text-muted-foreground">{user.phone}</p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                </div>

                <Card>
                  <CardHeader className="p-4 pb-2">
                    <h3 className="font-semibold">Preferences</h3>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium">Preferred Categories</p>
                        <div className="mt-1 flex flex-wrap gap-2">
                          {user.preferredCategories.map((category) => (
                            <Badge key={category} variant="outline">
                              {category}
                            </Badge>
                          ))}
                          <Button variant="outline" size="sm" className="h-6 gap-1 rounded-full">
                            <Edit className="h-3 w-3" />
                            <span className="text-xs">Edit</span>
                          </Button>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Notification Radius</p>
                        <div className="mt-1 flex items-center gap-2">
                          <Badge variant="outline" className="rounded-full">
                            5 miles
                          </Badge>
                          <Button variant="outline" size="sm" className="h-6 gap-1 rounded-full">
                            <Edit className="h-3 w-3" />
                            <span className="text-xs">Edit</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div>
                  <h3 className="mb-2 font-semibold">Recognition</h3>
                  <div className="flex flex-wrap gap-2">
                    {user.badges.map((badge) => (
                      <div
                        key={badge}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {badge}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg bg-accent p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Rewards Program</h3>
                  </div>
                  <p className="mb-3 text-sm text-muted-foreground">
                    You've earned 350 points! Continue donating to unlock special perks and recognition.
                  </p>
                  <Button size="sm" className="w-full" asChild>
                    <Link href="/rewards">View Rewards</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="activity" className="mt-6">
              <div className="mb-6">
                <h3 className="mb-4 font-semibold">Upcoming Activities</h3>
                <div className="space-y-4">
                  {upcomingActivities.map((activity) => (
                    <Card key={activity.id}>
                      <CardContent className="p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <Badge variant="outline">{activity.type}</Badge>
                          <Badge variant="secondary">{activity.status}</Badge>
                        </div>
                        <h3 className="font-medium">{activity.title}</h3>
                        <div className="mt-2 space-y-1 text-sm">
                          {activity.from && <p className="text-muted-foreground">From: {activity.from}</p>}
                          {activity.to && <p className="text-muted-foreground">To: {activity.to}</p>}
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3 text-muted-foreground" />
                            <p className="text-muted-foreground">{activity.date}</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3 text-muted-foreground" />
                            <p className="text-muted-foreground">{activity.address}</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t p-3">
                        <Button size="sm" className="w-full" asChild>
                          <Link href={`/tracking/${activity.id}`}>View Details</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-semibold">My Donations</h3>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/my-donations">View All</Link>
                  </Button>
                </div>
                <div className="grid place-items-center rounded-lg border py-12 text-center">
                  <div className="space-y-2">
                    <Heart className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="text-lg font-medium">Start donating today</h3>
                    <p className="mx-auto max-w-xs text-sm text-muted-foreground">
                      Share your excess food with those who need it and reduce food waste in your community.
                    </p>
                    <Button className="mt-4" asChild>
                      <Link href="/add-donation">Add Donation</Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-semibold">Donation History</h3>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <History className="h-4 w-4" />
                    <span>View All</span>
                  </Button>
                </div>
                <div className="rounded-lg border">
                  <div className="flex items-center justify-between p-4">
                    <div>
                      <h4 className="font-medium">All Time Activity</h4>
                      <p className="text-sm text-muted-foreground">
                        {user.donationsGiven + user.donationsReceived} total donations
                      </p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <Separator />
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                          <Heart className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Donations Given</p>
                          <p className="text-sm text-muted-foreground">{user.donationsGiven} donations</p>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                  <Separator />
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                          <Box className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Donations Received</p>
                          <p className="text-sm text-muted-foreground">{user.donationsReceived} donations</p>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="social" className="mt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="mb-4 font-semibold">Share Your Impact</h3>
                  <Card>
                    <CardContent className="p-4">
                      <div className="mb-4 rounded-lg bg-muted p-4">
                        <p className="text-sm">
                          I've donated {user.donationsGiven} meals through Left2Right, helping reduce food waste and
                          support my community! Join me in making a difference. #FoodHero #Left2Right
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" className="flex-1 gap-2">
                          <Facebook className="h-4 w-4" />
                          <span>Facebook</span>
                        </Button>
                        <Button variant="outline" className="flex-1 gap-2">
                          <Twitter className="h-4 w-4" />
                          <span>Twitter</span>
                        </Button>
                        <Button variant="outline" className="flex-1 gap-2">
                          <Instagram className="h-4 w-4" />
                          <span>Instagram</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="mb-4 font-semibold">Impact Stories</h3>
                  <div className="rounded-lg border bg-card">
                    <div className="p-4">
                      <h4 className="mb-2 font-medium">Share Your Experience</h4>
                      <p className="mb-4 text-sm text-muted-foreground">
                        How has food donation impacted your life or community? Share your story to inspire others.
                      </p>
                      <div className="mb-4">
                        <Input placeholder="Write your impact story..." className="resize-y" />
                      </div>
                      <Button className="w-full">Share Story</Button>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between p-4">
                      <div>
                        <h4 className="font-medium">Community Stories</h4>
                        <p className="text-sm text-muted-foreground">Read how Left2Right is making a difference</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        Explore
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 font-semibold">Invite Friends</h3>
                  <Card>
                    <CardContent className="p-4">
                      <p className="mb-4 text-sm text-muted-foreground">
                        Help grow our community by inviting friends to join Left2Right. Each friend who joins earns you
                        50 reward points!
                      </p>
                      <div className="mb-4">
                        <Input placeholder="Enter email address" />
                      </div>
                      <Button className="w-full gap-2">
                        <Share2 className="h-4 w-4" />
                        <span>Send Invitation</span>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8 space-y-2">
            <Button variant="destructive" className="mt-4 w-full gap-2">
              <LogOut className="h-4 w-4" />
              <span>Log Out</span>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

import { Box } from "lucide-react"

