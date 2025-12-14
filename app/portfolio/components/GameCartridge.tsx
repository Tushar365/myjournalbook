interface GameCartridgeProps {
  title: string;
  level: string;
}

export default function GameCartridge({ title, level }: GameCartridgeProps) {
  return (
    <div className="group relative bg-gray-800 p-1 border-b-4 border-r-4 border-gray-900 hover:-translate-y-1 hover:border-green-500 transition-all cursor-pointer">
      <div className="bg-gray-700 p-8 flex flex-col items-center justify-center text-center space-y-4 min-h-[200px] border border-gray-600 group-hover:bg-gray-800">
        <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
          💾
        </div>
        <div>
          <h3 className="text-xl font-bold uppercase">{title}</h3>
          <p className="text-xs text-green-400 mt-1">Lvl {level}</p>
        </div>
      </div>
      
      {/* Decorative 'pins' */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-black flex justify-center gap-1 opacity-50">
        <div className="w-1 bg-yellow-600 h-full"></div>
        <div className="w-1 bg-yellow-600 h-full"></div>
        <div className="w-1 bg-yellow-600 h-full"></div>
      </div>
    </div>
  );
}
