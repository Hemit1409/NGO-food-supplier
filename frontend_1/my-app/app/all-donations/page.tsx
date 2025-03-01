"use client"

import { useState } from "react"
import { Search, Filter, MapPin, Clock, Star } from "lucide-react"

export default function AllDonations() {
  const [filter, setFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const donations = [
    {
      id: 1,
      name: "Fresh Vegetables Assortment",
      type: "Perishable",
      timeLeft: "4 hours left",
      distance: "0.8 miles away",
      source: "Green Market",
      rating: 4.9,
      image: "/placeholder.svg?height=150&width=250",
      category: "produce",
    },
    {
      id: 2,
      name: "Prepared Lunch Meals",
      type: "Cooked",
      timeLeft: "2 hours left",
      distance: "1.2 miles away",
      source: "City Cafe",
      rating: 4.7,
      image: "/placeholder.svg?height=150&width=250",
      category: "prepared",
    },
    {
      id: 3,
      name: "Canned Food Package",
      type: "Non-Perishable",
      timeLeft: "3 days left",
      distance: "0.5 miles away",
      source: "Community Pantry",
      rating: 4.8,
      image: "/placeholder.svg?height=150&width=250",
      category: "canned",
    },
    {
      id: 4,
      name: "Bakery Items",
      type: "Perishable",
      timeLeft: "6 hours left",
      distance: "1.5 miles away",
      source: "Local Bakery",
      rating: 4.6,
      image: "/placeholder.svg?height=150&width=250",
      category: "bakery",
    },
    {
      id: 5,
      name: "Dairy Products",
      type: "Perishable",
      timeLeft: "8 hours left",
      distance: "2.1 miles away",
      source: "Farm Fresh",
      rating: 4.5,
      image: "/placeholder.svg?height=150&width=250",
      category: "dairy",
    },
    {
      id: 6,
      name: "Dry Goods Package",
      type: "Non-Perishable",
      timeLeft: "5 days left",
      distance: "1.8 miles away",
      source: "Food Bank Central",
      rating: 4.7,
      image: "/placeholder.svg?height=150&width=250",
      category: "dry-goods",
    },
  ]

  const filteredDonations = donations.filter((donation) => {
    if (filter !== "all" && donation.category !== filter) return false
    if (searchQuery && !donation.name.toLowerCase().includes(searchQuery.toLowerCase())) return false
    return true
  })

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">All Donations</h1>

      <div className="flex items-center justify-between mb-6">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search for food donations..."
            className="pl-10 pr-4 py-2 border rounded-md w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex gap-2 ml-4">
          <button
            className={`px-4 py-2 rounded-md ${filter === "all" ? "bg-green-600 text-white" : "bg-gray-100"}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-md ${filter === "produce" ? "bg-green-600 text-white" : "bg-gray-100"}`}
            onClick={() => setFilter("produce")}
          >
            Produce
          </button>
          <button
            className={`px-4 py-2 rounded-md ${filter === "prepared" ? "bg-green-600 text-white" : "bg-gray-100"}`}
            onClick={() => setFilter("prepared")}
          >
            Prepared
          </button>
          <button
            className={`px-4 py-2 rounded-md ${filter === "canned" ? "bg-green-600 text-white" : "bg-gray-100"}`}
            onClick={() => setFilter("canned")}
          >
            Canned
          </button>
          <button className="p-2 bg-gray-100 rounded-md">
            <Filter size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDonations.map((donation) => (
          <div key={donation.id} className="border rounded-lg overflow-hidden shadow-sm">
            <img src={donation.image || "/placeholder.svg"} alt={donation.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div
                className="inline-block px-2 py-1 text-xs rounded-full mb-2"
                style={{
                  backgroundColor:
                    donation.type === "Perishable"
                      ? "#e6f7e6"
                      : donation.type === "Non-Perishable"
                        ? "#e6f0f7"
                        : "#f7f2e6",
                  color:
                    donation.type === "Perishable"
                      ? "#2e7d32"
                      : donation.type === "Non-Perishable"
                        ? "#1565c0"
                        : "#ef6c00",
                }}
              >
                {donation.type}
              </div>
              <h3 className="text-lg font-semibold mb-2">{donation.name}</h3>

              <div className="flex items-center text-gray-600 mb-1">
                <MapPin size={16} className="mr-1" />
                <span className="text-sm">{donation.distance}</span>
              </div>

              <div className="flex items-center text-gray-600 mb-2">
                <Clock size={16} className="mr-1" />
                <span className="text-sm">{donation.timeLeft}</span>
              </div>

              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                    {donation.source.charAt(0)}
                  </div>
                  <span>{donation.source}</span>
                </div>
                <div className="flex items-center">
                  <Star size={16} className="text-yellow-500 fill-current" />
                  <span className="ml-1">{donation.rating}</span>
                </div>
              </div>

              <button className="w-full mt-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                Request Donation
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

