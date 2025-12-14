export default function ArcadeHeader() {
  return (
    <header className="flex justify-between items-center border-b-4 border-green-500 pb-4 mb-8">
      <div>
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter animate-pulse">
          PLAYER <span className="text-green-500">ONE</span>
        </h1>
        <p className="text-sm md:text-base opacity-75">Ready Player One?</p>
      </div>
      
      <div className="hidden md:block text-right">
        <div className="text-xl">SCORE: <span className="text-yellow-400">999999</span></div>
        <div className="text-xs uppercase tracking-widest">High Score</div>
      </div>
    </header>
  );
}
