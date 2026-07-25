import { CharacterClass, CharacterRace, CharacterBackground, Alignment } from '../types';

export const FANTASY_CLASSES: CharacterClass[] = [
  {
    id: 'mage',
    name: 'Mage',
    tagline: 'Master of Arcane Mysteries and Cosmic Elements',
    description: 'Wielders of primordial magic who command fire, frost, lightning, and arcane force to reshape reality.',
    primaryStat: 'INT',
    secondaryStat: 'WIS',
    color: '#8b5cf6', // Violet
    bgGradient: 'from-purple-900/40 via-indigo-950/60 to-slate-900',
    icon: 'Sparkles',
    starterWeapons: ['Aetherial Crystal Staff', 'Runed Oak Wand', 'Orb of Arcane Echoes'],
    abilities: [
      { name: 'Arcane Nova', type: 'Active', description: 'Unleashes a shockwave of raw magic dealing intense area damage.', cooldownOrCost: '25 Mana' },
      { name: 'Fireball', type: 'Spell', description: 'Launches a fiery projectile that detonates into a roaring inferno.', cooldownOrCost: '30 Mana' },
      { name: 'Mirror Image', type: 'Active', description: 'Creates illusionary copies to absorb incoming attacks.', cooldownOrCost: '15 Mana' },
      { name: 'Time Warp', type: 'Ultimate', description: 'Bends local time, hastening allies and freezing nearby foes.', cooldownOrCost: '120s CD' }
    ],
    classPassives: ['Arcane Intellect (+2 Spell Power)', 'Mana Shield']
  },
  {
    id: 'rogue',
    name: 'Rogue',
    tagline: 'Phantom of the Shadows and Master Assassin',
    description: 'Lethal opportunists who strike from hidden shadows with surgical precision and lethal toxins.',
    primaryStat: 'DEX',
    secondaryStat: 'CHA',
    color: '#10b981', // Emerald
    bgGradient: 'from-emerald-950/50 via-slate-900 to-black',
    icon: 'Zap',
    starterWeapons: ['Shadowsteel Daggers', 'Dual Obsidian Shortswords', 'Hand Crossbow'],
    abilities: [
      { name: 'Shadowstep', type: 'Active', description: 'Teleports instantly behind an opponent through shadowy realms.', cooldownOrCost: '8s CD' },
      { name: 'Eviscerate', type: 'Active', description: 'Finishing move that consumes combo points for massive critical damage.', cooldownOrCost: '3 Combo Points' },
      { name: 'Vanish', type: 'Active', description: 'Disappears in a cloud of smoke, breaking all movement locks.', cooldownOrCost: '45s CD' },
      { name: 'Venomous Strike', type: 'Spell', description: 'Coats blades in deadly viper venom causing heavy damage over time.', cooldownOrCost: '10 Energy' }
    ],
    classPassives: ['Evasion (+15% Dodge)', 'Fleet Footwork']
  },
  {
    id: 'warrior',
    name: 'Warrior',
    tagline: 'Unstoppable Vanguard of Steel and Might',
    description: 'Battle-hardened champions who command the front lines with heavy armor, mighty blades, and relentless armor-cleaving fury.',
    primaryStat: 'STR',
    secondaryStat: 'CON',
    color: '#ef4444', // Red
    bgGradient: 'from-red-950/50 via-slate-900 to-zinc-950',
    icon: 'Shield',
    starterWeapons: ['Valyrian Greatsword', 'Greataxe of the Behemoth', 'Tower Shield & Battleaxe'],
    abilities: [
      { name: 'Whirlwind', type: 'Active', description: 'Spins in a furious steel tempest, slicing all surrounding enemies.', cooldownOrCost: '12s CD' },
      { name: 'Shield Slam', type: 'Active', description: 'Bashes the opponent with heavy iron, stunning them for 3s.', cooldownOrCost: '15 Rage' },
      { name: 'Battle Shout', type: 'Active', description: 'Roars a terrifying warcry that increases allies attack power by 25%.', cooldownOrCost: '30s CD' },
      { name: 'Berserker Rage', type: 'Ultimate', description: 'Enters an unstoppable frenzy, becoming immune to fear and crowd control.', cooldownOrCost: '90s CD' }
    ],
    classPassives: ['Ironclad Armor (+20% Defense)', 'Unyielding Will']
  },
  {
    id: 'paladin',
    name: 'Paladin',
    tagline: 'Holy Defender of Justice and Radiant Light',
    description: 'Devout crusaders bound by sacred oaths, wielding divine light to heal allies and smite dark forces.',
    primaryStat: 'STR',
    secondaryStat: 'CHA',
    color: '#f59e0b', // Amber/Gold
    bgGradient: 'from-amber-950/40 via-yellow-950/30 to-slate-900',
    icon: 'Sun',
    starterWeapons: ['Radiant Warhammer', 'Sunfire Claymore', 'Aegis Shield & Mace'],
    abilities: [
      { name: 'Divine Smite', type: 'Spell', description: 'Infuses weapon strike with holy celestial fire, dealing radiant damage.', cooldownOrCost: '20 Mana' },
      { name: 'Lay on Hands', type: 'Active', description: 'Channels pure divine essence to instantly restore a companion to full health.', cooldownOrCost: '180s CD' },
      { name: 'Aura of Protection', type: 'Passive', description: 'Grants nearby allies resistance against dark magic and negative effects.', cooldownOrCost: 'Aura' },
      { name: 'Consecration', type: 'Active', description: 'Blesses the ground with holy radiance that burns undead and fiends.', cooldownOrCost: '35 Mana' }
    ],
    classPassives: ['Righteous Zeal (+10% Holy Damage)', 'Aura of Resolve']
  },
  {
    id: 'necromancer',
    name: 'Necromancer',
    tagline: 'Master of Undead Souls and Dark Essences',
    description: 'Scholar of forbidden arts who commands skeletal legions, drains vital energies, and speaks with the dead.',
    primaryStat: 'INT',
    secondaryStat: 'CON',
    color: '#06b6d4', // Cyan / Slate
    bgGradient: 'from-cyan-950/50 via-slate-950 to-black',
    icon: 'Skull',
    starterWeapons: ['Scythe of Soul Harvest', 'Bonecarved Wand & Skull Grimoire', 'Darkwood Rod'],
    abilities: [
      { name: 'Raise Undead', type: 'Active', description: 'Summons skeletal warriors from the earth to fight at your side.', cooldownOrCost: '40 Essence' },
      { name: 'Life Drain', type: 'Spell', description: 'Siphons the vital life force of an enemy to heal yourself.', cooldownOrCost: '15 Essence/s' },
      { name: 'Corpse Explosion', type: 'Active', description: 'Detonates a fallen enemy, dealing massive bone-shard damage.', cooldownOrCost: '1 Corpse' },
      { name: 'Army of the Damned', type: 'Ultimate', description: 'Opens a rift to the underworld, summoning a ghastly horde.', cooldownOrCost: '150s CD' }
    ],
    classPassives: ['Soul Harvest (+HP on Kill)', 'Grim Mastery']
  },
  {
    id: 'ranger',
    name: 'Ranger',
    tagline: 'Deadeye Hunter of the Uncharted Wilderness',
    description: 'Master trackers and archers attuned to nature, capable of felling beasts from afar alongside wild companions.',
    primaryStat: 'DEX',
    secondaryStat: 'WIS',
    color: '#84cc16', // Lime / Forest
    bgGradient: 'from-lime-950/40 via-emerald-950/50 to-slate-900',
    icon: 'Crosshair',
    starterWeapons: ['Yew Composite Longbow', 'Dual Elven Shortswords', 'Falconer Crossbow'],
    abilities: [
      { name: 'Rain of Arrows', type: 'Active', description: 'Fires a volley high into the sky, raining deadly arrows over a wide area.', cooldownOrCost: '12s CD' },
      { name: 'Summon Beast Companion', type: 'Active', description: 'Calls forth a loyal Dire Wolf or Shadow Hawk to fight by your side.', cooldownOrCost: 'Instant' },
      { name: 'Hunter Mark', type: 'Spell', description: 'Tracks a target, increasing all damage dealt to them by 30%.', cooldownOrCost: '10 Stamina' },
      { name: 'Snare Trap', type: 'Active', description: 'Conceals a thorn trap that roots enemies and renders them vulnerable.', cooldownOrCost: '15s CD' }
    ],
    classPassives: ['Wilderness Survival (+Move Speed)', 'Eagle Eye (+Crit Rate)']
  },
  {
    id: 'bard',
    name: 'Bard',
    tagline: 'Charismatic Weaver of Melodies and Fate',
    description: 'Enchanting performers whose music bends minds, inspires legendary deeds, and weaves subtle arcane charms.',
    primaryStat: 'CHA',
    secondaryStat: 'DEX',
    color: '#ec4899', // Pink / Rose
    bgGradient: 'from-pink-950/40 via-purple-950/40 to-slate-900',
    icon: 'Music',
    starterWeapons: ['Enchanted Silver Lute & Rapier', 'Dragonbone Flute', 'Spellwoven Mandolin'],
    abilities: [
      { name: 'Song of Inspiration', type: 'Active', description: 'Plays a heroic melody that boosts ally damage and accuracy.', cooldownOrCost: '20 Mana' },
      { name: 'Dissonant Whispers', type: 'Spell', description: 'Whispers a discordant melody that terrifies and damages an enemy mind.', cooldownOrCost: '15 Mana' },
      { name: 'Charm Person', type: 'Active', description: 'Sings a hypnotic tune that turns a foe into a temporary friend.', cooldownOrCost: '25 Mana' },
      { name: 'Symphony of Chaos', type: 'Ultimate', description: 'Unleashes a sonic wave that stuns all foes and heals all allies.', cooldownOrCost: '100s CD' }
    ],
    classPassives: ['Jack of All Trades (+1 to all Stats)', 'Silver Tongue']
  },
  {
    id: 'druid',
    name: 'Druid',
    tagline: 'Shapeshifting Guardian of Primordial Nature',
    description: 'Worshippers of the ancient Earth who channel nature wrath, heal wounds, and shapeshift into ferocious beasts.',
    primaryStat: 'WIS',
    secondaryStat: 'CON',
    color: '#10b981', // Emerald
    bgGradient: 'from-emerald-950/50 via-teal-950/40 to-slate-900',
    icon: 'Trees',
    starterWeapons: ['Ironwood Staff', 'Gnarled Oak Scythe', 'Primal Totem Staff'],
    abilities: [
      { name: 'Wild Shape (Dire Bear)', type: 'Active', description: 'Transforms into a massive bear with massive health and crushing claws.', cooldownOrCost: '1 Charge' },
      { name: 'Entangling Roots', type: 'Spell', description: 'Causes wild brambles to erupt from the soil, immobilizing enemies.', cooldownOrCost: '20 Mana' },
      { name: 'Healing Rain', type: 'Spell', description: 'Calls down soothing rain that continuously restores party health.', cooldownOrCost: '30 Mana' },
      { name: 'Call Lightning', type: 'Ultimate', description: 'Summons a storm cloud that strikes foes with thunderous bolts.', cooldownOrCost: '110s CD' }
    ],
    classPassives: ['Nature Communion (+Wisdom)', 'Grave Resistance']
  },
  {
    id: 'monk',
    name: 'Monk',
    tagline: 'Master of Ki Flow and Martial Harmony',
    description: 'Ascetic warriors who harness inner spiritual energy (Ki) to strike with blistering speed and shatter solid stone.',
    primaryStat: 'DEX',
    secondaryStat: 'WIS',
    color: '#eab308', // Amber
    bgGradient: 'from-amber-950/50 via-slate-900 to-black',
    icon: 'Flame',
    starterWeapons: ['Iron Knuckles', 'Bamboo Quarterstaff', 'Hand Scythes'],
    abilities: [
      { name: 'Flurry of Blows', type: 'Active', description: 'Unleashes four lightning-fast unarmed strikes in less than a second.', cooldownOrCost: '1 Ki' },
      { name: 'Stunning Strike', type: 'Active', description: 'Channels Ki into an opponent pressure point, paralyzing them.', cooldownOrCost: '2 Ki' },
      { name: 'Step of the Wind', type: 'Active', description: 'Doubles movement speed and allows leaping across vast chasms.', cooldownOrCost: '1 Ki' },
      { name: 'Dragon Palm', type: 'Ultimate', description: 'Releases a shockwave of spiritual Ki energy that blasts through armor.', cooldownOrCost: '4 Ki' }
    ],
    classPassives: ['Unarmored Defense (+AC from Wis)', 'Deflect Missiles']
  },
  {
    id: 'warlock',
    name: 'Warlock',
    tagline: 'Pact-Bound Seeker of Eldritch Power',
    description: 'Spellcasters who forged dangerous pacts with otherworldly fiends, archfey, or ancient eldritch entities.',
    primaryStat: 'CHA',
    secondaryStat: 'INT',
    color: '#a855f7', // Purple
    bgGradient: 'from-fuchsia-950/50 via-purple-950/60 to-black',
    icon: 'Eye',
    starterWeapons: ['Eldritch Pact Blade', 'Obelisk Scepter', 'Grimoire of Whispers'],
    abilities: [
      { name: 'Eldritch Blast', type: 'Spell', description: 'Fires a beam of crackling crackling force at a target.', cooldownOrCost: '0 Mana' },
      { name: 'Hellish Rebuke', type: 'Active', description: 'Surrounds an attacker in infernal flames when struck in battle.', cooldownOrCost: '1 Pact Slot' },
      { name: 'Hunger of Hadar', type: 'Spell', description: 'Opens a void of darkness filled with biting cold and tentacles.', cooldownOrCost: '1 Pact Slot' },
      { name: 'Dark Delirium', type: 'Ultimate', description: 'Plunges an enemy target into a terrifying illusory realm.', cooldownOrCost: '120s CD' }
    ],
    classPassives: ['Eldritch Sight (+Darkvision)', 'Fiendish Vigor']
  }
];

export const FANTASY_RACES: CharacterRace[] = [
  {
    id: 'high-elf',
    name: 'High Elf',
    description: 'Graceful and long-lived beings who possess deep affinity for arcane magic and lofty elegance.',
    statBonus: { INT: 2, DEX: 1 },
    racialTrait: 'Fey Ancestry & Cantrip',
    racialTraitDescription: 'Immune to magic sleep, advantage against charms, and knows 1 bonus mage spell.',
    heightRange: '5\'6" - 6\'2"',
    lifeSpan: '750 years'
  },
  {
    id: 'wood-elf',
    name: 'Wood Elf',
    description: 'Swift and wilderness-attuned elven folk with keen senses and unmatched archery skill.',
    statBonus: { DEX: 2, WIS: 1 },
    racialTrait: 'Mask of the Wild',
    racialTraitDescription: 'Can hide effortlessly even in light foliage or natural mist.',
    heightRange: '5\'4" - 6\'0"',
    lifeSpan: '700 years'
  },
  {
    id: 'mountain-dwarf',
    name: 'Mountain Dwarf',
    description: 'Stout and fierce crafters who dwell beneath mountain halls, forged in battle and stone.',
    statBonus: { STR: 2, CON: 2 },
    racialTrait: 'Dwarven Resilience',
    racialTraitDescription: 'Poison resistance and innate proficiency with heavy armor.',
    heightRange: '4\'2" - 4\'10"',
    lifeSpan: '350 years'
  },
  {
    id: 'human',
    name: 'Human',
    description: 'Ambitious, adaptable, and diverse mortals whose short lifespans drive them to legendary greatness.',
    statBonus: { STR: 1, DEX: 1, CON: 1, INT: 1, WIS: 1, CHA: 1 },
    racialTrait: 'Versatile Resolve',
    racialTraitDescription: 'Gains bonus skill proficiency and an extra combat feat.',
    heightRange: '5\'0" - 6\'4"',
    lifeSpan: '80-100 years'
  },
  {
    id: 'dragonborn',
    name: 'Dragonborn',
    description: 'Proud draconian humanoids born from dragon blood, wielding element breath and draconic pride.',
    statBonus: { STR: 2, CHA: 1 },
    racialTrait: 'Draconic Breath Weapon',
    racialTraitDescription: 'Exhales destructive elemental cone (Fire, Lightning, Frost, or Acid).',
    heightRange: '6\'2" - 6\'10"',
    lifeSpan: '80 years'
  },
  {
    id: 'tiefling',
    name: 'Tiefling',
    description: 'Mortals touched by infernal lineage, bearing horns, tails, and fiery infernal eyes.',
    statBonus: { CHA: 2, INT: 1 },
    racialTrait: 'Hellish Resistance & Legacy',
    racialTraitDescription: 'Fire resistance and innate infernal spells (Thaumaturgy & Hellish Rebuke).',
    heightRange: '5\'4" - 6\'2"',
    lifeSpan: '100 years'
  },
  {
    id: 'half-orc',
    name: 'Half-Orc',
    description: 'Formidable warriors combining human determination with fierce orcish strength and stamina.',
    statBonus: { STR: 2, CON: 1 },
    racialTrait: 'Relentless Endurance',
    racialTraitDescription: 'When dropped to 0 HP, drops to 1 HP instead once per long rest.',
    heightRange: '5\'10" - 6\'6"',
    lifeSpan: '75 years'
  },
  {
    id: 'aasimar',
    name: 'Aasimar',
    description: 'Blessed mortals carrying celestial blood and glowing radiant wings of divine providence.',
    statBonus: { CHA: 2, WIS: 1 },
    racialTrait: 'Celestial Wings & Healing Touch',
    racialTraitDescription: 'Can sprout ethereal wings for flight and project radiant light.',
    heightRange: '5\'6" - 6\'2"',
    lifeSpan: '160 years'
  },
  {
    id: 'forest-gnome',
    name: 'Forest Gnome',
    description: 'Inquisitive, clever folk who love illusion magic, woodland beasts, and intricate gadgets.',
    statBonus: { INT: 2, DEX: 1 },
    racialTrait: 'Gnome Cunning',
    racialTraitDescription: 'Advantage on all Intelligence, Wisdom, and Charisma magic saving throws.',
    heightRange: '3\'0" - 3\'8"',
    lifeSpan: '450 years'
  },
  {
    id: 'voidkin',
    name: 'Voidkin',
    description: 'Mysterious beings born from stars and cosmic ether, possessing phase-shifting traits.',
    statBonus: { INT: 1, WIS: 2 },
    racialTrait: 'Astral Step',
    racialTraitDescription: 'Phases out of reality for 1 round, avoiding all non-magical strikes.',
    heightRange: '5\'8" - 6\'5"',
    lifeSpan: 'Unknown'
  }
];

export const FANTASY_BACKGROUNDS: CharacterBackground[] = [
  { id: 'sage', title: 'Sage', description: 'Spent years studying arcane texts and ancient ruins.', skillProficiency: 'Arcana & History', startingEquip: 'Bottle of ink, quill, leather journal, pouch of gold' },
  { id: 'noble', title: 'Noble', description: 'Born into wealth, privilege, and political influence.', skillProficiency: 'History & Persuasion', startingEquip: 'Fine clothes, signet ring, scroll of pedigree' },
  { id: 'outlaw', title: 'Outlaw', description: 'Grew up on the edge of the law, surviving in gritty underworlds.', skillProficiency: 'Stealth & Deception', startingEquip: 'Set of dark clothes, crowbar, thieves tools' },
  { id: 'hermit', title: 'Hermit', description: 'Lived in solitary isolation seeking spiritual enlightenment.', skillProficiency: 'Medicine & Religion', startingEquip: 'Scroll case, winter blanket, herbalism kit' },
  { id: 'soldier', title: 'Soldier', description: 'Veterans of legendary wars, trained in tactics and regiment discipline.', skillProficiency: 'Athletics & Intimidation', startingEquip: 'Insignia of rank, trophy from fallen foe, playing cards' },
  { id: 'folk-hero', title: 'Folk Hero', description: 'Stood up to tyrants to protect humble village folk.', skillProficiency: 'Animal Handling & Survival', startingEquip: 'Artisan tools, iron pot, shovel' },
  { id: 'acolyte', title: 'Acolyte', description: 'Spent youth serving in grand cathedrals and ancient shrines.', skillProficiency: 'Insight & Religion', startingEquip: 'Holy symbol, prayer book, 5 sticks of incense' }
];

export const ALIGNMENTS: Alignment[] = [
  'Lawful Good',
  'Neutral Good',
  'Chaotic Good',
  'Lawful Neutral',
  'True Neutral',
  'Chaotic Neutral',
  'Lawful Evil',
  'Neutral Evil',
  'Chaotic Evil'
];

export const NAME_DICTIONARY = {
  elf: {
    prefixes: ['Ael', 'Val', 'Ther', 'Syl', 'Alys', 'Cael', 'Fael', 'Lyr', 'Zeph', 'Elar', 'Thal', 'Rael', 'Nae', 'Isil', 'Kael'],
    suffixes: ['is', 'ian', 'or', 'ith', 'ora', 'ion', 'as', 'iel', 'arion', 'ara', 'eth', 'andra', 'endor', 'wyn', 'ion'],
    surnames: ['Moonwhisper', 'Sunstrider', 'Starweaver', 'Silverleaf', 'Dawnseeker', 'Shadowbow', 'Windrunner', 'Everbloom', 'Nightbreeze', 'Astralwind']
  },
  dwarf: {
    prefixes: ['Thor', 'Mor', 'Gim', 'Bhur', 'Krag', 'Brak', 'Dra', 'Hald', 'Thrum', 'Kaz', 'Dur', 'Bar', 'Or', 'Val', 'Gund'],
    suffixes: ['in', 'grim', 'ak', 'ok', 'mund', 'or', 'rak', 'dar', 'ic', 'mar', 'din', 'ram', 'var'],
    surnames: ['Ironbreaker', 'Stonehammer', 'Fireforge', 'Coppervein', 'Thunderbeard', 'Shieldbreaker', 'Goldgilded', 'Deepminer', 'Anvilstrike']
  },
  human: {
    prefixes: ['Ald', 'Gareth', 'Rol', 'Ced', 'Eld', 'Bran', 'Marth', 'Vand', 'Ther', 'Luc', 'Kath', 'Will', 'Tris', 'Balth', 'Cor'],
    suffixes: ['ric', 'an', 'on', 'en', 'ous', 'ard', 'win', 'er', 'us', 'as', 'tan', 'mar'],
    surnames: ['Blackwood', 'Stormbringer', 'Hawthorne', 'Vance', 'Valerius', 'Pike', 'Crowley', 'Sterling', 'Fairfax', 'Graves', 'Mercer']
  },
  dragonborn: {
    prefixes: ['Balth', 'Ign', 'Drak', 'Vark', 'Vor', 'Kzar', 'Rhaeg', 'Sark', 'Thar', 'Zul', 'Rasz', 'Korr', 'Arz', 'Braz'],
    suffixes: ['os', 'ar', 'oth', 'ak', 'ax', 'or', 'is', 'az', 'urn', 'ok', 'oth'],
    surnames: ['Firefury', 'Wyrmbreaker', 'Ashfang', 'Scalebound', 'Flameheart', 'Thunderclaw', 'Doomdrake', 'Cindermaw']
  },
  tiefling: {
    prefixes: ['Mal', 'Luc', 'Az', 'Zar', 'Kaz', 'Lil', 'Dagon', 'Vex', 'Sari', 'Xan', 'Bael', 'Nox', 'Rav', 'Nyx'],
    suffixes: ['ith', 'uel', 'os', 'ia', 'is', 'a', 'eth', 'ul', 'or', 'al', 'iel'],
    surnames: ['Soulflame', 'Voidwalker', 'Duskbinder', 'Hellfire', 'Gloomtongue', 'Ashenspire', 'Obsidiansoul', 'Nightshade']
  },
  orc: {
    prefixes: ['Grok', 'Krag', 'Thok', 'Morg', 'Urg', 'Garg', 'Brak', 'Vor', 'Zog', 'Kull', 'Murok', 'Drak', 'Grom'],
    suffixes: ['ash', 'or', 'gash', 'ul', 'ath', 'marr', 'kar', 'uk', 'osh', 'kull'],
    surnames: ['Bloodfist', 'Skullcleaver', 'Bonecrusher', 'Ironjaw', 'Warfang', 'Goretusk', 'Shattershield', 'Ragehound']
  },
  celestial: {
    prefixes: ['Serap', 'Aeth', 'Aur', 'Luci', 'Val', 'Gabriel', 'Uriel', 'Cael', 'Sola', 'Zion', 'Eos', 'Astra'],
    suffixes: ['iel', 'ius', 'ia', 'or', 'el', 'a', 'eon', 'is', 'um'],
    surnames: ['Lightbringer', 'Dawnstar', 'Heavensward', 'Angelwing', 'Sunflare', 'Gracebound', 'Sanctuary']
  }
};

export const TITLES_EPITHETS = [
  'The Undefeated',
  'Keeper of the Flame',
  'Whisper of the Void',
  'Shield of the Realm',
  'Shadow of Eloria',
  'The Unbroken',
  'Bane of Monsters',
  'Slayer of Dragons',
  'Master of Runes',
  'The Astromancer',
  'Wanderer of Nebulae',
  'The Ironclad',
  'Seeker of Truth',
  'The Spellbound',
  'Scourge of the High Seas',
  'Voice of the Ancients'
];

export const PERSONALITY_TRAITS = [
  'Always keeps a lucky silver coin in hand when making difficult choices.',
  'Speaks in quiet, measured tones, but holds unwavering confidence.',
  'Has a profound fascination with ancient runes and lost languages.',
  'Refuses to leave any companion or innocent behind, no matter the cost.',
  'Can fall asleep anywhere, even amidst the roar of a tavern brawl.',
  'Loves dark humor and tells jokes at the most inappropriate moments.',
  'Never breaks a promise or sworn oath once given.',
  'Collects rare pressed wildflowers from every new land visited.',
  'Is deeply suspicious of anyone who wears bright yellow silk.'
];

export const IDEALS = [
  'Freedom: Everyone deserves to chart their own destiny without tyrants.',
  'Greater Good: It is my duty to lay down my life to protect the innocent.',
  'Knowledge: Path to true mastery lies in unlocking the unknown.',
  'Honor: If you lose your honor, you lose everything that defines you.',
  'Power: The strong rule so the world does not descend into total chaos.',
  'Balance: Light and dark must coexist in harmony for life to flourish.'
];

export const BONDS = [
  'I carry an ancient family heirloom that conceals a royal secret.',
  'I owe my life to an old mentor who vanished into the Whispering Peaks.',
  'My homeland was swallowed by dark magic; I seek the cure to restore it.',
  'I fight to earn enough gold to build a sanctuary for homeless orphans.',
  'A mysterious benefactor saved me from execution; I am forever in their debt.',
  'I seek revenge against the dark cult that destroyed my guild.'
];

export const FLAWS = [
  'Overly confident in personal skills, often jumping into dangerous traps.',
  'Cannot resist a wager or game of chance, even when low on coin.',
  'Holds deep grudges and rarely forgives those who slight them.',
  'Struggles to trust strangers, suspecting betrayal around every corner.',
  'Easily distracted by shiny gemstones, rare scrolls, or magical relics.',
  'Blunt to a fault—tells the brutal truth even to powerful kings.'
];

export const QUIRKS = [
  'Always carries an unlit scented candle in their pouch.',
  'Polishes their weapons twice every morning before speaking to anyone.',
  'Humming old lullabies when concentrating on complex magic or lockpicking.',
  'Names every horse, sword, or spell book they own with affectionate titles.',
  'Takes detailed notes on the culinary flavors of every monster slain.',
  'Refuses to cross running water without touching a piece of iron.'
];

export const RELICS_ARMOR = [
  'Cloak of the Astral Nomad',
  'Ring of Spell Turning',
  'Amulet of Dragon Essence',
  'Boots of Elvenkind',
  'Bracers of Archery',
  'Crown of Celestials',
  'Pouch of Infinite Dust',
  'Lantern of Revealing Souls',
  'Belt of Giant Strength'
];
