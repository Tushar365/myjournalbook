import Link from 'next/link';

export default function RetroHeader() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#050816]/90 backdrop-blur-sm border-b-4 border-[#00f3ff] pixel-shadow-cyan">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Logo/Brand with Pixel Style */}
        <Link href="/portfolio" className="flex items-center gap-2 md:gap-3 group">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-[#ff006e] border-2 md:border-4 border-white flex items-center justify-center animate-bounce-pixel">
            <span className="text-base md:text-xl">🎮</span>
          </div>
          <span className="text-xs md:text-sm lg:text-base text-[#00f3ff] glow-cyan pixel-font uppercase tracking-wider">
            Tushar365
          </span>
        </Link>
        
        {/* Arcade-Style Navigation */}
        <nav className="flex gap-2 md:gap-4 text-[8px] md:text-xs pixel-font uppercase">
          <Link 
            href="#hero" 
            className="hidden sm:block px-2 md:px-3 py-1 md:py-2 bg-[#39ff14] text-[#050816] border-2 md:border-4 border-[#2db30f] hover:bg-[#2db30f] hover:translate-y-1 transition-all retro-card"
          >
            Start
          </Link>
          <Link 
            href="#spells" 
            className="hidden sm:block px-2 md:px-3 py-1 md:py-2 bg-[#ff006e] text-white border-2 md:border-4 border-[#b30050] hover:bg-[#b30050] hover:translate-y-1 transition-all retro-card"
          >
            Projects
          </Link>
          <Link 
            href="#quests" 
            className="hidden md:block px-2 md:px-3 py-1 md:py-2 bg-[#b537f2] text-white border-2 md:border-4 border-[#7b1fa2] hover:bg-[#7b1fa2] hover:translate-y-1 transition-all retro-card"
          >
            Journey
          </Link>
          <Link 
            href="#contact" 
            className="px-2 md:px-3 py-1 md:py-2 bg-[#00f3ff] text-[#050816] border-2 md:border-4 border-[#00a8b3] hover:bg-[#00a8b3] hover:translate-y-1 transition-all retro-card animate-blink"
          >
            Contact
          </Link>
        </nav>

        {/* Score Display (Decorative) */}
        <div className="hidden lg:flex items-center gap-2 pixel-font text-[10px] text-[#ffed4e]">
          <span>SCORE</span>
          <span className="text-white">999999</span>
        </div>
      </div>
    </header>
  );
}
