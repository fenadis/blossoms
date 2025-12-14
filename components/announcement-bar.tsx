"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const announcements = [
  "NEW ARRIVALS JUST LANDED",
  "FREE DELIVERY ON ORDERS OVER KSh 5,000",
  "SPECIAL VALENTINE'S DAY COLLECTION",
]

export function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const previous = () => {
    setCurrentIndex((prev) => (prev === 0 ? announcements.length - 1 : prev - 1))
  }

  const next = () => {
    setCurrentIndex((prev) => (prev === announcements.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="bg-pink-200 text-primary py-2 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <button onClick={previous} className="hover:opacity-70">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <p className="text-sm font-medium tracking-wide text-center flex-1">{announcements[currentIndex]}</p>
        <button onClick={next} className="hover:opacity-70">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
