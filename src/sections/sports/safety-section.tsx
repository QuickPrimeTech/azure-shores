import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, Award, Heart, AlertTriangle, CheckCircle } from "lucide-react"

const safetyFeatures = [
  {
    icon: Shield,
    title: "Certified Equipment",
    description: "All equipment is regularly inspected and meets international safety standards",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Our certified instructors have years of experience and safety training",
  },
  {
    icon: Award,
    title: "Safety Certifications",
    description: "We maintain all required certifications and exceed industry safety standards",
  },
  {
    icon: Heart,
    title: "Emergency Prepared",
    description: "First aid trained staff and emergency response protocols in place",
  },
]

const safetyGuidelines = [
  "All participants must complete a safety briefing before activities",
  "Life jackets are mandatory for all water activities",
  "Weather conditions are monitored continuously",
  "Maximum group sizes are strictly enforced",
  "Emergency communication devices are always available",
  "Activities may be cancelled for safety reasons without penalty",
]

export default function SafetySection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-gradient mb-4">Your Safety is Our Priority</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We maintain the highest safety standards to ensure your water sports experience is both thrilling and secure
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Safety Features */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Safety Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {safetyFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-16 h-16 bg-coral rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Safety Guidelines */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Safety Guidelines</h3>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center text-coral">
                  <AlertTriangle className="w-6 h-6 mr-2" />
                  Important Safety Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {safetyGuidelines.map((guideline, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{guideline}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start">
                <Shield className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-blue-800">
                  <strong>Insurance Coverage:</strong> All activities are covered by comprehensive liability insurance.
                  Participants are advised to have personal travel insurance for additional protection.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
