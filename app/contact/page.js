'use client';

import { useState } from "react";
import { Phone, MessageCircle, Lock, Send, Disc } from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = e.target;

    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      zipcode: form.zipcode.value.trim(),
      message: form.message.value.trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("Your request has been sent successfully. I’ll get back to you shortly.");
      form.reset();
    } catch {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

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
            icon={<Lock className="w-6 h-6" />}
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Book a Session
          </h2>

          <form className="grid gap-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                required
                className="w-full rounded-md border border-border bg-background px-4 py-3 focus:ring-2 focus:ring-accent"
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="w-full rounded-md border border-border bg-background px-4 py-3 focus:ring-2 focus:ring-accent"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-md border border-border bg-background px-4 py-3 focus:ring-2 focus:ring-accent"
              />

              <input
                name="zipcode"
                type="text"
                placeholder="Zip Code"
                required
                className="w-full rounded-md border border-border bg-background px-4 py-3 focus:ring-2 focus:ring-accent"
              />
            </div>

            <textarea
              name="message"
              rows="5"
              required
              placeholder="Preferred date, time, and type of massage"
              className="w-full rounded-md border border-border bg-background px-4 py-3 focus:ring-2 focus:ring-accent"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-fit rounded-md bg-accent px-8 py-3 text-accent-foreground font-medium hover:opacity-90 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Request Appointment"}
            </button>

            {status && (
              <p className="text-sm text-muted-foreground mt-2">
                {status}
              </p>
            )}
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
