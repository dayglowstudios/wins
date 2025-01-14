"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Bell, Calendar, Plus, Settings, Trophy, Zap } from 'lucide-react'
import { WinEntryModal } from './components/WinEntryModal'
import { ReminderModal } from './components/ReminderModal'
import { NotificationsModal } from './components/NotificationsModal'
import Link from 'next/link'
import { calculateProductivityScore } from '../utils/calculateProductivityScore'
import { useWins } from './context/WinsContext'
import './globals.css'

interface Notification {
  id: string
  message: string
  timestamp: string
}

export default function DailyWins() {
  const [isWinModalOpen, setIsWinModalOpen] = useState(false)
  const [isReminderModalOpen, setIsReminderModalOpen] = useState(false)
  const [isNotificationsModalOpen, setIsNotificationsModalOpen] = useState(false)
  const [reminderMessage, setReminderMessage] = useState('')
  const { wins, addWin } = useWins()
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: '1', message: "Psst! That project you wrapped up? Totally win-worthy. Why not add it to your list?", timestamp: "2 hours ago" },
    { id: '2', message: "High five! You've knocked out 5 wins this week. Keep that momentum going!", timestamp: "1 day ago" },
  ])

  useEffect(() => {
    const timer = setTimeout(() => {
      setReminderMessage("Hey! Noticed you've been busy. Wanna take a sec to log some of those wins?")
      setIsReminderModalOpen(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handleAddWin = () => {
    setIsWinModalOpen(true)
  }

  const handleSubmitWin = (win: { title: string; description: string; category: string }) => {
    addWin({
      title: win.title,
      category: win.category,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      date: new Date().toISOString().slice(0, 10)
    })
  }

  const handleOpenNotifications = () => {
    setIsNotificationsModalOpen(true)
  }

  return (
    <div className="relative w-full h-screen max-w-md mx-auto bg-[#000000] overflow-hidden">
      <div className="h-full overflow-y-auto">
        <div className="p-4">
          {/* Header */}
          <header className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Trophy className="w-6 h-6 text-[#E0FF4F]" />
              <span className="text-xl font-semibold tracking-tight text-[#E0FF4F]">wins</span>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="rounded-full relative" onClick={handleOpenNotifications}>
                <Bell className="w-5 h-5 text-[#C6C6C6]" />
                {notifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#E0FF4F] rounded-full"></span>
                )}
              </Button>
              <Link href="/calendar" passHref>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Calendar className="w-5 h-5 text-[#C6C6C6]" />
                </Button>
              </Link>
              <Link href="/dashboard" passHref>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Settings className="w-5 h-5 text-[#C6C6C6]" />
                </Button>
              </Link>
            </div>
          </header>

          {/* Filter Ribbon */}
          <div className="sticky top-0 mb-8 -mx-4 bg-black/30 backdrop-blur-xl border-b border-white/5 z-10 overflow-x-auto touch-pan-x scrollbar-hide">
            <div className="flex gap-2 py-4 px-4 w-max">
              <Button 
                variant="secondary" 
                className="rounded-full bg-[#C6C6C6] text-black hover:bg-[#E0FF4F] hover:text-black transition-colors whitespace-nowrap px-6 h-12"
              >
                All Wins <span className="ml-2 text-black/70">{wins.length}</span>
              </Button>
              <Link href="/work" passHref>
                <Button 
                  variant="outline" 
                  className="rounded-full border border-zinc-800 bg-zinc-900 text-[#C6C6C6] hover:bg-[#E0FF4F] hover:text-black hover:border-transparent transition-colors whitespace-nowrap px-6 h-12"
                >
                  Work <span className="ml-2 text-[#C6C6C6]/70 group-hover:text-black/70">{wins.filter(w => w.category === 'Work').length}</span>
                </Button>
              </Link>
              <Link href="/personal" passHref>
                <Button 
                  variant="outline" 
                  className="rounded-full border border-zinc-800 bg-zinc-900 text-[#C6C6C6] hover:bg-[#E0FF4F] hover:text-black hover:border-transparent transition-colors whitespace-nowrap px-6 h-12"
                >
                  Personal <span className="ml-2 text-[#C6C6C6]/70 group-hover:text-black/70">{wins.filter(w => w.category === 'Personal').length}</span>
                </Button>
              </Link>
              <Link href="/tech" passHref>
                <Button 
                  variant="outline" 
                  className="rounded-full border border-zinc-800 bg-zinc-900 text-[#C6C6C6] hover:bg-[#E0FF4F] hover:text-black hover:border-transparent transition-colors whitespace-nowrap px-6 h-12"
                >
                  Tech <span className="ml-2 text-[#C6C6C6]/70 group-hover:text-black/70">{wins.filter(w => w.category === 'Tech').length}</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold mb-8 leading-tight tracking-tight text-[#C6C6C6]">Today's Achievements</h1>

          {/* Wins Section */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl text-[#C6C6C6]">Wins</h2>
              <Link href="/wins" passHref>
                <Button variant="ghost" className="text-sm text-[#E0FF4F]">
                  View All
                </Button>
              </Link>
            </div>

            {wins.map((win, index) => (
              <Card key={index} className={`${index % 2 === 0 ? 'bg-[#E0FF4F] text-black' : 'bg-[#002FFF] text-white'} rounded-3xl p-4 mb-4`}>
                <h3 className="text-xl font-semibold mb-2">{win.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-70">{win.category}</span>
                  <span className="text-sm opacity-70">{win.time}</span>
                </div>
              </Card>
            ))}
          </div>

          {/* Quote Section */}
          <div className="mb-4">
            <h2 className="text-xl mb-3 text-[#C6C6C6]">Daily Inspiration</h2>
            <Card className="bg-[#C6C6C6] text-black rounded-3xl p-6">
              <blockquote className="text-lg italic mb-2">
                "The most important thing is to try and inspire people so that they can be great in whatever they want to do."
              </blockquote>
              <footer className="text-right opacity-70">- Kobe Bryant</footer>
            </Card>
          </div>

          {/* Daily Summary Section */}
          <div className="mb-20">
            <h2 className="text-xl mb-3 text-[#C6C6C6]">Progress Dashboard</h2>
            <Card className="bg-[#B1B1B1] text-black rounded-3xl p-6">
              <div className="grid grid-cols-2 gap-6">
                {/* Current Streak */}
                <div className="bg-black/10 rounded-xl p-4 text-center">
                  <h4 className="text-sm font-medium mb-2">Win Streak</h4>
                  <p className="text-5xl font-bold text-[#E0FF4F]">21</p>
                  <p className="text-sm mt-1">days</p>
                </div>

                {/* Total Wins */}
                <Link href="/calendar" className="bg-black/10 rounded-xl p-4 text-center block hover:bg-black/20 transition-colors">
                  <h4 className="text-sm font-medium mb-2">Total Wins</h4>
                  <p className="text-5xl font-bold text-[#002FFF]">{wins.length}</p>
                  <p className="text-sm mt-1">wins</p>
                </Link>
              </div>
              <div className="mt-4 bg-black/10 rounded-xl p-4 text-center">
                <h4 className="text-sm font-medium mb-2">Productivity Score</h4>
                <div className="flex items-center justify-center">
                  <Zap className="w-6 h-6 text-[#E0FF4F] mr-2" />
                  <p className="text-3xl font-bold">{calculateProductivityScore(wins, 21)}</p>
                </div>
                <p className="text-sm mt-1">Based on win frequency, diversity, and streak</p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating Action Button - Positioned for mobile app screen */}
      <Button 
        className="absolute bottom-6 right-6 bg-[#E0FF4F] hover:bg-[#002FFF] hover:text-white text-black rounded-full h-14 w-14 shadow-lg flex items-center justify-center transition-colors z-10"
        size="icon"
        onClick={handleAddWin}
      >
        <Plus className="h-6 w-6" />
      </Button>

      <WinEntryModal
        isOpen={isWinModalOpen}
        onClose={() => setIsWinModalOpen(false)}
        onSubmit={handleSubmitWin}
      />

      <ReminderModal
        isOpen={isReminderModalOpen}
        onClose={() => setIsReminderModalOpen(false)}
        message={reminderMessage}
      />

      <NotificationsModal
        isOpen={isNotificationsModalOpen}
        onClose={() => setIsNotificationsModalOpen(false)}
        notifications={notifications}
      />
    </div>
  )
}

