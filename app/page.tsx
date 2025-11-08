'use client';

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center p-6 overflow-hidden relative">
      {/* Floating gradient orbs */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"
        style={{
          top: '10%',
          left: '10%',
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      />
      <div 
        className="absolute w-80 h-80 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl"
        style={{
          bottom: '10%',
          right: '10%',
          transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-8">
        {/* Logo/Title with gradient */}
        <div className="space-y-3">
          <h1 className="text-7xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
            MyJournalBook
          </h1>
          <div className="flex items-center justify-center gap-2">
            <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
            <div className="h-1 w-12 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full" />
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-xl text-gray-700 font-medium leading-relaxed">
          a journaling experience that actually gets{' '}
          <span className="italic font-bold text-purple-600">you</span>
          <br />
          your culture. your vibe. your story.
        </p>

        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-purple-100">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
          <span className="text-sm font-semibold text-gray-700">coming soon</span>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center gap-4 pt-4">
          <div className="w-3 h-3 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-3 h-3 rounded-full bg-pink-400 animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-3 h-3 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-4 border-l-4 border-purple-400/50 rounded-tl-3xl" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-4 border-r-4 border-blue-400/50 rounded-br-3xl" />
    </div>
  );
}