import './globals.css'
import type { Viewport } from 'next'

export const metadata = {
  title: 'Sustainability From Waste to Wealth and Renewable Energy',
  description: 'Transforming communities through waste management, renewable energy, agriculture, and livelihood programs across Nigeria and Africa.',
}

// Missing entirely before this fix — without it, mobile browsers render
// the page at a ~980px desktop-width viewport and zoom the whole layout
// out to fit the screen, which is why the mobile nav showed the full
// desktop link row (wrapped, tiny) instead of the hamburger menu: the
// browser never believed the viewport was actually narrow enough to
// cross the md: breakpoint.
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}