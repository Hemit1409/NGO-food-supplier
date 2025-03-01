"use client"

import { useState } from "react"
import { Calendar, Clock, MapPin, ChevronDown, ChevronUp, Filter } from "lucide-react"

export default function ScheduledDonations() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [filter, setFilter] = useState("all")

  const scheduledDonations = [
    {
      id: 1,
      name: "Weekly Bakery Donation",
      type: "Recurring",
      nextDate: "March 5, 2025",
      time: "9:00 AM - 10:00 AM",
      location: "Local Bakery, 456 Main St",
      items: [
        { name: "Bread", quantity: "20 loaves" },
        { name: "Pastries", quantity: "30 assorted" },
        { name: "Cookies", quantity: "5 dozen" },
      ],
      recipient: "Community Shelter",
      status: "confirmed",
      notes: "Please bring insulated bags for the pastries.",
    },
    {
      id: 2,
      name: "Monthly Grocery Donation",
      type: "Recurring",
      nextDate: "March 15, 2025",
      time: "2:00 PM - 3:00 PM",
      location: "Food Mart, 789 Oak Ave",
      items: [
        { name: "Canned Goods", quantity: "50 cans" },
        { name: "Rice", quantity: "25 lbs" },
        { name: "Pasta", quantity: "30 boxes" },
        { name: "Cereal", quantity: "15 boxes" },
      ],
      recipient: "Food Bank Central",
      status: "confirmed",
      notes: "Loading dock is in the back of the building.",
    },
    {
      id: 3,
      name: "Restaurant Surplus Donation",
      type: "One-time",
      nextDate: "March 8, 2025",
      time: "8:30 PM - 9:00 PM",
      location: "Gourmet Kitchen, 123 Pine St",
      items: [
        { name: "Prepared Meals", quantity: "15 containers" },
        { name: "Soup", quantity: "5 gallons" },
        { name: "Salad", quantity: "10 portions" },
      ],
      recipient: "Homeless Outreach Program",
      status: "pending",
      notes: "Food will be packaged and ready for pickup after closing.",
    },
    {
      id: 4,
      name: "Farm Fresh Produce",
      type: "Recurring",
      nextDate: "March 10, 2025",
      time: "7:00 AM - 8:00 AM",
      location: "Green Acres Farm, 567 Rural Route",
      items: [
        { name: "Seasonal Vegetables", quantity: "100 lbs" },
        { name: "Fruits", quantity: "50 lbs" },
        { name: "Eggs", quantity: "20 dozen" },
      ],
      recipient: "Multiple Recipients",
      status: "confirmed",
      notes: "Bring your own crates for transport.",
    },
    {
      id: 5,
      name: "School Cafeteria Donation",
      type: "One-time",
      nextDate: "March 20, 2025",
      time: "3:30 PM - 4:00 PM",
      location: "Lincoln High School, 890 Education Blvd",
      items: [
        { name: "Sandwiches", quantity: "40 packs" },
        { name: "Fruit Cups", quantity: "35 cups" },
        { name: "Milk", quantity: "30 cartons" },
      ],
      recipient: "Youth Center",
      status: "cancelled",
      notes: "End of semester surplus food donation.",
    },
  ]

  const filteredDonations = scheduledDonations.filter((donation) => {
    if (filter === "all") return true
    if (filter === "recurring" && donation.type === "Recurring") return true
    if (filter === "one-time" && donation.type === "One-time") return true
    if (filter === "confirmed" && donation.status === "confirmed") return true
    if (filter === "pending" && donation.status === "pending") return true
    if (filter === "cancelled" && donation.status === "cancelled") return true
    return false
  })

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Scheduled Donations</h1>
        <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
          Schedule New Donation
        </button>
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        <button
          className={`px-4 py-2 rounded-md whitespace-nowrap ${filter === "all" ? "bg-green-600 text-white" : "bg-gray-100"}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded-md whitespace-nowrap ${filter === "recurring" ? "bg-green-600 text-white" : "bg-gray-100"}`}
          onClick={() => setFilter("recurring")}
        >
          Recurring
        </button>
        <button
          className={`px-4 py-2 rounded-md whitespace-nowrap ${filter === "one-time" ? "bg-green-600 text-white" : "bg-gray-100"}`}
          onClick={() => setFilter("one-time")}
        >
          One-time
        </button>
        <button
          className={`px-4 py-2 rounded-md whitespace-nowrap ${filter === "confirmed" ? "bg-green-600 text-white" : "bg-gray-100"}`}
          onClick={() => setFilter("confirmed")}
        >
          Confirmed
        </button>
        <button
          className={`px-4 py-2 rounded-md whitespace-nowrap ${filter === "pending" ? "bg-green-600 text-white" : "bg-gray-100"}`}
          onClick={() => setFilter("pending")}
        >
          Pending
        </button>
        <button
          className={`px-4 py-2 rounded-md whitespace-nowrap ${filter === "cancelled" ? "bg-green-600 text-white" : "bg-gray-100"}`}
          onClick={() => setFilter("cancelled")}
        >
          Cancelled
        </button>
        <button className="p-2 bg-gray-100 rounded-md">
          <Filter size={20} />
        </button>
      </div>

      <div className="space-y-4">
        {filteredDonations.map((donation) => (
          <div key={donation.id} className="border rounded-lg overflow-hidden shadow-sm">
            <div
              className="p-4 cursor-pointer flex justify-between items-center"
              onClick={() => toggleExpand(donation.id)}
            >
              <div>
                <div className="flex items-center mb-1">
                  <span
                    className={`inline-block w-3 h-3 rounded-full mr-2 ${
                      donation.status === "confirmed"
                        ? "bg-green-500"
                        : donation.status === "pending"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                    }`}
                  ></span>
                  <h3 className="text-lg font-semibold">{donation.name}</h3>
                  <span className="ml-3 text-sm px-2 py-0.5 rounded-full bg-gray-100">{donation.type}</span>
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    <span>{donation.nextDate}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    <span>{donation.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-1" />
                    <span>{donation.location}</span>
                  </div>
                </div>
              </div>

              {expandedId === donation.id ? (
                <ChevronUp size={20} className="text-gray-500" />
              ) : (
                <ChevronDown size={20} className="text-gray-500" />
              )}
            </div>

            {expandedId === donation.id && (
              <div className="p-4 border-t bg-gray-50">
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Donation Items:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {donation.items.map((item, index) => (
                      <li key={index}>
                        {item.name}: {item.quantity}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium mb-1">Recipient:</h4>
                  <p>{donation.recipient}</p>
                </div>

                {donation.notes && (
                  <div className="mb-4">
                    <h4 className="font-medium mb-1">Notes:</h4>
                    <p className="text-gray-700">{donation.notes}</p>
                  </div>
                )}

                <div className="flex gap-2 mt-4">
                  <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                    Edit
                  </button>
                  {donation.status !== "cancelled" && (
                    <button className="px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-50 transition-colors">
                      Cancel
                    </button>
                  )}
                  {donation.type === "Recurring" && (
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors">
                      View All Occurrences
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

