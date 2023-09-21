import LogoutLink from '@/components/LogoutLink'
import { authOptions } from './api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

const Header = async () => {
  const session = await getServerSession(authOptions)
  const user = session?.user

  return (
    <header className="max-w-lg mx-auto my-4 flex items-center justify-between">
      <a
        className="text-3xl font-bold bg-gradient-to-r to-blue-600 from-indigo-900 text-transparent bg-clip-text"
        href=""
      >
        RankTracker
      </a>
      <div className="flex items-center gap-2 bg-slate-300 p-1 rounded-full">
        <img
          src={user?.image}
          alt="Profile Image"
          className="h-12 rounded-full"
        />
        <div className="pr-4 leading-5">
          <h3 className="font-bold">{user?.name}</h3>
          <LogoutLink />
        </div>
      </div>
    </header>
  )
}

export default Header
