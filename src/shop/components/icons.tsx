import type { SVGProps } from 'react'

export function HeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 21s-7-4.6-9.4-8.9C.6 8.2 2.3 5 5.7 4.3c2-.4 3.9.3 5.1 1.7 1.2-1.4 3.1-2.1 5.1-1.7C19.3 5 21 8.2 21.4 12.1 19 16.4 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function BagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.5 8.5V7.2c0-2.6 2-4.7 4.5-4.7s4.5 2.1 4.5 4.7v1.3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M6.5 8.5h11l1.1 12.2a1.7 1.7 0 0 1-1.7 1.8H7.1a1.7 1.7 0 0 1-1.7-1.8L6.5 8.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M10.5 18.5a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M16.5 16.5 21 21"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

