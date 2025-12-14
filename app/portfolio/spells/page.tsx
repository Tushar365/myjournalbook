import ProjectCard from '../components/ProjectCard';
import MagicalHeader from '../components/MagicalHeader';

export default function SpellsPage() {
  return (
    <main className="max-w-5xl mx-auto p-4 md:p-8 space-y-12 pb-20">
      <MagicalHeader />
      
      <div className="space-y-8 animate-fade-in-up">
        <div className="flex items-center gap-4">
           <div className="h-0.5 bg-gradient-to-r from-transparent to-[#f5bd02] flex-1"></div>
           <h2 className="text-4xl font-bold text-[#f5bd02] uppercase tracking-widest font-[Cinzel,serif] text-center">
             Grimoire of Spells
           </h2>
           <div className="h-0.5 bg-gradient-to-l from-transparent to-[#f5bd02] flex-1"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard title="Orb of Vision" category="Computer Vision" tier="Legendary" />
          <ProjectCard title="Scroll Keeper" category="Web App" tier="Epic" />
          <ProjectCard title="Potion Shop" category="E-commerce" tier="Rare" />
          <ProjectCard title="Golem AI" category="Machine Learning" tier="Mythic" />
        </div>
      </div>
    </main>
  );
}
