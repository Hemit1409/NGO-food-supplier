import Link from "next/link"
import { Box, Calendar, CheckCircle2, Circle, Clock, MapPin, MessageCircle, Phone } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TrackingPage() {
  // Mock data for demonstration
  const activeTrackings = [
    {
      id: "T12345",
      status: "In Progress",
      type: "Pickup",
      donationTitle: "Fresh Vegetables Assortment",
      donorName: "Green Market",
      donorAvatar: "/placeholder.svg?height=40&width=40",
      recipientName: "Community Kitchen",
      recipientAvatar: "/placeholder.svg?height=40&width=40",
      scheduledTime: "Today, 3:00 PM",
      address: "123 Green Street, City Center",
      steps: [
        { title: "Request Confirmed", complete: true, time: "Today, 10:15 AM" },
        { title: "Pickup Scheduled", complete: true, time: "Today, 11:30 AM" },
        { title: "Preparing Donation", complete: true, time: "Today, 2:00 PM" },
        { title: "Ready for Pickup", complete: false, time: "Today, 3:00 PM" },
        { title: "Picked Up", complete: false, time: "" },
        { title: "Donation Complete", complete: false, time: "" },
      ],
    },
    {
      id: "T12346",
      status: "Scheduled",
      type: "Delivery",
      donationTitle: "Bakery Items Assortment",
      donorName: "City Bakery",
      donorAvatar: "/placeholder.svg?height=40&width=40",
      recipientName: "Local Shelter",
      recipientAvatar: "/placeholder.svg?height=40&width=40",
      scheduledTime: "Tomorrow, 10:00 AM",
      address: "456 Main Street, Downtown",
      steps: [
        { title: "Request Confirmed", complete: true, time: "Today, 9:15 AM" },
        { title: "Delivery Scheduled", complete: true, time: "Today, 9:30 AM" },
        { title: "Preparing Donation", complete: false, time: "Tomorrow, 9:00 AM" },
        { title: "Driver Assigned", complete: false, time: "" },
        { title: "Out for Delivery", complete: false, time: "" },
        { title: "Delivered", complete: false, time: "" },
      ],
    },
  ]

  const pastTrackings = [
    {
      id: "T12344",
      status: "Completed",
      type: "Pickup",
      donationTitle: "Canned Food Package",
      donorName: "Community Pantry",
      donorAvatar: "/placeholder.svg?height=40&width=40",
      completedTime: "Yesterday, 4:30 PM",
    },
    {
      id: "T12343",
      status: "Completed",
      type: "Delivery",
      donationTitle: "Prepared Lunch Meals",
      donorName: "City Cafe",
      donorAvatar: "/placeholder.svg?height=40&width=40",
      completedTime: "3 days ago, 12:15 PM",
    },
  ]

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Tracking</h1>
      </div>

      <Tabs defaultValue="active">
        <TabsList>
          <TabsTrigger value="active">Active ({activeTrackings.length})</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="mt-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {activeTrackings.map((tracking) => (
              <Card key={tracking.id} className="overflow-hidden">
                <CardHeader className="bg-muted/30 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{tracking.donationTitle}</h3>
                        <Badge variant="outline" className="rounded-sm">
                          {tracking.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Tracking ID: {tracking.id} • {tracking.type}
                      </p>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/tracking/${tracking.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={tracking.donorAvatar} />
                        <AvatarFallback>{tracking.donorName[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-xs text-muted-foreground">From</p>
                        <p className="text-sm font-medium">{tracking.donorName}</p>
                      </div>
                    </div>
                    <div className="flex-1 px-4">
                      <div className="flex items-center justify-center">
                        <div className="h-0.5 w-full bg-muted"></div>
                        <Box className="mx-2 h-4 w-4 text-muted-foreground" />
                        <div className="h-0.5 w-full bg-muted"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={tracking.recipientAvatar} />
                        <AvatarFallback>{tracking.recipientName[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-xs text-muted-foreground">To</p>
                        <p className="text-sm font-medium">{tracking.recipientName}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <p className="text-sm">Scheduled: {tracking.scheduledTime}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <p className="text-sm">{tracking.address}</p>
                  </div>

                  <Separator className="my-4" />

                  <div className="relative">
                    <div className="absolute left-1.5 top-1 bottom-0 border-l-2 border-dashed border-muted"></div>
                    <div className="space-y-4">
                      {tracking.steps.map((step, index) => (
                        <div key={index} className="flex items-start gap-3">
                          {step.complete ? (
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                          ) : (
                            <Circle className="h-4 w-4 text-muted-foreground" />
                          )}
                          <div>
                            <p className={`text-sm ${step.complete ? "font-medium" : "text-muted-foreground"}`}>
                              {step.title}
                            </p>
                            {step.time && <p className="text-xs text-muted-foreground">{step.time}</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2 border-t p-4">
                  <Button variant="outline" className="flex-1" size="sm">
                    <Phone className="mr-2 h-3 w-3" />
                    Call
                  </Button>
                  <Button variant="outline" className="flex-1" size="sm">
                    <MessageCircle className="mr-2 h-3 w-3" />
                    Message
                  </Button>
                  <Button className="flex-1" size="sm">
                    <MapPin className="mr-2 h-3 w-3" />
                    Track on Map
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="history" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pastTrackings.map((tracking) => (
              <Card key={tracking.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{tracking.donationTitle}</h3>
                        <Badge variant="secondary" className="rounded-sm">
                          {tracking.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Tracking ID: {tracking.id} • {tracking.type}
                      </p>
                      <div className="mt-1 flex items-center gap-2">
                        <Clock className="h-3 w-3 text-muted-foreground" />
                        <p className="text-xs text-muted-foreground">{tracking.completedTime}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={tracking.donorAvatar} />
                        <AvatarFallback>{tracking.donorName[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-xs text-muted-foreground">From</p>
                        <p className="text-sm font-medium">{tracking.donorName}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t p-3">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href={`/tracking/${tracking.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

