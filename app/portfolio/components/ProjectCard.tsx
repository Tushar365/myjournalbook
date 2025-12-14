interface ProjectCardProps {
  title: string;
  category: string;
  tier: string;
}

export default function RetroProjectCard({ title, category, tier }: ProjectCardProps) {
  // Color schemes for different tiers
  const tierColors: Record<string, { bg: string; border: string; accent: string }> = {
    'Artifact': { bg: '#00f3ff', border: '#00a8b3', accent: '#ffed4e' },
    'Legendary': { bg: '#ff006e', border: '#b30050', accent: '#00f3ff' },
    'Mythic': { bg: '#b537f2', border: '#7b1fa2', accent: '#39ff14' },
    'Epic': { bg: '#39ff14', border: '#2db30f', accent: '#ff006e' },
  };

  const colors = tierColors[tier] || tierColors['Epic'];

  return (
    <div className="retro-card border-[#00f3ff] bg-[#050816] group hover:scale-105 transition-transform duration-200 cursor-pointer">
      {/* Cartridge Top Label */}
      <div 
        className="h-2 md:h-3"
        style={{ backgroundColor: colors.bg }}
      />
      
      <div className="p-3 md:p-4 relative overflow-hidden scanlines">
        {/* Category Badge */}
        <div className="flex justify-between items-start mb-3 md:mb-4">
          <span 
            className="pixel-font text-[8px] md:text-[10px] px-2 py-1 border-2 uppercase tracking-wider"
            style={{ 
              backgroundColor: colors.bg,
              borderColor: colors.border,
              color: '#050816'
            }}
          >
            {category}
          </span>
          <div className="animate-blink">
            <svg width="16" height="16" viewBox="0 0 8 8">
              <rect x="3" y="0" width="2" height="2" fill={colors.accent} />
              <rect x="1" y="2" width="6" height="2" fill={colors.accent} />
              <rect x="0" y="4" width="8" height="2" fill={colors.accent} />
              <rect x="1" y="6" width="6" height="2" fill={colors.accent} />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h3 
          className="text-sm md:text-lg lg:text-xl pixel-font mb-2 md:mb-3 uppercase leading-relaxed"
          style={{ color: colors.bg }}
        >
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-[8px] md:text-[10px] text-gray-400 mb-3 md:mb-4 pixel-font leading-relaxed">
          A powerful creation forged with modern tech
        </p>

        {/* Footer */}
        <div className="border-t-2 border-[#00f3ff]/20 pt-2 md:pt-3 flex justify-between items-center">
          <div className="flex items-center gap-1">
            <span className="pixel-font text-[8px] md:text-[10px]" style={{ color: colors.accent }}>
              {tier}
            </span>
            {[...Array(3)].map((_, i) => (
              <span key={i} style={{ color: colors.accent }}>★</span>
            ))}
          </div>
          <button 
            className="pixel-font text-[8px] md:text-[10px] uppercase tracking-wider hover:translate-x-1 transition-transform"
            style={{ color: colors.bg }}
          >
            Play →
          </button>
        </div>

        {/* Hover Scanline Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>
    </div>
  );
}
