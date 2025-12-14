export default function LevelMap() {
  const levels = [
    { name: 'Tutorial Zone', year: '2020', desc: 'Started learning HTML & CSS' },
    { name: 'University Dungeon', year: '2021-2023', desc: 'Studied CS principles and Algorithms' },
    { name: 'Freelance Forest', year: '2024', desc: 'Built websites for local guilds' },
  ];

  return (
    <div className="border-l-2 border-green-500 ml-4 space-y-8 py-4">
      {levels.map((level, idx) => (
        <div key={idx} className="relative pl-8">
          {/* Dot */}
          <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-black border-2 border-green-500"></div>
          
          <div className="bg-gray-900/50 p-4 rounded border border-gray-800 hover:border-green-500/50 transition-colors">
            <span className="text-xs font-bold bg-green-900 text-green-100 px-2 py-1 rounded">
              {level.year}
            </span>
            <h4 className="text-lg font-bold mt-2 text-white">{level.name}</h4>
            <p className="text-sm text-gray-400">{level.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
