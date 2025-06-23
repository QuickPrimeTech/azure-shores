import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(555) 123-4567",
    action: "tel:+15551234567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@azureshores.com",
    action: "mailto:info@azureshores.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 Ocean Drive, Coastal Bay, CB 12345",
    action: "#",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Daily 11:00 AM - 11:00 PM",
    action: "#",
  },
]

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

export default function ContactCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="space-y-6">
        {contactInfo.map((info, index) => {
          const IconComponent = info.icon
          return (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-ocean-blue rounded-full flex items-center justify-center">
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-medium text-gray-900 mb-1">{info.label}</div>
                {info.action.startsWith("#") ? (
                  <div className="text-gray-600">{info.value}</div>
                ) : (
                  <a href={info.action} className="text-gray-600 hover:text-ocean-blue transition-colors">
                    {info.value}
                  </a>
                )}
              </div>
            </div>
          )
        })}
      </div>

      <div className="border-t border-gray-200 mt-8 pt-8">
        <div className="text-center">
          <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon
              return (
                <Button key={index} variant="outline" size="sm" className="w-10 h-10 p-0 rounded-full" asChild>
                  <a href={social.href} aria-label={social.label}>
                    <IconComponent className="w-4 h-4" />
                  </a>
                </Button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="bg-sand-beige-light rounded-lg p-6 mt-8">
        <h3 className="font-semibold text-gray-900 mb-2">Quick Reservation</h3>
        <p className="text-sm text-gray-600 mb-4">
          For immediate reservations, call us directly or use WhatsApp for quick responses.
        </p>
        <div className="flex gap-3">
          <Button size="sm" className="btn-primary flex-1">
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>
          <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white flex-1">
            WhatsApp
          </Button>
        </div>
      </div>
    </div>
  )
}
