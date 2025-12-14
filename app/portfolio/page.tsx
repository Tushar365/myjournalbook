import MagicalHeader from './components/MagicalHeader';
import HeroProfile from './components/HeroProfile';
import ProjectCard from './components/ProjectCard';
import JourneyMap from './components/JourneyMap';
import ContactScroll from './components/ContactScroll';

export default function PortfolioPage() {
  return (
    <main className="max-w-5xl mx-auto p-4 md:p-8 space-y-20 pb-20">
      <MagicalHeader />
      
      <section id="hero" className="animate-fade-in-up">
        <HeroProfile />
      </section>

      <section id="spells" className="space-y-8 animate-fade-in-up delay-100">
        <div className="flex items-center gap-4">
           <div className="h-0.5 bg-gradient-to-r from-transparent to-[#f5bd02] flex-1"></div>
           <h2 className="text-3xl font-bold text-[#f5bd02] uppercase tracking-widest font-[Cinzel,serif]">
             Spellbook (Projects)
           </h2>
           <div className="h-0.5 bg-gradient-to-l from-transparent to-[#f5bd02] flex-1"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard title="MyJournal" category="AI Web App" tier="Artifact" />
          <ProjectCard title="Vision Quest" category="Computer Vision" tier="Legendary" />
          <ProjectCard title="Neural Nexus" category="Deep Learning" tier="Mythic" />
          <ProjectCard title="Data Alchemy" category="Kaggle Notebooks" tier="Epic" />
        </div>
      </section>

      <section id="quests" className="space-y-8 animate-fade-in-up delay-200">
        <div className="flex items-center gap-4">
           <div className="h-0.5 bg-gradient-to-r from-transparent to-[#f5bd02] flex-1"></div>
           <h2 className="text-3xl font-bold text-[#f5bd02] uppercase tracking-widest font-[Cinzel,serif]">
             The Journey
           </h2>
           <div className="h-0.5 bg-gradient-to-l from-transparent to-[#f5bd02] flex-1"></div>
        </div>
        <JourneyMap />
      </section>

      <section id="contact" className="animate-fade-in-up delay-300">
        <ContactScroll />
      </section>
    </main>
  );
}
