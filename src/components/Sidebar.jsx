import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  AlertTriangle,
  Camera,
  FileText,
  Info,
  Grid2x2,
  Settings,
} from 'lucide-react'

const navItems = [
  { icon: LayoutDashboard, active: false },
  { icon: Package, active: false },
  { icon: ShoppingCart, active: false },
  { icon: AlertTriangle, active: false },
  { icon: Camera, active: false },
  { icon: FileText, active: false },
  { icon: Info, active: false },
  { icon: Grid2x2, active: true },
  { icon: Settings, active: false },
]

export default function Sidebar() {
  return (
    <div className="flex flex-col items-center w-14 bg-gray-900 min-h-screen py-3 gap-1 flex-shrink-0">
      {/* Logo */}
      <div className="mb-4 flex items-center justify-center w-10 h-10">
        <div className="flex items-center justify-center">
          <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" rx="8" fill="#E8001D"/>
            <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter">ONE</text>
          </svg>
        </div>
      </div>

      {/* Nav Icons */}
      {navItems.map(({ icon: Icon, active }, i) => (
        <button
          key={i}
          className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
            active
              ? 'bg-red-600 text-white'
              : 'text-gray-400 hover:bg-gray-800 hover:text-white'
          }`}
        >
          <Icon size={18} />
        </button>
      ))}
    </div>
  )
}
