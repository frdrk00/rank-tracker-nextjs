'use client'

import { signOut } from 'next-auth/react'

const LogoutLink = () => {
  return (
    <button
      onClick={() => signOut()}
      className="text-slate-500 hover:underline"
    >
      Logout &raquo;
    </button>
  )
}

export default LogoutLink
