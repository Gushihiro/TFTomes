import { Navbar } from '@/ui/Navbar'
import SideNav from '@/ui/SideNav'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navbar />
        <div className="flex flex-row">
          {children}
        </div>
      </body>
    </html>
  )
}
