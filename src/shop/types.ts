export type Category = 'Women' | 'Men' | 'Accessories'

export type ProductType =
  | 'Accessories'
  | 'Cap'
  | 'Flares'
  | 'Hoodies'
  | 'Jackets'
  | 'Leggings'
  | 'Lifting Belt'
  | 'Shorts'
  | 'Tops'

export type Size = 'XXS' | 'XS' | 'S' | 'M' | 'L' | 'XL' | 'L-XL'

export type ProductColor = {
  name: string
  hex: string
}

export type Product = {
  id: string
  category: Category
  type: ProductType
  name: string
  subtitle: string
  price: number
  color: ProductColor
  sizes: Size[]
  imageHue: number
}

