"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setIsOpen(false)
      }
    }
  }

  return (
    <nav className="fixed w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-bold text-primary">
          Villa Konsuela
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <Link
            href="#amenities"
            onClick={(e) => handleNavClick(e, "#amenities")}
            className="hover:text-primary transition"
          >
            Amenities
          </Link>
          <Link href="#spaces" onClick={(e) => handleNavClick(e, "#spaces")} className="hover:text-primary transition">
            Event Spaces
          </Link>
          <Link
            href="#gallery"
            onClick={(e) => handleNavClick(e, "#gallery")}
            className="hover:text-primary transition"
          >
            Gallery
          </Link>
          <Link
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hover:text-primary transition"
          >
            Contact
          </Link>
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary/90 transition">
            Book Now
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-6">
              <Link
                href="#amenities"
                onClick={(e) => handleNavClick(e, "#amenities")}
                className="hover:text-primary transition"
              >
                Amenities
              </Link>
              <Link
                href="#spaces"
                onClick={(e) => handleNavClick(e, "#spaces")}
                className="hover:text-primary transition"
              >
                Event Spaces
              </Link>
              <Link
                href="#gallery"
                onClick={(e) => handleNavClick(e, "#gallery")}
                className="hover:text-primary transition"
              >
                Gallery
              </Link>
              <Link
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="hover:text-primary transition"
              >
                Contact
              </Link>
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary/90 transition w-full">
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
