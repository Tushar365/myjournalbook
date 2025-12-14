export default function PixelCoin() {
  return (
    <div className="w-8 h-8 animate-spin-pixel">
      <svg viewBox="0 0 16 16" className="w-full h-full drop-shadow-lg">
        {/* Coin outer ring */}
        <rect x="4" y="2" width="8" height="2" fill="#ffed4e" />
        <rect x="2" y="4" width="12" height="8" fill="#ffed4e" />
        <rect x="4" y="12" width="8" height="2" fill="#ffed4e" />
        
        {/* Inner shine */}
        <rect x="6" y="4" width="4" height="8" fill="#fff9c4" />
        
        {/* Dark accents */}
        <rect x="3" y="5" width="1" height="6" fill="#f9a825" />
        <rect x="12" y="5" width="1" height="6" fill="#f9a825" />
        
        {/* Center symbol */}
        <rect x="7" y="6" width="2" height="4" fill="#f9a825" />
      </svg>
    </div>
  );
}
