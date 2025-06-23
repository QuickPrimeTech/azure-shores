import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  Users,
} from "lucide-react";

const bookingInfo = [
  {
    icon: Calendar,
    title: "Advance Booking",
    description: "Book 24-48 hours in advance for best availability",
  },
  {
    icon: Clock,
    title: "Flexible Timing",
    description: "Multiple time slots available throughout the day",
  },
  {
    icon: Users,
    title: "Group Discounts",
    description: "Special rates for groups of 6 or more people",
  },
  {
    icon: MapPin,
    title: "Easy Location",
    description: "Meet at our beachfront water sports center",
  },
];

export default function BookingSection() {
  return (
    <section className="section-padding bg-ocean-blue text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Your
            <span className="block font-script text-seafoam">
              Ocean Adventure?
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Book your water sports experience today and create memories that
            will last a lifetime
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Booking Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Booking Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {bookingInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-seafoam rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-gray-800" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{info.title}</h4>
                      <p className="text-blue-100 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Booking Actions */}
          <div>
            <Card className="bg-white text-gray-900">
              <CardHeader>
                <CardTitle className="text-center text-2xl">
                  Book Your Adventure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-gray-600 mb-6">
                    Choose your preferred booking method and let&apos;s get your
                    ocean adventure started!
                  </p>
                </div>

                <div className="space-y-4">
                  <Button className="w-full btn-primary text-lg py-4">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Online Now
                  </Button>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button variant="outline" className="btn-outline">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Us
                    </Button>
                    <Button className="bg-green-500 hover:bg-green-600 text-white">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </div>

                <div className="text-center pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    Questions? Our water sports team is available daily from
                    8:00 AM to 6:00 PM
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
