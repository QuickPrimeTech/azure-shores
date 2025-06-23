import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export default function AlternativeContact() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Prefer to Speak with Us?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our reservation team is standing by to help you plan the perfect dining experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-ocean-blue rounded-full mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Call Us</h3>
            <p className="text-gray-600 mb-6">
              Speak directly with our reservation team for immediate assistance and personalized service.
            </p>
            <Button className="btn-primary">
              <Phone className="w-4 h-4 mr-2" />
              (555) 123-4567
            </Button>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">WhatsApp</h3>
            <p className="text-gray-600 mb-6">
              Quick and convenient messaging for reservations, questions, or special requests.
            </p>
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              <MessageCircle className="w-4 h-4 mr-2" />
              Message Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
