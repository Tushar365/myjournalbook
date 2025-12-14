export default function JourneyMap() {
  const steps = [
    { title: 'The Awakening', date: '2020', desc: 'Discovered the ancient scrolls of HTML & CSS.' },
    { title: 'Arcane University', date: '2021-2023', desc: 'Mastered the arts of Algorithms and Data Structures.' },
    { title: 'Guild of Freelancers', date: '2024', desc: 'Completed bounties for local merchants and travelers.' },
  ];

  return (
    <div className="relative border-l-4 border-[#f5bd02]/30 ml-6 space-y-12 py-4 my-12">
      {steps.map((step, idx) => (
        <div key={idx} className="relative pl-10 group">
          {/* Node/Marker */}
          <div className="absolute -left-[14px] top-1 w-6 h-6 rounded-full bg-[#1a0b2e] border-4 border-[#f5bd02] group-hover:bg-[#f5bd02] transition-colors shadow-[0_0_10px_rgba(245,189,2,0.5)]"></div>
          
          <div className="bg-[#2a1b3d]/80 p-6 rounded-lg border border-[#f5bd02]/20 relative overflow-hidden transition-all hover:border-[#f5bd02]/60 hover:shadow-lg">
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#f5bd02]/50 rounded-tr-lg"></div>
            
            <span className="text-xs font-bold text-[#1a0b2e] bg-[#f5bd02] px-3 py-1 rounded-full mb-2 inline-block shadow-md">
              {step.date}
            </span>
            <h4 className="text-xl font-bold text-[#fff] mt-2 font-[Cinzel,serif]">{step.title}</h4>
            <p className="text-[#e0c3fc] mt-1">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
