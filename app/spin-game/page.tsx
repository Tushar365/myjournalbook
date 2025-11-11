'use client';

import React, { useState } from "react";

// ============= TYPES =============
interface DareLevel {
  name: string;
  color: string;
  dares: string[];
}

interface DareTracker {
  dareId: string;
  count: number;
}

// ============= DARE LEVELS =============
const DARE_LEVELS: Record<string, DareLevel> = {
  easy: {
    name: "Easy",
    color: "bg-blue-500",
    dares: [
      "If we were a couple in a rom-com, what would be our 'cute first scene'?",
      "What's one thing you think we'd be addicted to doing together?",
      "If I challenged you to a 'no smiling' game, would you win or lose?",
      "What's a silly couple tradition you'd want us to have?",
      "Matching outfits, wallpapers, or bracelets — what would you pick?",
      "Which sounds more fun with me: pillow fight, water fight, staring contest?",
      "What's the most daring thing you'd do for me?",
    ],
  },
  medium: {
    name: "Medium",
    color: "bg-yellow-500",
    dares: [
      "What's a silly couple tradition you'd want us to have?",
      "Matching outfits, wallpapers, or bracelets — what would you pick?",
      "Which sounds more fun with me: pillow fight, water fight, staring contest?",
    ],
  },
  hard: {
    name: "Hard",
    color: "bg-red-600",
    dares: [
      "What's the most daring thing you'd do for me?",
      "Tell me your biggest fear and why.",
      "What would you do if I suddenly kissed you right now?",
      "If we were a couple in a rom-com, what would be our 'cute first scene'?",
      "What's one thing you think we'd be addicted to doing together?",
      "If I challenged you to a 'no smiling' game, would you win or lose?",
      "What's a silly couple tradition you'd want us to have?",
      "Matching outfits, wallpapers, or bracelets — what would you pick?",
      "Which sounds more fun with me: pillow fight, water fight, staring contest?",
      "What's the most daring thing you'd do for me?",
    ],
  },
};

// ============= SMART RANDOMIZER =============
function getSmartRandomDare(
  dares: string[],
  dareTracker: DareTracker[]
): { dare: string; index: number } {
  // Filter dares that haven't been selected twice yet
  const availableDares = dares
    .map((dare, idx) => ({
      dare,
      idx,
      count: dareTracker.find((d) => d.dareId === `${dare}`)?.count || 0,
    }))
    .filter((item) => item.count < 2);

  // If all dares have been picked twice, reset tracker and allow all
  const selectFromDares =
    availableDares.length > 0
      ? availableDares
      : dares.map((dare, idx) => ({
          dare,
          idx,
          count: 0,
        }));

  const selected =
    selectFromDares[Math.floor(Math.random() * selectFromDares.length)];
  return { dare: selected.dare, index: selected.idx };
}

// ============= DARE GRID COMPONENT =============
interface DareGridProps {
  dares: string[];
  highlight: number | null;
  selected: number | null;
  isSpinning: boolean;
}

function DareGrid({ dares, highlight, selected, isSpinning }: DareGridProps) {
  return (
    <div className="mb-6 sm:mb-8 w-full max-w-xs sm:max-w-2xl lg:max-w-4xl">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-3">
        {dares.map((dare, i) => (
          <div
            key={i}
            className={`p-3 sm:p-4 rounded-lg text-center text-xs sm:text-sm font-semibold transition-all duration-75 h-20 sm:h-24 lg:h-28 flex items-center justify-center ${
              highlight === i && isSpinning
                ? "bg-yellow-400 text-gray-900 scale-105 ring-4 ring-yellow-300 shadow-lg"
                : selected === i
                ? "bg-red-600 text-white scale-110 ring-4 ring-red-300 shadow-lg"
                : "bg-white text-gray-700 border-2 border-gray-300"
            }`}
          >
            {dare}
          </div>
        ))}
      </div>
    </div>
  );
}

// ============= SPIN BUTTON COMPONENT =============
interface SpinButtonProps {
  isSpinning: boolean;
  onClick: () => void;
}

function SpinButton({ isSpinning, onClick }: SpinButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isSpinning}
      className={`px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-lg sm:text-xl text-white transition-all ${
        isSpinning
          ? "bg-gray-400 cursor-not-allowed opacity-50"
          : "bg-red-600 hover:bg-red-700 active:scale-95 cursor-pointer shadow-lg"
      }`}
    >
      {isSpinning ? "⏳ SPINNING..." : "🎰 SPIN NOW"}
    </button>
  );
}

// ============= RESULT DISPLAY COMPONENT =============
interface ResultDisplayProps {
  dare: string;
  isSpinning: boolean;
}

function ResultDisplay({ dare, isSpinning }: ResultDisplayProps) {
  if (isSpinning) return null;

  return (
    <div className="mt-6 sm:mt-10 p-4 sm:p-6 bg-red-600 text-white rounded-xl text-center max-w-xs sm:max-w-xl shadow-xl animate-bounce">
      <div className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">
        🎉 YOU GOT!
      </div>
      <div className="text-base sm:text-lg font-semibold">{dare}</div>
    </div>
  );
}

// ============= LEVEL SELECTOR COMPONENT =============
interface LevelSelectorProps {
  currentLevel: string;
  onLevelChange: (level: string) => void;
}

function LevelSelector({ currentLevel, onLevelChange }: LevelSelectorProps) {
  return (
    <div className="mb-6 flex gap-2 sm:gap-3 justify-center flex-wrap">
      {Object.entries(DARE_LEVELS).map(([key, level]) => (
        <button
          key={key}
          onClick={() => onLevelChange(key)}
          className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base transition-all ${
            currentLevel === key
              ? `${level.color} text-white scale-105 shadow-lg`
              : "bg-gray-300 text-gray-700 hover:bg-gray-400"
          }`}
        >
          {level.name}
        </button>
      ))}
    </div>
  );
}

// ============= MAIN COMPONENT =============
export default function Roulette() {
  const [selectedLevel, setSelectedLevel] = useState("easy");
  const [isSpinning, setIsSpinning] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [highlight, setHighlight] = useState<number | null>(null);
  const [dareTracker, setDareTracker] = useState<DareTracker[]>([]);
  const [selectedDare, setSelectedDare] = useState<string | null>(null);

  const currentDares = DARE_LEVELS[selectedLevel].dares;

  const spin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setSelected(null);

    // Animate through random items
    let current = 0;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * currentDares.length);
      setHighlight(randomIndex);
      current++;
    }, 100);

    // Stop after 5 seconds
    setTimeout(() => {
      clearInterval(interval);
      const { dare, index } = getSmartRandomDare(currentDares, dareTracker);

      setSelected(index);
      setHighlight(index);
      setSelectedDare(dare);

      // Update tracker
      const newTracker = [...dareTracker];
      const existingIndex = newTracker.findIndex((d) => d.dareId === dare);
      if (existingIndex !== -1) {
        newTracker[existingIndex].count += 1;
      } else {
        newTracker.push({ dareId: dare, count: 1 });
      }
      setDareTracker(newTracker);

      // Reset tracker if all dares hit limit
      if (newTracker.every((d) => d.count >= 2)) {
        setDareTracker([]);
      }

      setIsSpinning(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 to-red-100 p-4 sm:p-6">
      <h1 className="text-2xl sm:text-4xl font-bold text-red-600 mb-4 sm:mb-6 text-center">
        💕 DARE ROULETTE
      </h1>

      <LevelSelector
        currentLevel={selectedLevel}
        onLevelChange={setSelectedLevel}
      />

      <DareGrid
        dares={currentDares}
        highlight={highlight}
        selected={selected}
        isSpinning={isSpinning}
      />

      <SpinButton isSpinning={isSpinning} onClick={spin} />

      {selectedDare && (
        <ResultDisplay dare={selectedDare} isSpinning={isSpinning} />
      )}
    </div>
  );
}