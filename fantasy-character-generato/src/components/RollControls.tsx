import React from 'react';
import {
  Dices,
  Lock,
  Unlock,
  Sparkles,
  TrendingUp,
  Bookmark,
  Share2,
  RefreshCw,
  SlidersHorizontal
} from 'lucide-react';
import { LockedTraits, FilterOptions } from '../types';
import { FANTASY_CLASSES, FANTASY_RACES } from '../data/fantasyData';

interface RollControlsProps {
  onRoll: () => void;
  isRolling: boolean;
  lockedTraits: LockedTraits;
  onToggleLock: (traitKey: keyof LockedTraits) => void;
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  onLevelUp: () => void;
  onSaveHero: () => void;
  isSaved: boolean;
  onOpenExport: () => void;
  characterLevel: number;
}

export const RollControls: React.FC<RollControlsProps> = ({
  onRoll,
  isRolling,
  lockedTraits,
  onToggleLock,
  filters,
  onFilterChange,
  onLevelUp,
  onSaveHero,
  isSaved,
  onOpenExport,
  characterLevel
}) => {
  const [showFilters, setShowFilters] = React.useState(false);

  const lockableKeys: { key: keyof LockedTraits; label: string }[] = [
    { key: 'name', label: 'Name' },
    { key: 'class', label: 'Class' },
    { key: 'race', label: 'Race' },
    { key: 'stats', label: 'Stats' },
    { key: 'weapon', label: 'Weapon' },
    { key: 'alignment', label: 'Alignment' }
  ];

  return (
    <div className="w-full bg-[#111116] border border-[#24242b] p-5 sm:p-6 shadow-2xl space-y-4 relative">
      {/* Decorative Corner Accents */}
      <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-amber-500/50 pointer-events-none" />
      <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-amber-500/50 pointer-events-none" />

      {/* Primary Action Button Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Main ROLL HERO Button */}
        <button
          onClick={onRoll}
          disabled={isRolling}
          className="relative group overflow-hidden flex-1 py-4 px-6 bg-[#111116] border border-amber-500/40 hover:border-amber-500 text-amber-100 font-serif uppercase tracking-[0.3em] text-sm sm:text-base transition-all hover:bg-amber-500/10 cursor-pointer disabled:opacity-75 flex items-center justify-center gap-3 shadow-lg"
        >
          {/* Subtle Ambient Shimmer */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

          <Dices
            className={`w-6 h-6 text-amber-300 transition-transform ${
              isRolling ? 'animate-spin' : 'group-hover:rotate-180 duration-500'
            }`}
          />
          <span className="relative z-10">
            {isRolling ? 'Summoning Hero...' : 'Summon Random Hero'}
          </span>
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
        </button>

        {/* Secondary Actions */}
        <div className="flex items-center gap-2">
          {/* Level Up Button */}
          <button
            onClick={onLevelUp}
            className="flex-1 sm:flex-none px-4 py-3 bg-[#0a0a0c] hover:bg-[#181820] text-amber-200/80 hover:text-amber-100 border border-[#24242b] hover:border-amber-500/30 uppercase tracking-wider text-xs font-serif flex items-center justify-center gap-2 transition-all"
            title="Increase hero level and boost stats"
          >
            <TrendingUp className="w-4 h-4 text-amber-400" />
            <span>LVL {characterLevel} → {characterLevel + 1}</span>
          </button>

          {/* Save Hero to Deck Button */}
          <button
            onClick={onSaveHero}
            className={`flex-1 sm:flex-none px-4 py-3 border uppercase tracking-wider text-xs font-serif flex items-center justify-center gap-2 transition-all cursor-pointer ${
              isSaved
                ? 'bg-amber-500/20 border-amber-500 text-amber-200'
                : 'bg-[#0a0a0c] hover:bg-[#181820] border-[#24242b] hover:border-amber-500/30 text-amber-100/70'
            }`}
            title={isSaved ? 'Saved in My Deck' : 'Save hero to My Deck'}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-400 text-amber-400' : 'text-amber-400/60'}`} />
            <span>{isSaved ? 'Saved in Deck' : 'Save to Deck'}</span>
          </button>

          {/* Share / Export Card Button */}
          <button
            onClick={onOpenExport}
            className="p-3 bg-[#0a0a0c] hover:bg-[#181820] text-amber-100/70 hover:text-amber-100 border border-[#24242b] hover:border-amber-500/30 transition-colors"
            title="Export or Share Character Sheet"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Locks & Filters Toolbar */}
      <div className="pt-3 border-t border-[#24242b] flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs">
        {/* Trait Lock Toggles */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-amber-100/40 uppercase tracking-widest text-[10px] font-semibold mr-1 flex items-center gap-1">
            <Lock className="w-3 h-3 text-amber-400/70" /> Lock Traits:
          </span>
          {lockableKeys.map(({ key, label }) => {
            const isLocked = lockedTraits[key];
            return (
              <button
                key={key}
                onClick={() => onToggleLock(key)}
                className={`px-2.5 py-1 border text-[11px] font-serif uppercase tracking-wider flex items-center gap-1 transition-all ${
                  isLocked
                    ? 'bg-amber-500/20 border-amber-500/60 text-amber-200 shadow-sm'
                    : 'bg-[#0a0a0c] hover:bg-[#181820] border-[#24242b] text-slate-400 hover:text-slate-200'
                }`}
              >
                {isLocked ? (
                  <Lock className="w-3 h-3 text-amber-400" />
                ) : (
                  <Unlock className="w-3 h-3 text-slate-600" />
                )}
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {/* Filter Drawer Toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`px-3 py-1.5 border text-xs font-serif uppercase tracking-widest flex items-center gap-1.5 transition-all ${
            filters.preferredClassId || filters.preferredRaceId
              ? 'bg-amber-500/20 border-amber-500 text-amber-200'
              : 'bg-[#0a0a0c] hover:bg-[#181820] border-[#24242b] text-amber-100/60'
          }`}
        >
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span>Affinity Filters {filters.preferredClassId || filters.preferredRaceId ? '(Active)' : ''}</span>
        </button>
      </div>

      {/* Filter Dropdowns Drawer */}
      {showFilters && (
        <div className="p-4 bg-[#0a0a0c] border border-[#24242b] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs animate-fadeIn">
          <div>
            <label className="block text-amber-100/50 uppercase tracking-widest text-[10px] mb-1.5">Class Affinity:</label>
            <select
              value={filters.preferredClassId || ''}
              onChange={(e) =>
                onFilterChange({ ...filters, preferredClassId: e.target.value || undefined })
              }
              className="w-full bg-[#111116] border border-[#24242b] p-2 text-amber-100/90 focus:outline-none focus:border-amber-500/60 font-sans"
            >
              <option value="">Any Class (Random)</option>
              {FANTASY_CLASSES.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} ({c.primaryStat})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-amber-100/50 uppercase tracking-widest text-[10px] mb-1.5">Race Affinity:</label>
            <select
              value={filters.preferredRaceId || ''}
              onChange={(e) =>
                onFilterChange({ ...filters, preferredRaceId: e.target.value || undefined })
              }
              className="w-full bg-[#111116] border border-[#24242b] p-2 text-amber-100/90 focus:outline-none focus:border-amber-500/60 font-sans"
            >
              <option value="">Any Lineage (Random)</option>
              {FANTASY_RACES.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};
