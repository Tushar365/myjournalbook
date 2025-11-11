'use client';

import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-x-hidden relative py-20 sm:py-8">
      {/* Top-right Games button, responsive and visually improved */}
      
      <Header />
      {/* Floating gradient orbs with parallax */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl transition-transform duration-1000 ease-out"
        style={{
          top: '10%',
          left: '5%',
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      />
      <div
        className="absolute w-80 h-80 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl transition-transform duration-1000 ease-out"
        style={{
          bottom: '10%',
          right: '5%',
          transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`,
        }}
      />
      <div
        className="absolute w-72 h-72 bg-gradient-to-br from-pink-300/20 to-purple-300/20 rounded-full blur-3xl transition-transform duration-1000 ease-out"
        style={{
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
        }}
      />

      {/* Main content container */}
      <div
        className={`relative z-10 w-full max-w-6xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Hero section */}
        <div className="space-y-8 sm:space-y-12 mb-8 sm:mb-12">
          {/* Main heading with improved styling */}
          <div className="relative inline-block mb-4 sm:mb-6 px-2">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent pb-2 leading-[1.1] sm:leading-[0.9] tracking-tight">
              MyJournal
            </h1>
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-pink-500/30 to-blue-500/30 blur-3xl -z-10 scale-110" />
          </div>

          {/* Main tagline - moved closer to title */}
          <div className="space-y-6 sm:space-y-8 px-4">
            <p className="text-2xl sm:text-4xl lg:text-5xl text-gray-800 font-bold leading-tight max-w-4xl mx-auto">
              AI-crafted journals designed for{' '}
              <span className="relative inline-block">
                <span className="italic text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text font-black">
                  your
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 0, 100 5"
                    stroke="url(#gradient)"
                    strokeWidth="4"
                    fill="none"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#9333ea" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{' '}
              year
            </p>

            {/* Feature pills - larger and more spaced */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 max-w-4xl mx-auto pt-2">
              <div className="w-full sm:w-auto group px-7 py-3.5 bg-white/95 backdrop-blur-md rounded-full text-purple-700 text-base font-bold shadow-xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-default">
                <span className="inline-block group-hover:scale-110 transition-transform mr-2">✨</span>
                <span>Culturally Customized</span>
              </div>
              <div className="w-full sm:w-auto group px-7 py-3.5 bg-white/95 backdrop-blur-md rounded-full text-pink-700 text-base font-bold shadow-xl border-2 border-pink-200 hover:border-pink-400 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-default">
                <span className="inline-block group-hover:scale-110 transition-transform mr-2">🎯</span>
                <span>Habit-Focused</span>
              </div>
              <div className="w-full sm:w-auto group px-7 py-3.5 bg-white/95 backdrop-blur-md rounded-full text-blue-700 text-base font-bold shadow-xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-default">
                <span className="inline-block group-hover:scale-110 transition-transform mr-2">📱</span>
                <span>Printable or Digital</span>
              </div>
            </div>

            {/* Subtext - improved readability */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed pt-2">
              Journals that <span className="text-purple-600 font-bold">understand your culture</span>,{' '}
              <span className="text-pink-600 font-bold">track your habits</span>, and{' '}
              <span className="text-blue-600 font-bold">reflect your story</span>
            </p>
          </div>

          {/* Status badge - more prominent */}
          <div className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-white via-purple-50 to-white backdrop-blur-md rounded-full shadow-2xl border-2 border-purple-300 hover:border-purple-400 hover:shadow-purple-200/50 hover:scale-105 transition-all duration-300 mt-4 sm:mt-6">
            <div className="relative">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
              <div className="absolute inset-0 w-3 h-3 bg-purple-500 rounded-full animate-ping" />
            </div>
            <span className="text-sm sm:text-base font-black text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text uppercase tracking-widest">
              Launching Soon
            </span>
          </div>
        </div>
      </div>

      {/* Corner decorative accents */}
      <div className="hidden sm:block absolute top-8 left-8 w-16 h-16 border-t-4 border-l-4 border-purple-400/50 rounded-tl-3xl" />
      <div className="hidden sm:block absolute bottom-8 right-8 w-16 h-16 border-b-4 border-r-4 border-blue-400/50 rounded-br-3xl" />
      {/* Small decorative dots */}
      <div className="hidden sm:block absolute top-12 left-12 w-2 h-2 bg-purple-400 rounded-full" />
      <div className="hidden sm:block absolute bottom-12 right-12 w-2 h-2 bg-blue-400 rounded-full" />
    </div>
  );
}