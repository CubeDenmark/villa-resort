"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function Spaces() {
  const spaces = [
    {
      title: "Poolside Cabanas",
      description: "Elegant cabanas with flowing curtains, perfect for intimate gatherings and daytime events",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/495452052_702953415793123_359966310695880965_n-hGXgiR2JGwbZQgbBmGqdWOJKy02vnj.jpg",
      capacity: "Up to 150 guests",
    },
    {
      title: "Main Estate",
      description: "Stunning architectural centerpiece with multiple indoor and outdoor event areas",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/496065443_702953162459815_5306437256309572593_n-YUwRNgr11tllrTIwAPxfLinDgL9enV.jpg",
      capacity: "Up to 300 guests",
    },
  ]

  return (
    <section id="spaces" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-primary">
          Exceptional Event Spaces
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {spaces.map((space, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative h-80 rounded-lg overflow-hidden mb-6">
                <Image
                  src={space.image || "/placeholder.svg"}
                  alt={space.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-primary">{space.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{space.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-accent">{space.capacity}</span>
                <button className="flex items-center gap-2 text-primary hover:gap-3 transition">
                  Learn More <ChevronRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
