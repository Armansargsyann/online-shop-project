import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import TopBar from './components/TopBar'

type SignUpFormInputs = {
  fullName: string
  email: string
  password: string
  confirmPassword: string
}

export default function SignUpPage() {
  const { register, handleSubmit } = useForm<SignUpFormInputs>()

  const onSubmit = (data: SignUpFormInputs) => {
    console.log('Sign Up form submitted (fake)', data)
    // In a real app, you'd send data to your backend here
  }

  return (
    <div className="shop flex flex-col min-h-screen">
      <TopBar />
      <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 p-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Create an Account</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 w-full max-w-md">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input type="text" {...register('fullName')} placeholder="John Doe" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input type="email" {...register('email')} placeholder="you@example.com" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input type="password" {...register('password')} placeholder="••••••••" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent" />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
            <input type="password" {...register('confirmPassword')} placeholder="••••••••" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent" />
          </div>
          <button type="submit" className="w-full bg-gray-800 text-white font-semibold p-3 rounded-lg hover:bg-gray-900 transition-colors duration-200">Create Account</button>
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account? <Link to="/signin" className="text-gray-800 font-semibold hover:underline">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  )
}