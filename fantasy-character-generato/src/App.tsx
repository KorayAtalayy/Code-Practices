import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Character, LockedTraits, FilterOptions } from './types';
import { generateCharacter } from './utils/characterGenerator';
import { soundFx } from './utils/audioSynth';
import { Header } from './components/Header';
import { RollControls } from './components/RollControls';
import { CharacterCard } from './components/CharacterCard';
import { SavedRosterModal } from './components/SavedRosterModal';
import { ExportCardModal } from './components/ExportCardModal';
import { Sparkles, Dices, Award, Scroll } from 'lucide-react';

export default function App() {
  const [character, setCharacter] = useState<Character | null>(null);
  const [isRolling, setIsRolling] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Locked Traits
  const [lockedTraits, setLockedTraits] = useState<LockedTraits>({
    name: false,
    class: false,
    race: false,
    stats: false,
    weapon: false,
    alignment: false
  });

  // Filters
  const [filters, setFilters] = useState<FilterOptions>({});

  // Saved Codex
  const [savedCharacters, setSavedCharacters] = useState<Character[]>(() => {
    try {
      const saved = localStorage.getItem('fantasy_heroes_roster');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modals
  const [isRosterOpen, setIsRosterOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);

  // Initial hero generation
  useEffect(() => {
    const initialHero = generateCharacter();
    setCharacter(initialHero);
  }, []);

  // Sync saved roster to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('fantasy_heroes_roster', JSON.stringify(savedCharacters));
    } catch (e) {
      console.error('Failed to save roster to localStorage', e);
    }
  }, [savedCharacters]);

  const handleRoll = () => {
    if (isRolling) return;
    setIsRolling(true);
    soundFx.playDiceRoll();

    // Small delay to simulate rolling d20
    setTimeout(() => {
      const newHero = generateCharacter(character, lockedTraits, filters);
      setCharacter(newHero);
      setIsRolling(false);
      soundFx.playHeroGenerated();

      // Trigger celebratory confetti if high stat total (> 88)
      const totalStatSum = Object.values(newHero.stats).reduce((a, b) => a + b, 0);
      if (totalStatSum >= 88) {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      }
    }, 350);
  };

  const handleToggleLock = (traitKey: keyof LockedTraits) => {
    soundFx.playLockClick();
    setLockedTraits((prev) => ({
      ...prev,
      [traitKey]: !prev[traitKey]
    }));
  };

  const handleLevelUp = () => {
    if (!character) return;
    soundFx.playLevelUp();
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.6 }
    });

    setCharacter((prev) => {
      if (!prev) return null;
      const newStats = { ...prev.stats };
      // Randomly increase 2 stats by 1
      const statKeys: (keyof typeof newStats)[] = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];
      const k1 = statKeys[Math.floor(Math.random() * statKeys.length)];
      const k2 = statKeys[Math.floor(Math.random() * statKeys.length)];
      newStats[k1] = Math.min(20, newStats[k1] + 1);
      newStats[k2] = Math.min(20, newStats[k2] + 1);

      return {
        ...prev,
        level: prev.level + 1,
        stats: newStats
      };
    });
  };

  const handleSaveHero = () => {
    if (!character) return;
    const exists = savedCharacters.some((c) => c.id === character.id);
    if (exists) {
      // Remove
      setSavedCharacters((prev) => prev.filter((c) => c.id !== character.id));
    } else {
      // Add
      soundFx.playLockClick();
      setSavedCharacters((prev) => [character, ...prev]);
    }
  };

  const handleUpdatePortrait = (portraitUrl: string) => {
    setCharacter((prev) => {
      if (!prev) return null;
      const updated = { ...prev, portraitUrl };
      setSavedCharacters((saved) =>
        saved.map((item) => (item.id === updated.id ? updated : item))
      );
      return updated;
    });
  };

  const handleUpdateBackstory = (newBackstory: string) => {
    setCharacter((prev) => {
      if (!prev) return null;
      const updated = { ...prev, backstory: newBackstory };
      setSavedCharacters((saved) =>
        saved.map((item) => (item.id === updated.id ? updated : item))
      );
      return updated;
    });
  };

  const isCurrentSaved = character ? savedCharacters.some((c) => c.id === character.id) : false;

  return (
    <div className="min-h-screen bg-[#0c0a08] text-[#d1d1d1] flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Top Header */}
      <Header
        savedCount={savedCharacters.length}
        onOpenRoster={() => setIsRosterOpen(true)}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled(!soundEnabled)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
        {/* Roll Controls Top Bar */}
        <RollControls
          onRoll={handleRoll}
          isRolling={isRolling}
          lockedTraits={lockedTraits}
          onToggleLock={handleToggleLock}
          filters={filters}
          onFilterChange={setFilters}
          onLevelUp={handleLevelUp}
          onSaveHero={handleSaveHero}
          isSaved={isCurrentSaved}
          onOpenExport={() => setIsExportOpen(true)}
          characterLevel={character?.level || 1}
        />

        {/* Character Card Main View */}
        {character ? (
          <CharacterCard
            character={character}
            lockedTraits={lockedTraits}
            onToggleLock={handleToggleLock}
            isRolling={isRolling}
            onUpdatePortrait={handleUpdatePortrait}
            onUpdateBackstory={handleUpdateBackstory}
            isSaved={isCurrentSaved}
            onSaveToDeck={handleSaveHero}
          />
        ) : (
          <div className="p-12 text-center bg-[#120e0b] border border-[#362619] shadow-2xl">
            <Dices className="w-10 h-10 text-amber-400 mx-auto animate-spin" />
            <p className="mt-2 text-xs uppercase tracking-widest text-amber-100/60 font-serif">Forging Hero Legend...</p>
          </div>
        )}
      </main>

      {/* Modals */}
      <SavedRosterModal
        isOpen={isRosterOpen}
        onClose={() => setIsRosterOpen(false)}
        savedCharacters={savedCharacters}
        onSelectCharacter={(hero) => setCharacter(hero)}
        onDeleteCharacter={(id) => setSavedCharacters((prev) => prev.filter((c) => c.id !== id))}
        onClearAll={() => setSavedCharacters([])}
      />

      {character && (
        <ExportCardModal
          isOpen={isExportOpen}
          onClose={() => setIsExportOpen(false)}
          character={character}
        />
      )}

      {/* Footer */}
      <footer className="w-full border-t border-[#24242b] bg-[#0e0e12] py-4 text-center text-xs text-amber-100/40 font-serif uppercase tracking-widest">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>The Eternal Registry • Archival RPG Hero Engine</span>
          <span className="font-mono text-[10px] text-amber-500/60">
            Algorithmic 4d6 Drop-Lowest Matrix
          </span>
        </div>
      </footer>
    </div>
  );
}
