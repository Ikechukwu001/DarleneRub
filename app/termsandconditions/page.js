'use client';
import Image from 'next/image';
import { Shield, AlertCircle, Lock, CheckCircle } from 'lucide-react';

export default function TermsPage() {
  return (
    <section className="w-full bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        {/* Heading with underline */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-3 inline-block">
            Terms & Conditions
          </h1>
          <div className="w-24 h-1 bg-accent rounded-full mt-2"></div>
        </div>

        {/* Description paragraph */}
        <p className="text-lg text-muted-foreground max-w-3xl mb-16 leading-relaxed">
          Please read my terms and conditions carefully before booking a session. By scheduling 
          an appointment with me, you agree to comply with these policies designed to ensure a 
          safe, professional, and respectful experience for everyone.
        </p>

        {/* Featured Image */}
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-lg shadow-2xl bg-muted max-w-4xl mx-auto">
            <Image
              src="/TANDC.jpeg"
              alt="Terms and Conditions Overview"
              width={1200}
              height={800}
              className="object-contain w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Detailed Terms Sections */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Professional Conduct */}
          <div className="bg-muted/50 rounded-lg p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Professional Conduct
              </h2>
            </div>

            <div className="space-y-4 ml-0 md:ml-15">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="text-foreground font-bold mb-2">Treat Me With Respect and Professionalism</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All interactions must be conducted with mutual respect and professionalism. 
                    Inappropriate behavior, harassment, or disrespect will result in immediate 
                    termination of services without refund.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="text-foreground font-bold mb-2">Honor Boundaries and Consent</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Clear communication and consent are essential. All boundaries must be respected 
                    at all times. Any requests beyond the agreed-upon services require prior discussion 
                    and mutual consent.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="text-foreground font-bold mb-2">Refrain From Disrespectful or Inappropriate Behavior</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Any form of disrespectful, inappropriate, or aggressive behavior is strictly 
                    prohibited and will result in immediate service termination and potential legal action.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Details */}
          <div className="bg-muted/50 rounded-lg p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                <AlertCircle className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Payment Details
              </h2>
            </div>

            <div className="space-y-4 ml-0 md:ml-15">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="text-foreground font-bold mb-2">First-Time Customers: Half Payment Upfront Required</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    For first-time clients, 50% of the total session fee must be paid upfront to 
                    confirm your booking and ensure session availability. This deposit is non-refundable 
                    unless cancelled with 24-hour notice.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="text-foreground font-bold mb-2">Total Fee Split: 50% Upfront Deposit, Remaining at Session End</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The remaining 50% balance is due at the completion of your session. We accept 
                    cryptocurrency payments (Bitcoin and Ethereum) for the final payment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="text-foreground font-bold mb-2">Cash Payment Not Accepted From First-Timers</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To ensure security and maintain professional standards, i do not accept cash 
                    payments from first-time clients. All initial transactions must be completed 
                    through cryptocurrency.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Eligibility and Safety */}
          <div className="bg-muted/50 rounded-lg p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                <Lock className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Eligibility and Safety
              </h2>
            </div>

            <div className="space-y-4 ml-0 md:ml-15">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="text-foreground font-bold mb-2">Age Requirement: Over 18 Years Old</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All clients must be 18 years of age or older. Valid identification may be 
                    requested to verify age before services are rendered. I strictly adhere to 
                    all legal age requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="text-foreground font-bold mb-2">Strict Prohibition of Illegal Activities</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Any illegal activities are strictly prohibited and will result in immediate 
                    termination of services and reporting to appropriate authorities. My services 
                    are legal, professional massage therapy only.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="text-foreground font-bold mb-2">Engage Only for Fun; Safety Assured</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    My services are designed for relaxation, wellness, and enjoyment in a safe 
                    environment. Your safety and comfort are my top priorities, and I maintain 
                    strict health and safety protocols.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="text-foreground font-bold mb-2">Confidentiality Priority; Expect Mutual Discretion</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Your privacy is paramount. All client information and session details are kept 
                    strictly confidential. I expect the same level of discretion from our clients 
                    regarding our services and interactions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Policies */}
          <div className="bg-background rounded-lg p-8 shadow-lg border border-muted-foreground/20">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
              Additional Policies
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-foreground font-bold mb-2">Cancellation Policy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cancellations must be made at least 24 hours in advance to receive a refund of 
                  your deposit. Late cancellations or no-shows will forfeit the deposit amount.
                </p>
              </div>

              <div>
                <h3 className="text-foreground font-bold mb-2">Health Disclosure</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Please inform me of any health conditions, allergies, or physical limitations 
                  before your session. This ensures I can provide the safest and most effective 
                  treatment for your needs.
                </p>
              </div>

              <div>
                <h3 className="text-foreground font-bold mb-2">Session Modifications</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I reserve the right to modify or terminate any session if professional standards 
                  are not maintained or if safety concerns arise.
                </p>
              </div>
            </div>
          </div>

          {/* Agreement Statement */}
          <div className="bg-linear-to-r from-accent/90 to-accent rounded-lg p-8 text-center shadow-xl">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
              Agreement to Terms
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              By booking a session with me, you acknowledge that you have read, understood, 
              and agree to abide by all terms and conditions outlined above.
            </p>
            <button
              onClick={() => window.location.href = '/contact'}
              className="px-10 py-4 bg-white text-accent font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Your Session
            </button>
          </div>
        </div>

        {/* Contact for Questions */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-muted-foreground leading-relaxed">
            Have questions about my terms and conditions?{' '}
            <a href="/contact" className="text-accent hover:underline font-bold">
              Contact me
            </a>{' '}
            and I'll be happy to clarify any concerns before you book.
          </p>
        </div>
      </div>
    </section>
  );
}