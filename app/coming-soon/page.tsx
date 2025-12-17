"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"

import { AnnouncementBar } from "@/components/announcement-bar"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"

export default function ComingSoonPage() {
  const searchParams = useSearchParams()
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "254714666190"

  const productParam = searchParams.get("product") || undefined
  const priceParam = searchParams.get("price") || undefined

  const numericPrice = priceParam ? Number(priceParam) : undefined
  const hasValidPrice = typeof numericPrice === "number" && Number.isFinite(numericPrice)

  const message = productParam
    ? `Hi, I'd like to order ${productParam}${hasValidPrice ? ` (KSh ${numericPrice.toLocaleString()})` : ""}. Please assist me.`
    : "Hi, I'd like to place an order. Please assist me."

  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Header />

      <main className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center bg-pink-50 rounded-xl border border-pink-100 p-10">
          <h1 className="font-serif text-5xl md:text-6xl text-primary mb-4 text-balance">Coming Soon</h1>
          <p className="text-lg text-muted-foreground mb-8">
            The shopping cart feature will be live soon. For now, you can continue browsing our bouquets.
          </p>

          <div className="mb-10">
            <p className="text-base text-primary mb-4">Reach us via Instagram or WhatsApp</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button
                asChild
                size="lg"
                className="h-14 text-base bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a
                  href="https://www.instagram.com/blossoms___nairobi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 text-base bg-white text-primary border-2 border-primary hover:bg-pink-100"
              >
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/catalog">Back to Catalog</Link>
            </Button>
            <Button asChild variant="outline" className="bg-pink-100 text-primary border border-primary hover:bg-pink-200">
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
