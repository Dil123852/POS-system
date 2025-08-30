import { Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import React from 'react';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">Manage your application settings and users</p>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Link to="/admin/dashboard/usermanagement">
          <button className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white font-semibold py-3 px-5 rounded-lg shadow-md hover:bg-blue-700 transition">
            <Users size={20} />
            User Management
          </button>
        </Link>

        <Link to="/user/profile">
          <button className="flex items-center justify-center gap-2 w-full bg-green-600 text-white font-semibold py-3 px-5 rounded-lg shadow-md hover:bg-green-700 transition">
            Profile
          </button>
        </Link>

        <Link to="/admin/dashboard/reports">
          <button className="flex items-center justify-center gap-2 w-full bg-purple-600 text-white font-semibold py-3 px-5 rounded-lg shadow-md hover:bg-purple-700 transition">
            Reports
          </button>
        </Link>
      </div>
    </div>
  );
}