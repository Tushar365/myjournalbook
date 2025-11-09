'use client';

import React, { useState, useEffect } from 'react';

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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden relative">
      {/* Floating gradient orbs with parallax */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl transition-transform duration-1000 ease-out"
        style={{
          top: '10%',
          left: '5%',
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      />
      <div 
        className="absolute w-80 h-80 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl transition-transform duration-1000 ease-out"
        style={{
          bottom: '10%',
          right: '5%',
          transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`
        }}
      />
      <div 
        className="absolute w-72 h-72 bg-gradient-to-br from-pink-300/20 to-purple-300/20 rounded-full blur-3xl transition-transform duration-1000 ease-out"
        style={{
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
        }}
      />

      {/* Main content container */}
      <div className={`relative z-10 w-full max-w-5xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Hero section */}
        <div className="space-y-8 mb-12">
          
          {/* Main heading with improved styling */}
          <div className="relative inline-block">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent pb-2 leading-tight">
              MyJournalBook
            </h1>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-blue-500/20 blur-2xl -z-10" />
            
            {/* Decorative sparkles */}
            <div className="absolute -top-4 -right-4 w-3 h-3 bg-yellow-400 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
            <div className="absolute top-0 -left-6 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />
          </div>

          {/* Decorative line separator */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-purple-500 to-pink-500 rounded-full" />
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400" />
            <div className="h-1 w-16 bg-gradient-to-r from-pink-500 via-blue-500 to-transparent rounded-full" />
          </div>

          {/* Main tagline */}
          <div className="space-y-6 px-4">
            <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 font-bold leading-tight">
              AI-crafted journals designed for{' '}
              <span className="relative inline-block">
                <span className="italic text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text font-black">your</span>
                <svg className="absolute -bottom-1 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path d="M0 4 Q 50 0, 100 4" stroke="url(#gradient)" strokeWidth="3" fill="none" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#9333ea" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              {' '}year
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap justify-center items-center gap-3 max-w-3xl mx-auto">
              <div className="group px-5 py-2.5 bg-white/90 backdrop-blur-sm rounded-full text-purple-700 text-sm font-semibold shadow-lg border border-purple-200 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default">
                <span className="inline-block group-hover:scale-110 transition-transform">✨</span> culturally customized
              </div>
              <div className="group px-5 py-2.5 bg-white/90 backdrop-blur-sm rounded-full text-pink-700 text-sm font-semibold shadow-lg border border-pink-200 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default">
                <span className="inline-block group-hover:scale-110 transition-transform">🎯</span> habit-focused
              </div>
              <div className="group px-5 py-2.5 bg-white/90 backdrop-blur-sm rounded-full text-blue-700 text-sm font-semibold shadow-lg border border-blue-200 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default">
                <span className="inline-block group-hover:scale-110 transition-transform">📱</span> printable or digital
              </div>
            </div>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
              Journals that <span className="text-purple-600 font-semibold">understand your culture</span>,{' '}
              <span className="text-pink-600 font-semibold">track your habits</span>, and{' '}
              <span className="text-blue-600 font-semibold">reflect your story</span>
            </p>
          </div>

          {/* Status badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/95 backdrop-blur-md rounded-full shadow-2xl border-2 border-purple-200 hover:border-purple-300 hover:scale-105 transition-all duration-300">
            <div className="relative">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
              <div className="absolute inset-0 w-3 h-3 bg-purple-500 rounded-full animate-ping" />
            </div>
            <span className="text-sm font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text uppercase tracking-wider">
              Launching Soon
            </span>
          </div>

          {/* Animated dots */}
          <div className="flex justify-center gap-4 pt-4">
            <div className="w-3 h-3 rounded-full bg-purple-500 shadow-lg animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-3 h-3 rounded-full bg-pink-500 shadow-lg animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-3 h-3 rounded-full bg-blue-500 shadow-lg animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>

      {/* Corner decorative accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-4 border-l-4 border-purple-400/50 rounded-tl-3xl" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-4 border-r-4 border-blue-400/50 rounded-br-3xl" />
      
      {/* Small decorative dots */}
      <div className="absolute top-12 left-12 w-2 h-2 bg-purple-400 rounded-full" />
      <div className="absolute bottom-12 right-12 w-2 h-2 bg-blue-400 rounded-full" />
    </div>
  );
}