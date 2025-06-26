import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WhatsAppFloat() {
  return (
    <Button
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 p-0"
      aria-label="Contact us on WhatsApp"
      asChild
    >
      <Link
        href={`https://wa.me/254717448835?text=${encodeURIComponent(
          "Hi, I would like a website"
        )}`}
        target="_blank"
      >
        <MessageCircle className="w-6 h-6 text-white" />
        Text Us
      </Link>
    </Button>
  );
}
