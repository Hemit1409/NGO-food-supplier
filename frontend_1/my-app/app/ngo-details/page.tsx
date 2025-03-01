"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Globe, Clock, Calendar, Star } from "lucide-react"

export default function NGODetails() {
  const [activeTab, setActiveTab] = useState("about")

  const ngo = {
    id: 1,
    name: "Community Food Bank",
    logo: "/placeholder.svg?height=100&width=100",
    coverImage: "/placeholder.svg?height=300&width=1200",
    rating: 4.8,
    reviews: 124,
    address: "123 Main Street, Cityville, State 12345",
    phone: "(555) 123-4567",
    email: "contact@communityfoodbank.org",
    website: "www.communityfoodbank.org",
    hours: "Mon-Fri: 9AM-5PM, Sat: 10AM-2PM",
    founded: "2005",
    mission:
      "To alleviate hunger in our community by providing nutritious food to those in need through various programs and partnerships.",
    impact: [
      { label: "Meals Provided", value: "250,000+" },
      { label: "Families Served", value: "15,000+" },
      { label: "Volunteers", value: "500+" },
    ],
    programs: [
      {
        name: "Emergency Food Assistance",
        description: "Provides immediate food assistance to individuals and families facing food insecurity.",
      },
      {
        name: "Kids Backpack Program",
        description:
          "Supplies weekend meals for children who might otherwise go hungry when school meals are not available.",
      },
      {
        name: "Senior Food Box",
        description: "Delivers monthly food packages to low-income seniors to supplement their nutritional needs.",
      },
    ],
    upcomingEvents: [
      {
        name: "Food Drive",
        date: "March 15, 2025",
        time: "10:00 AM - 4:00 PM",
        location: "Central Park",
      },
      {
        name: "Volunteer Orientation",
        date: "March 20, 2025",
        time: "6:00 PM - 7:30 PM",
        location: "Community Center",
      },
    ],
    donationNeeds: [
      "Canned proteins (tuna, chicken, beans)",
      "Rice and pasta",
      "Peanut butter",
      "Canned fruits and vegetables",
      "Cereal and oatmeal",
    ],
  }

  return (
    <div className="pb-8">
      <div className="relative h-64 bg-gray-200">
        <img
          src={ngo.coverImage || "/placeholder.svg"}
          alt={`${ngo.name} cover`}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-6 flex items-center">
          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white">
            <img src={ngo.logo || "/placeholder.svg"} alt={ngo.name} className="w-full h-full object-cover" />
          </div>
          <div className="ml-4 text-white">
            <h1 className="text-2xl font-bold">{ngo.name}</h1>
            <div className="flex items-center">
              <Star size={16} className="text-yellow-400 fill-current" />
              <span className="ml-1">{ngo.rating}</span>
              <span className="ml-2 text-sm">({ngo.reviews} reviews)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-8">
        <div className="flex border-b mb-6">
          <button
            className={`px-4 py-2 font-medium ${activeTab === "about" ? "text-green-600 border-b-2 border-green-600" : "text-gray-600"}`}
            onClick={() => setActiveTab("about")}
          >
            About
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === "programs" ? "text-green-600 border-b-2 border-green-600" : "text-gray-600"}`}
            onClick={() => setActiveTab("programs")}
          >
            Programs
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === "events" ? "text-green-600 border-b-2 border-green-600" : "text-gray-600"}`}
            onClick={() => setActiveTab("events")}
          >
            Events
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === "needs" ? "text-green-600 border-b-2 border-green-600" : "text-gray-600"}`}
            onClick={() => setActiveTab("needs")}
          >
            Donation Needs
          </button>
        </div>

        {activeTab === "about" && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-700 mb-3">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin size={18} className="text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>{ngo.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={18} className="text-gray-500 mr-2 flex-shrink-0" />
                    <span>{ngo.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail size={18} className="text-gray-500 mr-2 flex-shrink-0" />
                    <span>{ngo.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Globe size={18} className="text-gray-500 mr-2 flex-shrink-0" />
                    <span>{ngo.website}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-700 mb-3">Hours & Information</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Clock size={18} className="text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>{ngo.hours}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={18} className="text-gray-500 mr-2 flex-shrink-0" />
                    <span>Founded in {ngo.founded}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-700 mb-3">Impact</h3>
                <div className="grid grid-cols-1 gap-3">
                  {ngo.impact.map((item, index) => (
                    <div key={index} className="text-center p-2 bg-gray-50 rounded">
                      <p className="text-2xl font-bold text-green-600">{item.value}</p>
                      <p className="text-sm text-gray-600">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-700">{ngo.mission}</p>
            </div>

            <div className="flex justify-center space-x-4">
              <button className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                Donate Now
              </button>
              <button className="px-6 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition-colors">
                Volunteer
              </button>
            </div>
          </div>
        )}

        {activeTab === "programs" && (
          <div className="space-y-6">
            {ngo.programs.map((program, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">{program.name}</h3>
                <p className="text-gray-700">{program.description}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "events" && (
          <div className="space-y-6">
            {ngo.upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm flex flex-col md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold mb-1">{event.name}</h3>
                  <div className="flex items-center text-gray-600 mb-1">
                    <Calendar size={16} className="mr-1" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-1">
                    <Clock size={16} className="mr-1" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={16} className="mr-1" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <button className="mt-4 md:mt-0 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                  Sign Up
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === "needs" && (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Current Donation Needs</h2>
            <ul className="list-disc pl-5 space-y-2">
              {ngo.donationNeeds.map((need, index) => (
                <li key={index} className="text-gray-700">
                  {need}
                </li>
              ))}
            </ul>
            <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
              Donate Items
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

