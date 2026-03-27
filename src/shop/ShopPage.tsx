import { useMemo, useState } from 'react'
import heroImage from '../assets/hero.png'
import MainHeader from './components/MainHeader'
import TopBar from './components/TopBar'
import { HeartIcon } from './components/icons'
import { PRODUCTS } from './mockProducts'

const cardImages = [
  'https://images.unsplash.com/photo-1565693413579-8d5cde9c4a85?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=80',
]

export default function ShopPage() {
  const [query, setQuery] = useState('')
  const [wishlist, setWishlist] = useState<Set<string>>(() => new Set())

  const featuredProducts = useMemo(() => {
    const q = query.trim().toLowerCase()
    return PRODUCTS.filter((p) => {
      if (q.length === 0) return true
      return `${p.name} ${p.subtitle} ${p.type}`.toLowerCase().includes(q)
    }).slice(0, 4)
  }, [query])

  const toggleWish = (id: string) => {
    setWishlist((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900">
      <TopBar />
      <MainHeader query={query} onQueryChange={setQuery} />

      <main className="mx-auto w-full max-w-[1280px] px-4 pb-16 lg:px-8">
        <section className="relative mt-0 overflow-hidden bg-zinc-200">
          <img
            src={heroImage}
            alt="Sport collection hero"
            className="h-[360px] w-full object-cover sm:h-[420px] lg:h-[460px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-500/60 via-slate-500/30 to-transparent" />
          <div className="absolute inset-y-0 left-0 flex w-full max-w-[620px] items-center p-8 sm:p-12">
            <div className="max-w-[420px] text-white">
              <h1 className="text-4xl font-extrabold uppercase tracking-wide sm:text-6xl">
                New Arrival!
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-zinc-100 sm:text-base">
                Lorem ipsum dolor sit amet consectetur. Arcu tempus nunc eleifend eu.
                Ut enim tristique in nam ornare.
              </p>
              <button
                type="button"
                className="mt-6 rounded-full bg-white px-8 py-3 text-xs font-bold uppercase tracking-wider text-zinc-900 transition-transform hover:scale-[1.03]"
              >
                Shop Now
              </button>
            </div>
          </div>
        </section>

        <section className="mt-10" aria-label="Best seller">
          <h2 className="text-3xl font-extrabold uppercase tracking-wide text-zinc-900">
            Best Seller
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product, index) => (
              <article key={product.id} className="bg-zinc-100">
                <div className="relative overflow-hidden bg-zinc-200">
                  <img
                    src={cardImages[index % cardImages.length]}
                    alt={product.name}
                    className="h-[420px] w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <button
                    type="button"
                    onClick={() => toggleWish(product.id)}
                    aria-label={`Wishlist ${product.name}`}
                    className={`absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border text-zinc-700 ${
                      wishlist.has(product.id)
                        ? 'border-zinc-900 bg-zinc-900 text-white'
                        : 'border-zinc-300 bg-white/90'
                    }`}
                  >
                    <HeartIcon width={18} height={18} />
                  </button>
                </div>
                <div className="px-1 pb-1 pt-3">
                  <h3 className="text-xs font-extrabold uppercase tracking-wide">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-500">{product.subtitle}</p>
                  <p className="mt-2 text-sm font-semibold">${product.price.toFixed(2)}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
