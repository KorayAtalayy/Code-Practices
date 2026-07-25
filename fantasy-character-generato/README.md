# The Eternal Registry — Fantasy RPG Character & Player Card Generator

An atmospheric, full-featured fantasy RPG character generator and player card creator built with React, Vite, TypeScript, and Tailwind CSS.

---

## 🚀 How to Launch the App

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation & Development
1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   The application will be accessible on `http://localhost:3000`.

3. **Production Build**:
   ```bash
   npm run build
   ```

4. **Run Linter / Type Check**:
   ```bash
   npm run lint
   ```

---

## ✨ Capabilities

- **Bordered RPG Player Cards**: Re-architected UI presenting characters as collectible digital player cards framed with metallic golden corner borders, class badges, and level tags.
- **Dynamic Vitals & RPG Stats**: Randomly calculates and displays primary combat vitals—**Health (HP)**, **Mana (MP)**, and **Strength (STR)**—alongside d20 attribute scores (STR, DEX, CON, INT, WIS, CHA) on an interactive radar visualization.
- **Lore & Backstory Engine**: Includes a **"Generate Backstory"** feature that conjures unique 1-to-2 sentence origin stories and motivations tailored to the hero's race, class, and background.
- **"Save to Deck" Feature**: Save favorite hero cards to **"My Deck"** stored in persistent local storage. Features search, class filtering, and text export.
- **AI & SVG Character Art**: Generate cartoon/video-game style hero portraits via AI image generation with instant fallback to procedural SVG heraldic crests.
- **Trait Locking & Targeted Rerolls**: Lock individual attributes (Name, Class, Race, Stats, Weapon, Alignment) while re-rolling the rest of the character.
- **Level Up Engine & Sound FX**: Level up characters to boost stats with celebratory confetti and retro Web Audio API sound effects for dice rolls and locking actions.

---

## ⚠️ Limitations

1. **AI Image Endpoint Latency**: AI portrait generation utilizes external image endpoints. If the network connection is slow, the application smoothly falls back to procedural SVG heraldry.
2. **Local Storage Deck Boundaries**: "My Deck" records characters inside browser `localStorage`. Clearing site cache will erase local decks unless exported via the "Export Text" feature.
3. **Single Player Context**: Characters and decks are currently stored locally per client session rather than on a multi-user cloud database.

---

## 🗺️ Future Development Plan

- [ ] **Multi-User Party Sync**: Enable real-time shared campaign decks via Firebase / WebSockets for tabletop gaming sessions.
- [ ] **D&D 5e / Pathfinder Sheet Export**: Export hero cards directly into printable PDF character sheets compliant with popular TTRPG systems.
- [ ] **Point-Buy & Standard Array Mode**: Allow manual stat adjustment and point-buy mechanics alongside d20 dice rolling.
- [ ] **Custom Art Upload**: Allow players to upload their own custom character artwork or miniature photos onto the player card.

---

## 📌 Important Points to Keep in Mind

- **Tailwind CSS Integration**: Styled using Tailwind CSS utility classes with an Alchemist dark-amber medieval theme.
- **Lucide Icons**: All icon assets are imported strictly from `lucide-react`.
- **Canvas Confetti**: High stat rolls (stat sum $\ge$ 88) or level-ups automatically trigger `canvas-confetti` celebrations.
- **Type Safety**: Full TypeScript type safety maintained across character traits, class definitions, and state hooks.
