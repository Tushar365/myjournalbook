'use client';

import { useEffect, useState, useRef } from 'react';

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isMoving, setIsMoving] = useState(false);
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [walkFrame, setWalkFrame] = useState(0);
  const [bobOffset, setBobOffset] = useState(0);
  const [tilt, setTilt] = useState(0);
  const messageTimeoutRef = useRef<NodeJS.Timeout>();

  const messages = [
    "wait for me chief!",
    "how's your day?",
    "wanna farm aura?",
    "you are cool 😎",
    "let's gooo!",
    "where we going?",
    "I'm ready boss",
    "epic vibes only",
    "no cap fr fr",
    "based"
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTargetPosition({ x: e.clientX, y: e.clientY });
      
      const dx = e.clientX - position.x;
      if (Math.abs(dx) > 5) {
        setDirection(dx > 0 ? 'right' : 'left');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [position]);

  // Struggling walk animation
  useEffect(() => {
    if (isMoving) {
      const interval = setInterval(() => {
        setWalkFrame(prev => (prev + 1) % 2);
        setBobOffset(prev => (prev === 0 ? -3 : 0));
        setTilt(prev => (prev === 0 ? 2 : -2));
      }, 300);
      return () => clearInterval(interval);
    } else {
      setWalkFrame(0);
      setBobOffset(0);
      setTilt(0);
    }
  }, [isMoving]);

  useEffect(() => {
    let lastTime = Date.now();
    let messageCounter = 0;
    
    const followCursor = () => {
      const now = Date.now();
      const deltaTime = (now - lastTime) / 16.67;
      lastTime = now;
      
      setPosition((prev) => {
        const dx = targetPosition.x - prev.x;
        const dy = targetPosition.y - prev.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Maintain distance of 100-150 pixels from cursor
        const minDistance = 100;
        const maxDistance = 150;
        
        let moving = false;
        let newX = prev.x;
        let newY = prev.y;
        
        if (distance > maxDistance) {
          // Too far, move closer
          moving = true;
          const speed = 0.04;
          newX = prev.x + dx * speed * deltaTime;
          newY = prev.y + dy * speed * deltaTime;
        } else if (distance < minDistance) {
          // Too close, move away
          moving = true;
          const speed = 0.06;
          newX = prev.x - dx * speed * deltaTime;
          newY = prev.y - dy * speed * deltaTime;
        }
        
        setIsMoving(moving);
        
        // Random messages
        if (moving) {
          messageCounter++;
          if (messageCounter > 80 && Math.random() > 0.85) {
            const randomMsg = messages[Math.floor(Math.random() * messages.length)];
            setMessage(randomMsg);
            setShowMessage(true);
            messageCounter = 0;
            
            if (messageTimeoutRef.current) clearTimeout(messageTimeoutRef.current);
            messageTimeoutRef.current = setTimeout(() => setShowMessage(false), 2500);
          }
        } else {
          messageCounter = 0;
        }
        
        return { x: newX, y: newY };
      });
    };

    let animationId: number;
    const animate = () => {
      followCursor();
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [targetPosition]);

  const legOffset = walkFrame === 0 ? 0 : 2;

  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Speech bubble */}
      {showMessage && (
        <div 
          className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap"
          style={{ 
            animation: 'fadeInBounce 0.3s ease-out'
          }}
        >
          <div className="bg-white text-gray-800 px-3 py-2 rounded-xl text-sm font-bold shadow-lg relative border-2 border-gray-800">
            {message}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-0.5">
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-gray-800" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-px">
                <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-white" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Character */}
      <div
        style={{
          transform: `scaleX(${direction === 'left' ? -1 : 1}) translateY(${bobOffset}px) rotate(${tilt}deg)`,
          transition: 'transform 0.15s ease-out',
          imageRendering: 'pixelated',
        }}
      >
        <svg 
          width="48" 
          height="48" 
          viewBox="0 0 16 16"
          style={{ imageRendering: 'pixelated' }}
        >
          {/* Head */}
          <rect x="4" y="1" width="8" height="1" fill="#1a1a1a" />
          <rect x="3" y="2" width="10" height="1" fill="#1a1a1a" />
          <rect x="3" y="3" width="1" height="4" fill="#1a1a1a" />
          <rect x="12" y="3" width="1" height="4" fill="#1a1a1a" />
          <rect x="4" y="2" width="8" height="5" fill="#f5c49a" />
          
          {/* Hair/cap */}
          <rect x="4" y="1" width="8" height="2" fill="#8b4513" />
          <rect x="3" y="2" width="1" height="2" fill="#8b4513" />
          <rect x="12" y="2" width="1" height="2" fill="#8b4513" />
          
          {/* Eyes */}
          <rect x="5" y="4" width="2" height="2" fill="#ffffff" />
          <rect x="9" y="4" width="2" height="2" fill="#ffffff" />
          <rect x="6" y="5" width="1" height="1" fill="#000000" />
          <rect x="10" y="5" width="1" height="1" fill="#000000" />
          
          {/* Nose */}
          <rect x="7" y="5" width="2" height="1" fill="#d4a574" />
          
          {/* Mouth */}
          <rect x="5" y="6" width="1" height="1" fill="#000000" />
          <rect x="6" y="7" width="4" height="1" fill="#000000" />
          <rect x="10" y="6" width="1" height="1" fill="#000000" />
          
          {/* Neck */}
          <rect x="6" y="7" width="4" height="1" fill="#f5c49a" />
          
          {/* Body - shirt */}
          <rect x="4" y="8" width="8" height="1" fill="#1a1a1a" />
          <rect x="3" y="9" width="10" height="4" fill="#4a90e2" />
          <rect x="4" y="9" width="8" height="1" fill="#5aa5ff" />
          
          {/* Arms */}
          <rect 
            x="2" 
            y={9 + (isMoving ? (walkFrame === 0 ? -1 : 1) : 0)} 
            width="2" 
            height="3" 
            fill="#f5c49a" 
          />
          <rect 
            x="12" 
            y={9 + (isMoving ? (walkFrame === 0 ? 1 : -1) : 0)} 
            width="2" 
            height="3" 
            fill="#f5c49a" 
          />
          
          {/* Hands */}
          <rect 
            x="2" 
            y={11 + (isMoving ? (walkFrame === 0 ? -1 : 1) : 0)} 
            width="2" 
            height="1" 
            fill="#e8b088" 
          />
          <rect 
            x="12" 
            y={11 + (isMoving ? (walkFrame === 0 ? 1 : -1) : 0)} 
            width="2" 
            height="1" 
            fill="#e8b088" 
          />
          
          {/* Legs */}
          <rect 
            x="5" 
            y={13} 
            width="2" 
            height={3 - legOffset} 
            fill="#2c3e50" 
          />
          <rect 
            x="9" 
            y={13} 
            width="2" 
            height={3 - (2 - legOffset)} 
            fill="#2c3e50" 
          />
          
          {/* Shoes */}
          <rect 
            x="4" 
            y={14 + (2 - legOffset)} 
            width="3" 
            height="2" 
            fill="#8b4513" 
          />
          <rect 
            x="9" 
            y={14 + legOffset} 
            width="3" 
            height="2" 
            fill="#8b4513" 
          />
          
          {/* Shoe details */}
          <rect 
            x="4" 
            y={14 + (2 - legOffset)} 
            width="2" 
            height="1" 
            fill="#a0522d" 
          />
          <rect 
            x="9" 
            y={14 + legOffset} 
            width="2" 
            height="1" 
            fill="#a0522d" 
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes fadeInBounce {
          0% {
            opacity: 0;
            transform: translateY(10px) translateX(-50%);
          }
          50% {
            transform: translateY(-5px) translateX(-50%);
          }
          100% {
            opacity: 1;
            transform: translateY(0) translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}