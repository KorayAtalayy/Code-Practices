import React from 'react';
import { Shield, Sparkles, Volume2, VolumeX, BookmarkCheck, Dices } from 'lucide-react';
import { soundFx } from '../utils/audioSynth';

interface HeaderProps {
  savedCount: number;
  onOpenRoster: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  savedCount,
  onOpenRoster,
  soundEnabled,
  onToggleSound
}) => {
  return (
    <header className="w-full bg-[#0e0e12] border-b border-[#24242b] sticky top-0 z-30 px-4 py-4 sm:px-8 shadow-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand & Title */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 border-2 border-amber-500/40 rotate-45 flex items-center justify-center bg-[#111116] shadow-inner flex-shrink-0">
            <div className="w-6 h-6 bg-amber-500/20 -rotate-45 flex items-center justify-center">
              <Dices className="w-3.5 h-3.5 text-amber-300" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-lg sm:text-2xl tracking-[0.2em] font-serif uppercase text-amber-100/90 drop-shadow">
                The Eternal Registry
              </h1>
              <span className="hidden lg:inline-flex items-center gap-1.5 text-[9px] uppercase tracking-[0.2em] px-2.5 py-0.5 bg-[#111116] text-amber-500/70 border border-[#24242b]">
                <Sparkles className="w-3 h-3 text-amber-400" /> Archival Engine v2.4
              </span>
            </div>
            <p className="text-[11px] uppercase tracking-widest text-amber-100/40 hidden sm:block">
              Manifest & Record Legendary RPG Heroes across the Shards
            </p>
          </div>
        </div>

        {/* Header Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Sound Toggle */}
          <button
            onClick={() => {
              onToggleSound();
              soundFx.enabled = !soundEnabled;
              if (!soundEnabled) soundFx.playLockClick();
            }}
            className="p-2.5 bg-[#111116] border border-[#24242b] hover:border-amber-500/40 text-amber-100/70 hover:text-amber-100 transition-all flex items-center gap-2 text-xs uppercase tracking-widest"
            title={soundEnabled ? 'Mute Sound Effects' : 'Enable Sound Effects'}
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-amber-400" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-500" />
            )}
            <span className="hidden md:inline">{soundEnabled ? 'Audio On' : 'Muted'}</span>
          </button>

          {/* Saved Heroes Deck Button */}
          <button
            onClick={onOpenRoster}
            className="relative px-4 py-2.5 bg-[#16120e] border border-amber-500/40 hover:border-amber-400 text-amber-100 uppercase tracking-[0.2em] text-xs transition-all flex items-center gap-2 shadow-lg cursor-pointer"
            title="Open My Deck list"
          >
            <BookmarkCheck className="w-4 h-4 text-amber-400" />
            <span>My Deck</span>
            {savedCount > 0 && (
              <span className="px-2 py-0.5 bg-amber-500/20 text-amber-200 border border-amber-500/40 font-mono text-[10px] ml-1">
                {savedCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
