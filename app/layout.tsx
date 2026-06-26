import './globals.css'

export const metadata = {
  title: 'Sustainability From Waste to Wealth and Renewable Energy',
  description: 'Transforming communities through waste management, renewable energy, agriculture, and livelihood programs across Nigeria and Africa.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}