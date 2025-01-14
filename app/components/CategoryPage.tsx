"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { useWins } from '../context/WinsContext'

interface Win {
  title: string
  category: string
  time: string
  date: string
}

interface CategoryPageProps {
  category: string
}

export function CategoryPage({ category }: CategoryPageProps) {
  const { wins } = useWins()
  const filteredWins = wins.filter(win => win.category === category)

  return (
    <div className="relative w-full min-h-screen max-w-md mx-auto bg-[#000000] p-4">
      <header className="flex items-center justify-between mb-8">
        <Link href="/" passHref>
          <Button variant="ghost" size="icon" className="rounded-full">
            <ChevronLeft className="h-6 w-6 text-[#C6C6C6]" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-[#E0FF4F]">{category} Wins</h1>
        <div className="w-10"></div>
      </header>

      <div className="space-y-4">
        {filteredWins.map((win, index) => (
          <Card key={index} className={index % 2 === 0 ? 'bg-[#E0FF4F] text-black' : 'bg-[#002FFF] text-white'}>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{win.title}</h3>
              <div className="flex items-center justify-between">
                <span className="text-sm opacity-70">{win.date}</span>
                <span className="text-sm opacity-70">{win.time}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredWins.length === 0 && (
        <p className="text-center text-[#C6C6C6] mt-8">No wins in this category yet. Keep pushing!</p>
      )}
    </div>
  )
}

