import './globals.css'
import { Inter } from 'next/font/google'

import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import LoginScreen from './LoginScreen'

import Header from './Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rank Tracker',
  description: 'Track your website rankings in Google',
}

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions)
  // console.log('session: ', session.user.name)
  return (
    <html lang="en">
      <body className={inter.className}>
        {!session ? (
          <LoginScreen />
        ) : (
          <>
            <Header />
            {children}
          </>
        )}
      </body>
    </html>
  )
}
