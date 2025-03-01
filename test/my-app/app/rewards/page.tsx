import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Trophy, Star, Award, Gift, Target } from "lucide-react"

export default function Rewards() {
  const achievements = [
    {
      id: 1,
      title: "First Donation",
      description: "Complete your first food donation",
      progress: 100,
      completed: true,
      points: 50,
    },
    {
      id: 2,
      title: "Regular Contributor",
      description: "Donate food 5 times in a month",
      progress: 60,
      completed: false,
      points: 100,
    },
    {
      id: 3,
      title: "Food Waste Warrior",
      description: "Save 100kg of food from waste",
      progress: 75,
      completed: false,
      points: 200,
    },
  ]

  const rewards = [
    {
      id: 1,
      title: "Premium Badge",
      points: 500,
      type: "Badge",
    },
    {
      id: 2,
      title: "Featured Listing",
      points: 1000,
      type: "Feature",
    },
    {
      id: 3,
      title: "Partner Certificate",
      points: 2000,
      type: "Certificate",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Rewards & Achievements</h1>
          <p className="text-gray-600">Track your progress and earn rewards</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Achievements</CardTitle>
              <CardDescription>Complete tasks to earn points and badges</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {achievements.map((achievement) => (
                  <div key={achievement.id}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Trophy
                          className={`h-5 w-5 mr-2 ${achievement.completed ? "text-yellow-400" : "text-gray-400"}`}
                        />
                        <div>
                          <h3 className="font-semibold">{achievement.title}</h3>
                          <p className="text-sm text-gray-600">{achievement.description}</p>
                        </div>
                      </div>
                      <Badge variant={achievement.completed ? "default" : "secondary"}>{achievement.points} pts</Badge>
                    </div>
                    <Progress value={achievement.progress} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Available Rewards</CardTitle>
              <CardDescription>Redeem your points for rewards</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {rewards.map((reward) => (
                  <Card key={reward.id}>
                    <CardContent className="pt-6">
                      <div className="text-center">
                        {reward.type === "Badge" ? (
                          <Star className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                        ) : reward.type === "Feature" ? (
                          <Award className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                        ) : (
                          <Gift className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                        )}
                        <h3 className="font-semibold">{reward.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{reward.points} points</p>
                        <Button className="w-full" variant="outline">
                          Redeem
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Total Points</span>
                  <span className="font-bold text-blue-600">750</span>
                </div>
                <Progress value={75} />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Next Reward: 1000 points</p>
                <p className="text-sm text-gray-600">250 points to go!</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Monthly Goals</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Target className="h-5 w-5 text-blue-600 mr-2" />
                <div>
                  <p className="font-medium">Food Donations</p>
                  <p className="text-sm text-gray-600">3 of 5 completed</p>
                </div>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-blue-600 mr-2" />
                <div>
                  <p className="font-medium">Volunteer Hours</p>
                  <p className="text-sm text-gray-600">8 of 10 hours</p>
                </div>
              </div>
              <Button className="w-full">View All Goals</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

