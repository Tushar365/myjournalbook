import JourneyMap from '../components/JourneyMap';
import MagicalHeader from '../components/MagicalHeader';

export default function QuestsPage() {
  return (
    <main className="max-w-4xl mx-auto p-4 md:p-8 space-y-12 pb-20">
      <MagicalHeader />
      
      <div className="space-y-8 animate-fade-in-up">
        <div className="flex items-center gap-4">
           <div className="h-0.5 bg-gradient-to-r from-transparent to-[#f5bd02] flex-1"></div>
           <h2 className="text-4xl font-bold text-[#f5bd02] uppercase tracking-widest font-[Cinzel,serif] text-center">
             Quest Log
           </h2>
           <div className="h-0.5 bg-gradient-to-l from-transparent to-[#f5bd02] flex-1"></div>
        </div>
        
        <JourneyMap />
      </div>
    </main>
  );
}
