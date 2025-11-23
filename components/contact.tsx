"use client"

import type React from "react"

import { MapPin, Phone, Mail, Calendar } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventDate: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      eventDate: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-primary">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">
                    Sampaguita 4 Brgy. Talimundoc SM Concepcion, Tarlac, Philippines
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-muted-foreground">0981 666 9906</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">mallarianiramae@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Calendar className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-2">Hours</h3>
                  <p className="text-muted-foreground">Available 24/7 for reservations</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition"
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition"
            />

            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition"
            />

            <textarea
              name="message"
              placeholder="Tell us about your event..."
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition resize-none"
              required
            />

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
