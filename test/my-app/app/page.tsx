import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Utensils, MapPin, Clock, Star, Truck, Bell, Building, Map, BarChart2, MessageSquare, Users, BookOpen, Trophy 
} from "lucide-react";

const steps = [
  { title: "Find Donations", description: "Browse and request food donations", icon: Utensils },
  { title: "Schedule Pickup", description: "Arrange pickup and delivery", icon: Truck },
  { title: "Support Communities", description: "Ensure food reaches those in need", icon: Users }
];

const features = [
  { title: "Food Listings", description: "Browse available food donations", icon: Utensils, link: "/food-listings", buttonText: "View Listings" },
  { title: "Donor Profile", description: "Manage your donor profile", icon: MapPin, link: "/donor-profile", buttonText: "View Profile" },
  { title: "Donations", description: "Request and schedule donations", icon: Clock, link: "/donations", buttonText: "Manage Donations" },
  { title: "Ratings & Feedback", description: "View and leave ratings", icon: Star, link: "/ratings", buttonText: "View Ratings" },
  { title: "Logistics & Tracking", description: "Track food pickups and deliveries", icon: Truck, link: "/logistics", buttonText: "Track Orders" },
  { title: "Notifications", description: "Manage your alerts and updates", icon: Bell, link: "/notifications", buttonText: "View Notifications" },
  { title: "Business Support", description: "Support for small-scale businesses", icon: Building, link: "/business-support", buttonText: "Explore Support" },
  { title: "Food Map", description: "Find nearby food donations", icon: Map, link: "/food-map", buttonText: "Open Map" },
  { title: "Waste Analytics", description: "Track and analyze food waste", icon: BarChart2, link: "/waste-analytics", buttonText: "View Analytics" },
  { title: "Community Forum", description: "Connect with other users", icon: MessageSquare, link: "/community", buttonText: "Join Forum" },
  { title: "Volunteer Management", description: "Manage volunteer activities", icon: Users, link: "/volunteers", buttonText: "Manage Volunteers" },
  { title: "Educational Resources", description: "Learn about food waste reduction", icon: BookOpen, link: "/education", buttonText: "Explore Resources" },
  { title: "Rewards & Gamification", description: "Earn points and rewards", icon: Trophy, link: "/rewards", buttonText: "View Rewards" }
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative text-center py-20 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold mb-4">NGO Food Supplier</h1>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Bridging the gap between donors and communities to minimize food waste and support those in need.
          </p>
          <Link href="/signup">
            <Button size="lg" className="px-8 py-4 text-lg bg-white text-green-600 shadow-lg hover:scale-105 transition-transform">Get Started</Button>
          </Link>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="text-center my-16">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map(({ title, description, icon: Icon }, index) => (
            <Card key={index} className="p-6 shadow-md hover:shadow-xl transition-shadow transform hover:scale-105 bg-white rounded-lg">
              <Icon className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
              <CardDescription className="text-gray-600">{description}</CardDescription>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Features Section */}
      <section className="my-16">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Explore Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ title, description, icon: Icon, link, buttonText }, index) => (
            <Card key={index} className="p-6 shadow-md flex flex-col items-center text-center hover:shadow-xl transition-shadow transform hover:scale-105 bg-white rounded-lg">
              <Icon className="w-14 h-14 text-green-600 mb-4" />
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
                <CardDescription className="text-gray-600">{description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={link}>
                  <Button className="mt-4 bg-green-500 text-white hover:bg-green-600">{buttonText}</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}