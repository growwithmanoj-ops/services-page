import Sidebar from './Sidebar'
import Header from './Header'
import ServiceCard from './ServiceCard'
import {
  RtoIcon, WhatsAppIcon, ChannelIcon, SearchIcon, SparkleIcon,
  ScooterIcon, BikeIcon, CartIcon, TruckIcon, GlobeIcon
} from './icons'

const valueAddedServices = [
  {
    title: 'RTO Predictor',
    description: 'Save on potential losses by identifying high return risk orders before shipping.',
    action: 'activate',
    icon: RtoIcon,
    iconBg: '#FFF8F0',
  },
  {
    title: 'Communications',
    description: 'Improve deliverability by informing your customers about real time shipment updates.',
    action: 'active',
    icon: WhatsAppIcon,
    iconBg: '#F0FFF4',
  },
  {
    title: 'Channel Integration',
    description: 'Pre-Integrated with Shopify and Woocommerce - your orders get auto-fetched by Delhivery',
    action: 'active',
    icon: ChannelIcon,
    iconBg: '#F3F0FF',
  },
  {
    title: 'Universal Search',
    description: 'Access everything you need from one search bar.',
    action: 'active',
    icon: SearchIcon,
    iconBg: 'transparent',
  },
  {
    title: 'Delhivery AI Support',
    description: 'Get instant answers and resolve issues in real time.',
    action: 'pending',
    icon: SparkleIcon,
    iconBg: 'transparent',
  },
]

const logisticsServices = [
  {
    title: 'Next Day Delivery ⚡',
    description: 'Get next day delivery for urgent shipments across major cities',
    action: 'activate',
    icon: ScooterIcon,
    iconBg: '#FCE4EC',
  },
  {
    title: 'Direct Intracity',
    description: 'Hire bikes or trucks to deliver goods',
    action: 'incomplete',
    icon: BikeIcon,
    iconBg: '#FCE4EC',
  },
  {
    title: 'Domestic Parcel',
    description: 'Deliver faster to the remotest corners of India and get assured 2 day COD remittances.',
    action: 'active',
    icon: CartIcon,
    iconBg: '#E0F7FA',
  },
  {
    title: 'Domestic B2B Cargo',
    description: "Join India's fastest, most reliable Part Truck Load cargo service",
    action: 'active',
    icon: TruckIcon,
    iconBg: '#FFEBEE',
  },
  {
    title: 'Cross Border Express',
    description: 'Take your business global. Ship your products to across 220+ countries.',
    action: 'coming-soon',
    icon: GlobeIcon,
    iconBg: '#E8EAF6',
  },
]

export default function ServicesPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto p-6">
          {/* Value Added Services */}
          <section className="mb-8">
            <h2 className="text-base font-bold text-gray-900 mb-4">Value Added Services</h2>
            <div className="grid grid-cols-3 gap-4">
              {valueAddedServices.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </section>

          {/* Logistics Services */}
          <section>
            <h2 className="text-base font-bold text-gray-900 mb-4">Logistics Services</h2>
            <div className="grid grid-cols-3 gap-4">
              {logisticsServices.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </section>

          {/* SmartAssist button */}
          <div className="fixed bottom-6 right-6">
            <button className="flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-4 py-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors">
              <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="6" r="5" stroke="white" strokeWidth="1.5"/>
                  <path d="M4 6h4M6 4v4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              Ask SmartAssist
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}
