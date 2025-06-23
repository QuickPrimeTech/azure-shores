import { Button } from "@/components/ui/button"
import { Waves, Calendar } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white container-custom">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-center mb-4">
            <Waves className="w-12 h-12 text-seafoam mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Ocean Adventures
              <span className="block font-script text-seafoam">Await You</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Dive into excitement with our premium water sports experiences. From peaceful kayaking to thrilling jet
            skiing, create memories that will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="btn-primary text-lg px-8 py-4">
              <Calendar className="w-5 h-5 mr-2" />
              Book Activities
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4"
            >
              View Packages
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
