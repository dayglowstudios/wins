"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

interface Win {
  id: string
  title: string
  category: string
  time: string
  date: string
}

interface WinsContextType {
  wins: Win[]
  addWin: (win: Omit<Win, 'id'>) => void
  fetchWins: () => Promise<void>
}

const WinsContext = createContext<WinsContextType | undefined>(undefined)

export const useWins = () => {
  const context = useContext(WinsContext)
  if (!context) {
    throw new Error('useWins must be used within a WinsProvider')
  }
  return context
}

export const WinsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wins, setWins] = useState<Win[]>([])

  const fetchWins = async () => {
    // In a real app, this would be an API call
    const mockWins = [
      { id: '1', title: "Completed AR presentation", category: "Work", time: "09:30 AM", date: "2025-06-15" },
      { id: '2', title: "30-minute meditation", category: "Personal", time: "07:00 AM", date: "2025-06-15" },
      { id: '3', title: "Optimized neural network", category: "Work", time: "11:45 AM", date: "2025-06-14" },
      { id: '4', title: "VR fitness routine", category: "Personal", time: "08:00 AM", date: "2025-06-20" },
      { id: '5', title: "Launched quantum app", category: "Tech", time: "02:30 PM", date: "2025-06-25" },
    ]
    setWins(mockWins)
  }

  const addWin = (win: Omit<Win, 'id'>) => {
    const newWin = {
      ...win,
      id: Date.now().toString(), // Use a more robust id generation in production
    }
    setWins(prevWins => [newWin, ...prevWins])
  }

  useEffect(() => {
    fetchWins()
  }, [])

  return (
    <WinsContext.Provider value={{ wins, addWin, fetchWins }}>
      {children}
    </WinsContext.Provider>
  )
}

