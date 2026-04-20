import { Settings, Check } from 'lucide-react'

function ActivateButton() {
  return (
    <button className="w-full bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold py-3 rounded-lg transition-colors">
      Activate Now
    </button>
  )
}

function ConfigureButton() {
  return (
    <button className="w-full border border-gray-200 hover:bg-gray-50 text-blue-600 text-sm font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
      <Settings size={14} className="text-blue-500" />
      Configure
    </button>
  )
}

function ActiveButton() {
  return (
    <div className="w-full bg-green-50 text-green-600 text-sm font-medium py-3 rounded-lg flex items-center justify-center gap-2">
      <Check size={14} />
      Active
    </div>
  )
}

function DeactivateButton() {
  return (
    <button className="w-full bg-red-50 hover:bg-red-100 text-red-500 text-sm font-medium py-3 rounded-lg transition-colors">
      Deactivate
    </button>
  )
}

const buttonMap = {
  activate: ActivateButton,
  configure: ConfigureButton,
  active: ActiveButton,
  deactivate: DeactivateButton,
}

export default function ServiceCard({ title, description, action, icon: Icon, iconBg }) {
  const ButtonComponent = buttonMap[action]

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col justify-between min-h-[180px]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{title}</h3>
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
