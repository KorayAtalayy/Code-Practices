import React from 'react';
import { Stats, StatKey, CharacterClass } from '../types';
import { Shield, Zap, Heart, Brain, Eye, Sparkles } from 'lucide-react';

interface StatRadarProps {
  stats: Stats;
  characterClass: CharacterClass;
}

const STAT_CONFIG: Record<
  StatKey,
  { label: string; icon: React.ReactNode; color: string; desc: string }
> = {
  STR: { label: 'Strength', icon: <Shield className="w-3.5 h-3.5 text-red-400" />, color: 'bg-red-500', desc: 'Physical power and weapon thrust' },
  DEX: { label: 'Dexterity', icon: <Zap className="w-3.5 h-3.5 text-emerald-400" />, color: 'bg-emerald-500', desc: 'Agility, reflexes and stealth' },
  CON: { label: 'Constitution', icon: <Heart className="w-3.5 h-3.5 text-amber-400" />, color: 'bg-amber-500', desc: 'Health, stamina and poison resistance' },
  INT: { label: 'Intelligence', icon: <Brain className="w-3.5 h-3.5 text-purple-400" />, color: 'bg-purple-500', desc: 'Arcane knowledge and reasoning' },
  WIS: { label: 'Wisdom', icon: <Eye className="w-3.5 h-3.5 text-cyan-400" />, color: 'bg-cyan-500', desc: 'Perception, intuition and willpower' },
  CHA: { label: 'Charisma', icon: <Sparkles className="w-3.5 h-3.5 text-pink-400" />, color: 'bg-pink-500', desc: 'Leadership, charm and spell presence' }
};

export const StatRadar: React.FC<StatRadarProps> = ({ stats, characterClass }) => {
  const getModifier = (val: number) => {
    const mod = Math.floor((val - 10) / 2);
    return mod >= 0 ? `+${mod}` : `${mod}`;
  };

  const statKeys: StatKey[] = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];

  // Calculate Combat Rating sum
  const totalStats = Object.values(stats).reduce((a: number, b: number) => a + b, 0);

  return (
    <div className="space-y-3 bg-[#0a0a0c] p-4 border border-[#24242b]">
      <div className="flex items-center justify-between pb-2 border-b border-[#24242b]">
        <h4 className="text-xs font-serif uppercase tracking-[0.2em] text-amber-100/90 flex items-center gap-2">
          <span>Core Attributes & Modifiers</span>
        </h4>
        <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-[#111116] text-amber-300 border border-[#24242b]">
          Attribute Sum: <strong className="text-amber-100">{totalStats}</strong>
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {statKeys.map((key) => {
          const val = stats[key];
          const mod = getModifier(val);
          const conf = STAT_CONFIG[key];
          const isPrimary = characterClass.primaryStat === key;
          const isSecondary = characterClass.secondaryStat === key;
          const percent = Math.round((val / 20) * 100);

          return (
            <div
              key={key}
              className={`p-2.5 border transition-all ${
                isPrimary
                  ? 'bg-amber-500/10 border-amber-500/50 shadow-sm'
                  : isSecondary
                  ? 'bg-[#14141d] border-amber-500/30'
                  : 'bg-[#111116] border-[#24242b]'
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-2">
                <div className="flex items-center gap-1.5">
                  {conf.icon}
                  <span className="font-serif font-semibold text-amber-100/90 tracking-wider">{key}</span>
                  <span className="text-[10px] uppercase text-amber-100/40">({conf.label})</span>
                  {isPrimary && (
                    <span className="text-[8px] uppercase tracking-widest font-serif px-1.5 py-0.2 bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      Primary
                    </span>
                  )}
                  {isSecondary && (
                    <span className="text-[8px] uppercase tracking-widest font-serif px-1.5 py-0.2 bg-[#24242b] text-amber-200/70 border border-[#24242b]">
                      Secondary
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1.5 font-mono">
                  <span className="text-sm font-bold text-amber-100">{val}</span>
                  <span className="text-[10px] px-1.5 py-0.2 bg-[#0a0a0c] text-amber-400 font-bold border border-[#24242b]">
                    {mod}
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-[#0a0a0c] h-1.5 overflow-hidden p-0.5 border border-[#24242b]">
                <div
                  className={`h-full transition-all duration-500 ${conf.color}`}
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
