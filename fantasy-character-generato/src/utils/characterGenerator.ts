import {
  Character,
  Stats,
  LockedTraits,
  FilterOptions,
  CharacterClass,
  CharacterRace,
  StatKey
} from '../types';
import {
  FANTASY_CLASSES,
  FANTASY_RACES,
  FANTASY_BACKGROUNDS,
  ALIGNMENTS,
  NAME_DICTIONARY,
  TITLES_EPITHETS,
  PERSONALITY_TRAITS,
  IDEALS,
  BONDS,
  FLAWS,
  QUIRKS,
  RELICS_ARMOR
} from '../data/fantasyData';

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function roll4d6DropLowest(): number {
  const rolls = [
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1
  ];
  rolls.sort((a, b) => a - b);
  return rolls[1] + rolls[2] + rolls[3]; // drop rolls[0]
}

export function generateStats(characterClass: CharacterClass, race: CharacterRace): Stats {
  const rawStats: Stats = {
    STR: roll4d6DropLowest(),
    DEX: roll4d6DropLowest(),
    CON: roll4d6DropLowest(),
    INT: roll4d6DropLowest(),
    WIS: roll4d6DropLowest(),
    CHA: roll4d6DropLowest()
  };

  // Boost primary & secondary stats for class synergy
  rawStats[characterClass.primaryStat] = Math.max(rawStats[characterClass.primaryStat], Math.floor(Math.random() * 4) + 14); // 14-17
  rawStats[characterClass.secondaryStat] = Math.max(rawStats[characterClass.secondaryStat], Math.floor(Math.random() * 3) + 12); // 12-14

  // Apply racial bonuses
  if (race.statBonus) {
    (Object.keys(race.statBonus) as StatKey[]).forEach((key) => {
      if (race.statBonus[key]) {
        rawStats[key] += race.statBonus[key]!;
      }
    });
  }

  // Ensure reasonable bounds (8 to 20)
  (Object.keys(rawStats) as StatKey[]).forEach((key) => {
    rawStats[key] = Math.min(20, Math.max(8, rawStats[key]));
  });

  return rawStats;
}

export function generateUniqueName(raceId: string): { fullName: string; surname: string } {
  let dict = NAME_DICTIONARY.human;
  if (raceId.includes('elf')) dict = NAME_DICTIONARY.elf;
  else if (raceId.includes('dwarf')) dict = NAME_DICTIONARY.dwarf;
  else if (raceId.includes('dragon')) dict = NAME_DICTIONARY.dragonborn;
  else if (raceId.includes('tiefling')) dict = NAME_DICTIONARY.tiefling;
  else if (raceId.includes('orc')) dict = NAME_DICTIONARY.orc;
  else if (raceId.includes('aasimar')) dict = NAME_DICTIONARY.celestial;

  const prefix = getRandomElement(dict.prefixes);
  const suffix = getRandomElement(dict.suffixes);
  let firstName = prefix + suffix;
  // Capitalize properly
  firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();

  const surname = getRandomElement(dict.surnames);
  return {
    fullName: `${firstName} ${surname}`,
    surname
  };
}

export function generateBackstory(
  name: string,
  race: CharacterRace,
  charClass: CharacterClass,
  background: { title: string; description: string },
  ideal: string
): string {
  const firstName = name.split(' ')[0];
  const origins = [
    `Born under a blood-moon prophecy in an ancient sanctuary, ${firstName} spent youth mastering the arcana of the ${charClass.name}.`,
    `Hailing from a secluded ${race.name} enclave threatened by shadowy entities, ${firstName} took up the mantle of a ${charClass.name} to defend the innocent.`,
    `A former ${background.title.toLowerCase()} who uncovered a forgotten relic, ${firstName} unlocked the martial secrets of the legendary ${charClass.name}s.`,
    `Raised amidst storm-swept mountain peaks and forgotten ruins, ${firstName} survived countless trials before embracing the path of a ${charClass.name}.`,
    `Exiled from a noble house following a dramatic betrayal, ${firstName} forged a new destiny as a fear-inspiring ${charClass.name}.`,
    `Discovered as an orphan inside a glowing leyline temple, ${firstName} grew into a revered ${charClass.name} bound by ancient fate.`,
    `Surviving a catastrophic siege that destroyed their homeland, ${firstName} pledged life and blade as an unforgiving ${charClass.name}.`,
    `Guided by ancestral whispers since childhood, ${firstName} left home to fulfill a mysterious calling as a true ${charClass.name}.`,
    `A veteran traveler of cosmic rifts and shadowed wilds, ${firstName} earned legendary renown across the realm as an unyielding ${charClass.name}.`,
    `Trained in secret beneath the vaults of an ancient citadel, ${firstName} emerged as a master ${charClass.name} sworn to protect the kingdom.`
  ];

  const motivations = [
    `Driven by unwavering resolve, they seek to forge an eternal legacy across the continent.`,
    `Bound by a sacred oath, they wander the realm searching for ancient secrets and lost artifacts.`,
    `With weapon in hand and magic in heart, they vanquish darkness wherever evil dares to take root.`,
    `Seeking answers to a shrouded past, they walk the thin line between mortality and myth.`,
    `Determined to restore honor to their lineage, they face every impending peril without hesitation.`,
    `Armed with forbidden knowledge, they strive to break an ancient curse hanging over their bloodline.`,
    `Seeking to champion justice in a lawless world, their name has become a beacon of hope for the helpless.`,
    `Guided by visions of an impending doom, they gather allies to stand against the gathering shadows.`
  ];

  return `${getRandomElement(origins)} ${getRandomElement(motivations)}`;
}

export function generateCharacter(
  existingChar?: Character | null,
  lockedTraits?: LockedTraits,
  filters?: FilterOptions
): Character {
  // Determine Class
  let selectedClass: CharacterClass;
  if (lockedTraits?.class && existingChar) {
    selectedClass = existingChar.characterClass;
  } else if (filters?.preferredClassId) {
    selectedClass = FANTASY_CLASSES.find((c) => c.id === filters.preferredClassId) || getRandomElement(FANTASY_CLASSES);
  } else {
    selectedClass = getRandomElement(FANTASY_CLASSES);
  }

  // Determine Race
  let selectedRace: CharacterRace;
  if (lockedTraits?.race && existingChar) {
    selectedRace = existingChar.race;
  } else if (filters?.preferredRaceId) {
    selectedRace = FANTASY_RACES.find((r) => r.id === filters.preferredRaceId) || getRandomElement(FANTASY_RACES);
  } else {
    selectedRace = getRandomElement(FANTASY_RACES);
  }

  // Determine Gender
  const gender = getRandomElement<Character['gender']>(['Female', 'Male', 'Androgynous']);

  // Name
  let name: string;
  let title: string;
  if (lockedTraits?.name && existingChar) {
    name = existingChar.name;
    title = existingChar.title;
  } else {
    const generated = generateUniqueName(selectedRace.id);
    name = generated.fullName;
    title = getRandomElement(TITLES_EPITHETS);
  }

  // Stats
  let stats: Stats;
  if (lockedTraits?.stats && existingChar) {
    stats = { ...existingChar.stats };
  } else {
    stats = generateStats(selectedClass, selectedRace);
  }

  // Alignment
  let alignment = lockedTraits?.alignment && existingChar ? existingChar.alignment : getRandomElement(ALIGNMENTS);

  // Weapon
  let weapon = lockedTraits?.weapon && existingChar ? existingChar.weapon : getRandomElement(selectedClass.starterWeapons);

  // Background
  const background = getRandomElement(FANTASY_BACKGROUNDS);
  const personalityTrait = getRandomElement(PERSONALITY_TRAITS);
  const ideal = getRandomElement(IDEALS);
  const bond = getRandomElement(BONDS);
  const flaw = getRandomElement(FLAWS);
  const quirk = getRandomElement(QUIRKS);
  const relicOrArmor = getRandomElement(RELICS_ARMOR);

  // Health, Mana, and Strength stats
  const health = existingChar && lockedTraits?.stats ? existingChar.health : 50 + stats.CON * 6 + Math.floor(Math.random() * 25);
  const mana = existingChar && lockedTraits?.stats ? existingChar.mana : 30 + stats.INT * 8 + Math.floor(Math.random() * 25);
  const strength = existingChar && lockedTraits?.stats ? existingChar.strength : stats.STR * 5 + Math.floor(Math.random() * 15);

  const backstory = generateBackstory(name.split(' ')[0], selectedRace, selectedClass, background, ideal);

  return {
    id: existingChar && lockedTraits ? existingChar.id : `hero_${Date.now()}_${Math.floor(Math.random() * 10000)}`,
    name,
    title,
    gender,
    characterClass: selectedClass,
    race: selectedRace,
    level: existingChar ? existingChar.level : 1,
    stats,
    health,
    mana,
    strength,
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
    createdAt: Date.now(),
    avatarSeed: existingChar && lockedTraits?.class && lockedTraits?.race ? existingChar.avatarSeed : Math.floor(Math.random() * 1000000)
  };
}
