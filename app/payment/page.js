'use client';
import { CreditCard, ShieldCheck, MessageCircle, Clock } from 'lucide-react';

export default function PaymentPage() {
  return (
    <section className="w-full bg-background py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-10">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-3">
            Payment Information
          </h1>
          <div className="w-24 h-1 bg-accent rounded-full mx-auto mt-2"></div>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed text-center">
          To keep things simple and secure, payment details are arranged directly with each
          client based on the service booked. Reach out and I'll walk you through the
          available options.
        </p>

        {/* Main CTA Card */}
        <div className="bg-linear-to-r from-accent/90 to-accent rounded-lg p-10 md:p-14 shadow-xl text-center mb-16">
          <div className="w-16 h-16 bg-white/15 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
            Let's Arrange Your Payment
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Contact me with the service you'd like to book, and I'll send over the payment
            details and confirm your appointment together.
          </p>
          <button
            onClick={() => (window.location.href = '/contact')}
            className="px-10 py-4 bg-white text-accent font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Contact Me
          </button>
        </div>

        {/* How it works */}
        <div className="bg-muted/50 rounded-lg p-8 md:p-10 shadow-lg mb-16">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
              How It Works
            </h2>
            <div className="w-24 h-1 bg-accent rounded-full mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-start">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-accent">1</span>
              </div>
              <h3 className="text-foreground font-bold mb-2">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                Send a message with the service you're interested in and your preferred date.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-accent">2</span>
              </div>
              <h3 className="text-foreground font-bold mb-2">Confirm Details</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'll confirm availability and share the payment details for your booking.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-accent">3</span>
              </div>
              <h3 className="text-foreground font-bold mb-2">Book Your Session</h3>
              <p className="text-muted-foreground leading-relaxed">
                Once payment is confirmed, your appointment is officially booked.
              </p>
            </div>
          </div>
        </div>

        {/* Trust info */}
        <div className="bg-background rounded-lg shadow-lg p-8 border border-muted-foreground/20 mb-16">
          <h3 className="text-xl font-serif font-bold text-foreground mb-6 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-accent" />
            What to Expect
          </h3>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-accent shrink-0 mt-1" />
              <div>
                <h4 className="text-foreground font-bold mb-1">Quick Response</h4>
                <p className="text-muted-foreground leading-relaxed">
                  I typically respond to booking and payment inquiries within 24 hours.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-1" />
              <div>
                <h4 className="text-foreground font-bold mb-1">Privacy First</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Your information is kept confidential and is never shared with third parties.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CreditCard className="w-5 h-5 text-accent shrink-0 mt-1" />
              <div>
                <h4 className="text-foreground font-bold mb-1">Flexible Arrangements</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Payment options are discussed and agreed upon before your session is confirmed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Reference */}
        <div className="text-center">
          <p className="text-muted-foreground leading-relaxed">
            Not sure about pricing? <a href="/prices" className="text-accent hover:underline font-bold">View my pricing page</a> to see all available packages.
          </p>
        </div>
      </div>
    </section>
  );
}