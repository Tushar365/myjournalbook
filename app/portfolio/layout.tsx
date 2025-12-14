import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tushar | Portfolio',
  description: 'Welcome to the Realm.',
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#1a0b2e] text-[#f5bd02] selection:bg-[#f5bd02] selection:text-[#1a0b2e] overflow-x-hidden font-serif">
      {/* Magical Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40" 
        style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, #431c5d 0%, #1a0b2e 100%)`,
        }}
      ></div>
      
      {/* Floating Particles/Stars (Simplified CSS) */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none"
         style={{
           backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")'
         }}
      ></div>

      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}
