"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Calendar, Star, Package, Clock, ChevronRight } from "lucide-react"

export default function DonorDetails() {
  const [activeTab, setActiveTab] = useState("profile")

  const donor = {
    id: 1,
    name: "Green Market",
    logo: "/placeholder.svg?height=100&width=100",
    coverImage: "/placeholder.svg?height=300&width=1200",
    type: "Business",
    category: "Grocery Store",
    rating: 4.9,
    donationsMade: 156,
    address: "789 Market Street, Cityville, State 12345",
    phone: "(555) 987-6543",
    email: "contact@greenmarket.com",
    website: "www.greenmarket.com",
    joinedDate: "January 2023",
    bio: "Green Market is a local grocery store committed to reducing food waste and supporting our community. We specialize in fresh, locally-sourced produce and organic foods.",
    impact: {
      totalDonations: 156,
      mealsDonated: 3750,
      wasteReduced: "2,500 lbs",
      carbonSaved: "4.2 tons",
    },
    recentDonations: [
      {
        id: 101,
        name: "Fresh Vegetables Assortment",
        date: "February 28, 2025",
        recipient: "Community Food Bank",
        items: ["Carrots", "Potatoes", "Onions", "Lettuce"],
        quantity: "50 lbs",
      },
      {
        id: 102,
        name: "Bakery Items",
        date: "February 25, 2025",
        recipient: "Homeless Shelter",
        items: ["Bread", "Pastries", "Muffins"],
        quantity: "30 items",
      },
      {
        id: 103,
        name: "Dairy Products",
        date: "February 20, 2025",
        recipient: "Family Support Center",
        items: ["Milk", "Yogurt", "Cheese"],
        quantity: "25 items",
      },
    ],
    scheduledDonations: [
      {
        id: 201,
        name: "Weekly Produce Donation",
        nextDate: "March 7, 2025",
        time: "9:00 AM",
        recipient: "Community Food Bank",
      },
      {
        id: 202,
        name: "Bakery Items",
        nextDate: "March 4, 2025",
        time: "5:00 PM",
        recipient: "Homeless Shelter",
      },
    ],
    badges: [
      { name: "Consistent Donor", description: "Donated regularly for 6+ months" },
      { name: "Waste Reducer", description: "Saved 1,000+ lbs of food from waste" },
      { name: "Community Champion", description: "Supported 10+ different organizations" },
    ],
  }

  return (
    <div className="pb-8">
      <div className="relative h-64 bg-gray-200">
        <img
          src={donor.coverImage || "/placeholder.svg"}
          alt={`${donor.name} cover`}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-6 flex items-center">
          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white">
            <img src={donor.logo || "/placeholder.svg"} alt={donor.name} className="w-full h-full object-cover" />
          </div>
          <div className="ml-4 text-white">
            <h1 className="text-2xl font-bold">{donor.name}</h1>
            <div className="flex items-center">
              <span className="text-sm bg-white/20 px-2 py-0.5 rounded-full">{donor.type}</span>
              <span className="mx-2">•</span>
              <span className="text-sm">{donor.category}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-8">
        <div className="flex border-b mb-6">
          <button
            className={`px-4 py-2 font-medium ${activeTab === "profile" ? "text-green-600 border-b-2 border-green-600" : "text-gray-600"}`}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === "donations" ? "text-green-600 border-b-2 border-green-600" : "text-gray-600"}`}
            onClick={() => setActiveTab("donations")}
          >
            Donations
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === "impact" ? "text-green-600 border-b-2 border-green-600" : "text-gray-600"}`}
            onClick={() => setActiveTab("impact")}
          >
            Impact
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === "badges" ? "text-green-600 border-b-2 border-green-600" : "text-gray-600"}`}
            onClick={() => setActiveTab("badges")}
          >
            Badges
          </button>
        </div>

        {activeTab === "profile" && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-700 mb-3">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin size={18} className="text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>{donor.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={18} className="text-gray-500 mr-2 flex-shrink-0" />
                    <span>{donor.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail size={18} className="text-gray-500 mr-2 flex-shrink-0" />
                    <span>{donor.email}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-700 mb-3">Donor Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Calendar size={18} className="text-gray-500 mr-2 flex-shrink-0" />
                    <span>Member since {donor.joinedDate}</span>
                  </div>
                  <div className="flex items-center">
                    <Star size={18} className="text-gray-500 mr-2 flex-shrink-0" />
                    <span>Rating: {donor.rating}/5.0</span>
                  </div>
                  <div className="flex items-center">
                    <Package size={18} className="text-gray-500 mr-2 flex-shrink-0" />
                    <span>{donor.donationsMade} donations made</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-700 mb-3">Upcoming Donations</h3>
                {donor.scheduledDonations.length > 0 ? (
                  <div className="space-y-3">
                    {donor.scheduledDonations.map((donation) => (
                      <div key={donation.id} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                        <div>
                          <p className="font-medium">{donation.name}</p>
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar size={14} className="mr-1" />
                            <span>{donation.nextDate}</span>
                            <span className="mx-1">•</span>
                            <Clock size={14} className="mr-1" />
                            <span>{donation.time}</span>
                          </div>
                        </div>
                        <ChevronRight size={16} className="text-gray-400" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No upcoming donations scheduled</p>
                )}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h2 className="text-xl font-semibold mb-4">About</h2>
              <p className="text-gray-700">{donor.bio}</p>
            </div>
          </div>
        )}

        {activeTab === "donations" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Recent Donations</h2>
            <div className="space-y-4">
              {donor.recentDonations.map((donation) => (
                <div key={donation.id} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{donation.name}</h3>
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <Calendar size={14} className="mr-1" />
                        <span>{donation.date}</span>
                      </div>
                      <p className="mt-2">
                        <span className="font-medium">Recipient:</span> {donation.recipient}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="font-medium">{donation.quantity}</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm font-medium mb-1">Items:</p>
                    <div className="flex flex-wrap gap-2">
                      {donation.items.map((item, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 rounded-full text-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <button className="px-4 py-2 text-green-600 hover:underline">View All Donations</button>
            </div>
          </div>
        )}

        {activeTab === "impact" && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Donation Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <p className="text-3xl font-bold text-green-600">{donor.impact.totalDonations}</p>
                <p className="text-gray-600">Total Donations</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <p className="text-3xl font-bold text-green-600">{donor.impact.mealsDonated}</p>
                <p className="text-gray-600">Meals Donated</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <p className="text-3xl font-bold text-green-600">{donor.impact.wasteReduced}</p>
                <p className="text-gray-600">Food Waste Reduced</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <p className="text-3xl font-bold text-green-600">{donor.impact.carbonSaved}</p>
                <p className="text-gray-600">Carbon Emissions Saved</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Impact Visualization</h3>
              <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                <p className="text-gray-500">Impact chart visualization would go here</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "badges" && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Achievement Badges</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {donor.badges.map((badge, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-green-100 rounded-full flex items-center justify-center">
                    <Star size={32} className="text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-1">{badge.name}</h3>
                  <p className="text-sm text-gray-600">{badge.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

