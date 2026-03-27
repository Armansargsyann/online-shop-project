import type { CSSProperties } from 'react'
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
    <aside className="filters" aria-label="Filters">
      <div className="filtersHeader">
        <div className="filtersTitle">Filters</div>
        <button className="linkBtn" type="button" onClick={reset}>
          Reset
        </button>
      </div>

      <details className="filterGroup" open>
        <summary className="filterSummary">Product type</summary>
        <div className="filterBody">
          <label className="checkRow">
            <input
              type="checkbox"
              checked={allTypesChecked}
              onChange={() => onChange({ ...state, selectedTypes: [] })}
            />
            <span>All</span>
          </label>
          {productTypes.map((type) => (
            <label key={type} className="checkRow">
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

      <details className="filterGroup" open>
        <summary className="filterSummary">Price</summary>
        <div className="filterBody">
          <div className="priceInputs">
            <label className="miniInput">
              <span>$</span>
              <input
                type="number"
                inputMode="numeric"
                value={state.priceMin}
                min={priceMinLimit}
                max={state.priceMax}
                onChange={(e) => updatePrice(Number(e.target.value), state.priceMax)}
              />
            </label>
            <label className="miniInput">
              <span>$</span>
              <input
                type="number"
                inputMode="numeric"
                value={state.priceMax}
                min={state.priceMin}
                max={priceMaxLimit}
                onChange={(e) => updatePrice(state.priceMin, Number(e.target.value))}
              />
            </label>
          </div>

          <div className="rangeWrap" aria-label="Price range">
            <input
              className="range"
              type="range"
              min={priceMinLimit}
              max={priceMaxLimit}
              value={state.priceMin}
              onChange={(e) => updatePrice(Number(e.target.value), state.priceMax)}
            />
            <input
              className="range"
              type="range"
              min={priceMinLimit}
              max={priceMaxLimit}
              value={state.priceMax}
              onChange={(e) => updatePrice(state.priceMin, Number(e.target.value))}
            />
          </div>
        </div>
      </details>

      <details className="filterGroup" open>
        <summary className="filterSummary">Color</summary>
        <div className="filterBody">
          <div className="colorRow">
            {colors.map((c) => (
              <button
                key={c.hex}
                className="colorDot"
                type="button"
                aria-label={c.name}
                aria-pressed={state.selectedColors.includes(c.hex)}
                onClick={() => toggleColor(c.hex)}
                style={
                  {
                    backgroundColor: c.hex,
                    outlineColor: state.selectedColors.includes(c.hex)
                      ? '#111827'
                      : 'transparent',
                  } as CSSProperties
                }
              />
            ))}
          </div>
        </div>
      </details>

      <details className="filterGroup" open>
        <summary className="filterSummary">Size</summary>
        <div className="filterBody">
          <div className="sizeGrid">
            {sizes.map((s) => (
              <button
                key={s}
                type="button"
                className={
                  state.selectedSizes.includes(s) ? 'sizeBtn sizeBtnOn' : 'sizeBtn'
                }
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
