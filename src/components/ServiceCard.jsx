import { Settings, Check, Loader2, AlertTriangle, Clock, Headphones } from 'lucide-react'

function ComingSoonButton() {
  return (
    <div className="w-full bg-gray-100 text-gray-400 text-sm font-medium py-3 rounded-lg flex items-center justify-center gap-2 cursor-not-allowed select-none">
      <Clock size={14} />
      Coming Soon
    </div>
  )
}

function ActivateButton() {
  return (
    <button className="w-full bg-gray-900 hover:bg-gray-800 active:bg-gray-700 text-white text-sm font-semibold py-3 rounded-lg transition-colors">
      Activate Now
    </button>
  )
}

function ActiveButton() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 bg-green-50 text-green-600 text-sm font-medium py-3 rounded-lg flex items-center justify-center gap-1.5">
        <Check size={14} strokeWidth={2.5} />
        Active
      </div>
      <button className="flex-1 border border-gray-200 hover:bg-gray-50 active:bg-gray-100 text-blue-600 text-sm font-medium py-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors">
        <Settings size={14} />
        Configure
      </button>
    </div>
  )
}

function PendingButton() {
  return (
    <div className="w-full bg-amber-50 text-amber-600 text-sm font-medium py-3 rounded-lg flex items-center justify-center gap-2 cursor-default select-none">
      <Loader2 size={14} className="animate-spin" />
      Activation In Progress
    </div>
  )
}

function IncompleteButton() {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full bg-orange-50 text-orange-600 text-sm font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 select-none">
        <AlertTriangle size={14} />
        Activation Incomplete
      </div>
      <button className="w-full border border-gray-200 hover:bg-gray-50 active:bg-gray-100 text-gray-700 text-sm font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors">
        <Headphones size={14} className="text-gray-500" />
        Raise Support Ticket
      </button>
    </div>
  )
}

const buttonMap = {
  'coming-soon': ComingSoonButton,
  activate: ActivateButton,
  active: ActiveButton,
  pending: PendingButton,
  incomplete: IncompleteButton,
}

const statusBadge = {
  'coming-soon': { label: 'Coming Soon', color: 'bg-gray-100 text-gray-500' },
  activate:      null,
  active:        null,
  pending:       { label: 'In Progress', color: 'bg-amber-100 text-amber-600' },
  incomplete:    { label: 'Action Needed', color: 'bg-orange-100 text-orange-600' },
}

export default function ServiceCard({ title, description, action, icon: Icon, iconBg }) {
  const ButtonComponent = buttonMap[action] ?? ActivateButton
  const badge = statusBadge[action]

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col justify-between min-h-[190px]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1.5">
            <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
            {badge && (
              <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${badge.color}`}>
                {badge.label}
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
        </div>
        {Icon && (
          <div
            className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden"
            style={{ background: iconBg || '#f3f4f6' }}
          >
            <Icon />
          </div>
        )}
      </div>
      <div className="mt-4">
        <ButtonComponent />
      </div>
    </div>
  )
}
