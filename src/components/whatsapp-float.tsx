"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "1234567890" // Replace with actual WhatsApp number
    const message = "Hi! I'd like to make a reservation at Azure Shores."
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 p-0"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </Button>
  )
}
