"use client"

import dynamic from "next/dynamic"

// Dynamically import the component with search params to avoid SSR issues
const ComingSoonContent = dynamic(() => import("./coming-soon-content"), {
  ssr: false,
  loading: () => {
    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center bg-pink-50 rounded-xl border border-pink-100 p-10">
            <h1 className="font-serif text-5xl md:text-6xl text-primary mb-4 text-balance">Coming Soon</h1>
            <p className="text-lg text-muted-foreground mb-8">Loading...</p>
          </div>
        </div>
      </div>
    )
  }
})

export default function ComingSoonPage() {
  return <ComingSoonContent />
}
