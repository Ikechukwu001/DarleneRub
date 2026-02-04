'use client';
import Image from 'next/image';
import { Clock, Heart, Sparkles, Zap, ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: 'Nuru Massage',
      description: 'Ancient Japanese technique using special seaweed gel for deep relaxation and complete stress relief through smooth, gliding movements.',
      image: '/servicethree.jpeg',
      icon: Sparkles,
    },
    {
      id: 2,
      title: 'Deep Tissue',
      description: 'Therapeutic massage focused on realigning deeper muscle layers. Ideal for chronic pain, stiff neck, and sore shoulders.',
      image: '/time.jpeg',
      icon: Zap,
    },
    {
      id: 3,
      title: 'Full Body Massage',
      description: 'Comprehensive treatment addressing every part of your body. Promotes overall wellness, reduces stress, and leaves you renewed.',
      image: '/servicefour.jpeg',
      icon: Heart,
    },
    {
      id: 4,
      title: 'Erotic Massage',
      description: 'Sensual intimate experience designed to awaken the senses. Combines therapeutic touch with heightened awareness in a professional setting.',
      image: '/clock.jpeg',
      icon: Clock,
    }
  ];

  return (
    <section className="w-full bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        {/* Heading with underline */}
        <div className="mb-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-3 inline-block">
            Our Signature Services
          </h2>
          <div className="w-24 h-1 bg-accent rounded-full mt-2 mx-auto"></div>
        </div>

        {/* Description paragraph */}
        <p className="text-lg text-muted-foreground max-w-3xl mb-16 leading-relaxed text-center mx-auto">
          Experience transformative healing through our expertly curated massage therapies. 
          Each treatment is designed to restore balance, relieve tension, and rejuvenate your entire being.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-background rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-muted-foreground/20"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64 bg-muted">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {/* Overlay with icon */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <button
                  onClick={() => window.location.href = '/services'}
                  className="text-accent font-semibold hover:underline flex items-center gap-2 group/btn"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Compelling CTA Section */}
        <div className="relative bg-linear-to-r from-accent/90 to-accent rounded-lg overflow-hidden shadow-2xl">
          {/* Background pattern/texture */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}></div>
          </div>

          <div className="relative px-8 py-12 md:py-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              Ready to Transform Your Wellness Journey?
            </h2>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              Don't wait another day to experience the healing touch you deserve. 
              Book your personalized massage session now and take the first step toward 
              complete relaxation and rejuvenation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => window.location.href = '/contact'}
                className="px-10 py-4 bg-white text-accent font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 text-lg"
              >
                Book Your Session Now
              </button>
              <button
                onClick={() => window.location.href = '/pricing'}
                className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-accent transition-all duration-300 text-lg"
              >
                View Pricing
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap justify-center gap-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Certified </span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Lots Of Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>100% Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}