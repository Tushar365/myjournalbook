export default function RetroHeroProfile() {
  return (
    <div className="relative group">
      {/* Retro Game Card Container */}
      <div className="bg-[#050816] border-4 border-[#00f3ff] rounded-none p-2 relative overflow-hidden pixel-shadow-cyan retro-card">
        {/* Player 1 Header */}
        <div className="bg-[#ff006e] border-b-4 border-[#b30050] px-4 py-2 mb-4">
          <h3 className="pixel-font text-xs md:text-sm text-white uppercase tracking-wider text-center">
            ★ Player 1 ★
          </h3>
        </div>

        <div className="border-4 border-[#39ff14]/30 p-4 md:p-6 flex flex-col md:flex-row gap-6 md:gap-8 items-center bg-[#0a0e27]">
          
          {/* Pixel Character Avatar */}
          <div className="relative flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 border-4 border-[#ffed4e] p-2 bg-[#050816] pixel-shadow-green relative">
              {/* Pixel Art Character */}
              <svg viewBox="0 0 32 32" className="w-full h-full">
                {/* Head */}
                <rect x="10" y="4" width="12" height="2" fill="#ffed4e" />
                <rect x="8" y="6" width="16" height="6" fill="#ffed4e" />
                
                {/* Eyes */}
                <rect x="12" y="8" width="2" height="2" fill="#050816" />
                <rect x="18" y="8" width="2" height="2" fill="#050816" />
                
                {/* Smile */}
                <rect x="13" y="11" width="6" height="1" fill="#050816" />
                
                {/* Body */}
                <rect x="10" y="12" width="12" height="2" fill="#00f3ff" />
                <rect x="8" y="14" width="16" height="6" fill="#00f3ff" />
                
                {/* Arms */}
                <rect x="6" y="14" width="2" height="4" fill="#ffed4e" />
                <rect x="24" y="14" width="2" height="4" fill="#ffed4e" />
                
                {/* Legs */}
                <rect x="10" y="20" width="4" height="6" fill="#ff006e" />
                <rect x="18" y="20" width="4" height="6" fill="#ff006e" />
                
                {/* Shoes */}
                <rect x="8" y="26" width="6" height="4" fill="#050816" />
                <rect x="18" y="26" width="6" height="4" fill="#050816" />
              </svg>
              
              {/* Level Badge */}
              <div className="absolute -bottom-2 -right-2 bg-[#ff006e] text-white w-12 h-12 border-4 border-[#ffed4e] flex flex-col items-center justify-center pixel-font text-xs animate-bounce-pixel">
                <span className="text-[8px]">LV</span>
                <span className="text-sm">25</span>
              </div>
            </div>
          </div>

          <div className="flex-1 text-center md:text-left space-y-4 w-full">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl pixel-font text-[#00f3ff] glow-cyan mb-2 uppercase leading-relaxed">
                Tushar
              </h2>
              <p className="text-[10px] md:text-xs text-[#39ff14] pixel-font uppercase tracking-wide">
                &gt; Code Warrior &amp; Pixel Master
              </p>
            </div>
            
            {/* Stats Bars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto md:mx-0">
              <div className="bg-[#050816] p-2 border-2 border-[#00f3ff]/40">
                <div className="pixel-font text-[8px] md:text-[10px] text-[#00f3ff] uppercase mb-1 flex justify-between">
                  <span>HP (Skills)</span>
                  <span>85/100</span>
                </div>
                <div className="h-3 md:h-4 bg-[#1a0b3d] border-2 border-[#00f3ff]/20 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#ff006e] to-[#ff6b35] w-[85%] animate-pulse" />
                </div>
              </div>
              
              <div className="bg-[#050816] p-2 border-2 border-[#39ff14]/40">
                <div className="pixel-font text-[8px] md:text-[10px] text-[#39ff14] uppercase mb-1 flex justify-between">
                  <span>MP (Projects)</span>
                  <span>70/100</span>
                </div>
                <div className="h-3 md:h-4 bg-[#1a0b3d] border-2 border-[#39ff14]/20 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#00f3ff] to-[#39ff14] w-[70%] animate-pulse" />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start pt-2">
              <a 
                href="/Tushar_resume_new (1).pdf" 
                target="_blank" 
                className="retro-btn retro-btn-cyan text-[8px] md:text-[10px] flex items-center gap-2"
              >
                <span>📜</span> Resume
              </a>
              <a 
                href="https://github.com/Tushar365" 
                target="_blank" 
                className="retro-btn retro-btn-pink text-[8px] md:text-[10px] flex items-center gap-2"
              >
                <span>💻</span> GitHub
              </a>
              <a 
                href="https://www.kaggle.com/tushar365" 
                target="_blank" 
                className="retro-btn retro-btn-green text-[8px] md:text-[10px] flex items-center gap-2"
              >
                <span>📊</span> Kaggle
              </a>
              <a 
                href="https://huggingface.co/Tushar365" 
                target="_blank" 
                className="retro-btn retro-btn-cyan text-[8px] md:text-[10px] flex items-center gap-2"
              >
                <span>🤗</span> HF
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
