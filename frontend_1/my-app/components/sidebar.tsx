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

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
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
              variant={pathname === "/explore" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/explore">
                <Search className="mr-2 h-4 w-4" />
                Explore
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
            <Button
              variant={pathname === "/my-donations" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/my-donations">
                <Heart className="mr-2 h-4 w-4" />
                My Donations
              </Link>
            </Button>
            <Button
              variant={pathname === "/scheduled" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/scheduled">
                <Calendar className="mr-2 h-4 w-4" />
                Scheduled
              </Link>
            </Button>
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Community</h2>
          <div className="space-y-1">
            <Button
              variant={pathname === "/donors" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/donors">
                <Store className="mr-2 h-4 w-4" />
                Donors
              </Link>
            </Button>
            <Button
              variant={pathname === "/recipients" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/recipients">
                <Users className="mr-2 h-4 w-4" />
                Recipients
              </Link>
            </Button>
            <Button
              variant={pathname === "/businesses" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/businesses">
                <Store className="mr-2 h-4 w-4" />
                Small Businesses
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
            <Button
              variant={pathname === "/impact" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/impact">
                <TrendingUp className="mr-2 h-4 w-4" />
                Impact
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
              variant={pathname === "/messages" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/messages">
                <MessageSquare className="mr-2 h-4 w-4" />
                Messages
              </Link>
            </Button>
            <Button
              variant={pathname === "/settings" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/settings">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Link>
            </Button>
            <Button
              variant={pathname === "/help" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/help">
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

