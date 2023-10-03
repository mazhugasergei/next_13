import './style/style.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Notes App',
  description: 'Created by Markus Wedler',
}

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <nav>
            <h1 className="title">Notes</h1>
            <div className="buttons">
              <Link href="/" className="btn">Home</Link>
              <Link href="/create" className="btn">Create</Link>
            </div>
          </nav>
          { children }
        </main>
      </body>
    </html>
  )
}