import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Crown, Heart, Zap } from "lucide-react"

const packages = [
  {
    id: "adventure",
    title: "Adventure Seeker",
    description: "Perfect for thrill-seekers wanting to try multiple activities",
    price: 199,
    originalPrice: 250,
    duration: "Full Day",
    icon: Zap,
    popular: false,
    activities: ["Jet Ski (1 hour)", "Kayaking (2 hours)", "Snorkeling Tour", "Beach Lunch"],
    features: ["All equipment included", "Professional guides", "Lunch at beachside restaurant", "Photo package"],
  },
  {
    id: "romantic",
    title: "Romantic Escape",
    description: "Intimate water activities perfect for couples",
    price: 299,
    originalPrice: 350,
    duration: "Half Day + Dinner",
    icon: Heart,
    popular: true,
    activities: ["Private Kayak Tour", "Sunset Paddleboarding", "Couples Snorkeling", "Romantic Dinner"],
    features: [
      "Private guide",
      "Champagne toast",
      "3-course oceanfront dinner",
      "Professional photography",
      "Couples massage (30 min)",
    ],
  },
  {
    id: "premium",
    title: "Premium Experience",
    description: "The ultimate luxury water sports package",
    price: 499,
    originalPrice: 650,
    duration: "2 Days",
    icon: Crown,
    popular: false,
    activities: [
      "Deep Sea Fishing",
      "Private Jet Ski Tour",
      "Windsurfing Lessons",
      "Yacht Sunset Cruise",
      "Spa Treatment",
    ],
    features: [
      "Private yacht access",
      "Personal concierge",
      "Gourmet meals included",
      "Premium accommodation",
      "Airport transfers",
      "Professional videography",
    ],
  },
]

export default function PackagesSection() {
  return (
    <section className="section-padding bg-sand-beige-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-gradient mb-4">Adventure Packages</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Combine multiple activities and save with our carefully curated experience packages
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => {
            const IconComponent = pkg.icon
            const savings = pkg.originalPrice - pkg.price
            const savingsPercent = Math.round((savings / pkg.originalPrice) * 100)

            return (
              <Card
                key={pkg.id}
                className={`relative overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                  pkg.popular ? "ring-2 ring-coral scale-105" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-coral text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <CardHeader className={pkg.popular ? "pt-12" : ""}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-coral rounded-full flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{pkg.title}</CardTitle>
                        <Badge variant="outline" className="mt-1">
                          {pkg.duration}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base mt-4">{pkg.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-coral">${pkg.price}</span>
                      <span className="text-lg text-gray-500 line-through">${pkg.originalPrice}</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      Save ${savings} ({savingsPercent}%)
                    </Badge>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Activities Included:</h4>
                    <ul className="space-y-2">
                      {pkg.activities.map((activity, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <Check className="w-4 h-4 text-coral mr-2 flex-shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Package Features:</h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <Check className="w-4 h-4 text-coral mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className={`w-full ${pkg.popular ? "btn-primary text-lg py-3" : "btn-primary"}`}>
                    Book Package
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
