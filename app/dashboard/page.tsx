"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, User, Mail, Calendar, Zap } from 'lucide-react'
import Link from 'next/link'
import { calculateProductivityScore } from '../../utils/calculateProductivityScore'

export default function UserDashboard() {
  const [user, setUser] = useState({
    name: "Alex Johnson",
    email: "alex@example.com",
    joinDate: "2025-01-15",
  })

  const [wins, setWins] = useState([
    { title: "Completed AR presentation for client", category: "Work", time: "09:30 AM", date: "2025-06-15" },
    { title: "Achieved 30-minute meditation streak", category: "Personal", time: "07:00 AM", date: "2025-06-15" },
    { title: "Optimized neural network for project", category: "Work", time: "11:45 AM", date: "2025-06-14" },
    // Add more wins here to represent a 30-day period
  ])

  return (
    <div className="relative w-full min-h-screen max-w-md mx-auto bg-[#000000] overflow-hidden">
      <header className="flex items-center justify-between mb-8 p-4 pt-[calc(env(safe-area-inset-top)+3rem)]">
        <div className="flex items-center">
          <Link href="/" passHref>
            <Button variant="ghost" size="icon" className="mr-2">
              <ChevronLeft className="h-6 w-6 text-[#C6C6C6]" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-[#E0FF4F]">User Dashboard</h1>
        </div>
        <div className="flex items-center bg-[#E0FF4F] rounded-full px-3 py-1">
          <Zap className="w-4 h-4 text-black mr-1" />
          <span className="text-sm font-semibold text-black">{calculateProductivityScore(wins, 21)}</span>
        </div>
      </header>

      <Card className="bg-[#1A1A1A] text-[#C6C6C6] rounded-3xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-[#E0FF4F]">Account Information</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <User className="w-5 h-5 mr-3 text-[#E0FF4F]" />
            <span>{user.name}</span>
          </div>
          <div className="flex items-center">
            <Mail className="w-5 h-5 mr-3 text-[#E0FF4F]" />
            <span>{user.email}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-3 text-[#E0FF4F]" />
            <span>Joined {new Date(user.joinDate).toLocaleDateString()}</span>
          </div>
        </div>
      </Card>

      <Card className="bg-[#1A1A1A] text-[#C6C6C6] rounded-3xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-[#E0FF4F]">Account Actions</h2>
        <div className="space-y-4">
          <Button className="w-full bg-[#E0FF4F] text-black hover:bg-[#002FFF] hover:text-white transition-colors">
            Edit Profile
          </Button>
          <Button className="w-full bg-[#E0FF4F] text-black hover:bg-[#002FFF] hover:text-white transition-colors">
            Change Password
          </Button>
          <Button className="w-full bg-[#E0FF4F] text-black hover:bg-[#002FFF] hover:text-white transition-colors">
            Notification Settings
          </Button>
        </div>
      </Card>

      <Card className="bg-[#1A1A1A] text-[#C6C6C6] rounded-3xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-[#E0FF4F]">App Statistics</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-black/20 rounded-xl p-4 text-center">
            <h3 className="text-sm font-medium mb-2">Total Wins</h3>
            <p className="text-3xl font-bold text-[#E0FF4F]">{wins.length}</p>
          </div>
          <div className="bg-black/20 rounded-xl p-4 text-center">
            <h3 className="text-sm font-medium mb-2">Current Streak</h3>
            <p className="text-3xl font-bold text-[#002FFF]">21</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

