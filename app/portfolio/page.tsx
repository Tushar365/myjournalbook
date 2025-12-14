import RetroHeader from './components/MagicalHeader';
import RetroHeroProfile from './components/HeroProfile';
import RetroProjectCard from './components/ProjectCard';
import RetroJourneyMap from './components/JourneyMap';
import RetroContactScroll from './components/ContactScroll';
import PixelCoin from './components/PixelCoin';

export default function PortfolioPage() {
  return (
    <>
      <RetroHeader />
      
      <main className="max-w-6xl mx-auto px-4 md:px-8 pt-24 md:pt-32 space-y-16 md:space-y-24 pb-20">
        {/* Hero Section */}
        <section id="hero" className="animate-fade-in-up">
          <RetroHeroProfile />
        </section>

        {/* Projects Section */}
        <section id="spells" className="space-y-6 md:space-y-8">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-[#00f3ff] to-transparent" />
            <div className="flex items-center gap-3">
              <PixelCoin />
              <h2 
                className="text-xl md:text-2xl lg:text-3xl pixel-font text-[#00f3ff] glow-cyan uppercase text-center leading-relaxed"
                style={{
                  WebkitTextStroke: '2px #000',
                  paintOrder: 'stroke fill',
                }}
              >
                Stage 1: Projects
              </h2>
              <PixelCoin />
            </div>
            <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-[#00f3ff] to-transparent" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <RetroProjectCard title="MyJournal" category="AI Web App" tier="Artifact" />
            <RetroProjectCard title="Vision Quest" category="Computer Vision" tier="Legendary" />
            <RetroProjectCard title="Neural Nexus" category="Deep Learning" tier="Mythic" />
            <RetroProjectCard title="Data Alchemy" category="Kaggle Notebooks" tier="Epic" />
            <RetroProjectCard title="Code Wizard" category="Full Stack" tier="Legendary" />
            <RetroProjectCard title="Pixel Master" category="Creative AI" tier="Artifact" />
          </div>
        </section>

        {/* Journey Section */}
        <section id="quests" className="space-y-6 md:space-y-8">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-[#ff006e] to-transparent" />
            <div className="flex items-center gap-3">
              <PixelCoin />
              <h2 
                className="text-xl md:text-2xl lg:text-3xl pixel-font text-[#ff006e] glow-pink uppercase text-center leading-relaxed"
                style={{
                  WebkitTextStroke: '2px #000',
                  paintOrder: 'stroke fill',
                }}
              >
                Stage 2: Journey
              </h2>
              <PixelCoin />
            </div>
            <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-[#ff006e] to-transparent" />
          </div>
          
          <RetroJourneyMap />
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-6 md:space-y-8">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-[#39ff14] to-transparent" />
            <div className="flex items-center gap-3">
              <PixelCoin />
              <h2 
                className="text-xl md:text-2xl lg:text-3xl pixel-font text-[#39ff14] glow-green uppercase text-center leading-relaxed"
                style={{
                  WebkitTextStroke: '2px #000',
                  paintOrder: 'stroke fill',
                }}
              >
                Stage 3: Contact
              </h2>
              <PixelCoin />
            </div>
            <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-[#39ff14] to-transparent" />
          </div>
          
          <RetroContactScroll />
        </section>

        {/* Footer */}
        <footer className="text-center pt-12 md:pt-16 border-t-4 border-[#00f3ff]/20">
          <p className="pixel-font text-[8px] md:text-[10px] text-gray-500 uppercase">
            © 2024 Tushar365 • Made with ❤️ and Pixels
          </p>
          <p className="pixel-font text-[8px] md:text-[10px] text-gray-600 mt-2">
            Press F5 to Restart
          </p>
        </footer>
      </main>
    </>
  );
}
