"use client"

export function TabGroup({ children, className = "" }) {
  return <div className={`flex space-x-2 ${className}`}>{children}</div>
}

export function Tab({ children, active = false, onClick }) {
  return (
    <button
      className={`px-4 py-2 rounded-md transition-colors ${
        active ? "bg-[#54FF5F] text-black" : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

