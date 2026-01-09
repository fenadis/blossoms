"use client"

import { Header } from "@/components/header"
import { AnnouncementBar } from "@/components/announcement-bar"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { useState } from "react"

const categories = [
  {
    id: 'flower',
    name: 'Flower Bouquets',
    description: 'Elegant flower arrangements for all occasions',
    image: '/red.jpeg',
    products: [
      { id: 1, name: "White Roses", price: 7500, originalPrice: 8000, image: "/white rose.jpg", sale: true },
      { id: 2, name: "Layed bouquet ", price: 1200, originalPrice: 3000, image: "/pic1.jpg", sale: true },
      { id: 3, name: "Red Roses", price: 7500, originalPrice: 10500, image: "/red.jpeg", sale: true },
      { id: 4, name: "Fire Ball Bouquet", price: 3500, originalPrice: 4000, image: "/fireball.jpeg", sale: true },
      { id: 5, name: "Becca Bouquet", price: 3600, originalPrice: 5500, image: "/becca.jpeg", sale: true },
      { id: 6, name: "Baby's Breath", price: 2500, image: "/pic2.jpg", sale: false },
      { id: 7, name: "Asters flower", price: 2800, originalPrice: 3500, image: "/pic6.jpg", sale: true },
      { id: 8, name: "Lavender Dream", price: 3200, originalPrice: 3800, image: "/pic5.jpg", sale: true },
    ]
  },
  {
    id: 'memorial',
    name: 'Memorial Bouquets',
    description: 'Thoughtful arrangements to honor loved ones',
    image: '/Heart Funeral Flowers.jpeg',
    products: [
      { id: 9, name: "Memorial", price: 5500, image: "/memorial.jpeg", sale: false },
      { id: 10, name: "Cross Funeral Flowers", price: 6500, originalPrice: 7000, image: "/cross.jpeg", sale: true },
      { id: 11, name: "Heart Funeral Flowers", price: 4800, image: "/Heart Funeral Flowers.jpeg", sale: false },
      { id: 12, name: "Dad Tribute", price: 15000, originalPrice: 16000, image: "/dad tribute.jpeg", sale: true },
      { id: 13, name: "Serenity Wreath", price: 7000, image: "/serenity.jpeg", sale: false },
      { id: 14, name: "Forever Remembered", price: 13000, originalPrice: 17000, image: "/mum.jpeg", sale: true },
      { id: 15, name: "Heavenly Grace Casket", price: 6000, image: "/Heavenly Grace Casket.jpg", sale: false },
      { id: 16, name: "Tranquil Tribute", price: 4900, originalPrice: 5500, image: "/circle.jpg", sale: true },
    ]
  },
  {
    id: 'mixed',
    name: 'Mixed Bouquets',
    description: 'Vibrant mixed flower arrangements',
    image: '/mixed red roses and pink roses.jpeg',
    products: [
      { id: 17, name: "Rainbow Delight", price: 4500, originalPrice: 5200, image: "/new.jpeg", sale: true },
      { id: 18, name: "mixed red roses and pink roses", price: 4500, image: "/mixed red roses and pink roses.jpeg", sale: false },
      { id: 19, name: "Tropical Bouquet", price: 2500, originalPrice: 3000, image: "/tropical bouquet.jpeg", sale: true },
      { id: 20, name: "Garden Party", price: 6800, image: "/pin mixed with white .jpeg", sale: false },
      { id: 21, name: "Wildflower Medley", price: 6500, originalPrice: 10000, image: "/pinkish mixed.jpeg", sale: true },
      { id: 22, name: "Autumn Glow", price: 4100, image: "/money 8.jpeg", sale: false },
      { id: 23, name: "Pastel Dreams", price: 3700, originalPrice: 5000, image: "/money 6.jpeg", sale: true },
      { id: 24, name: "Sunset Serenade", price: 2500, image: "/mixed with red.jpeg", sale: false },
    ]
  },
  {
    id: 'money',
    name: 'Money Bouquets',
    description: 'Creative money gift arrangements',
    image: '/money 1.jpeg',
    products: [
      { id: 25, name: "Fortune Blossom", price: 10000, image: "/money.jpeg", sale: false },
      { id: 26, name: "Wealth Wreath", price: 15000, originalPrice: 17000, image: "/money 2.jpeg", sale: true },
      { id: 28, name: "Golden Touch", price: 18000, originalPrice: 20000, image: "/money 9.jpeg", sale: true },
      { id: 29, name: "Million Dollar Rose", price: 25000, image: "/money 1.jpeg", sale: false },
      { id: 30, name: "Prosperity Bouquet", price: 20000, originalPrice: 22000, image: "/money 2.jpeg", sale: true },
    ]
  }
]

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState('flower')
  const currentCategory = categories.find(cat => cat.id === activeCategory) || categories[0]

  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Header />

      {/* Page Header */}
      <div className="bg-pink-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-6xl mb-4 text-balance">Our Bouquet Collections</h1>
          <p className="text-lg text-muted-foreground">Choose from our wide variety of beautiful arrangements</p>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => (
            <div 
              key={category.id}
              className={`relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl cursor-pointer ${activeCategory === category.id ? 'ring-2 ring-pink-500' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white px-4 py-2 rounded-full font-medium text-pink-600">
                  View {category.name}
                </div>
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-serif text-xl font-medium">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.products.length} items</p>
              </div>
            </div>
          ))}
        </div>

        {/* Active Category Title */}
        <div className="mb-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-2">{currentCategory.name}</h2>
          <p className="text-muted-foreground">{currentCategory.description}</p>
        </div>

        {/* Filter and Sort */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div className="flex gap-4 flex-wrap">
            <div>
              <label className="text-sm text-muted-foreground mr-2">Filter:</label>
              <select className="border border-border rounded-md px-3 py-1 bg-white">
                <option>Availability</option>
                <option>In Stock</option>
                <option>On Sale</option>
              </select>
            </div>
            <div>
              <select className="border border-border rounded-md px-3 py-1 bg-white">
                <option>Price</option>
                <option>Low to High</option>
                <option>High to Low</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <label className="text-sm text-muted-foreground">Sort by:</label>
            <select className="border border-border rounded-md px-3 py-1 bg-white">
              <option>Best selling</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            <span className="text-sm text-muted-foreground">{currentCategory.products.length} products</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {currentCategory.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
