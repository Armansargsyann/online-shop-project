import { BagIcon, HeartIcon, SearchIcon } from './icons'

export default function MainHeader({
  query,
  onQueryChange,
}: {
  query: string
  onQueryChange: (next: string) => void
}) {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-5 px-4 py-3 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        <nav
          className="flex items-center justify-center gap-8 lg:justify-start"
          aria-label="Primary"
        >
          <button
            className="text-xs font-medium tracking-[0.08em] text-zinc-800 transition-colors hover:text-zinc-500"
            type="button"
          >
            WOMEN
          </button>
          <button
            className="text-xs font-medium tracking-[0.08em] text-zinc-800 transition-colors hover:text-zinc-500"
            type="button"
          >
            MEN
          </button>
          <button
            className="text-xs font-medium tracking-[0.08em] text-zinc-800 transition-colors hover:text-zinc-500"
            type="button"
          >
            ACCESSORIES
          </button>
        </nav>

        <div
          className="text-center text-4xl font-black leading-none tracking-tight text-zinc-900"
          aria-label="Logo"
        >
          LOGO
        </div>

        <div className="flex items-center justify-center gap-2 lg:justify-end">
          <label
            className="inline-flex min-w-[220px] items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-3 py-2 text-zinc-500 lg:min-w-[260px]"
            aria-label="Search"
          >
            <span className="inline-flex" aria-hidden="true">
              <SearchIcon width={18} height={18} />
            </span>
            <input
              className="w-full bg-transparent text-sm text-zinc-700 outline-none placeholder:text-zinc-400"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Search"
            />
          </label>

          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-zinc-700 transition-colors hover:bg-zinc-100"
            type="button"
            aria-label="Wishlist"
          >
            <HeartIcon width={20} height={20} />
          </button>
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-zinc-700 transition-colors hover:bg-zinc-100"
            type="button"
            aria-label="Cart"
          >
            <BagIcon width={20} height={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
