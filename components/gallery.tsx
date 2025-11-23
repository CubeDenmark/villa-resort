"use client"

import Image from "next/image"

export default function Gallery() {
  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/496843617_702952962459835_403903189032246837_n-OM37BhmyTUxzPEmWgJla8EaiMxzNDX.jpg",
      alt: "Night view of illuminated resort buildings",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/495452052_702953415793123_359966310695880965_n-hGXgiR2JGwbZQgbBmGqdWOJKy02vnj.jpg",
      alt: "Poolside cabana with lounge chairs",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/496065443_702953162459815_5306437256309572593_n-YUwRNgr11tllrTIwAPxfLinDgL9enV.jpg",
      alt: "Aerial view of resort with pool",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/496927029_702952915793173_1017812843649914093_n-m9kMPHlaQR3AhnH8p23HPZWOXKS9oj.jpg",
      alt: "Wine by the pool",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/496941677_702953562459775_8959796758648344364_n-3hUufwVqRXTlxJfkdL0CcV0c78d1U4.jpg",
      alt: "Elegant dining space",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/496926275_702953182459813_6395410475104112469_n-uCGn63LcfERm7fpiO3kmMNgjhnlN8A.jpg",
      alt: "Interior staircase with yellow accent wall",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/496935548_702953602459771_7812338143117326831_n-VbGXFQo9ySeqZxIp3dOytOf5cTvDwe.jpg",
      alt: "Living room with wooden ceiling",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/496008684_702953445793120_465802095717451434_n-cPk5Iyssto9LeLwATGWfWM1cDXCfxx.jpg",
      alt: "Lounge area with decorative wall art",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/496009209_702953455793119_6629585104349779153_n-S45qFeSNxOqpzuDIJOPRMx5cqm2Hzs.jpg",
      alt: "Villa Konsuela entrance sign",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/496428609_702953789126419_116195564014007515_n-HqP8LoFFp5cA9HdFjUJb6s5qStTOtv.jpg",
      alt: "Elegant bedroom with yellow lighting",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/495464913_702953432459788_8961414826709320464_n-afn60Yfbjli1AbH8vYPux3GGl1mH8h.jpg",
      alt: "Modern lounge with white sofa",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/497749838_702953539126444_6703659957336340379_n-vUs2uxR13SYpNn2Q4XhzNEjuOyKWgy.jpg",
      alt: "Family pool area with elevated cabin",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/496423282_702954035793061_1116572435517102541_n-HSOh9upetGlCx1WPNYK6wcmv7FjFzD.jpg",
      alt: "Night view of resort with illuminated pool",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/498031582_702953972459734_2921814793195991747_n-sOclmEI0U1uefpssrpw3VogSQQR9OT.jpg",
      alt: "Dormitory with bunk beds",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/495445218_702953129126485_6139500991025669815_n-BRMPOgjsv0OLG200EcMaHHGNV5OPo5.jpg",
      alt: "Shared dormitory accommodation",
    },
  ]

  return (
    <section id="gallery" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-primary">Gallery</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
