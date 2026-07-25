export type StatKey = 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA';

export interface Stats {
  STR: number;
  DEX: number;
  CON: number;
  INT: number;
  WIS: number;
  CHA: number;
}

export type Alignment = 
  | 'Lawful Good'
  | 'Neutral Good'
  | 'Chaotic Good'
  | 'Lawful Neutral'
  | 'True Neutral'
  | 'Chaotic Neutral'
  | 'Lawful Evil'
  | 'Neutral Evil'
  | 'Chaotic Evil';

export interface Ability {
  name: string;
  type: 'Passive' | 'Active' | 'Ultimate' | 'Spell';
  description: string;
  cooldownOrCost?: string;
  iconName?: string;
}

export interface CharacterClass {
  id: string;
  name: string;
  tagline: string;
  description: string;
  primaryStat: StatKey;
  secondaryStat: StatKey;
  color: string;
  bgGradient: string;
  icon: string;
  starterWeapons: string[];
  abilities: Ability[];
  classPassives: string[];
}

export interface CharacterRace {
  id: string;
  name: string;
  description: string;
  statBonus: Partial<Record<StatKey, number>>;
  racialTrait: string;
  racialTraitDescription: string;
  heightRange: string;
  lifeSpan: string;
}

export interface CharacterBackground {
  id: string;
  title: string;
  description: string;
  skillProficiency: string;
  startingEquip: string;
}

export interface Character {
  id: string;
  name: string;
  title: string;
  gender: 'Female' | 'Male' | 'Androgynous';
  characterClass: CharacterClass;
  race: CharacterRace;
  level: number;
  stats: Stats;
  health: number;
  mana: number;
  strength: number;
  alignment: Alignment;
  background: CharacterBackground;
  weapon: string;
  relicOrArmor: string;
  backstory: string;
  personalityTrait: string;
  ideal: string;
  bond: string;
  flaw: string;
  quirk: string;
  createdAt: number;
  avatarSeed: number;
  portraitUrl?: string;
  customNotes?: string;
}

export interface LockedTraits {
  name: boolean;
  class: boolean;
  race: boolean;
  stats: boolean;
  weapon: boolean;
  alignment: boolean;
}

export interface FilterOptions {
  preferredClassId?: string;
  preferredRaceId?: string;
}
