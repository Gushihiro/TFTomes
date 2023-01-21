import './globals.css'
import { Navbar } from '@/ui/Navbar'
import SideNav from '@/ui/SideNav'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en"> 
      <head />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
