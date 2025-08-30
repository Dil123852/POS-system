import { useUser, SignOutButton, UserProfile } from "@clerk/nextjs"
import { useState } from "react"
import { User, Mail, Shield, Edit, LogOut, X } from "lucide-react"
import { Link } from 'react-router-dom';

export default function ProfilePage() {
  const { user, isLoaded } = useUser()

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-8">
          <div className="animate-pulse space-y-4">
            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto"></div>
            <div className="h-4 bg-gray-300 rounded w-32 mx-auto"></div>
            <div className="h-4 bg-gray-300 rounded w-48 mx-auto"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-8 text-center">
          <p className="text-gray-600 text-lg">Please sign in to view your profile</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-gray-800 mb-2">User Profile</h1>
          <p className="text-gray-600">Manage your FlowTrack account information</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Profile Photo */}
            <div className="flex-shrink-0">
              {user.imageUrl ? (
                <img
                  src={user.imageUrl || "/placeholder.svg"}
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-gray-200 object-cover"
                />
              ) : (
                <div className="w-32 h-32 rounded-full border-4 border-gray-200 bg-gray-200 flex items-center justify-center">
                  <User className="w-16 h-16 text-gray-500" />
                </div>
              )}
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-semibold text-gray-800 mb-2">
                {user.fullName || `${user.firstName || ""} ${user.lastName || ""}`.trim() || "User"}
              </h2>

              <div className="space-y-3 mb-6">
                {/* Username */}
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <User className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-800">
                    @{user.username || user.emailAddresses[0]?.emailAddress?.split("@")[0] || "username"}
                  </span>
                </div>

                {/* Email */}
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-800">{user.emailAddresses[0]?.emailAddress}</span>
                </div>

                {/* Role */}
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Shield className="w-5 h-5 text-gray-600" />
                  <span className="inline-flex px-3 py-1 text-sm font-semibold rounded-full bg-gray-100 text-gray-800">
                    {user.publicMetadata?.role || "Staff"}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
                <p className="text-gray-600 bg-gray-100 rounded-lg p-4">
                  {user.publicMetadata?.description ||
                    "No description provided. Click Edit Profile to add a description about yourself."}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                

                {/* Sign Out Button */}
                <SignOutButton>
                  <button className="flex items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg border border-red-600 transition-colors">
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </SignOutButton>
              </div>
            </div>
          </div>
        </div>

        {/* Account Details */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Account Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-1">Member Since</label>
              <p className="text-gray-800 bg-gray-100 rounded-lg p-3">
                {new Date(user.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-1">Last Updated</label>
              <p className="text-gray-800 bg-gray-100 rounded-lg p-3">
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
    </div>
  )
}
