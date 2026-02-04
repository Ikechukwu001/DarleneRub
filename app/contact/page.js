'use client';

import { Phone, MessageCircle, Lock, Send, Disc } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="w-full bg-background py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-10">

        {/* Heading */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-3 inline-block">
            Contact & Booking
          </h1>
          <div className="w-24 h-1 bg-accent rounded-full mt-2"></div>
        </div>

        {/* Contact methods */}
        <div className="grid gap-6 mb-20">
          <ContactItem
            icon={<Phone className="w-6 h-6" />}
            label="Call / Text"
            value="(720) 878-9647"
            href="tel:+17208789647"
          />

          <ContactItem
            icon={<MessageCircle className="w-6 h-6" />}
            label="WhatsApp"
            value="(720) 878-9647"
            href="https://wa.me/17208789647"
          />

          <ContactItem
            icon ={<Lock className="w-6 h-6" />}
            label="Signal"
            value="(720) 878-9647"
            href="https://signal.me/#p/+17208789647"
          />

          <ContactItem
            icon={<Send className="w-6 h-6" />}
            label="Telegram"
            value="(720) 878-9647"
            href="https://t.me/+17208789647"
          />

          <ContactItem
            icon={<Disc className="w-6 h-6" />}
            label="Discord"
            value="Sweet_darlene / (720) 878-9647"
            href="https://discord.com/"
          />
        </div>

        {/* Booking Form */}
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Book a Session
          </h1>

          <form className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-md border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-md border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
            </div>

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-md border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />

            <textarea
              rows="5"
              placeholder="Preferred date, time, and type of massage"
              className="w-full rounded-md border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />

            <button
              type="submit"
              className="w-fit rounded-md bg-accent px-8 py-3 text-accent-foreground font-medium hover:opacity-90 transition"
            >
              Request Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* Reusable contact row */
function ContactItem({ icon, label, value, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between rounded-lg border border-border bg-muted/40 px-6 py-4 hover:bg-muted transition"
    >
      <div className="flex items-center gap-4">
        <span className="text-2xl">{icon}</span>
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="text-lg font-medium text-foreground">{value}</p>
        </div>
      </div>
      <span className="text-sm text-muted-foreground">Tap to open</span>
    </a>
  );
}
