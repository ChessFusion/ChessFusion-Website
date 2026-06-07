import { useEffect, useState, useCallback } from "react";

export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
}

const API_BASE = "/api";

export function useReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchReviews = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/reviews`);
      if (!res.ok) throw new Error("Failed to fetch reviews");
      const data: Review[] = await res.json();
      setReviews(data);
      setError(null);
    } catch (err) {
      setError("Could not load reviews. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  const addReview = async (review: { name: string; rating: number; comment: string }) => {
    const res = await fetch(`${API_BASE}/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error ?? "Failed to submit review");
    }
    const saved: Review = await res.json();
    setReviews((prev) => [saved, ...prev]);
    return saved;
  };

  return { reviews, loading, error, addReview, refetch: fetchReviews };
}
