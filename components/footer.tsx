"use client"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Serenity Resort</h3>
            <p className="text-primary-foreground/80 text-sm">Your destination for luxury and elegance</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#amenities" className="hover:text-primary-foreground transition">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#spaces" className="hover:text-primary-foreground transition">
                  Event Spaces
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-primary-foreground transition">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-foreground transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-primary-foreground/80 mb-3">Subscribe for updates and offers</p>
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded px-3 py-2 text-sm placeholder:text-primary-foreground/50 focus:outline-none"
            />
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; 2025 Serenity Resort & Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
