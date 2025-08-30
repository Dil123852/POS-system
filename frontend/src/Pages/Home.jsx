import { Package, Shield, Building2 } from "lucide-react"
import { Link } from "react-router-dom"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Company Portal Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Building2 className="h-12 w-12 text-white" />
            <Package className="h-16 w-16 text-yellow-300" />
            <Shield className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-6xl font-bold text-white mb-4">FlowTrack</h1>
          <p className="text-2xl text-white/90 mb-2">Anura Super - Pitigala</p>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">Internal portal for authorized company personnel</p>
        </div>

        {/* Login Card */}
        <div className="bg-white/15 border border-white/30 backdrop-blur-md rounded-lg max-w-md mx-auto mb-12">
          <div className="p-8 text-center">
            <h2 className="text-2xl font-semibold text-white mb-6">Access Your Account</h2>
            <p className="text-white/80 mb-8">
              Please log in with your company credentials to access the Aruna Super system
            </p>
            <div className="flex flex-col gap-4">
              <Link to = '/login'><button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 w-full">
                Employee Login
              </button></Link>
              <button className=" text-white  font-semibold py-3 px-6 rounded-lg transition-colors duration-200 w-full">
                Authorized Personnel Only
              </button>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="mt-16 py-6 border-t border-white/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white/60 text-sm">
            FlowTrack Internal System • For authorized personnel only • Contact IT support for assistance
          </p>
        </div>
      </footer>
    </div>
  )
}
