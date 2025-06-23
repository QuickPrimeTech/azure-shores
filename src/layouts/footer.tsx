import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white section-x">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-3xl font-cinzel font-bold text-seafoam">
              Azure Shores
            </div>
            <p className="text-gray-300 leading-relaxed font-work-sans">
              Experience luxury dining by the ocean with fresh seafood, water
              sports, and unforgettable coastal adventures.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-seafoam transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-seafoam transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-seafoam transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-cinzel">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="/about"
                className="block text-gray-300 hover:text-seafoam transition-colors font-work-sans"
              >
                About Us
              </Link>
              <Link
                href="/menu"
                className="block text-gray-300 hover:text-seafoam transition-colors font-work-sans"
              >
                Our Menu
              </Link>
              <Link
                href="/sports"
                className="block text-gray-300 hover:text-seafoam transition-colors font-work-sans"
              >
                Water Sports
              </Link>
              <Link
                href="/gallery"
                className="block text-gray-300 hover:text-seafoam transition-colors font-work-sans"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="block text-gray-300 hover:text-seafoam transition-colors font-work-sans"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-cinzel">Services</h3>
            <div className="space-y-2">
              <div className="text-gray-300 font-work-sans">Fine Dining</div>
              <div className="text-gray-300 font-work-sans">Water Sports</div>
              <div className="text-gray-300 font-work-sans">Private Events</div>
              <div className="text-gray-300 font-work-sans">Catering</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-cinzel">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-seafoam mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 font-work-sans">
                  123 Ocean Drive
                  <br />
                  Coastal Bay, CB 12345
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-seafoam flex-shrink-0" />
                <div className="text-gray-300 font-work-sans">
                  (555) 123-4567
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-seafoam flex-shrink-0" />
                <div className="text-gray-300 font-work-sans">
                  info@azureshores.com
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p className="font-work-sans">
            &copy; {new Date().getFullYear()} Azure Shores. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
