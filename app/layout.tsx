import './style/style.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Notes App',
  description: 'Created by Markus Wedler',
}

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <main>
          <nav>
            <h1 className="title">Notes</h1>
            <div className="buttons">
              <Link href="/" className="btn transparent">Home</Link>
              <Link href="/create" className="btn transparent">Create</Link>
            </div>
          </nav>
          { children }
        </main>
      </body>
    </html>
  )
}