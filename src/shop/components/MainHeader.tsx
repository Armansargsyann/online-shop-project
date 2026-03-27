import { Menu, Search, ShoppingBag, X, Heart } from 'lucide-react'
import { useState } from 'react'

export default function MainHeader({
  query,
  onQueryChange,
}: {
  query: string
  onQueryChange: (next: string) => void
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = ['WOMEN', 'MEN', 'ACCESSORIES']

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-3 px-4 py-3 lg:px-8">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <div
          className="text-center text-4xl font-black leading-none tracking-tight text-slate-900"
          aria-label="Logo"
        >
          LOGO
        </div>

        <div className="flex items-center justify-end gap-2">
          <label
            className="hidden min-w-[250px] items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-slate-500 md:inline-flex"
            aria-label="Search"
          >
            <span className="inline-flex" aria-hidden="true">
              <Search className="h-5 w-5" />
            </span>
            <input
              className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Search"
            />
          </label>

          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-700 transition-colors hover:bg-slate-100"
            type="button"
            aria-label="Wishlist"
          >
            <Heart className="h-5 w-5" />
          </button>
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-700 transition-colors hover:bg-slate-100"
            type="button"
            aria-label="Cart"
          >
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1280px] px-4 pb-3 md:hidden lg:px-8">
        <label
          className="inline-flex w-full items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-slate-500"
          aria-label="Search products"
        >
          <Search className="h-5 w-5" />
          <input
            className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search products"
          />
        </label>
      </div>

      <nav
        className={`border-t border-slate-200 bg-white md:border-t-0 ${
          menuOpen ? 'block' : 'hidden md:block'
        }`}
        aria-label="Primary"
      >
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-1 px-4 py-2 md:flex-row md:items-center md:gap-8 md:py-3 lg:px-8">
          {navItems.map((item) => (
            <button
              key={item}
              className="rounded-md px-3 py-2 text-left text-xs font-semibold tracking-[0.08em] text-slate-800 transition-colors hover:bg-slate-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-600"
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
      </nav>
    </header>
  )
}
