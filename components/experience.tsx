"use client"

import Image from "next/image"

export default function Experience() {
  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">Luxury Moments</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              From intimate gatherings by the pool to grand celebrations under the stars, every moment at Serenity
              Resort is crafted to perfection. Our dedicated events team ensures your vision becomes reality.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-3">
                <span className="text-accent">✓</span>
                <span>Personalized event planning and coordination</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">✓</span>
                <span>Gourmet catering and premium beverage selection</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">✓</span>
                <span>State-of-the-art audio and visual systems</span>
              </li>
              {/* <li className="flex gap-3">
                <span className="text-accent">✓</span>
                <span>Professional photography and videography</span>
              </li> */}
            </ul>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition font-semibold">
              Plan Your Event
            </button>
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/496927029_702952915793173_1017812843649914093_n-m9kMPHlaQR3AhnH8p23HPZWOXKS9oj.jpg"
              alt="Wine and celebration by the pool"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
