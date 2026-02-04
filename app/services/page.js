'use client';
import Image from 'next/image';
import { Clock, Heart, Sparkles, Zap } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: 'Nuru Massage',
      description: 'An ancient Japanese technique using a special gel made from seaweed. This full-body massage promotes deep relaxation, skin rejuvenation, and complete stress relief through smooth, gliding movements that create an unparalleled sensory experience.',
      image: '/clock.jpeg',
      icon: Sparkles,
      benefits: [
        'Deep relaxation and stress relief',
        'Enhanced skin hydration',
        'Improved circulation',
        'Full body rejuvenation'
      ],
      duration: '60-90 minutes recommended'
    },
    {
      id: 2,
      title: 'Deep Tissue Massage',
      description: 'A therapeutic massage technique focused on realigning deeper layers of muscles and connective tissue. Ideal for chronic aches and pain, contracted areas such as stiff neck, upper back, lower back pain, leg muscle tightness, and sore shoulders.',
      image: '/time.jpeg',
      icon: Zap,
      benefits: [
        'Relieves chronic muscle tension',
        'Breaks down scar tissue',
        'Improves posture',
        'Reduces inflammation'
      ],
      duration: '60-120 minutes recommended'
    },
    {
      id: 3,
      title: 'Full Body Massage',
      description: 'A comprehensive massage experience that addresses every part of your body. Using a combination of Swedish and relaxation techniques, this treatment promotes overall wellness, reduces stress, and leaves you feeling completely renewed and balanced.',
      image: '/last.jpeg',
      icon: Heart,
      benefits: [
        'Complete body relaxation',
        'Stress and anxiety reduction',
        'Improved sleep quality',
        'Enhanced overall well-being'
      ],
      duration: '90-120 minutes recommended'
    },
    {
      id: 4,
      title: 'Erotic Massage',
      description: 'A sensual and intimate massage experience designed to awaken the senses and promote deep connection. This specialized treatment combines therapeutic touch with heightened awareness, creating a journey of relaxation and sensory exploration in a safe, professional environment.',
      image: '/clock.jpeg',
      icon: Clock,
      benefits: [
        'Heightened sensory awareness',
        'Deep emotional release',
        'Enhanced intimacy and connection',
        'Profound relaxation'
      ],
      duration: '60-90 minutes recommended'
    }
  ];

  const handleBookService = (serviceName) => {
    window.location.href = `/contact?service=${encodeURIComponent(serviceName)}`;
  };

  return (
    <section className="w-full bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        {/* Heading with underline */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-3 inline-block">
            Our Services
          </h1>
          <div className="w-24 h-1 bg-accent rounded-full mt-2"></div>
        </div>

        {/* Description paragraph */}
        <p className="text-lg text-muted-foreground max-w-3xl mb-16 leading-relaxed">
          Discover our range of specialized massage therapies, each carefully designed to address 
          your unique wellness needs. Our certified therapists combine traditional techniques with 
          modern approaches to deliver transformative healing experiences in a safe, professional, 
          and nurturing environment.
        </p>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden rounded-lg shadow-lg h-80 md:h-96 bg-muted ${
                  index % 2 === 1 ? 'md:order-2' : ''
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                    {service.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Benefits */}
                <div className="mb-6">
                  <h3 className="text-foreground font-bold mb-3">Key Benefits:</h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span className="text-muted-foreground leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Duration */}
                <div className="mb-6">
                  <p className="text-foreground">
                    <span className="font-bold">Duration:</span>{' '}
                    <span className="text-muted-foreground">{service.duration}</span>
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleBookService(service.title)}
                  className="px-8 py-3 bg-accent text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  Book {service.title}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information Section */}
        <div className="mt-20 bg-muted/50 rounded-lg p-8 md:p-10 shadow-lg">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3 inline-block">
              What to Expect
            </h2>
            <div className="w-24 h-1 bg-accent rounded-full mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-foreground font-bold mb-3">Before Your Session</h3>
              <p className="text-muted-foreground leading-relaxed">
                We'll begin with a brief consultation to understand your specific needs, preferences, 
                and any areas of concern. This helps us customize your treatment for optimal results.
              </p>
            </div>

            <div>
              <h3 className="text-foreground font-bold mb-3">During Your Session</h3>
              <p className="text-muted-foreground leading-relaxed">
                Relax in our serene environment as our skilled therapists work their magic. 
                We maintain the highest standards of professionalism and respect your comfort at all times.
              </p>
            </div>

            <div>
              <h3 className="text-foreground font-bold mb-3">After Your Session</h3>
              <p className="text-muted-foreground leading-relaxed">
                Take a moment to enjoy the peaceful afterglow. We'll provide recommendations for 
                maintaining your wellness between sessions and scheduling your next appointment.
              </p>
            </div>

            <div>
              <h3 className="text-foreground font-bold mb-3">Professional Standards</h3>
              <p className="text-muted-foreground leading-relaxed">
                All our therapists are certified professionals committed to your safety, comfort, 
                and satisfaction. We maintain strict confidentiality and ethical standards.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-10 text-center border-t border-muted-foreground/20 pt-8">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Ready to experience transformative healing?
            </p>
            <button
              onClick={() => window.location.href = '/prices'}
              className="inline-block px-10 py-4 bg-accent text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 mr-4 mb-4"
            >
              View Pricing
            </button>
            <button
              onClick={() => window.location.href = '/contact'}
              className="inline-block px-10 py-4 bg-muted text-foreground font-semibold rounded-lg hover:bg-muted/80 transition-all duration-300 mb-4"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}