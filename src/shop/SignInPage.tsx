import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import TopBar from './components/TopBar'

type SignInFormInputs = {
  email: string
  password: string
}

export default function SignInPage() {
  const { register, handleSubmit } = useForm<SignInFormInputs>()

  const onSubmit = (data: SignInFormInputs) => {
    console.log('Sign In form submitted (fake)', data)
    // In a real app, you'd send data to your backend here
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-100 text-slate-900">
      <TopBar />
      <div className="flex flex-1 flex-col items-center justify-center p-4">
        <h1 className="mb-8 text-3xl font-bold text-slate-800">Welcome Back</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Email Address
            </label>
            <input
              type="email"
              {...register('email')}
              placeholder="you@example.com"
              className="w-full rounded-lg border border-slate-300 p-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              type="password"
              {...register('password')}
              placeholder="••••••••"
              className="w-full rounded-lg border border-slate-300 p-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 p-3 font-semibold text-white transition-colors duration-200 hover:bg-blue-800"
          >
            Sign In
          </button>
          <p className="mt-6 text-center text-sm text-slate-600">
            Don't have an account?{' '}
            <Link to="/signup" className="font-semibold text-blue-700 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
