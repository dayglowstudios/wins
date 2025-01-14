"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, Zap } from 'lucide-react'
import Link from 'next/link'
import { calculateProductivityScore } from '../../utils/calculateProductivityScore';

export default function WinsPage() {
  const [wins, setWins] = useState([
    { title: "Completed AR presentation for client", category: "Work", time: "09:30 AM", date: "2025-06-15" },
    { title: "Achieved 30-minute meditation streak", category: "Personal", time: "07:00 AM", date: "2025-06-15" },
    { title: "Optimized neural network for project", category: "Work", time: "02:00 PM", date: "2025-06-14" },
    { title: "Cooked a meal using lab-grown meat", category: "Personal", time: "06:30 PM", date: "2025-06-14" },
    { title: "Completed 15-minute VR fitness routine", category: "Personal", time: "08:00 AM", date: "2025-06-13" },
  ])

  return (
    <div className="relative w-full min-h-screen max-w-md mx-auto bg-[#000000] p-4">
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Link href="/" passHref>
            <Button variant="ghost" size="icon" className="mr-2">
              <ChevronLeft className="h-6 w-6 text-[#C6C6C6]" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-[#E0FF4F]">All Wins</h1>
        </div>
        <div className="flex items-center bg-[#E0FF4F] rounded-full px-3 py-1">
          <Zap className="w-4 h-4 text-black mr-1" />
          <span className="text-sm font-semibold text-black">{calculateProductivityScore(wins, 21)}</span>
        </div>
      </header>

      <div className="space-y-6">
        {Object.entries(groupWinsByDate(wins)).map(([date, dateWins]) => (
          <div key={date}>
            <h2 className="text-xl font-semibold mb-3 text-[#C6C6C6]">{formatDate(date)}</h2>
            {dateWins.map((win, index) => (
              <Card key={index} className={`${index % 2 === 0 ? 'bg-[#E0FF4F] text-black' : 'bg-[#002FFF] text-white'} rounded-3xl p-4 mb-4`}>
                <h3 className="text-xl font-semibold mb-2">{win.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-70">{win.category}</span>
                  <span className="text-sm opacity-70">{win.time}</span>
                </div>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function groupWinsByDate(wins) {
  return wins.reduce((groups, win) => {
    const date = win.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(win);
    return groups;
  }, {});
}

function formatDate(dateString) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

