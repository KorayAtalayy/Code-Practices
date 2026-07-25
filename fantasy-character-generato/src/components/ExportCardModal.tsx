import React from 'react';
import { Character } from '../types';
import { X, Copy, Check, FileText, Printer } from 'lucide-react';

interface ExportCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  character: Character;
}

export const ExportCardModal: React.FC<ExportCardModalProps> = ({
  isOpen,
  onClose,
  character
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const characterMarkdown = `
# ⚔️ ${character.name} "${character.title}"
**Race**: ${character.race.name} | **Class**: ${character.characterClass.name} (Level ${character.level})
**Alignment**: ${character.alignment} | **Gender**: ${character.gender}
**Background**: ${character.background.title} (${character.background.skillProficiency})

---

### 📊 Core Attributes
- **STR**: ${character.stats.STR} (${Math.floor((character.stats.STR - 10) / 2) >= 0 ? '+' : ''}${Math.floor((character.stats.STR - 10) / 2)})
- **DEX**: ${character.stats.DEX} (${Math.floor((character.stats.DEX - 10) / 2) >= 0 ? '+' : ''}${Math.floor((character.stats.DEX - 10) / 2)})
- **CON**: ${character.stats.CON} (${Math.floor((character.stats.CON - 10) / 2) >= 0 ? '+' : ''}${Math.floor((character.stats.CON - 10) / 2)})
- **INT**: ${character.stats.INT} (${Math.floor((character.stats.INT - 10) / 2) >= 0 ? '+' : ''}${Math.floor((character.stats.INT - 10) / 2)})
- **WIS**: ${character.stats.WIS} (${Math.floor((character.stats.WIS - 10) / 2) >= 0 ? '+' : ''}${Math.floor((character.stats.WIS - 10) / 2)})
- **CHA**: ${character.stats.CHA} (${Math.floor((character.stats.CHA - 10) / 2) >= 0 ? '+' : ''}${Math.floor((character.stats.CHA - 10) / 2)})

---

### 🗡️ Equipment & Relics
- **Weapon**: ${character.weapon}
- **Relic/Armor**: ${character.relicOrArmor}

---

### 🔮 Class Abilities
${character.characterClass.abilities
  .map((a) => `- **${a.name}** [${a.type}]: ${a.description} (${a.cooldownOrCost})`)
  .join('\n')}

---

### 📜 Backstory & Traits
> "${character.backstory}"

- **Personality**: ${character.personalityTrait}
- **Ideal**: ${character.ideal}
- **Bond**: ${character.bond}
- **Flaw**: ${character.flaw}
- **Quirk**: ${character.quirk}
`.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(characterMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0c]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="w-full max-w-2xl bg-[#111116] border border-[#24242b] shadow-2xl flex flex-col max-h-[85vh] overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-[#24242b] flex items-center justify-between bg-[#0e0e12]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-amber-500/40 rotate-45 flex items-center justify-center bg-[#111116]">
              <FileText className="w-4 h-4 text-amber-400 -rotate-45" />
            </div>
            <div>
              <h3 className="text-base font-serif uppercase tracking-[0.2em] text-amber-100">Export Character Sheet</h3>
              <p className="text-[11px] uppercase tracking-widest text-amber-100/40">Copy formatted markdown or print card</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-[#0a0a0c] border border-[#24242b] hover:border-amber-500/40 text-amber-100/60 hover:text-amber-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Box */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-[#0a0a0c]">
          <textarea
            readOnly
            value={characterMarkdown}
            className="w-full h-80 bg-[#111116] border border-[#24242b] p-4 font-mono text-xs text-amber-100/80 focus:outline-none resize-none leading-relaxed"
          />
        </div>

        {/* Actions */}
        <div className="p-4 bg-[#0e0e12] border-t border-[#24242b] flex items-center justify-between gap-3">
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-[#111116] border border-[#24242b] hover:border-amber-500/40 text-amber-100/80 uppercase tracking-widest font-serif text-xs flex items-center gap-2 transition-colors"
          >
            <Printer className="w-4 h-4 text-amber-400" /> Print Sheet
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className={`px-5 py-2 uppercase tracking-widest font-serif text-xs flex items-center gap-2 transition-all shadow-md ${
                copied
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-[#111116] border border-amber-500/50 hover:border-amber-500 text-amber-100'
              }`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4 text-amber-400" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Markdown'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
