import './globals.css'
import { Metadata } from 'next'

import {BsSearch} from "react-icons/bs"


export const metadata: Metadata = {
  title: 'Game-Fetcher',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body> <nav className="md:py-2 md:first-letter:first-line:px-3 flex justify-between sticky top-0 z-10 bg-gray-400">
              <header className="font-bold ">GAME FINDER </header>
              <div className="hidden">
                <input
                  className="border-green-400 border p-2 rounded-md"
                  placeholder="e.g Grand Theft Auto"
                  type="text"
                />
      
                <button className="ml-2">
                  <BsSearch className="" />
                </button>
              </div>
            </nav>
        {children}</body>
    </html>
  )
}
