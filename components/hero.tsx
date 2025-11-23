"use client"

import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden pt-16">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/496843617_702952962459835_403903189032246837_n-OM37BhmyTUxzPEmWgJla8EaiMxzNDX.jpg"
        alt="Villa Konsuela luxury resort with turquoise pools and white pavilions"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg text-balance">
          Villa Konsuela
        </h1>
        <p className="text-xl md:text-2xl text-white/95 mb-8 drop-shadow-md max-w-2xl font-light">
          Luxury Resort & Event Venue | Tropical Paradise in Tarlac
        </p>
        <p className="text-lg md:text-xl text-white/90 mb-12 drop-shadow-md max-w-2xl">
          Experience world-class amenities, stunning venues, and unforgettable celebrations
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition font-semibold shadow-lg hover:shadow-xl">
            Book Now
          </button>
          <button className="bg-white/25 text-white px-8 py-3 rounded-full hover:bg-white/35 transition font-semibold backdrop-blur-sm border border-white/20 hover:border-white/40">
            View Gallery
          </button>
        </div>
      </div>
    </section>
  )
}
