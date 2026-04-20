import { Search, ClipboardList, ChevronDown, ChevronRight } from 'lucide-react'

export default function Header() {
  return (
    <div className="flex items-center h-14 bg-white border-b border-gray-200 px-4 gap-4 flex-shrink-0">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 min-w-fit">
        <ChevronRight size={16} className="text-gray-400" />
        <span className="text-sm font-semibold text-gray-800">Services</span>
      </div>

      {/* Search */}
      <div className="flex-1 flex justify-center">
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 w-full max-w-md">
          <Search size={14} className="text-gray-400 flex-shrink-0" />
          <span className="text-sm text-gray-400 flex-1">Search AWB, LR, Ticket ID and more...</span>
          <div className="flex items-center gap-0.5 bg-white border border-gray-200 rounded px-1.5 py-0.5">
            <span className="text-xs text-gray-400">⌘</span>
            <span className="text-xs text-gray-400">+K</span>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3 ml-auto">
        {/* Tasks */}
        <button className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-800 border border-gray-200 rounded-lg px-3 py-1.5">
          <ClipboardList size={16} />
          <span className="font-medium">Tasks</span>
        </button>

        {/* Org selector */}
        <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50">
          <div className="w-5 h-5 bg-gray-200 rounded flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/>
              <rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
          </div>
          <div className="text-left">
            <div className="text-xs font-semibold text-gray-800 leading-tight">Domestic</div>
            <div className="text-xs text-gray-400 leading-tight">1a3c9f-TestSanityProd-do</div>
          </div>
          <ChevronDown size={14} className="text-gray-400" />
        </button>

        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center text-white text-sm font-semibold">
          Sa
        </div>
      </div>
    </div>
  )
}
