import { Button } from "@/components/ui/button"
import { Calendar, Menu } from "lucide-react"

interface CTASectionProps {
  title: string
  subtitle: string
  description: string
  primaryCTA: string
  secondaryCTA: string
  backgroundClass: string
}

export default function CTASection({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundClass,
}: CTASectionProps) {
  const isLight = backgroundClass.includes("seafoam") || backgroundClass.includes("sand-beige")
  const textColor = isLight ? "text-gray-800" : "text-white"
  const buttonVariant = isLight ? "bg-red-500 hover:bg-red-600 text-white" : "bg-white text-red-500 hover:bg-gray-100"
  const outlineVariant = isLight
    ? "border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
    : "border-white text-white hover:bg-white hover:text-red-500"

  return (
    <section className={`section-padding ${backgroundClass} relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-current to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${textColor} font-cinzel`}>
            {title}
            <span className={`block font-cinzel italic ${isLight ? "text-red-500" : "text-seafoam"}`}>{subtitle}</span>
          </h2>
          <p className={`text-xl mb-12 leading-relaxed ${textColor} opacity-90 font-work-sans`}>{description}</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className={`${buttonVariant} text-lg px-8 py-4 shadow-lg font-work-sans`}>
              <Calendar className="w-5 h-5 mr-2" />
              {primaryCTA}
            </Button>
            <Button variant="outline" size="lg" className={`${outlineVariant} text-lg px-8 py-4 font-work-sans`}>
              <Menu className="w-5 h-5 mr-2" />
              {secondaryCTA}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
