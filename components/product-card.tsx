"use client"

import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  sale: boolean
}

export function ProductCard({ product }: { product: Product }) {
  const router = useRouter()

  return (
    <div className="bg-pink-50 rounded-lg overflow-hidden group">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.sale && (
          <span className="absolute top-3 left-3 bg-white text-primary text-xs font-medium px-3 py-1 rounded-full">
            Sale
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-serif text-lg mb-2 text-primary">{product.name}</h3>
        <div className="flex items-center gap-2 mb-4">
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              KSh{product.originalPrice.toLocaleString()}
            </span>
          )}
          <span className="text-lg font-medium text-primary">KSh{product.price.toLocaleString()}</span>
        </div>
        <Button
          className="w-full bg-pink-100 text-primary border border-primary hover:bg-pink-200"
          variant="outline"
          onClick={() => router.push("/coming-soon")}
          type="button"
        >
          Add to cart
        </Button>
      </div>
    </div>
  )
}
