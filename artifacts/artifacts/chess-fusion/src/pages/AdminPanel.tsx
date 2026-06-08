import { useState, useEffect, useCallback } from "react";
import { Search, Trash2, Eye, EyeOff, Star, LogOut, Shield, Loader2, AlertTriangle } from "lucide-react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User,
} from "firebase/auth";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

const ADMIN_EMAIL = import.meta.env.VITE_FIREBASE_ADMIN_EMAIL as string;

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  hidden: boolean;
  createdAt: string;
}

function StarDisplay({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={12}
          className={s <= rating ? "text-primary fill-primary" : "text-white/20 fill-transparent"}
        />
      ))}
    </div>
  );
}

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, ADMIN_EMAIL, password);
      onLogin();
    } catch {
      setError("Invalid password. Access denied.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center mb-10">
          <div className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center mb-5 bg-primary/5">
            <Shield size={26} className="text-primary" />
          </div>
          <h1 className="font-display text-2xl text-gold-gradient tracking-widest mb-1">CHESS FUSION</h1>
          <p className="text-xs tracking-[0.35em] text-white/35 uppercase">Admin Access</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs tracking-[0.3em] uppercase text-white/40 mb-2">
              Admin Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-primary/20 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-primary/60 transition-colors placeholder:text-white/20"
              placeholder="Enter admin password"
              autoFocus
              required
            />
          </div>

          {error && (
            <div className="flex items-center gap-2 text-red-400/80 text-xs border border-red-500/20 bg-red-500/5 px-3 py-2 rounded-sm">
              <AlertTriangle size={13} />
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="w-full py-3 bg-gold-gradient text-black text-xs font-bold tracking-widest uppercase rounded-sm hover:opacity-90 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 size={14} className="animate-spin" /> : null}
            {loading ? "Authenticating..." : "Enter Panel"}
          </button>
        </form>

        <div className="mt-8 text-center">
          <div className="w-16 h-px mx-auto mb-4" style={{ background: "linear-gradient(to right, transparent, hsl(43 65% 52% / 0.2), transparent)" }} />
          <p className="text-[10px] text-white/15 tracking-widest uppercase">Restricted area — authorised personnel only</p>
        </div>
      </div>
    </div>
  );
}

function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [allReviews, setAllReviews] = useState<Review[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const fetchReviews = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const data: Review[] = snapshot.docs.map((d) => {
        const raw = d.data();
        const createdAt =
          raw.createdAt instanceof Timestamp
            ? raw.createdAt.toDate().toISOString()
            : new Date().toISOString();
        return {
          id: d.id,
          name: raw.name as string,
          rating: raw.rating as number,
          comment: raw.comment as string,
          hidden: raw.hidden as boolean,
          createdAt,
        };
      });
      setAllReviews(data);
      setReviews(data);
    } catch {
      setError("Failed to load reviews.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchReviews();
  }, [fetchReviews]);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const term = searchInput.trim().toLowerCase();
    setSearch(searchInput);
    if (!term) {
      setReviews(allReviews);
      return;
    }
    setReviews(
      allReviews.filter(
        (r) =>
          r.name.toLowerCase().includes(term) ||
          r.comment.toLowerCase().includes(term)
      )
    );
  }

  function clearSearch() {
    setSearchInput("");
    setSearch("");
    setReviews(allReviews);
  }

  async function toggleVisibility(review: Review) {
    setActionLoading(review.id);
    try {
      await updateDoc(doc(db, "reviews", review.id), { hidden: !review.hidden });
      const updated = (r: Review) =>
        r.id === review.id ? { ...r, hidden: !r.hidden } : r;
      setAllReviews((prev) => prev.map(updated));
      setReviews((prev) => prev.map(updated));
    } catch {
      setError("Action failed. Please try again.");
    } finally {
      setActionLoading(null);
    }
  }

  async function deleteReview(id: string) {
    setActionLoading(id);
    try {
      await deleteDoc(doc(db, "reviews", id));
      const remove = (prev: Review[]) => prev.filter((r) => r.id !== id);
      setAllReviews(remove);
      setReviews(remove);
      setDeleteConfirm(null);
    } catch {
      setError("Delete failed. Please try again.");
    } finally {
      setActionLoading(null);
    }
  }

  const totalReviews = reviews.length;
  const hiddenCount = reviews.filter((r) => r.hidden).length;
  const visibleCount = totalReviews - hiddenCount;
  const avgRating =
    reviews.length > 0
      ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
      : "—";

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  async function handleLogout() {
    await signOut(auth);
    onLogout();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-primary/10 bg-black/80 backdrop-blur sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Shield size={16} className="text-primary" />
            <span className="font-display text-sm text-gold-gradient tracking-widest">ADMIN PANEL</span>
            <span className="hidden sm:block text-white/20 text-xs tracking-widest">· CHESS FUSION</span>
          </div>
          <button
            onClick={() => void handleLogout()}
            className="flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors tracking-widest uppercase"
          >
            <LogOut size={13} />
            <span className="hidden sm:inline">Sign Out</span>
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <h2 className="text-xl font-display tracking-widest text-white mb-1">Review Moderation</h2>
          <p className="text-xs text-white/30 tracking-wide">Manage all player reviews from here</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { label: "Total Reviews", value: totalReviews },
            { label: "Visible", value: visibleCount },
            { label: "Hidden", value: hiddenCount },
            { label: "Avg Rating", value: avgRating },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border border-primary/10 bg-white/[0.02] p-4 rounded-sm"
            >
              <p className="text-[10px] tracking-[0.3em] uppercase text-white/35 mb-1">{stat.label}</p>
              <p className="text-2xl font-display text-gold-gradient">{stat.value}</p>
            </div>
          ))}
        </div>

        <form onSubmit={handleSearch} className="flex gap-2 mb-6">
          <div className="relative flex-1">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full bg-white/5 border border-primary/15 rounded-sm pl-9 pr-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-primary/50 transition-colors"
              placeholder="Search by name or comment..."
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2.5 bg-primary/10 border border-primary/30 text-primary text-xs tracking-widest uppercase rounded-sm hover:bg-primary/20 transition-colors"
          >
            Search
          </button>
          {search && (
            <button
              type="button"
              onClick={clearSearch}
              className="px-4 py-2.5 border border-white/10 text-white/40 text-xs tracking-widest uppercase rounded-sm hover:text-white/70 transition-colors"
            >
              Clear
            </button>
          )}
        </form>

        {search && (
          <p className="text-xs text-white/30 mb-4 tracking-wide">
            Showing results for <span className="text-primary">"{search}"</span> — {reviews.length} found
          </p>
        )}

        {error && (
          <div className="flex items-center gap-2 text-red-400/80 text-xs border border-red-500/20 bg-red-500/5 px-3 py-2 rounded-sm mb-4">
            <AlertTriangle size={13} />
            {error}
            <button onClick={() => setError("")} className="ml-auto text-white/30 hover:text-white/60">✕</button>
          </div>
        )}

        {loading ? (
          <div className="flex items-center justify-center py-24 gap-3 text-white/30">
            <Loader2 size={20} className="animate-spin" />
            <span className="text-sm tracking-widest">Loading reviews...</span>
          </div>
        ) : reviews.length === 0 ? (
          <div className="text-center py-24 border border-primary/5 rounded-sm">
            <p className="text-white/25 text-sm tracking-widest">No reviews found</p>
          </div>
        ) : (
          <div className="space-y-2">
            {reviews.map((review) => (
              <div
                key={review.id}
                className={`border rounded-sm p-4 sm:p-5 transition-all duration-200 ${
                  review.hidden
                    ? "border-white/5 bg-white/[0.01] opacity-60"
                    : "border-primary/10 bg-white/[0.02] hover:border-primary/20"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                      <span className="text-sm font-serif text-white truncate">{review.name}</span>
                      <StarDisplay rating={review.rating} />
                      <span className="text-[10px] text-white/25 tracking-widest">{formatDate(review.createdAt)}</span>
                      {review.hidden && (
                        <span className="text-[9px] tracking-[0.25em] uppercase border border-white/15 text-white/35 px-1.5 py-0.5">
                          Hidden
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed break-words">{review.comment}</p>
                    <p className="text-[10px] text-white/20 mt-1">ID {review.id.slice(0, 8)}…</p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => void toggleVisibility(review)}
                      disabled={actionLoading === review.id}
                      title={review.hidden ? "Show review" : "Hide review"}
                      className="flex items-center gap-1.5 px-3 py-1.5 border border-primary/20 text-primary/60 text-xs tracking-widest uppercase rounded-sm hover:bg-primary/10 hover:border-primary/50 transition-all disabled:opacity-40"
                    >
                      {actionLoading === review.id ? (
                        <Loader2 size={12} className="animate-spin" />
                      ) : review.hidden ? (
                        <Eye size={12} />
                      ) : (
                        <EyeOff size={12} />
                      )}
                      <span className="hidden sm:inline">{review.hidden ? "Show" : "Hide"}</span>
                    </button>

                    {deleteConfirm === review.id ? (
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => void deleteReview(review.id)}
                          disabled={actionLoading === review.id}
                          className="px-3 py-1.5 bg-red-600/80 text-white text-xs tracking-widest uppercase rounded-sm hover:bg-red-600 transition-colors disabled:opacity-40"
                        >
                          {actionLoading === review.id ? <Loader2 size={12} className="animate-spin" /> : "Confirm"}
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(null)}
                          className="px-3 py-1.5 border border-white/10 text-white/40 text-xs rounded-sm hover:text-white/60 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setDeleteConfirm(review.id)}
                        title="Delete review"
                        className="flex items-center gap-1.5 px-3 py-1.5 border border-red-500/20 text-red-400/60 text-xs tracking-widest uppercase rounded-sm hover:bg-red-500/10 hover:border-red-500/50 transition-all"
                      >
                        <Trash2 size={12} />
                        <span className="hidden sm:inline">Delete</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default function AdminPanel() {
  const [user, setUser] = useState<User | null | "loading">("loading");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return unsub;
  }, []);

  function handleLogin() {
    // onAuthStateChanged will update user state automatically
  }

  function handleLogout() {
    setUser(null);
  }

  if (user === "loading") {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 size={24} className="animate-spin text-primary/50" />
      </div>
    );
  }

  if (!user) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return <Dashboard onLogout={handleLogout} />;
}
