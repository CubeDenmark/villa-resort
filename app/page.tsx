"use client"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Amenities from "@/components/amenities"
import Spaces from "@/components/spaces"
import Experience from "@/components/experience"
import Gallery from "@/components/gallery"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navigation />
      <Hero />
      <Amenities />
      <Spaces />
      <Experience />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
