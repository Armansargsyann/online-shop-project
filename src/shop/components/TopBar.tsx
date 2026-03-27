import { Link } from 'react-router-dom'

export default function TopBar() {
  return (
    <div className="border-b border-zinc-200 bg-zinc-100 text-[11px] text-zinc-600">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-4 px-4 py-2 lg:px-8">
        <nav className="flex flex-wrap items-center gap-4" aria-label="Top links">
          <Link to="#" className="transition-colors hover:text-zinc-900">
            Contact Us
          </Link>
          <Link to="#" className="transition-colors hover:text-zinc-900">
            About us
          </Link>
          <Link to="#" className="transition-colors hover:text-zinc-900">
            Privacy Policy
          </Link>
          <Link to="#" className="transition-colors hover:text-zinc-900">
            Blogs
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button className="transition-colors hover:text-zinc-900" type="button">
            English
          </button>
          <span>/</span>
          <button className="transition-colors hover:text-zinc-900" type="button">
            USD
          </button>
          <span>/</span>
          <Link to="/signup" className="transition-colors hover:text-zinc-900">
            Sign Up
          </Link>
          <span>/</span>
          <Link to="/signin" className="transition-colors hover:text-zinc-900">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}
