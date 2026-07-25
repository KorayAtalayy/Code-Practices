import React from 'react';
import { CharacterClass, CharacterRace } from '../types';

interface AvatarSvgProps {
  characterClass: CharacterClass;
  race: CharacterRace;
  gender: string;
  seed: number;
  className?: string;
}

export const AvatarSvg: React.FC<AvatarSvgProps> = ({
  characterClass,
  race,
  seed,
  className = 'w-full h-full'
}) => {
  // Color palette based on class and seed
  const primaryColor = characterClass.color;
  
  // Race specific features
  const isTiefling = race.id.includes('tiefling');
  const isDragonborn = race.id.includes('dragon');
  const isElf = race.id.includes('elf');
  const isDwarf = race.id.includes('dwarf');
  const isAasimar = race.id.includes('aasimar');
  const isOrc = race.id.includes('orc');

  // Varied aura pattern
  const auraGlow = seed % 3 === 0 ? 'filter drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]' : '';

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${auraGlow}`}
    >
      <defs>
        <radialGradient id={`bgGrad_${seed}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={primaryColor} stopOpacity="0.4" />
          <stop offset="70%" stopColor="#0f172a" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#020617" stopOpacity="1" />
        </radialGradient>

        <linearGradient id={`armorGrad_${seed}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={primaryColor} />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>

        <filter id={`glow_${seed}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Dark Magical Background */}
      <rect width="200" height="200" rx="16" fill={`url(#bgGrad_${seed})`} />

      {/* Mystical Background Sigil Ring */}
      <circle
        cx="100"
        cy="100"
        r="75"
        stroke={primaryColor}
        strokeWidth="1"
        strokeDasharray="4 6"
        opacity="0.3"
      />
      <circle
        cx="100"
        cy="100"
        r="82"
        stroke="#e2e8f0"
        strokeWidth="0.5"
        opacity="0.15"
      />

      {/* Aasimar Ethereal Halo */}
      {isAasimar && (
        <ellipse
          cx="100"
          cy="38"
          rx="32"
          ry="8"
          stroke="#fef08a"
          strokeWidth="2.5"
          fill="none"
          filter={`url(#glow_${seed})`}
          opacity="0.8"
        />
      )}

      {/* Tiefling Horns */}
      {isTiefling && (
        <g stroke={primaryColor} strokeWidth="3" fill="#1e1b4b">
          <path d="M 65 65 Q 40 40 35 15 Q 50 30 70 55 Z" />
          <path d="M 135 65 Q 160 40 165 15 Q 150 30 130 55 Z" />
        </g>
      )}

      {/* Shoulders & Armor / Robes */}
      <path
        d="M 30 185 C 30 145, 60 135, 100 135 C 140 135, 170 145, 170 185 L 180 200 L 20 200 Z"
        fill={`url(#armorGrad_${seed})`}
        stroke="#334155"
        strokeWidth="1.5"
      />

      {/* Armor Crest / Collar Detail */}
      <path
        d="M 80 138 L 100 160 L 120 138 L 100 148 Z"
        fill={primaryColor}
        opacity="0.9"
      />

      {/* Neck */}
      <rect
        x="88"
        y="110"
        width="24"
        height="30"
        fill={isDragonborn ? '#475569' : isOrc ? '#3f6212' : '#cbd5e1'}
        rx="4"
      />

      {/* Head / Face Base Shape */}
      {isDragonborn ? (
        <path
          d="M 70 60 L 100 50 L 130 60 L 125 105 L 100 120 L 75 105 Z"
          fill="#334155"
          stroke={primaryColor}
          strokeWidth="2"
        />
      ) : (
        <ellipse
          cx="100"
          cy="85"
          rx="28"
          ry="34"
          fill={isOrc ? '#4d7c0f' : isTiefling ? '#881337' : '#e2e8f0'}
        />
      )}

      {/* Elf / Pointed Ears */}
      {isElf && (
        <g fill="#cbd5e1">
          <path d="M 73 80 Q 50 70 42 62 Q 55 82 73 88 Z" />
          <path d="M 127 80 Q 150 70 158 62 Q 145 82 127 88 Z" />
        </g>
      )}

      {/* Orc Tusks */}
      {isOrc && (
        <g fill="#f8fafc">
          <path d="M 88 105 L 90 96 L 93 105 Z" />
          <path d="M 112 105 L 110 96 L 107 105 Z" />
        </g>
      )}

      {/* Dwarf Beard */}
      {isDwarf && (
        <path
          d="M 72 90 Q 100 145 128 90 Q 130 125 100 140 Q 70 125 72 90 Z"
          fill="#78350f"
        />
      )}

      {/* Hair / Crown / Hood / Helm */}
      {characterClass.id === 'mage' || characterClass.id === 'warlock' || characterClass.id === 'necromancer' ? (
        // Arcane Hood / Crown
        <path
          d="M 68 85 C 68 50, 100 38, 100 38 C 100 38, 132 50, 132 85 C 132 95, 126 100, 126 100 C 126 100, 128 65, 100 52 C 72 65, 74 100, 74 100 C 74 100, 68 95, 68 85 Z"
          fill="#1e1b4b"
          stroke={primaryColor}
          strokeWidth="1.5"
        />
      ) : characterClass.id === 'warrior' || characterClass.id === 'paladin' ? (
        // Steel Helm
        <path
          d="M 70 80 C 70 50, 100 45, 100 45 C 100 45, 130 50, 130 80 L 126 88 L 74 88 Z"
          fill="#475569"
          stroke="#94a3b8"
          strokeWidth="1.5"
        />
      ) : (
        // Hair / Bandana
        <path
          d="M 70 80 C 70 55, 100 48, 100 48 C 100 48, 130 55, 130 80 Q 100 68 70 80 Z"
          fill="#1e293b"
        />
      )}

      {/* Glowing Eyes */}
      <g filter={`url(#glow_${seed})`}>
        <circle cx="88" cy="82" r="3.5" fill={primaryColor} />
        <circle cx="112" cy="82" r="3.5" fill={primaryColor} />
        <circle cx="88" cy="82" r="1.5" fill="#ffffff" />
        <circle cx="112" cy="82" r="1.5" fill="#ffffff" />
      </g>

      {/* Eye Glow Sparks */}
      <line x1="82" y1="82" x2="94" y2="82" stroke={primaryColor} strokeWidth="1" opacity="0.6" />
      <line x1="106" y1="82" x2="118" y2="82" stroke={primaryColor} strokeWidth="1" opacity="0.6" />

      {/* Class Core Emblem Badge at bottom right */}
      <g transform="translate(150, 150)">
        <circle cx="20" cy="20" r="18" fill="#0f172a" stroke={primaryColor} strokeWidth="2" />
        <circle cx="20" cy="20" r="13" fill={primaryColor} opacity="0.2" />
        <text
          x="20"
          y="25"
          textAnchor="middle"
          fontSize="12"
          fontWeight="bold"
          fill="#f8fafc"
        >
          {characterClass.name.charAt(0)}
        </text>
      </g>
    </svg>
  );
};
