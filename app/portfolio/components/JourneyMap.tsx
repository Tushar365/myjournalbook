import PixelCoin from './PixelCoin';

export default function RetroJourneyMap() {
  const milestones = [
    { level: 1, title: 'Started Coding', year: '2020', color: '#39ff14' },
    { level: 2, title: 'First Project', year: '2021', color: '#00f3ff' },
    { level: 3, title: 'ML Journey', year: '2022', color: '#ff006e' },
    { level: 4, title: 'AI Mastery', year: '2023', color: '#b537f2' },
    { level: 5, title: 'Current Quest', year: '2024', color: '#ffed4e' },
  ];

  return (
    <div className="relative py-8">
      {/* Pixel Path */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00f3ff] via-[#ff006e] to-[#39ff14] -translate-x-1/2 opacity-50" />

      <div className="space-y-8 md:space-y-12">
        {milestones.map((milestone, index) => (
          <div 
            key={index}
            className={`flex items-center gap-4 md:gap-8 ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            {/* Content */}
            <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
              <div 
                className="inline-block bg-[#050816] border-4 p-3 md:p-4 retro-card"
                style={{ borderColor: milestone.color }}
              >
                <div className="flex items-center gap-2 mb-2" style={{ 
                  flexDirection: index % 2 === 0 ? 'row-reverse' : 'row',
                  justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start'
                }}>
                  <div 
                    className="pixel-font text-[10px] md:text-xs px-2 py-1 border-2"
                    style={{ 
                      backgroundColor: milestone.color,
                      borderColor: milestone.color,
                      color: '#050816'
                    }}
                  >
                    LV {milestone.level}
                  </div>
                  <span className="pixel-font text-[8px] md:text-[10px] text-gray-400">
                    {milestone.year}
                  </span>
                </div>
                <h3 
                  className="pixel-font text-xs md:text-sm lg:text-base uppercase leading-relaxed"
                  style={{ color: milestone.color }}
                >
                  {milestone.title}
                </h3>
              </div>
            </div>

            {/* Checkpoint Node */}
            <div className="relative flex-shrink-0">
              <div 
                className="w-12 h-12 md:w-16 md:h-16 border-4 bg-[#050816] flex items-center justify-center animate-bounce-pixel"
                style={{ borderColor: milestone.color }}
              >
                {index === milestones.length - 1 ? (
                  <span className="text-2xl md:text-3xl">🎯</span>
                ) : (
                  <span className="text-2xl md:text-3xl">✓</span>
                )}
              </div>
              {/* Decorative Pixel Coin */}
              {index < milestones.length - 1 && (
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
                  <PixelCoin />
                </div>
              )}
            </div>

            {/* Spacer for alignment */}
            <div className="flex-1" />
          </div>
        ))}
      </div>
    </div>
  );
}
