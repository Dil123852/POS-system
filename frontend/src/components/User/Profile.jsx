import { useUser, SignOutButton, UserProfile } from "@clerk/nextjs"
import { useState } from "react"
import { User, Mail, Shield, Edit, LogOut, X } from "lucide-react"

export default function ProfilePage() {
  const { user, isLoaded } = useUser()
  const [showEditProfile, setShowEditProfile] = useState(false)

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 flex items-center justify-center">
        <div className="bg-white/15 border border-white/30 backdrop-blur-md rounded-lg p-8">
          <div className="animate-pulse space-y-4">
            <div className="w-24 h-24 bg-white/20 rounded-full mx-auto"></div>
            <div className="h-4 bg-white/20 rounded w-32 mx-auto"></div>
            <div className="h-4 bg-white/20 rounded w-48 mx-auto"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 flex items-center justify-center">
        <div className="bg-white/15 border border-white/30 backdrop-blur-md rounded-lg p-8 text-center">
          <p className="text-white text-lg">Please sign in to view your profile</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">User Profile</h1>
          <p className="text-white/80">Manage your FlowTrack account information</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white/15 border border-white/30 backdrop-blur-md rounded-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Profile Photo */}
            <div className="flex-shrink-0">
              {user.imageUrl ? (
                <img
                  src={user.imageUrl || "/placeholder.svg"}
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-white/30 object-cover"
                />
              ) : (
                <div className="w-32 h-32 rounded-full border-4 border-white/30 bg-white/20 flex items-center justify-center">
                  <User className="w-16 h-16 text-white/60" />
                </div>
              )}
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-2">
                {user.fullName || `${user.firstName || ""} ${user.lastName || ""}`.trim() || "User"}
              </h2>

              <div className="space-y-3 mb-6">
                {/* Username */}
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <User className="w-5 h-5 text-white/70" />
                  <span className="text-white/90">
                    @{user.username || user.emailAddresses[0]?.emailAddress?.split("@")[0] || "username"}
                  </span>
                </div>

                {/* Email */}
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Mail className="w-5 h-5 text-white/70" />
                  <span className="text-white/90">{user.emailAddresses[0]?.emailAddress}</span>
                </div>

                {/* Role */}
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Shield className="w-5 h-5 text-white/70" />
                  <span className="inline-flex px-3 py-1 text-sm font-semibold rounded-full bg-white/20 text-white">
                    {user.publicMetadata?.role || "Staff"}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
                <p className="text-white/80 bg-white/10 rounded-lg p-4">
                  {user.publicMetadata?.description ||
                    "No description provided. Click Edit Profile to add a description about yourself."}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowEditProfile(true)}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg border border-white/30 transition-colors"
                >
                  <Edit className="w-4 h-4" />
                  Edit Profile
                </button>

                <SignOutButton>
                  <button className="flex items-center justify-center gap-2 px-6 py-3 bg-red-500/80 hover:bg-red-600/80 text-white rounded-lg border border-red-400/30 transition-colors">
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </SignOutButton>
              </div>
            </div>
          </div>
        </div>

        {/* Account Details */}
        <div className="bg-white/15 border border-white/30 backdrop-blur-md rounded-lg p-8">
          <h3 className="text-xl font-semibold text-white mb-4">Account Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/70 text-sm font-medium mb-1">Member Since</label>
              <p className="text-white bg-white/10 rounded-lg p-3">
                {new Date(user.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div>
              <label className="block text-white/70 text-sm font-medium mb-1">Last Updated</label>
              <p className="text-white bg-white/10 rounded-lg p-3">
                {new Date(user.updatedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {showEditProfile && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">Edit Profile</h3>
              <button
                onClick={() => setShowEditProfile(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Clerk UserProfile Component */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <UserProfile
                appearance={{
                  elements: {
                    rootBox: "w-full",
                    card: "shadow-none border-0 bg-transparent",
                    navbar: "hidden",
                    pageScrollBox: "p-0",
                    page: "bg-transparent shadow-none",
                    profileSectionPrimaryButton: "bg-purple-600 hover:bg-purple-700",
                    formButtonPrimary: "bg-purple-600 hover:bg-purple-700",
                    headerTitle: "text-gray-900",
                    headerSubtitle: "text-gray-600",
                  },
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
