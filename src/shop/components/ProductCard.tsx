import type { Product } from '../types'
import { Heart } from 'lucide-react'

export default function ProductCard({
  product,
  wished,
  onToggleWish,
}: {
  product: Product
  wished: boolean
  onToggleWish: (id: string) => void
}) {
  const toneClass = getToneClass(product.imageHue)

  return (
    <article className="flex flex-col gap-3">
      <div
        className={`relative aspect-[3/4] overflow-hidden rounded-xl border border-slate-200 ${toneClass}`}
        aria-label={product.name}
      >
        <button
          className={`absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border ${
            wished
              ? 'border-blue-700 bg-blue-700 text-white'
              : 'border-slate-200 bg-white/90 text-slate-800'
          }`}
          type="button"
          onClick={() => onToggleWish(product.id)}
          aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className="h-5 w-5" />
        </button>
      </div>
      <div className="text-left">
        <div className="text-xs font-extrabold uppercase tracking-wide">{product.name}</div>
        <div className="mt-1 text-xs text-slate-500">{product.subtitle}</div>
        <div className="mt-2 text-sm font-semibold">${product.price.toFixed(2)}</div>
      </div>
    </article>
  )
}

function getToneClass(hue: number) {
  if (hue < 60) return 'bg-gradient-to-br from-amber-100 to-slate-100'
  if (hue < 120) return 'bg-gradient-to-br from-lime-100 to-slate-100'
  if (hue < 180) return 'bg-gradient-to-br from-emerald-100 to-slate-100'
  if (hue < 240) return 'bg-gradient-to-br from-sky-100 to-slate-100'
  return 'bg-gradient-to-br from-indigo-100 to-slate-100'
}
