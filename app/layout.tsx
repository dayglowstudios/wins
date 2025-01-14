import "@/styles/globals.css"
import { Outfit } from 'next/font/google'
import { WinsProvider } from './context/WinsContext'

const outfit = Outfit({ subsets: ["latin"] })

export const metadata = {
  title: "Daily Wins",
  description: "Track your daily achievements and progress",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={outfit.className}>
        <WinsProvider>
          <div className="pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] bg-background">
            {children}
          </div>
        </WinsProvider>
      </body>
    </html>
  )
}



import './globals.css'