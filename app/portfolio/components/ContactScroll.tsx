export default function ContactScroll() {
  return (
    <div className="relative max-w-2xl mx-auto py-12 px-8 my-20">
      {/* Scroll Background - using CSS/SVG simulation or just styling */}
      <div className="absolute inset-0 bg-[#f5e6d3] transform rotate-1 rounded shadow-[0_0_50px_rgba(0,0,0,0.5)] z-0"></div>
      <div className="absolute inset-0 bg-[#f5e6d3] transform -rotate-1 rounded shadow-sm z-0"></div>
      
      <div className="relative z-10 text-center text-[#2c1810]">
        <div className="mb-6">
           <span className="text-4xl">📜</span>
        </div>
        <h2 className="text-3xl font-bold font-[Cinzel,serif] mb-4 border-b-2 border-[#8b4513] pb-2 inline-block">
          Send a Raven
        </h2>
        <p className="mb-8 font-serif italic text-lg">
          &quot;I am always open to new alliances and grand quests. Send word, and I shall respond.&quot;
        </p>
        
        <form className="space-y-4 max-w-md mx-auto text-left">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-1 opacity-70">Your Name</label>
            <input type="text" className="w-full bg-[#e6d5c0] border-b-2 border-[#8b4513] p-2 focus:outline-none focus:border-[#d2691e] transition-colors" placeholder="Sir John Doe" />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-1 opacity-70">Message</label>
            <textarea className="w-full bg-[#e6d5c0] border-b-2 border-[#8b4513] p-2 h-24 focus:outline-none focus:border-[#d2691e] transition-colors resize-none" placeholder="Greetings..." />
          </div>
          
          <button type="button" className="w-full bg-[#8b4513] text-[#f5e6d3] font-bold py-3 uppercase tracking-widest mt-4 hover:bg-[#65320e] transition-colors shadow-lg border border-[#f5e6d3]/20">
            Dispatch Messenger
          </button>
        </form>
      </div>
    </div>
  );
}
