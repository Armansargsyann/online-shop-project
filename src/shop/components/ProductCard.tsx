import type { CSSProperties } from 'react'
import type { Product } from '../types'
import { HeartIcon } from './icons'

export default function ProductCard({
  product,
  wished,
  onToggleWish,
}: {
  product: Product
  wished: boolean
  onToggleWish: (id: string) => void
}) {
  return (
    <article className="productCard">
      <div
        className="productImage"
        style={{ '--hue': String(product.imageHue) } as CSSProperties}
        aria-label={product.name}
      >
        <button
          className={wished ? 'wishBtn wishBtnOn' : 'wishBtn'}
          type="button"
          onClick={() => onToggleWish(product.id)}
          aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <HeartIcon width={18} height={18} />
        </button>
      </div>
      <div className="productMeta">
        <div className="productName">{product.name}</div>
        <div className="productSub">{product.subtitle}</div>
        <div className="productPrice">${product.price.toFixed(2)}</div>
      </div>
    </article>
  )
}

