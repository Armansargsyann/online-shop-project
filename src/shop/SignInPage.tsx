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
    <div className="shop flex flex-col min-h-screen">
      <TopBar />
      <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 p-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Welcome Back</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 w-full max-w-md">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input type="email" {...register('email')} placeholder="you@example.com" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent" />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input type="password" {...register('password')} placeholder="••••••••" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent" />
          </div>
          <button type="submit" className="w-full bg-gray-800 text-white font-semibold p-3 rounded-lg hover:bg-gray-900 transition-colors duration-200">Sign In</button>
          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account? <Link to="/signup" className="text-gray-800 font-semibold hover:underline">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  )
}