import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { AnnouncementBar } from "@/components/announcement-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "Aster flowers",
      price: 3500.0,
      originalPrice: 4500.0,
      image: "/colorful-aster-flowers-bouquet.jpg",
      sale: true,
    },
    {
      id: 2,
      name: "baby's breath",
      price: 1200.0,
      originalPrice: 2000.0,
      image: "/yellow-roses-baby-breath-bouquet.jpg",
      sale: true,
    },
    {
      id: 3,
      name: "Babybreath bouquet",
      price: 4500.0,
      image: "/pink-baby-breath-bouquet-wrapped.jpg",
      sale: false,
    },
    {
      id: 4,
      name: "Becca bouquet",
      price: 3600.0,
      originalPrice: 4000.0,
      image: "/orange-roses-bouquet.jpg",
      sale: true,
    },
  ]

  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/pink-roses-background-romantic.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-4 text-balance">
            Wrapped in Beauty Sent with Love 💝
          </h1>
          <p className="text-lg md:text-xl mb-8 text-pretty">Make a day bright with some flowers.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Shop now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-pink-100/90 text-primary border-pink-200 hover:bg-pink-200/90"
            >
              Learn more
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl md:text-5xl mb-12 text-center text-balance">Featured products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              View all
            </Button>
          </div>
        </div>
      </section>

      {/* Poetic Text Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <p className="font-serif text-2xl md:text-3xl text-center text-balance italic text-primary/80">
            Petals whisper secrets of spring, a symphony of colors dancing in the breeze.
          </p>
        </div>
      </section>

      {/* Collection Preview */}
      <section
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/pink-cherry-blossoms-background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center px-4">
          <h2 className="font-serif text-5xl md:text-6xl mb-6 text-primary text-balance">Floral Elegance</h2>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            View collection
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div className="h-[400px] rounded-lg overflow-hidden">
              <img src="/vibrant-pink-magenta-flowers-close-up.jpg" alt="Beautiful flowers" className="w-full h-full object-cover" />
            </div>
            <div className="px-4">
              <h2 className="font-serif text-4xl md:text-5xl mb-6 text-balance">About us</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We are passionate about bringing nature's beauty into your life through our exquisite floral
                arrangements.
              </p>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Learn more</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="font-serif text-2xl md:text-3xl text-center leading-relaxed text-balance">
            We celebrate nature's artistry, offering stunning floral creations that brighten your world.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
