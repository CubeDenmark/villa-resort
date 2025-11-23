"use client"

import { Waves, UtensilsCrossed, Leaf, Sparkles } from "lucide-react"

export default function Amenities() {
  const amenities = [
    {
      icon: Waves,
      title: "Infinity Pools",
      description: "Pristine turquoise pools overlooking lush tropical gardens",
    },
    {
      icon: UtensilsCrossed,
      title: "Fine Dining",
      description: "World-class cuisine in elegant dining spaces",
    },
    {
      icon: Leaf,
      title: "Spa & Wellness",
      description: "Rejuvenating treatments in serene natural settings",
    },
    {
      icon: Sparkles,
      title: "Premium Suites",
      description: "Luxurious accommodations with modern amenities",
    },
  ]

  return (
    <section id="amenities" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-primary">
          World-Class Amenities
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon
            return (
              <div
                key={index}
                className="group bg-background p-8 rounded-lg border border-border hover:border-primary transition"
              >
                <Icon className="size-12 text-primary mb-4 group-hover:scale-110 transition" />
                <h3 className="text-xl font-semibold mb-2">{amenity.title}</h3>
                <p className="text-muted-foreground">{amenity.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
