'use client';
import { Check } from 'lucide-react';

export default function PricingPage() {
  const pricingPlans = [
    {
      id: 1,
      duration: '30 Minutes',
      price: 150,
      description: 'Perfect for a quick targeted session',
      features: [
        'Focused treatment area',
        'Stress relief',
        'Professional consultation'
      ],
      popular: false
    },
    {
      id: 2,
      duration: '60-90 Minutes',
      price: 250,
      description: 'Our most popular comprehensive session',
      features: [
        'Full body massage',
        'Deep relaxation',
        'Customized treatment',
        'Hot towel service'
      ],
      popular: true
    },
    {
      id: 3,
      duration: '2 Hours',
      price: 300,
      description: 'Extended therapy for deep healing',
      features: [
        'Complete body treatment',
        'Multiple techniques',
        'Enhanced relaxation',
        'Hot towel service',
        'Aromatherapy included'
      ],
      popular: false
    },
    {
      id: 4,
      duration: '3 Hours',
      price: 400,
      description: 'Premium wellness experience',
      features: [
        'Full therapeutic session',
        'Combined modalities',
        'Deep tissue work',
        'Hot stone therapy',
        'Aromatherapy & essential oils',
        'Extended consultation'
      ],
      popular: false
    },
    {
      id: 5,
      duration: '4 Hours',
      price: 500,
      description: 'Ultimate relaxation journey',
      features: [
        'Comprehensive treatment',
        'Multiple massage styles',
        'Energy balancing',
        'Hot stone & aromatherapy',
        'Reflexology included',
        'Personalized wellness plan'
      ],
      popular: false
    },
    {
      id: 6,
      duration: '6 Hours',
      price: 650,
      description: 'Day spa transformation',
      features: [
        'Full day wellness retreat',
        'All premium services',
        'Custom treatment plan',
        'Multiple therapy sessions',
        'Complete body restoration',
        'Energy work & meditation',
        'Refreshments included'
      ],
      popular: false
    },
    {
      id: 7,
      duration: '7 Hours',
      price: 800,
      description: 'Complete wellness immersion',
      features: [
        'Ultimate spa experience',
        'All-inclusive treatments',
        'Personalized healing journey',
        'Multiple modalities',
        'Full body rejuvenation',
        'Energy healing & meditation',
        'Light refreshments & snacks',
        'Take-home wellness kit'
      ],
      popular: false
    }
  ];

  const handleBookSession = (duration, price) => {
    // Navigate to payment page or open payment modal
    // You can replace this with your actual payment page route
    window.location.href = `/payment?duration=${encodeURIComponent(duration)}&price=${price}`;
  };

  return (
    <section className="w-full bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        {/* Heading with underline */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-3 inline-block">
            Pricing & Packages
          </h1>
          <div className="w-24 h-1 bg-accent rounded-full mt-2 mx-auto"></div>
        </div>

        {/* Description paragraph */}
        <p className="text-lg text-muted-foreground max-w-3xl mb-6 leading-relaxed text-center mx-auto">
          Choose the perfect session length for your wellness needs. All packages include 
          professional consultation and customized treatment plans. Available for both in-home 
          visits and studio sessions.
        </p>

        {/* Service note */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <div className="bg-muted/50 rounded-lg p-6 border border-muted-foreground/10">
            <p className="text-foreground font-medium mb-2">Flexible Service Options</p>
            <p className="text-muted-foreground text-sm">
              Same pricing whether we come to you or you visit our serene studio space. 
              Travel fees may apply for locations beyond 15 miles.
            </p>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-muted/30 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                plan.popular ? 'ring-2 ring-accent' : ''
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-accent text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                {/* Duration */}
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                  {plan.duration}
                </h3>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                  <span className="text-muted-foreground ml-2">per session</span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 text-sm">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => handleBookSession(plan.duration, plan.price)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-accent text-white hover:bg-accent/90 shadow-md hover:shadow-lg'
                      : 'bg-foreground/10 text-foreground hover:bg-foreground/20'
                  }`}
                >
                  Book This Session
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-muted/30 rounded-lg p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-6 text-center">
              What's Included
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Professional Assessment</h3>
                  <p className="text-sm text-muted-foreground">
                    Personalized consultation to address your specific needs
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Premium Products</h3>
                  <p className="text-sm text-muted-foreground">
                    High-quality oils, lotions, and therapeutic materials
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Flexible Scheduling</h3>
                  <p className="text-sm text-muted-foreground">
                    Evening and weekend appointments available
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Certified Therapists</h3>
                  <p className="text-sm text-muted-foreground">
                    Licensed professionals with years of experience
                  </p>
                </div>
              </div>
            </div>

            {/* Main CTA */}
            <div className="mt-10 text-center">
              <button
                onClick={() => window.location.href = '/contact'}
                className="inline-block px-10 py-4 bg-accent text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Schedule Your Appointment
              </button>
              <p className="text-sm text-muted-foreground mt-4">
                Have questions? <a href="/contact" className="text-accent hover:underline">Contact us</a> for custom packages
              </p>
            </div>
          </div>
        </div>

        {/* Cancellation Policy */}
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Cancellation Policy:</span> We require 24-hour notice for cancellations or rescheduling. 
            Late cancellations may be subject to a fee. Gift certificates and package deals available upon request.
          </p>
        </div>
      </div>
    </section>
  );
}