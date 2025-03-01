import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell, Settings } from "lucide-react"
// import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      title: "New donation available",
      message: "A new food donation is available in your area.",
      time: "5 minutes ago",
    },
    {
      id: 2,
      title: "Pickup reminder",
      message: "Don't forget your scheduled pickup today at 2 PM.",
      time: "1 hour ago",
    },
    { id: 3, title: "Thank you note", message: "You received a thank you note from Food Bank A.", time: "1 day ago" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Notifications</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Recent Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {notifications.map((notification) => (
                <li key={notification.id} className="border-b pb-4 last:border-b-0">
                  <div className="flex items-start">
                    <Bell className="w-5 h-5 mr-2 mt-1 text-primary" />
                    <div>
                      <h3 className="font-semibold">{notification.title}</h3>
                      <p className="text-sm text-gray-600">{notification.message}</p>
                      <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="push-notifications">Push Notifications</Label>
              {/* <Switch id="push-notifications" /> */}
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="email-notifications">Email Notifications</Label>
              {/* <Switch id="email-notifications" /> */}
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="sms-notifications">SMS Notifications</Label>
              {/* <Switch id="sms-notifications" /> */}
            </div>
            <Button className="w-full">
              <Settings className="w-4 h-4 mr-2" />
              Manage Preferences
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

