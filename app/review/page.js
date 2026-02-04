'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: '',
    title: '',
    message: '',
    rating: 5,
  });

  // Load reviews when page loads
  useEffect(() => {
    fetchReviews();
  }, []);

  // Fetch all reviews from Supabase
  async function fetchReviews() {
    try {
      setLoading(true);
      
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      setReviews(data || []);
    } catch (error) {
      console.error('Error loading reviews:', error);
      alert('Failed to load reviews. Please check console.');
    } finally {
      setLoading(false);
    }
  }

  // Submit new review to Supabase
  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    try {
      const { data, error } = await supabase
        .from('reviews')
        .insert([
          {
            name: form.name || 'Anonymous',
            title: form.title,
            message: form.message,
            rating: form.rating,
          },
        ])
        .select();

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      // Add new review to top of list
      if (data && data.length > 0) {
        setReviews([data[0], ...reviews]);
      }

      // Clear form
      setForm({
        name: '',
        title: '',
        message: '',
        rating: 5,
      });

      alert('Thank you for your review! ✨');
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Failed to submit review. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="w-full bg-background py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-10">
        {/* Page Heading */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-3">
            Client Reviews
          </h1>
          <div className="w-24 h-1 bg-accent rounded-full mt-2"></div>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
            Honest experiences shared by clients who have taken time to relax,
            heal, and restore balance through our massage sessions.
          </p>
        </div>

        {/* Reviews List */}
        {loading ? (
          <div className="text-center py-12 mb-24">
            <p className="text-muted-foreground">Loading reviews...</p>
          </div>
        ) : reviews.length === 0 ? (
          <div className="text-center py-12 mb-24">
            <p className="text-muted-foreground">
              No reviews yet. Be the first to share your experience!
            </p>
          </div>
        ) : (
          <div className="space-y-10 mb-24">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        )}

        {/* Review Form */}
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Leave a Review
          </h2>

          <form onSubmit={handleSubmit} className="grid gap-6">
            <input
              type="text"
              placeholder="Your Name (optional)"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-md border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
            />

            <input
              type="text"
              placeholder="Review Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
              className="w-full rounded-md border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
            />

            <textarea
              rows="5"
              placeholder="Share your experience"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="w-full rounded-md border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
            />

            {/* Rating */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Rating</span>
              <select
                value={form.rating}
                onChange={(e) =>
                  setForm({ ...form, rating: Number(e.target.value) })
                }
                className="rounded-md border border-border bg-background px-3 py-2"
              >
                {[5, 4, 3, 2, 1].map((r) => (
                  <option key={r} value={r}>
                    {r} Star{r > 1 && 's'}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-fit rounded-md bg-accent px-8 py-3 text-accent-foreground font-medium hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? 'Submitting...' : 'Submit Review'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* Review Card */
function ReviewCard({ review }) {
  return (
    <article className="rounded-lg border border-border bg-muted/40 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <StarRating rating={review.rating} />
        <time className="text-sm text-muted-foreground">
          {new Date(review.created_at).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
      </div>

      <h1 className="text-2xl font-serif font-bold text-foreground mb-3">
        {review.title}
      </h1>

      <p className="text-muted-foreground leading-relaxed">{review.message}</p>

      <p className="mt-4 text-sm text-muted-foreground">
        — {review.name || 'Anonymous'}
      </p>
    </article>
  );
}

/* Stars */
function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={i <= rating ? 'text-accent' : 'text-muted-foreground'}
        >
          ★
        </span>
      ))}
    </div>
  );
}