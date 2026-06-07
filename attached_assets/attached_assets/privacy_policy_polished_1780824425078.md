# Privacy Policy

## Chess Fusion — Imperial Edition

**Developer:** Sayed Ali Shah — DreamArk Studio
**Contact:** support.chessfusion@gmail.com
**Effective Date:** 2nd July 2026
**Version:** 1.0

---

## 1. Introduction

Chess Fusion — Imperial Edition ("the App," "we," "our," or "us") is developed and operated by Sayed Ali Shah, trading as DreamArk Studio. This Privacy Policy explains what personal data we collect from users of the App, how that data is used, with whom it is shared, how long it is retained, and what rights you have over your data.

We are committed to handling your information transparently and responsibly. We collect only what is necessary to deliver the App's features — online multiplayer, clan communities, ranked play, and cosmetic customization — and we do not sell your personal data to third parties. By creating an account and using the App, you acknowledge that you have read and understood this policy.

---

## 2. Information We Collect

### 2.1 Information You Provide Directly

When you register or use the App, you provide the following information:

- **Google Account Information:** When you sign in with Google, we receive your Google account email address, your Google display name, and your Google profile photo URL via Google Identity Services and Firebase Authentication. We do not receive or store your Google password.
- **Username:** A unique in-game username you create during registration, stored in Firestore and cached in your device's local storage (`cf_username`).
- **Display Name:** An optional display name separate from your username, stored locally (`cf_display_name`) and synced to Firestore.
- **Country:** A country you select for your profile, stored locally (`cf_user_country`) and in Firestore.
- **Profile Bio:** Optional free-text bio you write for your public profile, stored locally (`cf_bio`) and in Firestore.
- **Avatar / Profile Photo URL:** The URL of your Google profile photo as provided by Google Sign-In, stored in Firestore. No photo files are uploaded directly to our servers.
- **Clan Chat Messages:** Text messages you send in your clan's chat room. These are written to and stored in Firestore under the path `clans/{clanId}/messages` and are visible to all members of that clan.
- **In-Game Chat Messages:** Text messages exchanged with your opponent during a real-time multiplayer game. These are stored temporarily in Firebase Realtime Database under `games/{gameId}/chat` for the duration of the active game session.

### 2.2 Information Collected Automatically

The following data is generated through your use of the App and collected automatically:

- **ELO Rating:** Your numeric skill rating, calculated using the FIDE ELO formula after each rated game. Stored in Firestore (`users/{username}`) and cached locally (`cf_elo`).
- **Win, Loss, and Draw Counts:** Your cumulative game outcome totals, stored in Firestore and cached locally.
- **Total Wins:** A lifetime win counter used for bonus fusion eligibility, stored in Firestore.
- **Game Result Timestamps:** The date and time of each completed game, stored locally in game history (`cf_game_history`).
- **Daily Login Streak:** Your consecutive daily login count, stored in Firestore and cached locally (`cf_daily_login`).
- **Firebase UID:** A unique identifier assigned by Firebase Authentication, stored locally (`cf_firebase_uid`, `cf_my_uid`) and in Firestore.
- **Session Sign-In State:** A flag indicating whether you are currently signed in, stored locally (`cf_signed_in`).

### 2.3 Gameplay Data

- **Move History:** Individual chess moves made during a real-time multiplayer game are transmitted to and stored in Firebase Realtime Database under `games/{gameId}/moves` for the duration of the active game session.
- **Game ID:** A unique identifier for each multiplayer game session, generated at the start of each match and stored in Firebase Realtime Database.
- **Timer Choice:** The time control you select before a game (e.g., Bullet, Blitz, Rapid), stored in your matchmaking queue entry in Firebase Realtime Database and not retained after the match.
- **Fusion Setting:** Whether you enabled or disabled the fusion mechanic for a specific game, recorded in the Realtime Database game room.
- **Active Cosmetics:** Your currently equipped board theme and piece set preferences, stored locally (`cf_active_skin`, `cf_active_board`, `cf_active_piece`) and synced to Firestore.
- **Fusion Credit Count:** The number of fusion credits available to you, stored locally (`cf_trial_fusions`, `cf_fusions`) and in Firestore.
- **Trial Status:** Whether you are in a free trial period, trial start timestamp, and trial expiry, stored locally and in Firestore.
- **Cosmetic Ownership Flags:** Records of which board themes and piece sets you own (e.g., `cf_skin_{id}_owned`), stored locally and in Firestore.
- **VIP / Subscription Status:** Whether you hold an active premium subscription, the expiry timestamp, and the subscription tier, stored locally (`cf_vip`, `cf_vip_expiry`, `cf_vip_role`) and in Firestore.
- **Capture Statistics:** Per-piece-type capture counts generated from your games, stored in Firestore.

### 2.4 Social Data

- **Clan Membership:** The name and ID of your current clan, your role within the clan (Member, Elder, Co-Leader, or Leader), and your join date, stored in Firestore (`clans/{clanId}`) and cached locally (`cf_current_clan`, `cf_clan_joined`, `cf_clan_league`).
- **Clan Donation Records:** The number of fusion credits you have donated to your clan, stored in Firestore and cached locally (`cf_clan_donations`).
- **Friend List:** Usernames of players you have added as friends, stored in Firestore under `users/{username}/friends/`.
- **Friend Requests:** Incoming and outgoing friend request records, stored in Firestore under `users/{username}/friendRequests/` and partially cached locally (`cf_fr_incoming`).
- **Inbox Messages:** Notifications delivered to you (for example, clan invitations, fusion donation acknowledgments, or system messages), stored in Firestore under `users/{username}/inbox/`.
- **Broadcast Messages:** System-wide announcements you receive, pulled from Firestore (`broadcasts` collection) and cached locally.
- **Clan War Data:** Your clan's war participation records, attack outcomes, war state, and battle timing, stored in Firestore (`clanWars` collection) and cached locally (`cf_war_state`, `cf_war_stats`, `cf_war_history`, `cf_war_log`, `cf_war_config`).
- **Clan Challenge Records:** Records of friendly challenge games issued or received between clan members, stored in Firestore (`clanChallenges` collection).

### 2.5 Device and Technical Data

- **Firebase Analytics:** The Firebase Analytics SDK is loaded by the App. Firebase Analytics may automatically collect device information such as device model, operating system version, app version, approximate geographic location at the country level (derived from IP address), and aggregated usage events. This data is collected automatically by the Firebase Analytics library and is processed by Google in accordance with Google's Privacy Policy. We have not added custom event logging beyond what Firebase Analytics collects by default.
- **Local Storage:** The App stores the data items described throughout this policy in your device's local browser/WebView storage. This data remains on your device until you clear the App's data or uninstall the App. Local storage is not transmitted to our servers independently; it serves as a client-side cache for faster loading.

---

## 3. How We Use Your Information

### 3.1 Authentication

We use your Google account email address, display name, and Firebase UID to verify your identity, maintain your session, and associate your game data with your account.

### 3.2 Matchmaking

When you search for an online opponent, your username, ELO rating, selected time control, and fusion preference are written temporarily to a matchmaking queue in Firebase Realtime Database (`matchmaking/{uid}`). The App uses a transaction-based race mechanism to pair two available players. Once a match is found, your queue entry is removed. If you disconnect during matchmaking, your entry is automatically deleted via a Realtime Database `onDisconnect()` hook.

### 3.3 Real-Time Game Functionality

Each active multiplayer game session creates a dedicated room in Firebase Realtime Database (`games/{gameId}`). Your moves, game status, draw offers, resignation signals, player profile data (photo URL, country, ELO), and optional in-game chat messages are synchronized through this room in real time. When the game ends, the room status is updated to `finished` and listeners are detached. If a player disconnects without completing the game, the room status is automatically updated to `abandoned` via an `onDisconnect()` hook and the game room is no longer used.

### 3.4 Ranking and Leaderboards

Your ELO rating, win count, loss count, draw count, username, and league tier are stored in Firestore and used to display you on the World, Clan, League, and Friends leaderboards.

### 3.5 Clan and Social Features

Your username, clan membership, clan role, chat messages, friend list, and donation history are used to power clan communities, clan chat, clan wars, clan challenges, and friend interactions within the App.

### 3.6 Cosmetic and Store Features

Your cosmetic ownership flags, active theme preferences, fusion credit balance, and subscription status are stored to display your equipped cosmetics in-game and to make your owned items available across sessions.

### 3.7 Analytics and App Improvement

Firebase Analytics data is used in aggregate to understand how players use the App, identify technical issues, and improve game features. We do not use Firebase Analytics data to identify individual users for marketing purposes.

### 3.8 Daily Puzzles and Achievement Tracking

Your engagement with daily puzzles, achievements, bounties, and seasonal events is tracked locally and, where applicable, in Firestore to deliver rewards and maintain progress records.

---

## 4. Data Sharing and Third Parties

We do not sell your personal data to third parties. We share data only with the service providers listed below, which are necessary to operate the App.

### 4.1 Firebase / Google LLC

The App uses multiple Firebase services operated by Google LLC:

- **Firebase Authentication:** Manages your sign-in session and verifies your Google identity.
- **Cloud Firestore:** Stores your user profile, ELO rating, win/loss records, clan data, friend lists, inbox messages, ownership flags, and other persistent game data.
- **Firebase Realtime Database:** Manages real-time multiplayer game rooms, the matchmaking queue, and move synchronization.
- **Firebase Analytics:** Collects aggregated device and usage data as described in Section 2.5.

Firebase is a Google LLC service. Data processed through Firebase is subject to Google's Privacy Policy, available at [https://policies.google.com/privacy](https://policies.google.com/privacy).

### 4.2 Google Identity Services

The App uses Google Identity Services (`accounts.google.com/gsi/client`) to handle the Google Sign-In flow. When you sign in, Google shares your account email address, display name, and profile photo URL with the App. We do not receive your Google password.

### 4.3 Google Play Billing (Planned)

The App includes defined pricing and package structures for Fusion Passes and cosmetic items. However, Google Play Billing is **not yet integrated** in the current version. When billing integration goes live, transaction data will be processed by Google Play. We will update this policy to reflect data practices at that time.

### 4.4 Google Fonts

The App loads display fonts (Cinzel, Cinzel Decorative, Nunito, Orbitron) from the Google Fonts CDN (`fonts.googleapis.com` and `fonts.gstatic.com`). This is a standard web font delivery mechanism. Google may log the font request, which may include your IP address, in accordance with Google's Privacy Policy.

### 4.5 No Sale of Personal Data

We do not sell, rent, or trade your personal data to any third party for advertising or any other commercial purpose.

---

## 5. Data Retention

### 5.1 Firestore User Profiles

Your Firestore user profile document (`users/{username}`) is retained for as long as your account is active. If you request account deletion (see Section 6), your Firestore profile and associated subcollections (inbox, friend requests, friends list, clan invitations) will be deleted within 30 days of verification.

### 5.2 Realtime Database — Game Rooms and Matchmaking

Matchmaking queue entries are temporary. They are automatically deleted when a match is found or when you disconnect. Game rooms in the Realtime Database are marked as `finished` or `abandoned` upon game completion or player disconnection via `onDisconnect()` hooks. These game room records may be retained for a short period for debugging and anti-cheat validation purposes before being cleaned up.

### 5.3 Clan Data

Clan chat messages stored in Firestore under `clans/{clanId}/messages` are retained as long as the clan exists. If you leave a clan, your past messages remain in the clan chat record but are no longer associated with an active membership. When a clan is disbanded, clan data including messages is deleted from Firestore.

### 5.4 Local Storage

All data stored in your device's local storage (browser/WebView storage) is retained on your device until you clear the App's cache, clear the App's data through your device settings, or uninstall the App. Local storage data is not under our direct control once stored on your device.

### 5.5 Firebase Analytics

Analytics data retained by Firebase Analytics is subject to Google's data retention policies. We have configured no custom retention periods beyond Firebase Analytics defaults.

### 5.6 Legal and Security Retention

Certain data may be retained beyond the periods above where necessary to comply with legal obligations, resolve disputes, prevent fraud or abuse, or enforce our Terms of Service.

---

## 6. Account Deletion

### 6.1 How to Request Account Deletion

You may request deletion of your account and associated data at any time through the following process:

**Settings → Account Deletion → Official Website Account Deletion Page**

Within the App, navigate to **Settings**, then tap **Account Deletion**. This will open the official Chess Fusion Account Deletion page on our website. On that page, you will find a deletion request form requiring you to submit:

- Your **Full Name**
- Your **In-Game Username**
- Your **Email Address** (the email address associated with your account or Google Sign-In)

The information you submit must match the account records associated with your game account. We verify account ownership before processing any deletion request to prevent unauthorized deletion of accounts.

### 6.2 Processing Time

Account deletion requests are processed within **30 days** of successful ownership verification. You will receive a confirmation to your registered email address once deletion is complete.

### 6.3 What Is Deleted

Upon successful account deletion, the following data is removed:

- Your Firestore user profile document and all subcollections (inbox, friend requests, friends list, clan invitations, achievement records)
- Your ELO rating, win/loss/draw records, and cosmetic ownership records in Firestore
- Your membership record in any clans you belong to
- Your Firebase Authentication account

### 6.4 Data That May Be Retained

The following data may be retained after account deletion for the reasons stated:

- **Clan chat messages** you sent while a member of a clan: retained in the clan's Firestore document for the continuity of other members' chat history. These messages will no longer be associated with an identifiable active account.
- **Anonymized or aggregated analytics data** that does not identify you individually, as part of Firebase Analytics aggregate statistics.
- **Records required for legal compliance, fraud prevention, or abuse prevention** for the period required by applicable law.

### 6.5 Contact for Deletion Requests

You may also contact us directly regarding account deletion at:
**support.chessfusion@gmail.com**

---

## 7. Children's Privacy

The App is intended for users **aged 13 and older**. We do not knowingly collect personal information from children under the age of 13 (or under the applicable age of digital consent in your jurisdiction).

In compliance with the Children's Online Privacy Protection Act (COPPA) and applicable international laws, we do not knowingly create accounts for or collect personal data from children under 13. The App requires Google Sign-In, which itself requires users to meet Google's minimum age requirements.

If we become aware that we have inadvertently collected personal data from a child under 13, we will take immediate steps to delete that data from our systems and close the associated account. If you believe a child under 13 has created an account, please contact us at support.chessfusion@gmail.com so we can investigate and act promptly.

Parents or guardians who wish to review, correct, or request deletion of their child's data may do so by contacting us using the information in Section 10.

---

## 8. User Rights

Depending on your location, you may have the following rights regarding your personal data:

### 8.1 Right to Access

You have the right to request a copy of the personal data we hold about you. Contact us at support.chessfusion@gmail.com to submit an access request.

### 8.2 Right to Deletion

You have the right to request deletion of your account and associated personal data. Please follow the account deletion process described in Section 6, or contact us directly at support.chessfusion@gmail.com.

### 8.3 Right to Correction

You may update your username (subject to availability), display name, country, and bio directly within the App through your profile settings. To correct other data, contact us at support.chessfusion@gmail.com.

### 8.4 Right to Opt Out of Analytics

If you wish to opt out of Firebase Analytics data collection, you may do so through your Android device settings by enabling the "Opt out of Ads Personalization" option, or by using the Google Analytics opt-out mechanisms described in Google's Privacy Policy. Opting out of analytics does not affect your ability to use the App.

### 8.5 Exercising Your Rights

To exercise any of the rights listed above, contact us at:
**support.chessfusion@gmail.com**

We will respond to your request within 30 days. We may ask you to verify your identity before processing your request.

---

## 9. Data Security

We take reasonable technical and organizational measures to protect your personal data:

- **HTTPS/TLS:** All data transmitted between the App and Firebase services is encrypted in transit using HTTPS and WebSocket Secure (WSS) protocols.
- **Firebase Security Rules:** Server-side Firebase Security Rules are configured to restrict read and write access to your Firestore and Realtime Database records. Only authenticated users can access their own profile data, and clan data access is restricted to verified clan members.
- **Authentication Only via Google:** The App does not store user passwords. All authentication is handled by Firebase Authentication using Google Sign-In. We never receive or store your Google account password.
- **ELO Integrity Guard:** An integrity validation system cross-references client-reported ELO changes against server-side Firestore records before writing, reducing the risk of stat manipulation.

While we implement these safeguards, no system is completely secure. We cannot guarantee absolute security of data transmitted over the internet or stored in electronic systems. In the event of a data breach that affects your rights, we will notify you in accordance with applicable law.

---

## 10. Contact Information

For questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us through any of the following:

| Purpose | Contact |
|---|---|
| Game support & account deletion | support.chessfusion@gmail.com |
| Developer / owner | owner.chessfusion@gmail.com |
| Studio enquiries | studio.dreamark@gmail.com |

**Developer Name:** Sayed Ali Shah
**Studio / Company:** DreamArk Studio
**Mailing Address:**
DreamArk Studio
Phulji Station, Phulji
Sindh, Pakistan — 76220
(General Post Office, Main GPO)

---

## 11. Changes to This Policy

We may update this Privacy Policy from time to time to reflect changes in the App's features, applicable law, or our data practices. When we make material changes, we will notify you by posting the updated policy within the App or through the Google Play Store listing, and we will update the Effective Date at the top of this document.

Your continued use of the App after the effective date of a revised policy constitutes your acceptance of the updated terms. If you do not agree with the revised policy, you should stop using the App and request account deletion as described in Section 6.

---

## 12. Google Play — Data Safety Disclosures

The following table is provided to align with Google Play's Data Safety section requirements. It lists every category of data collected by the App, the purpose of collection, and storage location.

| Data Type (Google Play Category) | Collected? | Purpose | Storage Location |
|---|---|---|---|
| **Personal info — Name** | ✅ Yes | In-game username and display name for profile, leaderboard, matchmaking, and clan features | Firestore, local storage |
| **Personal info — Email address** | ✅ Yes | Account authentication via Google Sign-In; used to identify and recover accounts | Firestore, local storage (`cf_user_email`) |
| **Personal info — User IDs** | ✅ Yes | Firebase UID used to associate data with your account | Firestore, local storage (`cf_firebase_uid`) |
| **Personal info — Profile photo** | ✅ Yes (URL only) | Google profile photo URL displayed on your in-game profile and during multiplayer | Firestore — URL reference only; no photo file is uploaded |
| **Financial info** | ⚠️ Not yet (Planned) | Fusion Pass and cosmetic purchases — Google Play Billing integration is planned but not yet active | N/A in current version |
| **Location data — Approximate location** | ✅ Yes | Automatically collected by Firebase Analytics via IP address for app diagnostics and aggregated analytics. Not used to track individual users | Processed by Google Firebase Analytics |
| **Health and fitness** | ❌ No | Not collected | N/A |
| **Messages — In-app messages** | ✅ Yes | Clan chat messages visible to clan members; in-game multiplayer chat between opponents | Firestore (`clans/{id}/messages`), Realtime Database (`games/{id}/chat`) |
| **Photos and videos** | ❌ No | Not collected — only a URL reference to an externally hosted Google profile photo is stored | N/A |
| **Audio** | ❌ No | Not collected | N/A |
| **Files and documents** | ❌ No | Not collected | N/A |
| **Calendar data** | ❌ No | Not collected | N/A |
| **Contacts** | ❌ No | Not collected | N/A |
| **App activity — App interactions** | ✅ Yes | Game results (wins, losses, draws), ELO changes, moves played, fusion usage, cosmetic equipping, clan activity, leaderboard participation | Firestore, Realtime Database, local storage |
| **App activity — In-app search history** | ❌ No | Not collected | N/A |
| **App activity — Installed apps** | ❌ No | Not collected | N/A |
| **App activity — Other user-generated content** | ✅ Yes | Player bio, clan chat messages, friend requests | Firestore, local storage |
| **Web browsing** | ❌ No | Not collected | N/A |
| **App info and performance — Crash logs** | ✅ Yes (via Firebase Analytics) | Firebase Analytics may collect crash and error data automatically to help diagnose technical issues | Processed by Google Firebase Analytics |
| **App info and performance — Diagnostics** | ✅ Yes (via Firebase Analytics) | Aggregated performance and usage diagnostics via Firebase Analytics | Processed by Google Firebase Analytics |
| **Device or other identifiers** | ✅ Yes | Firebase Analytics collects a Firebase Installation ID and may use device-level identifiers to associate sessions. Firebase Authentication uses your Google account as the primary identifier | Processed by Google Firebase Authentication and Analytics |

### Data Sharing Summary

| Recipient | Data Shared | Purpose |
|---|---|---|
| Google LLC (Firebase) | All data listed above | Authentication, cloud database, real-time game infrastructure, analytics |
| Google Identity Services | Google account email, name, photo URL | Sign-in only |
| Google Fonts CDN | IP address (as part of font request) | Font delivery |
| Third-party advertisers | None | We do not share data with advertisers |
| Data brokers / resellers | None | We do not sell personal data |

### User Control and Data Safety

- All data is collected for the purpose of operating the App's stated features.
- Users may request account and data deletion at any time via **Settings → Account Deletion** or by emailing **support.chessfusion@gmail.com**.
- No data is collected for tracking or advertising purposes.
- The App does not collect data from children under 13.

---

*Chess Fusion — Imperial Edition | Privacy Policy v1.0 | Effective Date: 2nd July 2026*
*Developer: Sayed Ali Shah — DreamArk Studio | support.chessfusion@gmail.com*
