import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Mail, Clock, Trash2, ShieldCheck } from "lucide-react";

export default function AccountDeletion() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function copyEmail() {
    navigator.clipboard.writeText("support.chessfusion@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  const deletedData = [
    "Firestore user profile document and all subcollections",
    "ELO rating, win/loss/draw records, and cosmetic ownership records",
    "Clan membership records and clan invitations",
    "Friend list and incoming/outgoing friend requests",
    "Inbox messages and notifications",
    "Achievement and progress records",
    "Firebase Authentication account",
  ];

  const retainedData = [
    {
      item: "Clan chat messages",
      reason: "Retained in the clan's record for continuity of other members' chat history. These will no longer be associated with an identifiable active account.",
    },
    {
      item: "Anonymized analytics data",
      reason: "Aggregate Firebase Analytics statistics that do not identify you individually.",
    },
    {
      item: "Legal compliance records",
      reason: "Records required by applicable law for fraud prevention, dispute resolution, or legal obligations.",
    },
  ];

  return (
    <main className="min-h-screen bg-background pt-24 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/40 hover:text-primary transition-colors font-sans"
            data-testid="link-back-home"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>
        </div>

        <div className="mb-12 pb-8 border-b border-primary/10">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-sans">Account</p>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">Account Deletion</h1>
          <p className="text-sm text-white/45 font-sans leading-relaxed">
            We respect your right to control your personal data. This page explains how to request permanent deletion of your Chess Fusion account and all associated data.
          </p>
        </div>

        <div className="space-y-12">
          <section className="space-y-6">
            <h2 className="text-xl font-serif text-gold-gradient">How to Request Deletion</h2>

            <div className="space-y-4">
              <div className="flex gap-4 p-6 border border-primary/10 bg-card">
                <div className="w-8 h-8 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary font-mono">1</span>
                </div>
                <div>
                  <h3 className="font-serif text-white text-sm mb-2">Through the App</h3>
                  <p className="text-sm text-white/50 font-sans leading-relaxed">
                    Open the App and navigate to <span className="text-white/70">Settings → Account Deletion</span>. This will open the official account deletion page where you can submit your request.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 border border-primary/10 bg-card">
                <div className="w-8 h-8 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary font-mono">2</span>
                </div>
                <div>
                  <h3 className="font-serif text-white text-sm mb-2">Via Email</h3>
                  <p className="text-sm text-white/50 font-sans leading-relaxed mb-4">
                    Send a deletion request email with the subject line <span className="text-white/70 italic">"Account Deletion Request"</span> and include the following information:
                  </p>
                  <ul className="space-y-1.5 text-sm text-white/50 font-sans">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary/50 flex-shrink-0" />
                      Your full name
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary/50 flex-shrink-0" />
                      Your in-game username
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary/50 flex-shrink-0" />
                      The email address associated with your Google Sign-In account
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 border border-primary/20 bg-card relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient opacity-50" />
              <div className="flex items-start gap-4">
                <Mail size={20} className="text-primary/60 flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs tracking-[0.3em] uppercase text-primary/60 mb-2 font-sans">Support Email</p>
                  <p
                    className="text-white font-mono text-sm break-all cursor-pointer hover:text-primary transition-colors"
                    onClick={copyEmail}
                    data-testid="text-support-email"
                  >
                    support.chessfusion@gmail.com
                  </p>
                  {copied && (
                    <p className="text-xs text-primary mt-2 tracking-wider font-sans">Copied to clipboard</p>
                  )}
                </div>
                <button
                  onClick={copyEmail}
                  className="text-xs tracking-widest uppercase text-white/30 hover:text-primary transition-colors border border-white/10 hover:border-primary/30 px-3 py-1.5 font-sans flex-shrink-0"
                  data-testid="button-copy-email"
                >
                  Copy
                </button>
              </div>
            </div>
          </section>

          <div className="w-full h-px bg-primary/5" />

          <section className="space-y-5">
            <div className="flex items-center gap-3">
              <Clock size={18} className="text-primary/60" />
              <h2 className="text-xl font-serif text-gold-gradient">Processing Time</h2>
            </div>
            <p className="text-sm text-white/55 font-sans leading-relaxed">
              Deletion requests are processed within <span className="text-white/80 font-semibold">30 days</span> of successful ownership verification. You will receive a confirmation to your registered email address once deletion is complete.
            </p>
            <p className="text-sm text-white/40 font-sans leading-relaxed">
              The information you submit must match the account records associated with your game account. We verify account ownership before processing any deletion request to prevent unauthorized deletion of accounts.
            </p>
          </section>

          <div className="w-full h-px bg-primary/5" />

          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Trash2 size={18} className="text-primary/60" />
              <h2 className="text-xl font-serif text-gold-gradient">What Gets Deleted</h2>
            </div>
            <div className="space-y-2">
              {deletedData.map((item, i) => (
                <div key={i} className="flex items-start gap-3 py-2.5 border-b border-primary/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40 flex-shrink-0 mt-1.5" />
                  <span className="text-sm text-white/55 font-sans">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="w-full h-px bg-primary/5" />

          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <ShieldCheck size={18} className="text-primary/60" />
              <h2 className="text-xl font-serif text-gold-gradient">Data That May Be Retained</h2>
            </div>
            <p className="text-sm text-white/40 font-sans">
              The following data may be retained after account deletion for the reasons stated:
            </p>
            <div className="space-y-4">
              {retainedData.map((item, i) => (
                <div key={i} className="p-5 border border-primary/10 bg-card">
                  <p className="text-sm font-serif text-white/80 mb-2">{item.item}</p>
                  <p className="text-xs text-white/40 font-sans leading-relaxed">{item.reason}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="w-full h-px bg-primary/5" />

          <section className="p-8 border border-primary/15 bg-card text-center relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient opacity-40" />
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-sans">Further Assistance</p>
            <p className="text-sm text-white/50 font-sans leading-relaxed mb-6">
              If you have questions about the deletion process or experience any issues, our support team is available to help.
            </p>
            <a
              href="mailto:support.chessfusion@gmail.com?subject=Account%20Deletion%20Request"
              className="inline-flex items-center gap-2 px-8 py-3 border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase hover:bg-primary/10 transition-all font-sans"
              data-testid="link-email-support"
            >
              <Mail size={14} />
              Contact Support
            </a>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-primary/10 text-center">
          <p className="text-xs text-white/25 font-sans tracking-widest">
            Chess Fusion — Imperial Edition &nbsp;·&nbsp; DreamArk Studio &nbsp;·&nbsp; 2026
          </p>
        </div>
      </div>
    </main>
  );
}
