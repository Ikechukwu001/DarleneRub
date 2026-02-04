'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/time.jpeg',
    '/clock.jpeg',
    '/last.jpeg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Image Carousel */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Hero massage background ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover"
              quality={100}
            />
          </div>
        ))}
      </div>

      {/* Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text Content and CTAs */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-2xl px-6 sm:px-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight font-serif">
            Unlock Your Body's Natural Healing
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-10 font-light leading-relaxed">
            Experience transformative wellness through our professional massage therapy services. Restore balance, reduce stress, and rejuvenate your mind and body.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Primary Button - Larger */}
            <button 
            onClick={() => window.location.href = '/services'}
            className="bg-primary hover:bg-accent text-white font-semibold py-4 px-10 rounded-lg text-lg sm:text-xl transition-all duration-300 ease-in-out hover:shadow-lg transform hover:scale-105">
              Book Your Appointment
            </button>

            {/* Secondary Button - Smaller */}
            <button 
            onClick={() => window.location.href = '/services'}
            className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-3 px-8 rounded-lg text-base sm:text-lg transition-all duration-300 ease-in-out">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
