import Link from 'next/link';

export default function MagicalHeader() {
  return (
    <header className="flex justify-between items-center py-6 mb-12 border-b border-[#f5bd02]/30 bg-[#13061c]/50 backdrop-blur-sm sticky top-0 z-50 px-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f5bd02] to-[#ffeba1] flex items-center justify-center shadow-[0_0_15px_rgba(245,189,2,0.5)]">
          <span className="text-2xl">✨</span>
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-widest text-[#f5bd02] uppercase font-[Cinzel,serif]">
            Tushar
          </h1>
          <p className="text-xs text-[#b8a0d9] tracking-wider uppercase">Level 25 Wizard</p>
        </div>
      </div>
      
      <div className="hidden md:flex gap-8 text-sm font-bold tracking-widest text-[#e0c3fc]">
        <Link href="#quests" className="hover:text-[#f5bd02] transition-colors relative group">
          QUESTS
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f5bd02] group-hover:w-full transition-all"></span>
        </Link>
        <Link href="#spells" className="hover:text-[#f5bd02] transition-colors relative group">
          SPELLS
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f5bd02] group-hover:w-full transition-all"></span>
        </Link>
        <Link href="#contact" className="hover:text-[#f5bd02] transition-colors relative group">
          Contact
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f5bd02] group-hover:w-full transition-all"></span>
        </Link>
      </div>
    </header>
  );
}
