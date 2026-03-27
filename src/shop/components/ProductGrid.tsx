import type { Product } from '../types'
import ProductCard from './ProductCard'

export default function ProductGrid({
  products,
  wishlist,
  onToggleWish,
}: {
  products: Product[]
  wishlist: Set<string>
  onToggleWish: (id: string) => void
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
      {products.map((p) => (
        <div key={p.id} role="listitem">
          <ProductCard
            product={p}
            wished={wishlist.has(p.id)}
            onToggleWish={onToggleWish}
          />
        </div>
      ))}
    </div>
  )
}
