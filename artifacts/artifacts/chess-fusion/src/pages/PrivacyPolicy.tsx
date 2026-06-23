import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

const sections = [
  {
    heading: "1. Introduction",
    content: `Chess Fusion — Imperial Edition ("the App," "we," "our," or "us") is developed and operated by Sayed Ali Shah, trading as DreamArk Studio. This Privacy Policy explains what personal[...]

We are committed to handling your information transparently and responsibly. We collect only what is necessary to deliver the App's features — online multiplayer, clan communities, ranked play, [...]`
  },
  {
    heading: "2. Information We Collect",
    subsections: [
      {
        label: "2.1 Information You Provide Directly",
        content: `When you register or use the App, you provide the following information:

• Google Account Information: Your Google account email address, display name, and profile photo URL via Google Identity Services and Firebase Authentication. We do not receive or store your Goo[...]
• Username: A unique in-game username you create during registration, stored in Firestore and cached in your device's local storage.
• Display Name, Country, and Profile Bio: Optional profile details stored locally and synced to Firestore.
• Clan Chat Messages: Text messages you send in your clan's chat room, stored in Firestore and visible to all clan members.
• In-Game Chat Messages: Messages exchanged during a multiplayer game, stored temporarily in Firebase Realtime Database for the duration of the game session.`,
      },
      {
        label: "2.2 Information Collected Automatically",
        content: `• ELO Rating: Your numeric skill rating, calculated using the FIDE ELO formula after each rated game.
• Win, Loss, and Draw Counts: Your cumulative game outcome totals.
• Daily Login Streak, Firebase UID, and Session Sign-In State.`,
      },
      {
        label: "2.3 Gameplay Data",
        content: `Move history, game IDs, timer choice, fusion setting, active cosmetics, fusion credit counts, trial status, cosmetic ownership flags, VIP/subscription status, and capture statist[...]
      },
      {
        label: "2.4 Social Data",
        content: `Clan membership, friend list, friend requests, inbox messages, broadcast messages, clan war data, and clan challenge records.`,
      },
      {
        label: "2.5 Device and Technical Data",
        content: `Firebase Analytics may automatically collect device information, OS version, app version, Android Advertising ID (AAID), and approximate geographic location (country level). Local storage data remains on your device until you clear the App's data or uninstall.`,
      },
    ],
  },
  {
    heading: "3. How We Use Your Information",
    content: `We use your information for the following purposes:

• Authentication: To verify your identity, maintain your session, and associate your game data with your account.
• Matchmaking: To pair you with appropriately ranked opponents using your ELO rating and preferences.
• Real-Time Game Functionality: To synchronize moves, game status, draw offers, resignation signals, and in-game chat during multiplayer sessions.
• Ranking and Leaderboards: To display you on World, Clan, League, and Friends leaderboards.
• Clan and Social Features: To power clan communities, clan chat, clan wars, clan challenges, and friend interactions.
• Cosmetic and Store Features: To display your equipped cosmetics and make owned items available across sessions.
• Analytics and App Improvement: Firebase Analytics data is used in aggregate to understand App usage and improve features. We do not use analytics to identify individual users for marketing pur[...]
• Daily Puzzles and Achievement Tracking: To deliver rewards and maintain progress records.`,
  },
  {
    heading: "4. Data Sharing and Third Parties",
    content: `We do not sell your personal data to third parties. We share data only with:

• Firebase / Google LLC: Authentication, Cloud Firestore, Realtime Database, and Analytics. Subject to Google's Privacy Policy (policies.google.com/privacy).
• Google Identity Services: For handling the Google Sign-In flow.
• Google Play Billing (Planned): Not yet integrated. This policy will be updated when billing goes live.
• Google Fonts CDN: For loading Cinzel, Cinzel Decorative, Nunito, and Orbitron fonts.

We do not sell, rent, or trade your personal data to any third party for advertising or any other commercial purpose.`,
  },
  {
    heading: "5. Data Retention",
    content: `• Firestore User Profiles: Retained while your account is active. Deleted within 30 days of a verified account deletion request.
• Realtime Database Game Rooms: Temporary. Cleaned up on game completion or player disconnection via onDisconnect() hooks.
• Clan Data: Retained as long as the clan exists.
• Local Storage: Retained on your device until you clear the App's cache or uninstall.
• Firebase Analytics: Subject to Google's data retention policies.
• Legal and Security: Certain data may be retained as required by applicable law to resolve disputes or prevent fraud.`,
  },
  {
    heading: "6. Account Deletion",
    content: `To request account deletion: navigate to Settings → Account Deletion → Official Website Account Deletion Page.

Submit your Full Name, In-Game Username, and Email Address. Account ownership is verified before processing.

Processing time: within 30 days of successful verification.

Data deleted upon request: Firestore user profile and subcollections, ELO records, cosmetic ownership records, clan membership records, and Firebase Authentication account.

Data that may be retained: Clan chat messages (for continuity of other members' history), anonymized analytics data, and records required for legal compliance.

You may also contact us directly at: support.chessfusion@gmail.com`,
  },
  {
    heading: "7. Children's Privacy",
    content: `The App is intended for users aged 13 and older. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will immediately d[...]
  },
  {
    heading: "8. User Rights",
    content: `Depending on your location, you may have the following rights:

• Right to Access: Request a copy of the personal data we hold about you.
• Right to Deletion: Request deletion of your account and associated data.
• Right to Correction: Update your username, display name, country, and bio within the App.
• Right to Opt Out of Analytics: Through your Android device settings or Google's opt-out mechanisms.

To exercise any right, contact us at: support.chessfusion@gmail.com. We will respond within 30 days.`,
  },
  {
    heading: "9. Data Security",
    content: `We implement the following security measures:

• HTTPS/TLS: All data transmitted between the App and Firebase is encrypted in transit.
• Firebase Security Rules: Server-side rules restrict read and write access to authenticated users and verified clan members.
• Authentication via Google Only: We never receive or store your Google password.
• ELO Integrity Guard: A validation system cross-references client-reported ELO changes against Firestore records before writing.

No system is completely secure. We cannot guarantee absolute security of data transmitted over the internet.`,
  },
  {
    heading: "10. Contact Information",
    content: `For questions, concerns, or requests:

Game support & account deletion: support.chessfusion@gmail.com
Developer / owner: owner.chessfusion@gmail.com
Studio enquiries: studio.dreamark@gmail.com

Developer Name: Sayed Ali Shah
Studio / Company: DreamArk Studio
Address: DreamArk Studio, Phulji Station, Phulji, Sindh, Pakistan — 76220`,
  },
  {
    heading: "11. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in the App's features, applicable law, or our data practices. Material changes will be posted within the App o[...]
  },
];

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-sans">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">Privacy Policy</h1>
          <div className="space-y-1 text-sm text-white/40 font-sans">
            <p><span className="text-white/60">Developer:</span> Sayed Ali Shah — DreamArk Studio</p>
            <p><span className="text-white/60">Contact:</span> support.chessfusion@gmail.com</p>
            <p><span className="text-white/60">Effective Date:</span> 2nd July 2026</p>
            <p><span className="text-white/60">Version:</span> 1.0</p>
          </div>
        </div>

        <div className="space-y-12">
          {sections.map((section) => (
            <article key={section.heading} className="space-y-5">
              <h2 className="text-xl font-serif text-gold-gradient">{section.heading}</h2>
              {section.content && (
                <div className="text-sm text-white/55 leading-relaxed font-sans whitespace-pre-line">
                  {section.content}
                </div>
              )}
              {section.subsections &&
                section.subsections.map((sub) => (
                  <div key={sub.label} className="pl-4 border-l border-primary/15 space-y-2">
                    <h3 className="text-sm font-serif text-white/80">{sub.label}</h3>
                    <p className="text-sm text-white/50 leading-relaxed font-sans whitespace-pre-line">
                      {sub.content}
                    </p>
                  </div>
                ))}
              <div className="w-full h-px bg-primary/5" />
            </article>
          ))}
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
