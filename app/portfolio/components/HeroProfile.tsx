export default function HeroProfile() {
  return (
    <div className="relative group perspective-1000">
      {/* Card Container */}
      <div className="bg-[#2a1b3d] border-2 border-[#f5bd02] rounded-xl p-1 relative overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        {/* Inner Border/Frame */}
        <div className="border border-[#b8a0d9]/30 rounded-lg p-6 flex flex-col md:flex-row gap-8 items-center bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]">
          
          {/* Avatar Frame */}
          <div className="relative">
             <div className="w-40 h-40 rounded-full border-4 border-[#f5bd02] p-1 shadow-[0_0_20px_rgba(245,189,2,0.3)] bg-[#1a0b2e]">
               {/* Placeholder for Avatar */}
               <div className="w-full h-full rounded-full bg-gradient-to-b from-[#431c5d] to-[#1a0b2e] flex items-center justify-center">
                 <span className="text-6xl">🧙‍♂️</span>
               </div>
             </div>
             {/* Level Badge */}
             <div className="absolute -bottom-2 -right-2 bg-[#dc143c] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 border-[#f5bd02] shadow-lg">
               25
             </div>
          </div>

          <div className="flex-1 text-center md:text-left space-y-3">
             <h2 className="text-3xl font-bold text-[#fff] font-[Cinzel,serif]">Archmage Tushar</h2>
             <p className="text-[#e0c3fc] italic">&quot;Weaving code into reality, one spell at a time.&quot;</p>
             
             <div className="grid grid-cols-2 gap-3 mt-4 max-w-md mx-auto md:mx-0">
               <div className="bg-[#13061c] px-3 py-2 rounded border border-[#f5bd02]/20">
                 <div className="text-xs text-[#f5bd02] uppercase tracking-wider">Mana (Learning)</div>
                 <div className="h-2 bg-[#333] rounded-full mt-1 overflow-hidden">
                   <div className="h-full bg-blue-500 w-[60%]"></div>
                 </div>
               </div>
               <div className="bg-[#13061c] px-3 py-2 rounded border border-[#f5bd02]/20">
                 <div className="text-xs text-[#f5bd02] uppercase tracking-wider">XP (Projects)</div>
                 <div className="h-2 bg-[#333] rounded-full mt-1 overflow-hidden">
                   <div className="h-full bg-green-500 w-[40%]"></div>
                 </div>
               </div>
             </div>

             <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
                <a href="/Tushar_resume_new (1).pdf" target="_blank" className="flex items-center gap-2 bg-[#f5bd02] text-[#1a0b2e] px-4 py-2 rounded font-bold hover:bg-[#ffe58f] transition-colors shadow-lg">
                  <span>📜</span> Resume
                </a>
                <a href="https://github.com/Tushar365" target="_blank" className="flex items-center gap-2 bg-[#333] text-white px-4 py-2 rounded border border-[#555] hover:border-white transition-colors">
                  <span>💻</span> GitHub
                </a>
                <a href="https://www.kaggle.com/tushar365" target="_blank" className="flex items-center gap-2 bg-[#20beff]/20 text-[#20beff] px-4 py-2 rounded border border-[#20beff]/50 hover:bg-[#20beff]/30 transition-colors">
                  <span>📊</span> Kaggle
                </a>
                <a href="https://huggingface.co/Tushar365" target="_blank" className="flex items-center gap-2 bg-[#ffbd59]/20 text-[#ffbd59] px-4 py-2 rounded border border-[#ffbd59]/50 hover:bg-[#ffbd59]/30 transition-colors">
                  <span>🤗</span> HuggingFace
                </a>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
