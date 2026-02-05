'use client';

import { useState } from 'react';

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg shadow-2xl max-w-md w-full p-8 border border-border">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-serif font-bold text-primary mb-2">
            Important Notice
          </h2>
          <div className="h-1 w-16 bg-accent rounded-full" />
        </div>

        {/* Message */}
        <p className="text-foreground text-base leading-relaxed mb-8">
          No foul language, calling me a scam is not acceptable that's why i have reviews, thank you for choosing Darlenerub
        </p>

        {/* Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-secondary hover:text-secondary-foreground transition-colors duration-200 flex items-center justify-center gap-2"
        >
          I Understand
        </button>
      </div>
    </div>
  );
}
