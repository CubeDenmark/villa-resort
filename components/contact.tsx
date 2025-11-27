"use client"

import type React from "react"

import { MapPin, Phone, Mail, Calendar } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Contact() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "deceb57e-255f-40e3-b500-5daf08665a53");

    if (loading) return; // Prevent spamming
    setLoading(true);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");

     if (data.success) {
      setSuccess(true);
      setLoading(false);
      router.push("/success");
    } else {
      alert("Something went wrong. Try again.");
      setLoading(false);
    }
  };

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
                name="name"
                placeholder="Name"
                className="bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition"
                required
              />
              {/* <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition"
                required
              /> */}
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition"
              required
            />

            {/* <input
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
            /> */}

            <textarea
              name="message"
              placeholder="Tell us about your event..."
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
            <p>{result}</p>
          </form>
        </div>
      </div>
    </section>
  )
}
