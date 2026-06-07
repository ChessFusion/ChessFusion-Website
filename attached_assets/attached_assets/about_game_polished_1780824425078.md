# Chess Fusion — Imperial Edition

## *Where Ancient Strategy Meets Supernatural Power*

---

## What Is Chess Fusion?

Chess Fusion — Imperial Edition is a mobile strategy game built on the foundation of classical chess, elevated by one game-changing innovation: **Fusion**. Players can combine two of their own pieces on the board to forge a powerful hybrid unit with combined abilities. It's standard chess — all the rules, all the depth — but with a new layer of tactical decision-making that transforms how you attack, defend, and dominate.

The game is wrapped in a richly atmospheric imperial aesthetic: deep obsidian boards, metallic gold typography, and a library of stunning themed piece sets that give every match a cinematic feel.

---

## The Fusion Mechanic — Explained Simply

In classical chess, every piece has exactly one job. A knight jumps in an L-shape. A rook slides in straight lines. They never change.

In Chess Fusion, you can **merge two adjacent same-colored pieces** into a single unit that inherits the movement abilities of both. This costs one Fusion Credit and can only be performed after at least 8 moves have been played, so the board has to develop before fusion becomes available.

There are three fusion combinations, each producing a distinct piece:

| Fusion | Result | Movement |
|---|---|---|
| Knight + Rook | **⚜️ Iron Chancellor** | Combines the knight's L-jump with the rook's unlimited straight slides — mobile and powerful |
| Bishop + Rook | **👑 Grand Queen** | Moves in all 8 directions without limit — surpasses a standard queen in flexibility |
| Knight + Pawn | **🗡️ Lancer** | Retains the knight's L-jump plus a forward step — a versatile advanced attacker |

Fusion is a finite resource. New players receive a **10-fusion free trial** lasting 3 days. Ongoing fusions are earned by winning games (1 bonus fusion every 5 wins) or by purchasing timed Fusion Passes through the in-game store.

---

## Game Modes

### ♟️ Local — Pass & Play
Two players share the same device and take turns. No internet required. Perfect for friends or family sitting together.

### 🤖 VS AI — Challenge the CPU
Face an ELO-scaled AI opponent whose difficulty automatically adjusts to match your skill level. The AI uses a minimax search engine with blunder simulation — beginners encounter a forgiving opponent while higher-rated players face deep positional analysis. Great for practice, warm-up, or learning.

### 🌐 Ranked Multiplayer — Real-Time Online Play
Compete against live opponents worldwide through automatic matchmaking. The system pairs players by ELO rating and time control preference in real time. All ranked games are played via Firebase Realtime Database, ensuring low-latency move delivery. Wins and losses update your official ELO rating.

Before each match you choose your **time control** and whether fusion is enabled:
- ⚡ **Bullet** — 1:30 per player
- 🔥 **Blitz** — 3:00 per player
- ⚔️ **Rapid** — 5:00 per player (default)
- 🏰 **Classic** — 10:00 per player
- 👑 **Long** — 15:00 per player

### ⚔️ Clan Challenges — Friendly Inter-Clan Duels
Clan members can issue live challenges to players in rival clans. Accepted challenges launch a real game room. Results contribute to clan standings and the Clan War effort.

### 🏰 Clan Wars — Organized Team Competition
During active Clan War periods, clans battle each other in a structured competitive event. Scores accumulate across individual games played by all clan members, with results tracked in real time through Firestore.

---

## Ranked System — 12 Leagues

Every player begins with an **ELO rating of 800** and progresses through 12 leagues using the official FIDE ELO formula. Rating changes are calculated after every non-local game:

| League | ELO Threshold |
|---|---|
| 🥉 Bronze III | 0+ |
| 🥉 Bronze II | 200+ |
| 🥉 Bronze I | 400+ |
| 🥈 Silver III | 600+ |
| 🥈 Silver II | 800+ |
| 🥈 Silver I | 1,000+ |
| 🥇 Gold III | 1,200+ |
| 🥇 Gold II | 1,400+ |
| 🥇 Gold I | 1,600+ |
| 💠 Platinum | 1,800+ |
| 💎 Diamond | 2,000+ |
| 👑 Grand Master | 2,200+ |

The K-factor adjusts based on experience: new and lower-rated players use K=40 (faster movement), established players use K=20, and masters above 2,400 use K=10. New players may also manually choose a starting ELO bracket to reflect prior chess experience.

---

## Multiplayer Infrastructure

All online matches run through **Firebase Realtime Database**. Each game session receives a dedicated room where moves, game status, draw offers, resignations, player profiles, and in-game chat messages are synchronized in real time. Matchmaking entries are temporary — they are written at the start of a search and automatically cleaned up on disconnect or match completion.

---

## Cosmetics & Store

The Store offers three categories of visual customization:

**Board Themes** and **Piece Sets** (sold as lifetime purchases):
- **Free forever:** Default Board, CF Board, Default Pieces, CF Pieces
- **Paid lifetime unlocks ($0.99–$1.99):** Forest, Blue Emerald, Green Emerald, Minecraft, Stonage, Steel & Bronze, Steampunk & Dieselpunk, Egyptian, Desert Archaeology, Japanese Kingdom, Lumina Carbon, Luxury Architectural, Cybernetic & Gothic Horror, and more

**Fusion Passes** (timed subscriptions — Google Play Billing integration is planned and coming soon):
- Passes ranging from 3-day to 30-day access, bundling Fusion Credits for active use during the pass period

Purchases are processed through Google Play Billing once the integration is live. In the current version, cosmetic and pass purchases display a "coming soon" notice.

---

## Social Features

- **Clans (Great Houses):** Join or create a clan, chat with members in the clan chat room (powered by Firestore), donate fusion credits, and compete together in Clan Wars
- **Friends System:** Send and accept friend requests; view a dedicated Friends leaderboard
- **Leaderboards:** Four tabs — World, Clan, League, and Friends — each ranked by ELO rating and win count
- **Player Profiles:** Display username, country flag, avatar, bio, ELO, win/loss/draw record, league badge, and cosmetic showcase
- **Inbox & Broadcasts:** System-wide announcements and private notifications delivered through Firestore
- **Daily Puzzles:** A built-in puzzle mode for tactical training and daily challenges
- **Social Feed & Imperial Dispatch:** Community posts and event announcements

---

## Technical Highlights

- **AI Engine:** ELO-calibrated minimax with configurable search depth (depth 1–4 based on AI rating) and weighted blunder rates that replicate human-like imperfection at lower levels
- **Real-Time Multiplayer:** Firebase Realtime Database with `onDisconnect()` hooks ensuring abandoned games are automatically marked and cleaned up
- **ELO Integrity Guard:** A server-side validation layer that cross-references the client ELO calculation against a Firestore baseline before writing — preventing stat manipulation
- **Full Chess Rule Set:** En passant, castling (kingside and queenside), pawn promotion (queen, rook, bishop, knight), draw offers, resignations, timed games with clock expiry
- **Reconnect System:** Players who lose connection mid-game can reconnect and resume from the current board state

---

## Target Audience

Chess Fusion — Imperial Edition is designed for chess players of all skill levels — from casual players who enjoy a relaxed local match to competitive players chasing the Grand Master title. The fusion mechanic adds an accessible creative layer that makes the game welcoming to newcomers while rewarding deep strategic thinking from veterans.

**Minimum age:** 13+

---

## Platform

Distributed as an Android application on **Google Play**. The game client is a web application packaged for the Android runtime, delivering a fully responsive mobile interface optimized for touch controls.

---

*Version 1.0.0*
