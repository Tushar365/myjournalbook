'use client';

import React, { useState } from "react";

// ============= TYPES =============
interface DareLevel {
  name: string;
  color: string;
  description: string;
  dares: string[];
}

interface DareTracker {
  dareId: string;
  count: number;
}

// ============= DARE LEVELS =============
const DARE_LEVELS: Record<string, DareLevel> = {
  easy: {
    name: "🎮 Fun & Playful",
    color: "bg-blue-500",
    description: "Light-hearted & fun questions to break the ice",
    dares: [
      "What's your go-to dance move when no one's watching?",
      "What's the funniest inside joke we could create right now?",
      "Would you rather: 24-hour road trip or cozy movie marathon?",
    ],
  },
  medium: {
    name: "💭 Deep & Meaningful",
    color: "bg-purple-500",
    description: "Get to know each other on a deeper level",
    dares: [
      "What's a dream you've never told anyone before?",
      "If you could change one thing about your past, what would it be?",
      "What makes you feel most understood by someone?",
      "Describe the moment you felt most proud of yourself.",
      "What's a fear you're actively trying to overcome?",
      "If you wrote a book about your life, what would the title be?",
      "What's one thing you wish people knew about you without asking?",
      "When do you feel most like yourself?",
      "What does 'home' mean to you emotionally, not physically?",
    ],
  },
  hard: {
    name: "🔥 Bold & Spicy",
    color: "bg-red-600",
    description: "Daring questions for the brave",
    dares: [
      "What's the most daring thing you'd do to impress me?",
      "If I leaned in right now, would you kiss me back?",
      
    ],
  },
};

// ============= ADVANCED SMART RANDOMIZER WITH BLOCKLIST =============
function getSmartRandomDare(
  dares: string[],
  dareTracker: DareTracker[],
  lastSelectedIndex: number | null
): { dare: string; index: number; allBlocked: boolean } {
  const dareStats = dares.map((dare, idx) => ({
    dare,
    idx,
    count: dareTracker.find((d) => d.dareId === dare)?.count || 0,
  }));

  // Filter out dares that have been shown 2+ times (blocklisted)
  const availableDares = dareStats.filter(d => d.count < 2);

  // If all dares are blocklisted (shown 2+ times), reset and allow all
  if (availableDares.length === 0) {
    const selected = dareStats[Math.floor(Math.random() * dareStats.length)];
    return { dare: selected.dare, index: selected.idx, allBlocked: true };
  }

  // Find minimum count among available dares
  const minCount = Math.min(...availableDares.map(d => d.count));
  let bestDares = availableDares.filter(d => d.count === minCount);

  // Avoid immediate repeat if possible
  if (bestDares.length > 1 && lastSelectedIndex !== null) {
    const filtered = bestDares.filter(d => d.idx !== lastSelectedIndex);
    if (filtered.length > 0) {
      bestDares = filtered;
    }
  }

  const selected = bestDares[Math.floor(Math.random() * bestDares.length)];
  return { dare: selected.dare, index: selected.idx, allBlocked: false };
}

// ============= LEVEL MENU COMPONENT =============
function LevelMenu({ onSelectLevel }: { onSelectLevel: (level: string) => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 via-purple-100 to-blue-100 p-4 sm:p-6 overflow-x-hidden">
      <div className="text-center mb-6 sm:mb-12 px-2">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text mb-3 sm:mb-4 leading-tight">
          💕 DARE ROULETTE
        </h1>
        <p className="text-sm xs:text-base sm:text-xl text-gray-700 font-medium px-4">
          Choose your level and start the game!
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 max-w-md sm:max-w-5xl w-full px-4 sm:grid-cols-3">
        {Object.entries(DARE_LEVELS).map(([key, level]) => (
          <button
            key={key}
            onClick={() => onSelectLevel(key)}
            className={`${level.color} text-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl active:scale-95 transition-all duration-300 flex flex-col items-center justify-center min-h-[180px] xs:min-h-[200px] sm:min-h-[250px] touch-manipulation`}
          >
            <div className="text-2xl xs:text-3xl sm:text-4xl font-black mb-2 xs:mb-3 sm:mb-4">
              {level.name}
            </div>
            <div className="text-xs xs:text-sm sm:text-base text-white/90 font-medium text-center px-2">
              {level.description}
            </div>
            <div className="mt-3 xs:mt-4 sm:mt-6 px-3 xs:px-4 py-1.5 xs:py-2 bg-white/20 rounded-full text-xs sm:text-sm font-bold">
              {level.dares.length} Questions
            </div>
          </button>
        ))}
      </div>

      <div className="mt-6 sm:mt-12 text-center text-gray-600 text-xs xs:text-sm sm:text-base px-4 space-y-1">
        <p>✨ Smart algorithm ensures fair question distribution</p>
        <p>🎲 No immediate repeats for better experience</p>
      </div>
    </div>
  );
}

// ============= GAME COMPONENT =============
function GameScreen({ 
  selectedLevel, 
  onBackToMenu 
}: { 
  selectedLevel: string; 
  onBackToMenu: () => void;
}) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [highlight, setHighlight] = useState<number | null>(null);
  const [dareTracker, setDareTracker] = useState<DareTracker[]>([]);
  const [selectedDare, setSelectedDare] = useState<string | null>(null);
  const [resetMessage, setResetMessage] = useState(false);

  const currentDares = DARE_LEVELS[selectedLevel].dares;

  // Calculate which dares are blocklisted (shown 2+ times)
  const getBlocklistedDares = () => {
    return currentDares.map((dare, idx) => {
      const count = dareTracker.find((d) => d.dareId === dare)?.count || 0;
      return count >= 2 ? idx : null;
    }).filter(idx => idx !== null) as number[];
  };

  const blocklistedDares = getBlocklistedDares();

  const spin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    const previousSelected = selected;
    setSelected(null);

    let current = 0;
    let interval = 50;
    
    const animate = () => {
      if (current >= 50) {
        const { dare, index, allBlocked } = getSmartRandomDare(currentDares, dareTracker, previousSelected);

        setSelected(index);
        setHighlight(index);
        setSelectedDare(dare);

        // Show reset message if all dares were blocklisted
        if (allBlocked) {
          setResetMessage(true);
          setTimeout(() => setResetMessage(false), 3000);
        }

        const newTracker = [...dareTracker];
        const existingIndex = newTracker.findIndex((d) => d.dareId === dare);
        if (existingIndex !== -1) {
          newTracker[existingIndex].count += 1;
        } else {
          newTracker.push({ dareId: dare, count: 1 });
        }

        // If this was a reset round, clear the tracker after selection
        if (allBlocked) {
          setDareTracker([{ dareId: dare, count: 1 }]);
        } else {
          setDareTracker(newTracker);
        }

        setIsSpinning(false);
        return;
      }

      const randomIndex = Math.floor(Math.random() * currentDares.length);
      setHighlight(randomIndex);
      current++;
      
      if (current > 30) interval += 10;
      else if (current > 20) interval += 5;
      
      setTimeout(animate, interval);
    };

    animate();
  };

  const getBackgroundClass = () => {
    switch (selectedLevel) {
      case "easy":
        return "bg-gradient-to-br from-blue-200 via-cyan-100 to-blue-100";
      case "medium":
        return "bg-gradient-to-br from-purple-200 via-pink-100 to-purple-100";
      case "hard":
        return "bg-gradient-to-br from-red-200 via-orange-100 to-pink-100";
      default:
        return "bg-gradient-to-br from-pink-200 to-red-100";
    }
  };

  const getTitleClass = () => {
    switch (selectedLevel) {
      case "easy":
        return "text-blue-600";
      case "medium":
        return "text-purple-600";
      case "hard":
        return "text-red-600";
      default:
        return "text-red-600";
    }
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${getBackgroundClass()} p-3 xs:p-4 sm:p-6 transition-colors duration-500 overflow-x-hidden`}>
      {/* Back Button */}
      <button
        onClick={onBackToMenu}
        className="fixed top-3 left-3 xs:top-4 xs:left-4 px-3 xs:px-4 py-2 bg-white/90 hover:bg-white text-gray-700 rounded-full font-semibold text-xs xs:text-sm shadow-lg hover:shadow-xl transition-all z-50 touch-manipulation"
      >
        ← Back
      </button>

      <h1 className={`text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold ${getTitleClass()} mb-2 text-center transition-colors duration-300 px-2 mt-12 xs:mt-0`}>
        💕 DARE ROULETTE
      </h1>
      <p className="text-xs xs:text-sm sm:text-base text-gray-600 mb-3 xs:mb-4 sm:mb-6 text-center font-medium px-2">
        {DARE_LEVELS[selectedLevel].name}
      </p>

      {/* Dare Grid */}
      <div className="mb-4 xs:mb-6 sm:mb-8 w-full max-w-xs sm:max-w-2xl lg:max-w-4xl px-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-1.5 xs:gap-2 sm:gap-3">
          {currentDares.map((dare, i) => {
            const isBlocklisted = blocklistedDares.includes(i);
            const dareCount = dareTracker.find((d) => d.dareId === dare)?.count || 0;
            
            return (
              <div
                key={i}
                className={`p-2 xs:p-3 sm:p-4 rounded-lg text-center text-[10px] xs:text-xs sm:text-sm font-semibold transition-all duration-300 h-16 xs:h-20 sm:h-24 lg:h-28 flex flex-col items-center justify-center relative ${
                  highlight === i && isSpinning
                    ? "bg-yellow-400 text-gray-900 scale-105 ring-2 xs:ring-4 ring-yellow-300 shadow-lg"
                    : selected === i
                    ? "bg-red-600 text-white scale-105 xs:scale-110 ring-2 xs:ring-4 ring-red-300 shadow-lg"
                    : isBlocklisted
                    ? "bg-gray-800 text-gray-400 border-2 border-gray-700 opacity-60"
                    : "bg-white text-gray-700 border-2 border-gray-300"
                }`}
              >
                <span className="leading-tight">{dare}</span>
                {/* Show count badge */}
                {dareCount > 0 && !isSpinning && (
                  <div className={`absolute top-0.5 xs:top-1 right-0.5 xs:right-1 w-4 xs:w-5 h-4 xs:h-5 rounded-full text-[8px] xs:text-[10px] flex items-center justify-center font-bold ${
                    isBlocklisted ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
                  }`}>
                    {dareCount}
                  </div>
                )}
                {/* Blocklisted icon */}
                {isBlocklisted && (
                  <div className="absolute bottom-0.5 xs:bottom-1 right-0.5 xs:right-1 text-[10px] xs:text-xs">🚫</div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Blocklist Status */}
      {blocklistedDares.length > 0 && !isSpinning && (
        <div className="mb-3 xs:mb-4 px-3 xs:px-4 py-1.5 xs:py-2 bg-gray-800 text-white rounded-lg text-[10px] xs:text-xs sm:text-sm font-semibold">
          🚫 {blocklistedDares.length} / {currentDares.length} dares blocklisted (shown 2+ times)
        </div>
      )}

      {/* Reset Message */}
      {resetMessage && (
        <div className="mb-3 xs:mb-4 px-3 xs:px-4 py-1.5 xs:py-2 bg-yellow-500 text-gray-900 rounded-lg text-[10px] xs:text-xs sm:text-sm font-bold animate-pulse">
          ♻️ All dares were blocklisted! Tracker reset.
        </div>
      )}

      {/* Spin Button */}
      <button
        onClick={spin}
        disabled={isSpinning}
        className={`px-5 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 rounded-full font-bold text-base xs:text-lg sm:text-xl text-white transition-all touch-manipulation ${
          isSpinning
            ? "bg-gray-400 cursor-not-allowed opacity-50"
            : "bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700 active:scale-95 cursor-pointer shadow-lg hover:shadow-xl"
        }`}
      >
        {isSpinning ? "⏳ SPINNING..." : "🎰 SPIN NOW"}
      </button>

      {/* Result Display */}
      {selectedDare && !isSpinning && (
        <div className="mt-4 xs:mt-6 sm:mt-10 p-3 xs:p-4 sm:p-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl text-center max-w-[90%] xs:max-w-xs sm:max-w-xl shadow-xl animate-bounce mx-2">
          <div className="text-xl xs:text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">
            🎉 YOUR DARE!
          </div>
          <div className="text-sm xs:text-base sm:text-lg font-semibold leading-tight">{selectedDare}</div>
        </div>
      )}
    </div>
  );
}

// ============= MAIN COMPONENT =============
export default function Roulette() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const handleSelectLevel = (level: string) => {
    setSelectedLevel(level);
    setGameStarted(true);
  };

  const handleBackToMenu = () => {
    setGameStarted(false);
    setSelectedLevel(null);
  };

  if (!gameStarted || !selectedLevel) {
    return <LevelMenu onSelectLevel={handleSelectLevel} />;
  }

  return <GameScreen selectedLevel={selectedLevel} onBackToMenu={handleBackToMenu} />;
}