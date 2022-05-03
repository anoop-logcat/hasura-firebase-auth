import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuth } from '../../providers/AuthProvider'

const Login = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await login(email, password)
      router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section className="bg-indigo-900 h-screen flex flex-col items-center justify-center space-y-5">
      <div className="px-5 py-8 bg-white rounded-none shadow-xl sm:rounded-lg sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
        <h1 className="mb-5 text-lg font-semibold text-left text-gray-900">
          Log in to your account
        </h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <label className="block">
            <span className="block mb-1 text-sm font-medium text-gray-700">
              Your Email
            </span>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              type="email"
              placeholder="farazpatankar@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="block">
            <span className="block mb-1 text-sm font-medium text-gray-700">
              Your Password
            </span>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              type="password"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            Sign in
          </button>
        </form>
      </div>
      <div className="text-sm text-center text-gray-400">
        <Link href="/forgot-password">
          <a className="text-indigo-200 underline hover:text-white">
            Forgot password
          </a>
        </Link>
      </div>
    </section>
  )
}

export default Login
