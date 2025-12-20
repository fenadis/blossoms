interface Product {
  id: number
  name: string
  image: string
  sale: boolean
}

export function SimpleProductCard({ product }: { product: Product }) {
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
      </div>
    </div>
  )
}
