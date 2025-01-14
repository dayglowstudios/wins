"use client"

import { useState, useMemo } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Trophy } from 'lucide-react'
import Link from 'next/link'

interface Win {
  title: string
  category: string
  time: string
  date: string
}

export default function CalendarView() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 0, 1)) // Start with January 2025
  const [wins, setWins] = useState<Win[]>([
    { title: "Completed AR presentation", category: "Work", time: "09:30 AM", date: "2025-01-13" },
    { title: "30-minute meditation", category: "Personal", time: "07:00 AM", date: "2025-01-15" },
    { title: "Optimized neural network", category: "Work", time: "11:45 AM", date: "2025-01-13" },
    { title: "VR fitness routine", category: "Personal", time: "08:00 AM", date: "2025-01-20" },
    { title: "Launched quantum app", category: "Tech", time: "02:30 PM", date: "2025-01-25" },
  ])

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const winsThisMonth = useMemo(() => {
    const year = currentDate.getFullYear()
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
    const datePrefix = `${year}-${month}-`
    return wins.filter(win => win.date.startsWith(datePrefix))
  }, [wins, currentDate])

  const winDays = useMemo(() => {
    return winsThisMonth.reduce((acc, win) => {
      const day = parseInt(win.date.split('-')[2])
      acc[day] = true
      return acc
    }, {} as Record<number, boolean>)
  }, [winsThisMonth])

  const renderDay = (day: number) => {
    const hasWin = winDays[day]
    return (
      <div key={day} className="w-10 h-10 flex items-center justify-center">
        {hasWin ? (
          <div className="w-3 h-3 bg-[#002FFF] rounded-full"></div>
        ) : (
          <span className="text-[#C6C6C6]">{day}</span>
        )}
      </div>
    )
  }

  return (
    <div className="relative w-full min-h-screen max-w-md mx-auto bg-[#000000] overflow-hidden">
      <header className="flex items-center justify-between mb-8 p-4 pt-[calc(env(safe-area-inset-top)+3rem)]">
        <Link href="/" passHref>
          <Button variant="ghost" size="icon" className="rounded-full">
            <ChevronLeft className="h-6 w-6 text-[#C6C6C6]" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-[#E0FF4F]">Win Calendar</h1>
        <div className="w-10"></div>
      </header>

      <Card className="bg-[#1A1A1A] text-[#C6C6C6] rounded-3xl p-6 mb-6 mx-4">
        <div className="flex items-center justify-between mb-4">
          <Button onClick={prevMonth} variant="ghost" size="icon" className="text-[#C6C6C6]">
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <h2 className="text-xl font-semibold">
            {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </h2>
          <Button onClick={nextMonth} variant="ghost" size="icon" className="text-[#C6C6C6]">
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
        <div className="grid grid-cols-7 gap-2 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center text-sm font-medium text-[#E0FF4F]">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: firstDayOfMonth }, (_, i) => (
            <div key={`empty-${i}`} className="w-10 h-10"></div>
          ))}
          {Array.from({ length: daysInMonth }, (_, i) => renderDay(i + 1))}
        </div>
      </Card>

      <Card className="bg-[#1A1A1A] text-[#C6C6C6] rounded-3xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-[#E0FF4F]">This Month's Wins</h2>
        <div className="space-y-4">
          {winsThisMonth.map((win, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{win.title}</p>
                <p className="text-sm text-[#C6C6C6]/70">{win.category}</p>
              </div>
              <p className="text-sm text-[#C6C6C6]/70">{new Date(win.date).getDate()}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="bg-[#1A1A1A] text-[#C6C6C6] rounded-3xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-[#E0FF4F]">Total Wins by Category</h2>
        <div className="space-y-4">
          {Object.entries(
            wins.reduce((acc, win) => {
              acc[win.category] = (acc[win.category] || 0) + 1
              return acc
            }, {} as Record<string, number>)
          ).map(([category, count]) => (
            <div key={category} className="flex items-center justify-between">
              <div className="flex items-center">
                <Trophy className="w-6 h-6 text-[#002FFF] mr-2" />
                <span>{category}</span>
              </div>
              <p className="text-2xl font-bold text-[#002FFF]">{count}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-4 border-t border-[#C6C6C6]/20">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">Total</span>
            <p className="text-3xl font-bold text-[#E0FF4F]">{wins.length}</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

