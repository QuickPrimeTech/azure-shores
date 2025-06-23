"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        `fixed top-0 w-full z-50 transition-all duration-300, ${
          isScrolled
            ? "shadow-lg bg-white/90 backdrop-blur-sm"
            : "bg-transparent border-b border-white/10"
        }`,
        "section-x text-white"
      )}
    >
      <div className="flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "text-2xl md:text-3xl font-primary font-bold",
            isScrolled && "text-gray-950"
          )}
        >
          Azure Shores
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-white hover:text-secondary transition-colors duration-200 font-medium font-work-sans",
                isScrolled && "text-gray-950"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button variant="outline" size="sm" className="btn-outline">
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>
          <Button className="btn-primary">Reserve Table</Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              className={cn("text-white", isScrolled && "text-gray-950")}
            >
              <Menu className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-3/4">
            <div className="flex flex-col space-y-6 mt-8 section-x">
              <div className="text-2xl font-cinzel font-bold text-ocean-blue mb-8">
                Azure Shores
              </div>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg hover:text-secondary transition-colors duration-200 font-work-sans"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-6 space-y-4">
                <Button variant="outline" className="w-full btn-outline">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button className="w-full btn-primary">Reserve Table</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
