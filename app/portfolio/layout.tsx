import type { Metadata } from 'next';
import CursorFollower from './components/CursorFollower';
import PixelCloud from './components/PixelCloud';

export const metadata: Metadata = {
  title: 'Tushar365 | Retro Portfolio',
  description: 'Enter the Pixel Realm - A Retro Gaming Adventure',
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0520] via-[#1a0b2e] to-[#0a0e27] text-white selection:bg-[#00f3ff] selection:text-[#050816] overflow-x-hidden pixel-grid">
      {/* Subtle Gradient Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-25" 
        style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(255, 0, 110, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(57, 255, 20, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(0, 243, 255, 0.1) 0%, transparent 50%)
            `,
        }}
      />
      
      {/* Floating Pixel Clouds */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] animate-float" style={{ animationDelay: '0s', animationDuration: '15s' }}>
          <PixelCloud size="md" speed={15} />
        </div>
        <div className="absolute top-[30%] right-[10%] animate-float" style={{ animationDelay: '2s', animationDuration: '20s' }}>
          <PixelCloud size="lg" speed={20} />
        </div>
        <div className="absolute top-[60%] left-[15%] animate-float" style={{ animationDelay: '4s', animationDuration: '18s' }}>
          <PixelCloud size="sm" speed={18} />
        </div>
        <div className="absolute top-[80%] right-[20%] animate-float" style={{ animationDelay: '1s', animationDuration: '22s' }}>
          <PixelCloud size="md" speed={22} />
        </div>
        <div className="absolute top-[45%] right-[5%] animate-float" style={{ animationDelay: '3s', animationDuration: '17s' }}>
          <PixelCloud size="sm" speed={17} />
        </div>
      </div>

      {/* Scanline CRT Effect */}
      <div className="fixed inset-0 z-10 scanlines pointer-events-none opacity-20" />

      {/* Cursor Follower Character */}
      <CursorFollower />

      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}
