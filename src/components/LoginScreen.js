'use client'

import { signIn } from 'next-auth/react'
import DoubleHeader from './DoubleHeader'

const LoginScreen = () => {
  return (
    <div className="bg-white mt-8 max-w-md border border-blue-100 border-b-4 mx-auto rounded-lg shadow-lg text-center p-4 py-6">
      <DoubleHeader mainTitle="Welcome back" preTitle="Login to your account" />
      <button
        onClick={() =>
          signIn('google', { callbackUrl: 'http://localhost:3000/' })
        }
        className="inline-flex items-center mb-4 my-6 bg-indigo-500 text-white px-6 py-2 rounded-xl shadow-lg border border-indigo-700 border-b-4 hover:bg-indigo-400 gap-2"
      >
        <img
          className="w-4 invert"
          src="https://www.svgrepo.com/show/50809/google.svg"
          alt=""
        />
        Login with google
      </button>
    </div>
  )
}

export default LoginScreen
