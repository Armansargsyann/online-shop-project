import type { ProductColor, ProductType, Size } from '../types'

export type FiltersState = {
  selectedTypes: ProductType[]
  priceMin: number
  priceMax: number
  selectedColors: string[]
  selectedSizes: Size[]
}

export default function FiltersSidebar({
  productTypes,
  colors,
  sizes,
  priceMinLimit,
  priceMaxLimit,
  state,
  onChange,
}: {
  productTypes: ProductType[]
  colors: ProductColor[]
  sizes: Size[]
  priceMinLimit: number
  priceMaxLimit: number
  state: FiltersState
  onChange: (next: FiltersState) => void
}) {
  const toggleType = (type: ProductType) => {
    const nextSelected = state.selectedTypes.includes(type)
      ? state.selectedTypes.filter((t) => t !== type)
      : [...state.selectedTypes, type]
    onChange({ ...state, selectedTypes: nextSelected })
  }

  const allTypesChecked = state.selectedTypes.length === 0

  const updatePrice = (nextMin: number, nextMax: number) => {
    const min = Math.max(priceMinLimit, Math.min(nextMin, nextMax))
    const max = Math.min(priceMaxLimit, Math.max(nextMax, min))
    onChange({ ...state, priceMin: min, priceMax: max })
  }

  const toggleColor = (hex: string) => {
    const next = state.selectedColors.includes(hex)
      ? state.selectedColors.filter((c) => c !== hex)
      : [...state.selectedColors, hex]
    onChange({ ...state, selectedColors: next })
  }

  const toggleSize = (size: Size) => {
    const next = state.selectedSizes.includes(size)
      ? state.selectedSizes.filter((s) => s !== size)
      : [...state.selectedSizes, size]
    onChange({ ...state, selectedSizes: next })
  }

  const reset = () => {
    onChange({
      selectedTypes: [],
      priceMin: priceMinLimit,
      priceMax: priceMaxLimit,
      selectedColors: [],
      selectedSizes: [],
    })
  }

  return (
    <aside className="rounded-xl border border-slate-200 bg-white p-4" aria-label="Filters">
      <div className="flex items-center justify-between pb-3">
        <div className="text-sm font-bold uppercase tracking-wide text-slate-900">
          Filters
        </div>
        <button
          className="text-xs font-semibold uppercase tracking-wide text-blue-700 hover:text-blue-800"
          type="button"
          onClick={reset}
        >
          Reset
        </button>
      </div>

      <details className="border-t border-slate-200 py-3" open>
        <summary className="cursor-pointer list-none text-xs font-bold uppercase tracking-wide text-slate-800">
          Product type
        </summary>
        <div className="pt-3">
          <label className="flex items-center gap-2 py-1 text-sm text-slate-600">
            <input
              type="checkbox"
              checked={allTypesChecked}
              onChange={() => onChange({ ...state, selectedTypes: [] })}
            />
            <span>All</span>
          </label>
          {productTypes.map((type) => (
            <label key={type} className="flex items-center gap-2 py-1 text-sm text-slate-600">
              <input
                type="checkbox"
                checked={state.selectedTypes.includes(type)}
                onChange={() => toggleType(type)}
              />
              <span>{type}</span>
            </label>
          ))}
        </div>
      </details>

      <details className="border-t border-slate-200 py-3" open>
        <summary className="cursor-pointer list-none text-xs font-bold uppercase tracking-wide text-slate-800">
          Price
        </summary>
        <div className="pt-3">
          <div className="flex gap-2">
            <label className="inline-flex w-full items-center gap-1 rounded-md border border-slate-200 px-2 py-1.5">
              <span className="text-xs text-slate-500">$</span>
              <input
                className="w-full bg-transparent text-xs font-semibold text-slate-800 outline-none"
                type="number"
                inputMode="numeric"
                value={state.priceMin}
                min={priceMinLimit}
                max={state.priceMax}
                onChange={(e) => updatePrice(Number(e.target.value), state.priceMax)}
              />
            </label>
            <label className="inline-flex w-full items-center gap-1 rounded-md border border-slate-200 px-2 py-1.5">
              <span className="text-xs text-slate-500">$</span>
              <input
                className="w-full bg-transparent text-xs font-semibold text-slate-800 outline-none"
                type="number"
                inputMode="numeric"
                value={state.priceMax}
                min={state.priceMin}
                max={priceMaxLimit}
                onChange={(e) => updatePrice(state.priceMin, Number(e.target.value))}
              />
            </label>
          </div>

          <div className="relative mt-3 h-6" aria-label="Price range">
            <input
              className="pointer-events-none absolute inset-0 w-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:h-1 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-slate-200 [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:mt-[-4px] [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-slate-800"
              type="range"
              min={priceMinLimit}
              max={priceMaxLimit}
              value={state.priceMin}
              onChange={(e) => updatePrice(Number(e.target.value), state.priceMax)}
            />
            <input
              className="pointer-events-none absolute inset-0 w-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:h-1 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:mt-[-4px] [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-slate-800"
              type="range"
              min={priceMinLimit}
              max={priceMaxLimit}
              value={state.priceMax}
              onChange={(e) => updatePrice(state.priceMin, Number(e.target.value))}
            />
          </div>
        </div>
      </details>

      <details className="border-t border-slate-200 py-3" open>
        <summary className="cursor-pointer list-none text-xs font-bold uppercase tracking-wide text-slate-800">
          Color
        </summary>
        <div className="pt-3">
          <div className="flex flex-wrap gap-2">
            {colors.map((c) => (
              <button
                key={c.hex}
                className={`h-5 w-5 rounded-full border border-slate-200 ${
                  colorToClass(c.hex)
                } ${state.selectedColors.includes(c.hex) ? 'ring-2 ring-slate-900 ring-offset-2' : ''}`}
                type="button"
                aria-label={c.name}
                aria-pressed={state.selectedColors.includes(c.hex)}
                onClick={() => toggleColor(c.hex)}
              />
            ))}
          </div>
        </div>
      </details>

      <details className="border-t border-slate-200 py-3" open>
        <summary className="cursor-pointer list-none text-xs font-bold uppercase tracking-wide text-slate-800">
          Size
        </summary>
        <div className="pt-3">
          <div className="grid grid-cols-4 gap-2">
            {sizes.map((s) => (
              <button
                key={s}
                type="button"
                className={`rounded-md border px-0 py-2 text-xs font-semibold ${
                  state.selectedSizes.includes(s)
                    ? 'border-blue-700 bg-blue-700 text-white'
                    : 'border-slate-200 bg-white text-slate-700'
                }`}
                onClick={() => toggleSize(s)}
                aria-pressed={state.selectedSizes.includes(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </details>
    </aside>
  )
}

function colorToClass(hex: string) {
  switch (hex.toLowerCase()) {
    case '#111827':
    case '#0f172a':
      return 'bg-slate-900'
    case '#9ca3af':
    case '#4b5563':
    case '#d1d5db':
      return 'bg-slate-400'
    case '#ffffff':
    case '#f3f4f6':
    case '#e5e7eb':
      return 'bg-slate-100'
    case '#7dd3c7':
      return 'bg-emerald-300'
    case '#93c5fd':
      return 'bg-blue-300'
    case '#e7d3b0':
      return 'bg-amber-200'
    case '#1e3a8a':
      return 'bg-blue-900'
    default:
      return 'bg-slate-300'
  }
}
