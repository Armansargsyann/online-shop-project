import { useMemo, useState } from 'react'
import heroImage from '../assets/hero.png'
import MainHeader from './components/MainHeader'
import TopBar from './components/TopBar'
import { Heart } from 'lucide-react'
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
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <TopBar />
      <MainHeader query={query} onQueryChange={setQuery} />

      <main className="mx-auto w-full max-w-[1280px] px-4 pb-16 lg:px-8">
        <HeroSection />

        <section className="mt-10" aria-label="Best seller">
          <h2 className="text-3xl font-extrabold uppercase tracking-wide text-slate-900">
            Best Seller
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product, index) => (
              <ProductTile
                key={product.id}
                id={product.id}
                imageSrc={cardImages[index % cardImages.length]}
                name={product.name}
                subtitle={product.subtitle}
                price={product.price}
                wished={wishlist.has(product.id)}
                onToggleWish={toggleWish}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative mt-0 overflow-hidden bg-slate-200">
      <img
        src={heroImage}
        alt="Sport collection hero"
        className="h-[320px] w-full object-cover sm:h-[400px] lg:h-[460px]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-700/65 via-slate-600/25 to-transparent" />
      <div className="absolute inset-y-0 left-0 flex w-full max-w-[620px] items-center p-6 sm:p-10 lg:p-12">
        <div className="max-w-[420px] text-white">
          <h1 className="text-4xl font-extrabold uppercase tracking-wide sm:text-5xl lg:text-6xl">
            New Arrival!
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-100 sm:text-base">
            Lorem ipsum dolor sit amet consectetur. Arcu tempus nunc eleifend eu. Ut
            enim tristique in nam ornare.
          </p>
          <button
            type="button"
            className="mt-6 rounded-full bg-blue-600 px-8 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue-700"
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  )
}

function ProductTile({
  id,
  imageSrc,
  name,
  subtitle,
  price,
  wished,
  onToggleWish,
}: {
  id: string
  imageSrc: string
  name: string
  subtitle: string
  price: number
  wished: boolean
  onToggleWish: (id: string) => void
}) {
  return (
    <article className="bg-slate-100">
      <div className="relative overflow-hidden bg-slate-200">
        <img
          src={imageSrc}
          alt={name}
          className="h-[380px] w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-[420px]"
          loading="lazy"
        />
        <button
          type="button"
          onClick={() => onToggleWish(id)}
          aria-label={`Wishlist ${name}`}
          className={`absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border ${
            wished
              ? 'border-blue-700 bg-blue-700 text-white'
              : 'border-slate-300 bg-white/90 text-slate-700'
          }`}
        >
          <Heart className="h-5 w-5" />
        </button>
      </div>
      <div className="px-1 pb-1 pt-3">
        <h3 className="text-xs font-extrabold uppercase tracking-wide">{name}</h3>
        <p className="mt-1 text-xs text-slate-500">{subtitle}</p>
        <p className="mt-2 text-sm font-semibold">${price.toFixed(2)}</p>
      </div>
    </article>
  )
}
