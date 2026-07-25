import React, { useState } from 'react';
import { Character, LockedTraits } from '../types';
import { AvatarSvg } from './AvatarSvg';
import { StatRadar } from './StatRadar';
import { generateBackstory } from '../utils/characterGenerator';
import {
  Sparkles,
  Shield,
  Zap,
  Sword,
  BookOpen,
  Scroll,
  Lock,
  Unlock,
  Flame,
  Award,
  Crown,
  Heart,
  Compass,
  AlertCircle,
  Wand2,
  RefreshCw,
  Image as ImageIcon,
  BookmarkCheck,
  CheckCircle2
} from 'lucide-react';

interface CharacterCardProps {
  character: Character;
  lockedTraits: LockedTraits;
  onToggleLock: (traitKey: keyof LockedTraits) => void;
  isRolling: boolean;
  onUpdatePortrait?: (portraitUrl: string) => void;
  onUpdateBackstory?: (newBackstory: string) => void;
  isSaved?: boolean;
  onSaveToDeck?: () => void;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  lockedTraits,
  onToggleLock,
  isRolling,
  onUpdatePortrait,
  onUpdateBackstory,
  isSaved = false,
  onSaveToDeck
}) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const {
    name,
    title,
    gender,
    characterClass,
    race,
    level,
    stats,
    health = 100,
    mana = 80,
    strength = (stats?.STR || 14) * 5,
    alignment,
    background,
    weapon,
    relicOrArmor,
    backstory,
    personalityTrait,
    ideal,
    bond,
    flaw,
    quirk,
    avatarSeed,
    portraitUrl
  } = character;

  const handleGenerateBackstory = () => {
    const newStory = generateBackstory(name, race, characterClass, background, ideal);
    if (onUpdateBackstory) {
      onUpdateBackstory(newStory);
    }
  };

  const generatePortraitUrl = () => {
    setIsGenerating(true);
    // Create a detailed prompt for cartoon / video game style fantasy hero portrait
    const promptText = `cartoon video game style fantasy hero portrait of a ${gender} ${race.name} ${characterClass.name} holding ${weapon}, wearing ${relicOrArmor}, detailed 2d RPG digital character illustration, epic lighting`;
    const newSeed = Date.now();
    const newUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(promptText)}?width=512&height=512&seed=${newSeed}&nologo=true`;

    // Preload image to avoid jumpiness
    const img = new Image();
    img.src = newUrl;
    img.onload = () => {
      if (onUpdatePortrait) {
        onUpdatePortrait(newUrl);
      }
      setIsGenerating(false);
    };
    img.onerror = () => {
      // Fallback
      if (onUpdatePortrait) {
        onUpdatePortrait(newUrl);
      }
      setIsGenerating(false);
    };
  };

  return (
    <div
      className={`w-full bg-[#120e0b] border-2 border-amber-600/50 rounded-lg overflow-hidden shadow-2xl transition-all duration-300 relative ${
        isRolling ? 'scale-[0.99] opacity-90 blur-[0.5px]' : 'scale-100 opacity-100'
      }`}
    >
      {/* Player Card Outer Border Corners */}
      <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-amber-400 z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-amber-400 z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-amber-400 z-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-amber-400 z-20 pointer-events-none" />

      {/* Card Header Bar - Player Card Banner */}
      <div className="w-full px-4 py-2.5 bg-gradient-to-r from-[#1c1510] via-[#2a1d13] to-[#1c1510] border-b border-amber-700/40 flex items-center justify-between text-xs font-serif uppercase tracking-widest text-amber-200">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-amber-400 font-bold">Hero Card</span>
          <span className="text-amber-100/40">|</span>
          <span className="text-amber-300">Level {level} {characterClass.name}</span>
        </div>

        {/* Save to Deck Button */}
        {onSaveToDeck && (
          <button
            onClick={onSaveToDeck}
            className={`px-3 py-1 text-[11px] font-serif uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md cursor-pointer border ${
              isSaved
                ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/60 hover:bg-emerald-900/80'
                : 'bg-amber-600/30 hover:bg-amber-600/50 text-amber-100 border-amber-500/80 hover:border-amber-400'
            }`}
          >
            {isSaved ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Saved in My Deck</span>
              </>
            ) : (
              <>
                <BookmarkCheck className="w-3.5 h-3.5 text-amber-300" />
                <span>Save to Deck</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Banner Top Bar */}
      <div className="w-full p-5 sm:p-7 bg-[#0e0e12] border-b border-[#24242b] relative">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
          {/* Avatar / Portrait Graphic Container */}
          <div className="flex flex-col items-center gap-2 flex-shrink-0">
            <div className="relative group w-36 h-36 sm:w-44 sm:h-44 border-2 border-amber-500/40 shadow-2xl bg-[#0a0a0c] overflow-hidden flex items-center justify-center">
              {isGenerating ? (
                <div className="flex flex-col items-center justify-center p-4 text-center space-y-2">
                  <RefreshCw className="w-8 h-8 text-amber-400 animate-spin" />
                  <span className="text-[10px] font-serif uppercase tracking-widest text-amber-200/80">
                    Conjuring Portrait...
                  </span>
                </div>
              ) : portraitUrl ? (
                <img
                  src={portraitUrl}
                  alt={`${name} Portrait`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              ) : (
                <AvatarSvg
                  characterClass={characterClass}
                  race={race}
                  gender={gender}
                  seed={avatarSeed}
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center text-[10px] uppercase font-serif tracking-widest px-2 py-1 bg-[#111116]/90 text-amber-200 border border-[#24242b] pointer-events-none">
                <span>{race.name}</span>
                <span className="text-amber-500/80">LVL {level}</span>
              </div>
            </div>

            {/* Portrait Action Buttons (Generate / Regenerate) */}
            <div className="flex items-center gap-1.5 w-36 sm:w-44">
              {portraitUrl ? (
                <button
                  onClick={generatePortraitUrl}
                  disabled={isGenerating}
                  className="flex-1 px-2.5 py-1.5 bg-[#161311] hover:bg-amber-500/20 text-amber-200 border border-amber-500/40 text-[10px] font-serif uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md disabled:opacity-50"
                  title="Regenerate cartoon/video game style character portrait"
                >
                  <RefreshCw className={`w-3 h-3 text-amber-400 ${isGenerating ? 'animate-spin' : ''}`} />
                  <span>Regenerate</span>
                </button>
              ) : (
                <button
                  onClick={generatePortraitUrl}
                  disabled={isGenerating}
                  className="flex-1 px-2.5 py-1.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-100 border border-amber-500/60 text-[10px] font-serif uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md disabled:opacity-50"
                  title="Generate cartoon/video game style character portrait"
                >
                  <Wand2 className="w-3 h-3 text-amber-400" />
                  <span>Generate Portrait</span>
                </button>
              )}

              {portraitUrl && (
                <button
                  onClick={() => onUpdatePortrait && onUpdatePortrait('')}
                  className="px-2 py-1.5 bg-[#0a0a0c] hover:bg-[#181820] text-amber-100/50 hover:text-amber-100 border border-[#24242b] text-[10px] font-serif uppercase"
                  title="Switch back to Crest SVG"
                >
                  <ImageIcon className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>

          {/* Hero Details Header */}
          <div className="flex-1 text-center md:text-left space-y-2">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              {/* Race Tag */}
              <span className="px-2.5 py-1 bg-[#111116] text-amber-100/80 font-serif text-[11px] uppercase tracking-widest border border-[#24242b] flex items-center gap-1">
                <Crown className="w-3.5 h-3.5 text-amber-400" /> {race.name}
              </span>

              {/* Class Tag */}
              <span
                style={{ backgroundColor: `${characterClass.color}15`, borderColor: `${characterClass.color}60`, color: characterClass.color }}
                className="px-2.5 py-1 font-serif font-semibold text-[11px] uppercase tracking-widest border flex items-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5" /> {characterClass.name}
              </span>

              {/* Alignment Tag */}
              <span className="px-2.5 py-1 bg-[#111116] text-amber-200/90 font-serif text-[11px] uppercase tracking-widest border border-[#24242b] flex items-center gap-1">
                <Compass className="w-3.5 h-3.5 text-amber-400" /> {alignment}
              </span>

              {/* Gender Tag */}
              <span className="px-2 py-1 bg-[#0a0a0c] text-amber-100/40 font-mono text-[11px] uppercase border border-[#24242b]">
                {gender}
              </span>
            </div>

            {/* Name & Epithet */}
            <div className="flex items-center justify-center md:justify-start gap-3 pt-1">
              <h2 className="text-3xl sm:text-5xl font-hero-name tracking-wider text-amber-100 drop-shadow-lg">
                {name}
              </h2>
              <button
                onClick={() => onToggleLock('name')}
                className="p-1.5 bg-[#111116] hover:bg-[#181820] text-amber-400 border border-[#24242b] transition-colors"
                title={lockedTraits.name ? 'Unlock Name' : 'Lock Name'}
              >
                {lockedTraits.name ? <Lock className="w-4 h-4 text-amber-400" /> : <Unlock className="w-4 h-4 text-slate-600" />}
              </button>
            </div>

            <p className="text-xs sm:text-sm font-serif italic text-amber-300/80 tracking-wide">
              "{title}"
            </p>

            {/* Health, Mana, and Strength Vitals Bar */}
            <div className="pt-2 grid grid-cols-3 gap-2 max-w-sm mx-auto md:mx-0">
              <div className="px-2.5 py-1.5 bg-[#1a110a] border border-red-900/50 rounded flex flex-col items-center justify-center shadow">
                <div className="flex items-center gap-1 text-red-400 text-[10px] uppercase font-serif tracking-wider">
                  <Heart className="w-3.5 h-3.5 fill-red-500/20 text-red-400" />
                  <span>Health</span>
                </div>
                <span className="text-xs sm:text-sm font-bold text-red-200 font-mono mt-0.5">{health} HP</span>
              </div>

              <div className="px-2.5 py-1.5 bg-[#0a141a] border border-cyan-900/50 rounded flex flex-col items-center justify-center shadow">
                <div className="flex items-center gap-1 text-cyan-400 text-[10px] uppercase font-serif tracking-wider">
                  <Zap className="w-3.5 h-3.5 fill-cyan-500/20 text-cyan-400" />
                  <span>Mana</span>
                </div>
                <span className="text-xs sm:text-sm font-bold text-cyan-200 font-mono mt-0.5">{mana} MP</span>
              </div>

              <div className="px-2.5 py-1.5 bg-[#1a150a] border border-amber-800/50 rounded flex flex-col items-center justify-center shadow">
                <div className="flex items-center gap-1 text-amber-400 text-[10px] uppercase font-serif tracking-wider">
                  <Sword className="w-3.5 h-3.5 text-amber-400" />
                  <span>Strength</span>
                </div>
                <span className="text-xs sm:text-sm font-bold text-amber-200 font-mono mt-0.5">{strength} STR</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-2xl pt-1 leading-relaxed">
              {characterClass.tagline}. {characterClass.description}
            </p>

            {/* Weapons & Armor Bar */}
            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-2 text-xs">
              <span className="px-3 py-1 bg-[#0a0a0c] text-amber-200/90 border border-amber-500/30 flex items-center gap-1.5 font-serif text-[11px] uppercase tracking-wider">
                <Sword className="w-3.5 h-3.5 text-amber-400" /> {weapon}
              </span>
              <span className="px-3 py-1 bg-[#0a0a0c] text-amber-100/80 border border-[#24242b] flex items-center gap-1.5 font-serif text-[11px] uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5 text-amber-400/80" /> {relicOrArmor}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Stats & Abilities Grid */}
      <div className="p-4 sm:p-6 space-y-6">
        {/* Core Attributes Component */}
        <StatRadar stats={stats} characterClass={characterClass} />

        {/* Abilities & Class Spells */}
        <div className="space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-[#24242b]">
            <h3 className="text-xs font-serif uppercase tracking-[0.2em] text-amber-100/90 flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-400" /> Class Spells & Abilities
            </h3>
            <span className="text-[11px] text-amber-100/40 uppercase tracking-widest font-mono">
              Class: <strong className="text-amber-300">{characterClass.name}</strong>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {characterClass.abilities.map((ability, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-[#0a0a0c] border border-[#24242b] hover:border-amber-500/30 transition-colors space-y-1.5"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-serif font-bold text-amber-200 tracking-wider flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400" /> {ability.name}
                  </span>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-[#111116] text-amber-100/60 border border-[#24242b]">
                    {ability.type} • {ability.cooldownOrCost}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {ability.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Racial Trait & Background Lore */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Racial Trait */}
          <div className="p-4 bg-[#0a0a0c] border border-[#24242b] space-y-2">
            <h4 className="text-xs font-serif uppercase tracking-[0.2em] text-amber-400 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-400" /> Racial Passive: {race.racialTrait}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {race.racialTraitDescription}
            </p>
            <div className="pt-1 text-[10px] uppercase text-amber-100/40 flex items-center gap-4 font-mono border-t border-[#24242b] pt-2">
              <span>Lifespan: {race.lifeSpan}</span>
              <span>Height: {race.heightRange}</span>
            </div>
          </div>

          {/* Background Origin */}
          <div className="p-4 bg-[#0a0a0c] border border-[#24242b] space-y-2">
            <h4 className="text-xs font-serif uppercase tracking-[0.2em] text-amber-200 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-amber-300" /> Background: {background.title}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {background.description}
            </p>
            <div className="pt-1 text-[10px] uppercase text-amber-100/40 font-mono border-t border-[#24242b] pt-2">
              Proficiency: <span className="text-amber-300">{background.skillProficiency}</span>
            </div>
          </div>
        </div>

        {/* Backstory & Personality Trait Cards */}
        <div className="p-5 bg-[#0a0a0c] border border-[#24242b] space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#24242b] gap-2 flex-wrap">
            <h4 className="text-xs font-serif uppercase tracking-[0.2em] text-amber-100/90 flex items-center gap-1.5">
              <Scroll className="w-4 h-4 text-amber-400" /> Legend Lore & Origin
            </h4>
            <button
              onClick={handleGenerateBackstory}
              className="px-3 py-1 bg-[#111116] hover:bg-amber-500/20 text-amber-200 border border-amber-500/40 hover:border-amber-500 text-[10px] font-serif uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer"
              title="Generate a unique 1-to-2 sentence origin story"
            >
              <Wand2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Generate Backstory</span>
            </button>
          </div>
          <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed italic border-l-2 border-amber-500/80 pl-3">
            "{backstory}"
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 pt-2 text-xs">
            <div className="p-3 bg-[#111116] border border-[#24242b]">
              <span className="text-[10px] font-serif uppercase tracking-widest text-amber-400 block mb-1">Personality Trait</span>
              <span className="text-slate-300 leading-snug block text-[11px]">{personalityTrait}</span>
            </div>
            <div className="p-3 bg-[#111116] border border-[#24242b]">
              <span className="text-[10px] font-serif uppercase tracking-widest text-amber-300 block mb-1">Ideal</span>
              <span className="text-slate-300 leading-snug block text-[11px]">{ideal}</span>
            </div>
            <div className="p-3 bg-[#111116] border border-[#24242b]">
              <span className="text-[10px] font-serif uppercase tracking-widest text-amber-200 block mb-1">Bond</span>
              <span className="text-slate-300 leading-snug block text-[11px]">{bond}</span>
            </div>
            <div className="p-3 bg-[#111116] border border-[#24242b]">
              <span className="text-[10px] font-serif uppercase tracking-widest text-rose-400 block mb-1">Flaw & Quirk</span>
              <span className="text-slate-300 leading-snug block text-[11px]">{flaw} ({quirk})</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
