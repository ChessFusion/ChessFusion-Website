import { useEffect, useState, useCallback } from "react";
import {
  collection,
  query,
  where,
  orderBy,
  addDoc,
  getDocs,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export function useReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchReviews = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const q = query(
        collection(db, "reviews"),
        where("hidden", "==", false),
        orderBy("createdAt", "desc")
      );
      const snapshot = await getDocs(q);
      const data: Review[] = snapshot.docs.map((doc) => {
        const d = doc.data();
        const createdAt =
          d.createdAt instanceof Timestamp
            ? d.createdAt.toDate().toISOString()
            : new Date().toISOString();
        return {
          id: doc.id,
          name: d.name as string,
          rating: d.rating as number,
          comment: d.comment as string,
          createdAt,
        };
      });
      setReviews(data);
    } catch {
      setError("Could not load reviews. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchReviews();
  }, [fetchReviews]);

  const addReview = async (review: {
    name: string;
    rating: number;
    comment: string;
  }) => {
    const docRef = await addDoc(collection(db, "reviews"), {
      name: review.name,
      rating: review.rating,
      comment: review.comment,
      hidden: false,
      createdAt: serverTimestamp(),
    });

    const saved: Review = {
      id: docRef.id,
      name: review.name,
      rating: review.rating,
      comment: review.comment,
      createdAt: new Date().toISOString(),
    };

    setReviews((prev) => [saved, ...prev]);
    return saved;
  };

  return { reviews, loading, error, addReview, refetch: fetchReviews };
}
