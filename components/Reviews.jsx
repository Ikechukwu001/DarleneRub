'use client';

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  { name: "Amanda R.", text: "Absolutely amazing massage. I felt relaxed and refreshed immediately." },
  { name: "James K.", text: "Very professional and calming experience. Highly recommend." },
  { name: "Sophia M.", text: "The best massage session I’ve had in years." },
  { name: "Daniel T.", text: "Clean environment, great technique, and very respectful." },
  { name: "Lauren P.", text: "Helped relieve my back pain after just one session." },
  { name: "Michael B.", text: "Truly therapeutic and worth every minute." },
  { name: "Rachel S.", text: "Felt comfortable from start to finish." },
  { name: "Chris W.", text: "Professional, attentive, and very skilled." },
  { name: "Emily D.", text: "A perfect balance of relaxation and deep tissue work." },
  { name: "Joshua L.", text: "Exceeded my expectations. Booking again soon." },
  { name: "Nicole A.", text: "Soothing atmosphere and great energy." },
  { name: "Brian H.", text: "Helped me unwind after a stressful week." },
  { name: "Vanessa O.", text: "Excellent service and communication." },
  { name: "Kevin N.", text: "One of the best wellness experiences I’ve had." },
  { name: "Melissa J.", text: "Very knowledgeable and intuitive therapist." },
  { name: "Andrew C.", text: "Felt like a reset for my body and mind." },
  { name: "Tina E.", text: "Gentle, calming, and extremely professional." },
  { name: "Robert F.", text: "Great pressure and attention to detail." },
  { name: "Hannah V.", text: "Relaxing from the first minute." },
  { name: "Eric Z.", text: "I left feeling lighter and pain-free." },
];

export default function ReviewCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setIndex((index - 1 + reviews.length) % reviews.length);
  const next = () =>
    setIndex((index + 1) % reviews.length);

  return (
    <section className="w-full bg-muted/30 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
          What Clients Are Saying
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-10" />

        <div className="relative overflow-hidden">
          <div className="rounded-xl border border-border bg-background p-8 md:p-10 shadow-sm transition">
            <div className="flex justify-center mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>

            <p className="text-lg text-muted-foreground mb-6">
              “{reviews[index].text}”
            </p>

            <p className="font-medium text-foreground">
              — {reviews[index].name}
            </p>
          </div>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background border border-border hover:bg-muted transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background border border-border hover:bg-muted transition"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
