interface ProjectCardProps {
  title: string;
  category: string;
  tier: string;
}

export default function ProjectCard({ title, category, tier }: ProjectCardProps) {
  return (
    <div className="bg-[#241235] rounded-lg border border-[#f5bd02]/40 p-1 group hover:-translate-y-2 transition-transform duration-300 cursor-pointer shadow-lg hover:shadow-[#f5bd02]/20">
      <div className="bg-[#1a0b2e] rounded p-4 h-full relative overflow-hidden">
        {/* Shine Effect */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#f5bd02]/20 to-transparent rounded-bl-full pointer-events-none"></div>

        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-bold text-[#b8a0d9] px-2 py-1 rounded bg-[#361e4d] uppercase tracking-wider">
            {category}
          </span>
          <span className="text-[#f5bd02] text-lg">✦</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 font-[Cinzel,serif] group-hover:text-[#f5bd02] transition-colors">{title}</h3>
        <p className="text-sm text-[#e0c3fc]/70 mb-4">
          A powerful artifact forged in the fires of Next.js and Tailwind.
        </p>

        <div className="mt-auto border-t border-[#f5bd02]/20 pt-3 flex justify-between items-center text-xs">
          <span className="text-[#f5bd02]">Tier: {tier}</span>
          <button className="text-[#fff] hover:text-[#f5bd02] uppercase tracking-wider font-bold">
            Cast Spells &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
