"use client"

import { useState, useEffect } from "react"
import { Award, Star, Trophy, Target, Calendar, ArrowUp, Gift, Check, Lock } from "lucide-react"

export default function RewardsAchievements() {
  const [activeTab, setActiveTab] = useState("rewards")
  const [progress, setProgress] = useState(65)
  const [level, setLevel] = useState(3)
  const [points, setPoints] = useState(650)
  const [showBadgeDetails, setShowBadgeDetails] = useState<number | null>(null)

  // Simulate progress increase for demo purposes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress((prev) => Math.min(prev + 1, 100))
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [progress])

  const rewards = [
    {
      id: 1,
      name: "10% Discount at Green Market",
      points: 200,
      description: "Get 10% off your next purchase at Green Market grocery store.",
      expiryDate: "April 30, 2025",
      redeemed: false,
      sponsor: "Green Market",
      sponsorLogo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Free Coffee at City Cafe",
      points: 150,
      description: "Enjoy a free coffee of your choice at City Cafe.",
      expiryDate: "March 31, 2025",
      redeemed: true,
      sponsor: "City Cafe",
      sponsorLogo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Food4Good Tote Bag",
      points: 300,
      description: "Eco-friendly tote bag with Food4Good logo.",
      expiryDate: "None",
      redeemed: false,
      sponsor: "Food4Good",
      sponsorLogo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "Volunteer Recognition Certificate",
      points: 500,
      description: "Digital certificate recognizing your contribution to reducing food waste.",
      expiryDate: "None",
      redeemed: false,
      sponsor: "Food4Good",
      sponsorLogo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      name: "Featured Donor Spotlight",
      points: 1000,
      description: "Get featured on our website and social media as a top contributor.",
      expiryDate: "None",
      redeemed: false,
      sponsor: "Food4Good",
      sponsorLogo: "/placeholder.svg?height=40&width=40",
    },
  ]

  const achievements = [
    {
      id: 1,
      name: "First Donation",
      description: "Made your first food donation",
      icon: <Gift size={24} className="text-green-600" />,
      completed: true,
      date: "January 15, 2025",
      points: 50,
    },
    {
      id: 2,
      name: "Regular Contributor",
      description: "Made 5 donations",
      icon: <Calendar size={24} className="text-green-600" />,
      completed: true,
      date: "February 10, 2025",
      points: 100,
    },
    {
      id: 3,
      name: "Waste Warrior",
      description: "Saved 100 lbs of food from waste",
      icon: <Target size={24} className="text-green-600" />,
      completed: true,
      date: "February 28, 2025",
      points: 150,
    },
    {
      id: 4,
      name: "Donation Streak",
      description: "Donated for 3 consecutive weeks",
      icon: <ArrowUp size={24} className="text-green-600" />,
      completed: false,
      progress: 2,
      total: 3,
      points: 200,
    },
    {
      id: 5,
      name: "Variety Donor",
      description: "Donated 5 different types of food",
      icon: <Star size={24} className="text-green-600" />,
      completed: false,
      progress: 3,
      total: 5,
      points: 150,
    },
    {
      id: 6,
      name: "Community Champion",
      description: "Donated to 10 different organizations",
      icon: <Trophy size={24} className="text-green-600" />,
      completed: false,
      progress: 4,
      total: 10,
      points: 300,
    },
  ]

  const badges = [
    {
      id: 1,
      name: "Newcomer",
      description: "Welcome to the Food4Good community!",
      icon: <Star size={32} className="text-green-600" />,
      level: 1,
      unlocked: true,
      criteria: "Join Food4Good and create your profile",
      benefits: ["Access to basic donation features", "Ability to browse available donations"],
    },
    {
      id: 2,
      name: "Active Donor",
      description: "You're making a difference with regular donations",
      icon: <Gift size={32} className="text-green-600" />,
      level: 2,
      unlocked: true,
      criteria: "Make at least 5 donations",
      benefits: ["Priority pickup for high-demand items", "Access to donor-only events"],
    },
    {
      id: 3,
      name: "Food Rescue Hero",
      description: "Your efforts are significantly reducing food waste",
      icon: <Award size={32} className="text-green-600" />,
      level: 3,
      unlocked: true,
      criteria: "Save at least 100 lbs of food from waste",
      benefits: ["Featured on the Food Rescue leaderboard", "Exclusive rewards from partner businesses"],
    },
    {
      id: 4,
      name: "Sustainability Champion",
      description: "Your consistent efforts are creating lasting impact",
      icon: <Trophy size={32} className="text-green-600" />,
      level: 4,
      unlocked: false,
      criteria: "Maintain regular donations for 3 months and save 500+ lbs of food",
      benefits: ["Recognition on our website", "Invitation to annual sustainability gala"],
    },
    {
      id: 5,
      name: "Community Leader",
      description: "You're inspiring others and leading by example",
      icon: <Trophy size={32} className="text-green-600" />,
      level: 5,
      unlocked: false,
      criteria: "Donate to 15+ organizations and recruit 3 new donors",
      benefits: ["Input on platform features", "Opportunity to share your story in our newsletter"],
    },
  ]

  const nextLevelPoints = 1000
  const pointsToNextLevel = nextLevelPoints - points

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Rewards & Achievements</h1>

      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <Trophy size={32} className="text-green-600" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold">
                {level}
              </div>
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold">Level {level}</h2>
              <p className="text-gray-600">{points} points earned</p>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="flex justify-between text-sm mb-1">
              <span>Progress to Level {level + 1}</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">{pointsToNextLevel} more points needed for next level</p>
          </div>
        </div>
      </div>

      <div className="flex border-b mb-6">
        <button
          className={`px-4 py-2 font-medium ${activeTab === "rewards" ? "text-green-600 border-b-2 border-green-600" : "text-gray-600"}`}
          onClick={() => setActiveTab("rewards")}
        >
          Rewards
        </button>
        <button
          className={`px-4 py-2 font-medium ${activeTab === "achievements" ? "text-green-600 border-b-2 border-green-600" : "text-gray-600"}`}
          onClick={() => setActiveTab("achievements")}
        >
          Achievements
        </button>
        <button
          className={`px-4 py-2 font-medium ${activeTab === "badges" ? "text-green-600 border-b-2 border-green-600" : "text-gray-600"}`}
          onClick={() => setActiveTab("badges")}
        >
          Badges
        </button>
      </div>

      {activeTab === "rewards" && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Available Rewards</h2>
            <div className="flex items-center">
              <Gift size={18} className="text-green-600 mr-1" />
              <span className="font-semibold">{points} points available</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rewards.map((reward) => (
              <div key={reward.id} className={`border rounded-lg p-4 ${reward.redeemed ? "bg-gray-50" : "bg-white"}`}>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold">{reward.name}</h3>
                  <div className="flex items-center bg-green-100 px-2 py-1 rounded-full text-sm text-green-700">
                    <Gift size={14} className="mr-1" />
                    <span>{reward.points} pts</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-3">{reward.description}</p>

                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="w-6 h-6 rounded-full overflow-hidden mr-1">
                    <img
                      src={reward.sponsorLogo || "/placeholder.svg"}
                      alt={reward.sponsor}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span>Sponsored by {reward.sponsor}</span>
                </div>

                {reward.expiryDate !== "None" && (
                  <p className="text-sm text-gray-500 mb-4">Expires: {reward.expiryDate}</p>
                )}

                {reward.redeemed ? (
                  <button
                    className="w-full py-2 bg-gray-300 text-gray-600 rounded-md flex items-center justify-center"
                    disabled
                  >
                    <Check size={16} className="mr-1" />
                    Redeemed
                  </button>
                ) : (
                  <button
                    className={`w-full py-2 rounded-md flex items-center justify-center ${
                      points >= reward.points
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : "bg-gray-100 text-gray-400"
                    }`}
                    disabled={points < reward.points}
                  >
                    {points >= reward.points ? "Redeem Reward" : `Need ${reward.points - points} more points`}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "achievements" && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Your Achievements</h2>

          <div className="space-y-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`border rounded-lg p-4 ${achievement.completed ? "bg-white" : "bg-gray-50"}`}
              >
                <div className="flex items-start">
                  <div className={`p-2 rounded-full ${achievement.completed ? "bg-green-100" : "bg-gray-200"}`}>
                    {achievement.icon}
                  </div>

                  <div className="ml-4 flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{achievement.name}</h3>
                        <p className="text-gray-600">{achievement.description}</p>
                      </div>
                      <div className="flex items-center bg-green-100 px-2 py-1 rounded-full text-sm text-green-700">
                        <Star size={14} className="mr-1" />
                        <span>{achievement.points} pts</span>
                      </div>
                    </div>

                    {achievement.completed ? (
                      <div className="mt-2 flex items-center text-green-600">
                        <Check size={16} className="mr-1" />
                        <span>Completed on {achievement.date}</span>
                      </div>
                    ) : (
                      <div className="mt-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span>
                            Progress: {achievement.progress} of {achievement.total}
                          </span>
                          <span>{Math.round((achievement.progress / achievement.total) * 100)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-600 h-2 rounded-full"
                            style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "badges" && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Your Badges</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {badges.map((badge) => (
              <div
                key={badge.id}
                className={`border rounded-lg p-4 text-center cursor-pointer transition-transform hover:scale-105 ${
                  badge.unlocked ? "bg-white" : "bg-gray-50"
                }`}
                onClick={() => setShowBadgeDetails(badge.id)}
              >
                <div className="relative mx-auto w-16 h-16 mb-2">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      badge.unlocked ? "bg-green-100" : "bg-gray-200"
                    }`}
                  >
                    {badge.unlocked ? badge.icon : <Lock size={24} className="text-gray-400" />}
                  </div>

                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-xs font-bold">
                    {badge.level}
                  </div>
                </div>

                <h3 className="font-semibold">{badge.name}</h3>
                <p className="text-xs text-gray-600 mt-1">{badge.unlocked ? badge.description : "Locked"}</p>
              </div>
            ))}
          </div>

          {showBadgeDetails !== null && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-10">
              <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                {badges.find((b) => b.id === showBadgeDetails) && (
                  <>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center">
                        <div
                          className={`p-2 rounded-full ${
                            badges.find((b) => b.id === showBadgeDetails)?.unlocked ? "bg-green-100" : "bg-gray-200"
                          }`}
                        >
                          {badges.find((b) => b.id === showBadgeDetails)?.icon}
                        </div>
                        <div className="ml-3">
                          <h3 className="font-bold text-lg">{badges.find((b) => b.id === showBadgeDetails)?.name}</h3>
                          <p className="text-sm text-gray-600">
                            Level {badges.find((b) => b.id === showBadgeDetails)?.level}
                          </p>
                        </div>
                      </div>
                      <button className="text-gray-500 hover:text-gray-700" onClick={() => setShowBadgeDetails(null)}>
                        ✕
                      </button>
                    </div>

                    <p className="text-gray-700 mb-4">{badges.find((b) => b.id === showBadgeDetails)?.description}</p>

                    <div className="mb-4">
                      <h4 className="font-medium mb-2">How to earn:</h4>
                      <p className="text-gray-700">{badges.find((b) => b.id === showBadgeDetails)?.criteria}</p>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {badges
                          .find((b) => b.id === showBadgeDetails)
                          ?.benefits.map((benefit, index) => (
                            <li key={index} className="text-gray-700">
                              {benefit}
                            </li>
                          ))}
                      </ul>
                    </div>

                    <button
                      className="w-full mt-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                      onClick={() => setShowBadgeDetails(null)}
                    >
                      Close
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

