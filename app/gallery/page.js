'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: '/serviceone.jpeg',
      alt: 'Relaxing massage therapy session',
      span: 'md:col-span-2 md:row-span-2' // Large featured image
    },
    {
      id: 2,
      src: '/last.jpeg',
      alt: 'Tranquil spa environment',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 3,
      src: '/time.jpeg',
      alt: 'Therapeutic stones and essential oils',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 4,
      src: '/servicetwo.jpeg',
      alt: 'Deep tissue massage technique',
      span: 'md:col-span-1 md:row-span-2'
    },
    {
      id: 5,
      src: '/earth.jpeg',
      alt: 'Calming wellness space',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 6,
      src: '/water.jpeg',
      alt: 'Hot stone therapy',
      span: 'md:col-span-2 md:row-span-1'
    },
    {
      id: 7,
      src: '/end.jpeg',
      alt: 'Peaceful meditation corner',
      span: 'md:col-span-1 md:row-span-1'
    }
    ,
    {
      id: 8,
      src: '/servicefour.jpeg',
      alt: 'Peaceful meditation corner',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 9,
      src: '/servicethree.jpeg',
      alt: 'Peaceful meditation corner',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 10,
      src: '/servicefive.jpeg',
      alt: 'Peaceful meditation corner',
      span: 'md:col-span-2 md:row-span-2'
    },
    {
      id: 11,
      src: '/servicesix.jpeg',
      alt: 'Peaceful meditation corner',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 12,
      src: '/serviceseven.jpeg',
      alt: 'Peaceful meditation corner',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 13,
      src: '/serviceeight.jpeg',
      alt: 'Peaceful meditation corner',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 14,
      src: '/servicenine.jpeg',
      alt: 'Peaceful meditation corner',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 15,
      src: '/serviceten.jpeg',
      alt: 'Peaceful meditation corner',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 16,
      src: '/end.jpeg',
      alt: 'Peaceful meditation corner',
      span: 'md:col-span-1 md:row-span-1'
    },
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    // Re-enable body scroll
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section className="w-full bg-background py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
          {/* Heading with underline */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-3 inline-block">
              Our Gallery
            </h1>
            <div className="w-24 h-1 bg-accent rounded-full mt-2"></div>
          </div>

          {/* Description paragraph */}
          <p className="text-lg text-muted-foreground max-w-3xl mb-16 leading-relaxed">
            Step into our world of tranquility and healing. Explore our serene spaces, 
            therapeutic treatments, and the peaceful environment we've created to support 
            your wellness journey. Each image captures the essence of relaxation and 
            rejuvenation that awaits you.
          </p>

          {/* Bento Grid - Fixed height issue */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className={`relative overflow-hidden rounded-lg shadow-lg bg-muted cursor-pointer group ${image.span}`}
                style={{
                  minHeight: '250px'
                }}
                onClick={() => openLightbox(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={image.id === 1}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg 
                      className="w-12 h-12 text-white" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" 
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal - Fixed */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          style={{ backdropFilter: 'blur(10px)' }}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-accent transition-colors p-2 z-10 bg-black/50 rounded-full"
            aria-label="Close lightbox"
          >
            <svg 
              className="w-8 h-8" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>

          {/* Image container */}
          <div 
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-6xl h-[80vh]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                quality={100}
              />
            </div>
          </div>

          {/* Image caption */}
          <div className="absolute bottom-8 left-0 right-0 text-center text-white text-lg px-4 bg-black/60 py-4 backdrop-blur-sm">
            {selectedImage.alt}
          </div>
        </div>
      )}
    </>
  );
}