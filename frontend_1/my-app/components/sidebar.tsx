"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Award,
  Bell,
  Calendar,
  Heart,
  HelpCircle,
  Home,
  ListFilter,
  LogOut,
  MapPin,
  MessageSquare,
  Plus,
  Search,
  Settings,
  Store,
  TrendingUp,
  User,
  Users,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  userType: "NGO" | "Donor";
}

export function Sidebar({ className, userType }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className={cn("pb-12 border-r", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Main</h2>
          <div className="space-y-1">
            <Button
              variant={pathname === "/" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Link>
            </Button>
            <Button
              variant={pathname === "/categories" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/categories">
                <ListFilter className="mr-2 h-4 w-4" />
                Categories
              </Link>
            </Button>
            {userType === "NGO" && (
              <Button
                variant={pathname === "/tracking" ? "secondary" : "ghost"}
                size="sm"
                className="w-full justify-start"
                asChild
              >
                <Link href="/tracking">
                  <MapPin className="mr-2 h-4 w-4" />
                  Tracking
                </Link>
              </Button>
            )}
            <Button
              variant={pathname === "/notifications" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/notifications">
                <Bell className="mr-2 h-4 w-4" />
                Notifications
              </Link>
            </Button>
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Donations</h2>
          <div className="space-y-1">
            {userType === "Donor" && (
              <Button
                variant={pathname === "/add-donation" ? "secondary" : "ghost"}
                size="sm"
                className="w-full justify-start"
                asChild
              >
                <Link href="/add-donation">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Donation
                </Link>
              </Button>
            )}
            <Button
              variant={pathname === "/my-donations" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/donation">
                <Heart className="mr-2 h-4 w-4" />
                Completed Donations
              </Link>
            </Button>
            {/* <Button
              variant={pathname === "/scheduled" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/scheduled">
                <Calendar className="mr-2 h-4 w-4" />
                Scheduled Donations
              </Link>
            </Button> */}
            {userType === "NGO" && (
              <Button
                variant={pathname === "/donor-details" ? "secondary" : "ghost"}
                size="sm"
                className="w-full justify-start"
                asChild
              >
                <Link href="/donor-details">
                  <Users className="mr-2 h-4 w-4" />
                  Donor Details
                </Link>
              </Button>
            )}
            {userType === "Donor" && (
              <Button
                variant={pathname === "/ngo-details" ? "secondary" : "ghost"}
                size="sm"
                className="w-full justify-start"
                asChild
              >
                <Link href="/ngo-details">
                  <Users className="mr-2 h-4 w-4" />
                  NGO Details
                </Link>
              </Button>
            )}
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Community</h2>
          <div className="space-y-1">
            <Button
              variant={pathname === "/waste-analysis" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/waste-analytics">
                <Store className="mr-2 h-4 w-4" />
                Waste Analytics
              </Link>
            </Button>
            <Button
              variant={pathname === "/rewards" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/rewards">
                <Award className="mr-2 h-4 w-4" />
                Rewards
              </Link>
            </Button>
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Account</h2>
          <div className="space-y-1">
            <Button
              variant={pathname === "/profile" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/profile">
                <User className="mr-2 h-4 w-4" />
                Profile
              </Link>
            </Button>
            <Button
              variant={pathname === "/help" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/help-support">
                <HelpCircle className="mr-2 h-4 w-4" />
                Help & Support
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-red-500 hover:text-red-500 hover:bg-red-50"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}