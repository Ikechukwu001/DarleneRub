'use client';

import Image from 'next/image';

export default function KnowMe() {
  return (
    <section className="w-full bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        {/* Heading with underline */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-3 inline-block">
            About Darlene
          </h1>
          <div className="w-24 h-1 bg-accent rounded-full mt-2"></div>
        </div>

        {/* Description paragraph */}
        <p className="text-lg text-muted-foreground max-w-3xl mb-16 leading-relaxed">
         At Darlene Rub, we specialize in indulgent massage experiences crafted to awaken the senses, relax the body, and restore inner harmony. Our expert therapists offer a variety of tailored sessions, including Nuru massage, deep tissue, full body, Swedish, erotic, FBSM, GFE, FS, Pastorate, and milking table treatments. Every session is designed to meet your personal desires and wellness needs, combining skilled touch with mindful techniques to deliver ultimate relaxation, pleasure, and balance for both body and mind.
        </p>

        {/* Images grid - 2 columns on desktop and mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image 1 */}
          <div className="relative overflow-hidden rounded-lg shadow-lg h-64 md:h-80 bg-muted">
            <Image
              src="/time.jpeg"
              alt="Massage therapy session"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Image 2 */}
          <div className="relative overflow-hidden rounded-lg shadow-lg h-64 md:h-80 bg-muted">
            <Image
              src="/clock.jpeg"
              alt="Wellness and relaxation space"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
