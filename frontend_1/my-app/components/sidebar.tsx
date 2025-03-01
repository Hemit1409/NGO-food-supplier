"use client"

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
import { useAuth } from "@/contexts/auth-context"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const { user, logout } = useAuth()
  
  // Default to donor if no user is found (shouldn't happen in practice)
  const userType = user?.role || "donor"
  
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
            {userType === "ngo" && (
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
            {userType === "ngo" && (
              <Button
                variant={pathname === "/donations" ? "secondary" : "ghost"}
                size="sm"
                className="w-full justify-start"
                asChild
              >
                <Link href="/donations">
                  <Heart className="mr-2 h-4 w-4" />
                  Donations (Food listing)
                </Link>
              </Button>
            )}
            {userType === "donor" && (
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
              variant={pathname === "/completed-donations" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/completed-donations">
                <Heart className="mr-2 h-4 w-4" />
                Completed Donations
              </Link>
            </Button>
            {userType === "ngo" && (
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
            {userType === "donor" && (
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
            <Button
              variant={pathname === "/scheduled-donations" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/scheduled-donations">
                <Calendar className="mr-2 h-4 w-4" />
                Scheduled Donations
              </Link>
            </Button>
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Community</h2>
          <div className="space-y-1">
            <Button
              variant={pathname === "/waste-analytics" ? "secondary" : "ghost"}
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
              variant={pathname === "/help-support" ? "secondary" : "ghost"}
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
              onClick={logout}
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