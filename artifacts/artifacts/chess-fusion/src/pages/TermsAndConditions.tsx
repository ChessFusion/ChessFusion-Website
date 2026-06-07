import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

const sections = [
  {
    heading: "1. Acceptance of Terms",
    content: `By downloading, installing, or using Chess Fusion — Imperial Edition ("the App"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, do not use the App.

These Terms constitute a legally binding agreement between you and Sayed Ali Shah, trading as DreamArk Studio ("we," "us," or "our"). We reserve the right to update these Terms at any time. Continued use of the App after changes are posted constitutes acceptance of the updated Terms.`,
  },
  {
    heading: "2. Eligibility",
    content: `The App is intended for users aged 13 and older. By using the App, you represent that you are at least 13 years of age. Users under 18 should have parental or guardian consent before using the App.

The App requires a Google account for registration and authentication. By signing in with Google, you agree to Google's Terms of Service and Privacy Policy.`,
  },
  {
    heading: "3. User Accounts",
    content: `You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You must:

• Provide accurate and truthful information during registration.
• Choose a username that does not impersonate any person or entity.
• Not share your account with any other person.
• Notify us immediately at support.chessfusion@gmail.com if you suspect unauthorized access.

We reserve the right to suspend or terminate accounts that violate these Terms.`,
  },
  {
    heading: "4. Gameplay Rules and Conduct",
    content: `Chess Fusion — Imperial Edition is a competitive strategy game. All standard chess rules apply in addition to the Fusion mechanics. By playing, you agree to:

• Play honestly and refrain from using cheats, hacks, bots, or any unauthorized software.
• Not exploit bugs, glitches, or unintended game mechanics to gain an unfair advantage.
• Not manipulate your ELO rating through collusion, match-fixing, or intentional loss farming.
• Not disconnect from ranked matches deliberately to avoid a loss.
• Treat other players with respect in clan chat and in-game chat.

Violations may result in account suspension, ELO adjustment, or permanent ban.`,
  },
  {
    heading: "5. Fusion Credits and In-App Resources",
    content: `Fusion Credits are an in-game resource that allows players to use the Fusion mechanic. They are subject to the following rules:

• New players receive a free 10-fusion trial valid for 3 days from account creation.
• Additional Fusion Credits are earned by winning games (1 credit per 5 wins).
• Fusion Credits may also be obtained through Fusion Passes available in the in-game store.
• Fusion Credits have no cash value and cannot be transferred, refunded, or exchanged for real currency.
• We reserve the right to adjust the Fusion Credit system at any time.`,
  },
  {
    heading: "6. In-App Purchases and Store",
    content: `The in-game Store offers cosmetic items (Board Themes and Piece Sets) as lifetime purchases, and Fusion Passes as timed access products.

Google Play Billing Integration (Planned): In-app purchases through Google Play Billing are not yet active. When the billing integration goes live, purchases will be processed through Google Play and subject to Google Play's refund and billing policies.

Current Status: All purchase-related features currently display a "coming soon" notice. No real monetary transactions are processed through the App at this time.

Virtual items, including cosmetics and Fusion Passes, are licensed to you and do not constitute property. We reserve the right to modify, withdraw, or discontinue any item or feature at any time.`,
  },
  {
    heading: "7. Ranked System and ELO",
    content: `The ranked system uses the official FIDE ELO formula to calculate rating changes after each non-local game. By participating in ranked play, you acknowledge:

• ELO ratings are a reflection of in-game performance and may fluctuate.
• We reserve the right to adjust, reset, or recalculate ELO ratings in cases of detected manipulation or system errors.
• An ELO Integrity Guard validates client-reported rating changes against server-side records. Discrepancies will be resolved in favor of the server record.
• League placements are based solely on ELO thresholds and are not guaranteed to remain static.`,
  },
  {
    heading: "8. Clans and Social Features",
    content: `You may join or create a clan (Great House) within the App. By participating in clan features:

• You are responsible for the content of messages you send in clan chat.
• Clan leaders and co-leaders are responsible for their clan's conduct within the App.
• We reserve the right to dissolve clans that violate these Terms.
• Donation of Fusion Credits to clans is voluntary and irreversible.
• Clan War results are final once recorded by the server.`,
  },
  {
    heading: "9. Prohibited Conduct",
    content: `You agree not to:

• Use the App for any illegal purpose or in violation of any applicable law or regulation.
• Transmit any content that is abusive, threatening, defamatory, obscene, or otherwise objectionable.
• Harass, bully, or intimidate other users.
• Attempt to reverse-engineer, decompile, disassemble, or modify any portion of the App.
• Interfere with the App's servers, networks, or infrastructure.
• Create multiple accounts to circumvent bans or exploit the free trial system.
• Use automated tools, scripts, or bots to interact with the App.`,
  },
  {
    heading: "10. Intellectual Property",
    content: `All content in Chess Fusion — Imperial Edition, including but not limited to the game engine, artwork, piece designs, board themes, logos, trademarks, sound effects, and written content, is the exclusive intellectual property of Sayed Ali Shah / DreamArk Studio.

You are granted a limited, non-exclusive, non-transferable, revocable license to use the App for personal, non-commercial entertainment purposes only. You may not reproduce, distribute, modify, create derivative works from, publicly display, or commercially exploit any portion of the App or its content without express written permission.`,
  },
  {
    heading: "11. Disclaimer of Warranties",
    content: `The App is provided on an "as is" and "as available" basis without warranties of any kind, express or implied. We do not warrant that:

• The App will be uninterrupted, error-free, or free of viruses or harmful components.
• Any defects or errors will be corrected.
• The App will meet your specific requirements.

Use of the App is at your sole risk.`,
  },
  {
    heading: "12. Limitation of Liability",
    content: `To the maximum extent permitted by applicable law, DreamArk Studio and Sayed Ali Shah shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the App, including but not limited to loss of data, loss of ELO rating, loss of virtual items, or loss of revenue.

Our total liability to you for any claim arising from these Terms or your use of the App shall not exceed the amount you paid to us in the 12 months preceding the claim (which may be zero if no purchases have been made).`,
  },
  {
    heading: "13. Account Termination",
    content: `We reserve the right to suspend or permanently terminate your account at our sole discretion, with or without notice, if we determine that you have violated these Terms. Upon termination:

• Your access to the App will be revoked.
• Any unused Fusion Credits or virtual items associated with your account will be forfeited.
• You may request deletion of your personal data as described in our Privacy Policy.`,
  },
  {
    heading: "14. Governing Law",
    content: `These Terms are governed by and construed in accordance with applicable international laws. Any disputes arising from or relating to these Terms or the App shall be resolved through good-faith negotiation. If negotiation fails, disputes shall be submitted to binding arbitration.`,
  },
  {
    heading: "15. Contact",
    content: `For questions regarding these Terms and Conditions:

Email: support.chessfusion@gmail.com
Developer: Sayed Ali Shah
Studio: DreamArk Studio
Address: Phulji Station, Phulji, Sindh, Pakistan — 76220`,
  },
];

export default function TermsAndConditions() {
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
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">Terms &amp; Conditions</h1>
          <div className="space-y-1 text-sm text-white/40 font-sans">
            <p><span className="text-white/60">Developer:</span> Sayed Ali Shah — DreamArk Studio</p>
            <p><span className="text-white/60">Contact:</span> support.chessfusion@gmail.com</p>
            <p><span className="text-white/60">Effective Date:</span> 2nd July 2026</p>
            <p><span className="text-white/60">Version:</span> 1.0</p>
          </div>
        </div>

        <div className="space-y-12">
          {sections.map((section) => (
            <article key={section.heading} className="space-y-4">
              <h2 className="text-xl font-serif text-gold-gradient">{section.heading}</h2>
              <div className="text-sm text-white/55 leading-relaxed font-sans whitespace-pre-line">
                {section.content}
              </div>
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
