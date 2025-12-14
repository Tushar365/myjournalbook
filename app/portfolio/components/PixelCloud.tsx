export default function PixelCloud({ size = 'md', speed = 10 }: { size?: 'sm' | 'md' | 'lg', speed?: number }) {
  const sizes = {
    sm: 'w-16 h-8',
    md: 'w-24 h-12',
    lg: 'w-32 h-16'
  };

  return (
    <div 
      className={`${sizes[size]} animate-float opacity-30`}
      style={{
        animationDuration: `${speed}s`,
      }}
    >
      <svg viewBox="0 0 32 16" className="w-full h-full">
        {/* Pixel cloud shape */}
        <rect x="8" y="4" width="4" height="4" fill="white" />
        <rect x="12" y="4" width="4" height="4" fill="white" />
        <rect x="16" y="4" width="4" height="4" fill="white" />
        <rect x="20" y="4" width="4" height="4" fill="white" />
        
        <rect x="4" y="8" width="4" height="4" fill="white" />
        <rect x="8" y="8" width="4" height="4" fill="white" />
        <rect x="12" y="8" width="4" height="4" fill="white" />
        <rect x="16" y="8" width="4" height="4" fill="white" />
        <rect x="20" y="8" width="4" height="4" fill="white" />
        <rect x="24" y="8" width="4" height="4" fill="white" />
        
        <rect x="8" y="12" width="4" height="4" fill="white" />
        <rect x="12" y="12" width="4" height="4" fill="white" />
        <rect x="16" y="12" width="4" height="4" fill="white" />
        <rect x="20" y="12" width="4" height="4" fill="white" />
      </svg>
    </div>
  );
}
