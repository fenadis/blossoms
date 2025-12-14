import { Header } from "@/components/header"
import { AnnouncementBar } from "@/components/announcement-bar"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"

export default function CatalogPage() {
  const products = [
    { id: 1, name: "White roses", price: 7500, originalPrice: 8000, image: "/white-roses-heart-bouquet.jpg", sale: true },
    { id: 2, name: "Rosé Reverie", price: 2000, originalPrice: 3000, image: "/pink-roses-mixed-bouquet.jpg", sale: true },
    { id: 3, name: "Red roses", price: 3000, originalPrice: 4000, image: "/red-roses-heart-wreath.jpg", sale: true },
    {
      id: 4,
      name: "Fire ball bouquet",
      price: 2500,
      originalPrice: 3000,
      image: "/orange-roses-heart-bouquet.jpg",
      sale: true,
    },
    { id: 5, name: "Becca bouquet", price: 3600, originalPrice: 4000, image: "/yellow-roses-bouquet-wrapped.jpg", sale: true },
    { id: 6, name: "Babybreath bouquet", price: 4500, image: "/pink-baby-breath-wrapped.jpg", sale: false },
    { id: 7, name: "baby's breath", price: 1200, originalPrice: 2000, image: "/yellow-roses-baby-breath.jpg", sale: true },
    { id: 8, name: "Aster flowers", price: 3500, originalPrice: 4500, image: "/colorful-aster-flowers.jpg", sale: true },
  ]

  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Header />

      {/* Page Header */}
      <div className="bg-pink-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-6xl mb-4 text-balance">Flower Bouquets</h1>
          <p className="text-lg text-muted-foreground">Single Flower Bouquets</p>
        </div>
      </div>

      {/* Filter and Products */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div className="flex gap-4 flex-wrap">
            <div>
              <label className="text-sm text-muted-foreground mr-2">Filter:</label>
              <select className="border border-border rounded-md px-3 py-1 bg-white">
                <option>Availability</option>
              </select>
            </div>
            <div>
              <select className="border border-border rounded-md px-3 py-1 bg-white">
                <option>Price</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <label className="text-sm text-muted-foreground">Sort by:</label>
            <select className="border border-border rounded-md px-3 py-1 bg-white">
              <option>Best selling</option>
            </select>
            <span className="text-sm text-muted-foreground">{products.length} products</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
