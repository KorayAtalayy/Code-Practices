import React from 'react';
import { Character } from '../types';
import { AvatarSvg } from './AvatarSvg';
import {
  X,
  Trash2,
  ExternalLink,
  Search,
  BookmarkCheck,
  Shield,
  Download,
  Dices
} from 'lucide-react';

interface SavedRosterModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedCharacters: Character[];
  onSelectCharacter: (character: Character) => void;
  onDeleteCharacter: (id: string) => void;
  onClearAll: () => void;
}

export const SavedRosterModal: React.FC<SavedRosterModalProps> = ({
  isOpen,
  onClose,
  savedCharacters,
  onSelectCharacter,
  onDeleteCharacter,
  onClearAll
}) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  if (!isOpen) return null;

  const filtered = savedCharacters.filter((c) => {
    const term = searchTerm.toLowerCase();
    return (
      c.name.toLowerCase().includes(term) ||
      c.title.toLowerCase().includes(term) ||
      c.characterClass.name.toLowerCase().includes(term) ||
      c.race.name.toLowerCase().includes(term)
    );
  });

  const exportAllAsText = () => {
    const text = savedCharacters
      .map(
        (c, idx) =>
          `[${idx + 1}] ${c.name}, ${c.title}\nRace: ${c.race.name} | Class: ${
            c.characterClass.name
          } (Lvl ${c.level})\nAlignment: ${c.alignment}\nStats: STR ${c.stats.STR} DEX ${
            c.stats.DEX
          } CON ${c.stats.CON} INT ${c.stats.INT} WIS ${c.stats.WIS} CHA ${c.stats.CHA}\nWeapon: ${
            c.weapon
          }\n`
      )
      .join('\n----------------------------------------\n\n');

    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `fantasy_party_codex.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0c]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="w-full max-w-4xl bg-[#111116] border border-[#24242b] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-[#24242b] flex items-center justify-between gap-4 bg-[#0e0e12]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 border border-amber-500/40 rotate-45 flex items-center justify-center bg-[#111116]">
              <BookmarkCheck className="w-4 h-4 text-amber-400 -rotate-45" />
            </div>
            <div>
              <h3 className="text-lg font-serif uppercase tracking-[0.2em] text-amber-100">My Deck & Hero Cards</h3>
              <p className="text-[11px] uppercase tracking-widest text-amber-100/40">
                {savedCharacters.length} Saved Hero Cards in My Deck
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {savedCharacters.length > 0 && (
              <button
                onClick={exportAllAsText}
                className="px-3 py-1.5 bg-[#0a0a0c] border border-[#24242b] hover:border-amber-500/40 text-amber-200 text-xs font-serif uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                title="Export Codex"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Export Text</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 bg-[#0a0a0c] border border-[#24242b] hover:border-amber-500/40 text-amber-100/60 hover:text-amber-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {savedCharacters.length > 0 && (
          <div className="p-4 bg-[#0a0a0c] border-b border-[#24242b]">
            <div className="relative">
              <Search className="w-4 h-4 text-amber-100/40 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Search heroes by name, class, race..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#111116] border border-[#24242b] pl-10 pr-4 py-2 text-xs text-amber-100 placeholder-amber-100/30 focus:outline-none focus:border-amber-500/60 font-sans"
              />
            </div>
          </div>
        )}

        {/* Characters Grid / List */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-3 bg-[#0a0a0c]">
          {savedCharacters.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <Dices className="w-12 h-12 text-amber-500/20 mx-auto" />
              <h4 className="text-base font-serif uppercase tracking-[0.2em] text-amber-100/80">Your Hero Codex is Empty</h4>
              <p className="text-xs text-amber-100/40 max-w-sm mx-auto">
                Summon new random fantasy heroes and click "Record Hero" to bookmark them here for future adventuring parties!
              </p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-8 text-amber-100/40 text-xs uppercase tracking-widest">
              No saved heroes matched "{searchTerm}".
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filtered.map((char) => (
                <div
                  key={char.id}
                  className="p-3.5 bg-[#111116] border border-[#24242b] hover:border-amber-500/40 transition-all flex gap-3 group relative"
                >
                  <div className="w-20 h-20 border border-[#24242b] bg-[#0a0a0c] flex-shrink-0">
                    <AvatarSvg
                      characterClass={char.characterClass}
                      race={char.race}
                      gender={char.gender}
                      seed={char.avatarSeed}
                    />
                  </div>

                  <div className="flex-1 min-w-0 space-y-1 text-xs">
                    <div className="flex items-center justify-between gap-1">
                      <h4 className="font-serif uppercase tracking-wider text-amber-100 truncate text-sm">{char.name}</h4>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 bg-[#0a0a0c] text-amber-400 border border-[#24242b]">
                        LVL {char.level}
                      </span>
                    </div>

                    <p className="text-amber-100/50 truncate text-[11px] italic font-serif">"{char.title}"</p>

                    <div className="flex items-center gap-2 pt-0.5 text-[11px]">
                      <span className="font-serif uppercase tracking-widest text-amber-200">{char.race.name}</span>
                      <span className="text-amber-100/20">•</span>
                      <span className="font-serif font-bold uppercase tracking-widest" style={{ color: char.characterClass.color }}>
                        {char.characterClass.name}
                      </span>
                    </div>

                    <div className="pt-2 flex items-center justify-between border-t border-[#24242b]">
                      <span className="text-[10px] font-mono text-amber-100/40">
                        STR {char.stats.STR} DEX {char.stats.DEX} INT {char.stats.INT}
                      </span>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            onSelectCharacter(char);
                            onClose();
                          }}
                          className="px-2.5 py-1 bg-amber-500/10 hover:bg-amber-500/20 text-amber-200 border border-amber-500/30 text-[10px] font-serif uppercase tracking-widest flex items-center gap-1 transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" /> View
                        </button>

                        <button
                          onClick={() => onDeleteCharacter(char.id)}
                          className="p-1 bg-[#0a0a0c] hover:bg-rose-500/20 text-slate-500 hover:text-rose-400 border border-[#24242b] transition-colors"
                          title="Delete Hero"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        {savedCharacters.length > 0 && (
          <div className="p-4 bg-[#0e0e12] border-t border-[#24242b] flex justify-between items-center text-xs">
            <button
              onClick={() => {
                if (window.confirm('Are you sure you want to clear all saved heroes from your codex?')) {
                  onClearAll();
                }
              }}
              className="text-slate-500 hover:text-rose-400 flex items-center gap-1 font-serif uppercase tracking-widest transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" /> Clear Entire Roster
            </button>

            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#111116] border border-[#24242b] hover:border-amber-500/40 text-amber-100 uppercase tracking-widest font-serif text-xs"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
