import { Header } from "@/components/header"
import { AnnouncementBar } from "@/components/announcement-bar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CollectionsPage() {
  const collections = [
    {
      name: "Flower Bouquets",
      image: "/placeholder.svg?height=600&width=600",
      href: "/catalog",
    },
    {
      name: "Memorial Bouquets",
      image: "/placeholder.svg?height=600&width=600",
      href: "/catalog",
    },
    {
      name: "Mixed Bouquets",
      image: "/placeholder.svg?height=600&width=600",
      href: "/catalog",
    },
    {
      name: "Money Bouquets",
      image: "/placeholder.svg?height=600&width=600",
      href: "/catalog",
    },
  ]

  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Header />

      {/* Page Header */}
      <div className="bg-pink-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-6xl text-balance">Collections</h1>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
          {collections.map((collection, index) => (
            <Link key={index} href={collection.href} className="group relative overflow-hidden rounded-lg aspect-[4/3]">
              <img
                src={collection.image || "/placeholder.svg"}
                alt={collection.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-serif text-2xl mb-2 flex items-center gap-2">
                  {collection.name}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
