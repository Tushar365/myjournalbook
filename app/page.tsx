'use client';

import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import RatingComponent from './components/RatingComponent';

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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 overflow-x-hidden relative">
      {/* Header Component */}
      <Header />
      
      {/* Animated background orbs - fixed position */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div
          className="absolute w-[500px] h-[500px] bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            top: '10%',
            left: '5%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            bottom: '10%',
            right: '5%',
            transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`,
          }}
        />
        <div
          className="absolute w-[350px] h-[350px] bg-gradient-to-br from-pink-300/15 to-purple-300/15 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full">
        {/* Hero Section - Centered on screen */}
        <section className="min-h-screen flex items-center justify-center px-4 py-24 sm:py-16">
          <div
            className={`w-full max-w-6xl mx-auto text-center space-y-8 sm:space-y-10 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Logo/Title with enhanced animation */}
            <div className="relative inline-block mb-6">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent pb-2 leading-tight tracking-tight">
                MyJournal
              </h1>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-pink-500/30 to-blue-500/30 blur-3xl -z-10 animate-pulse" />
              
              {/* Decorative sparkles */}
              <div className="absolute -top-4 -right-4 w-3 h-3 bg-yellow-400 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
              <div className="absolute top-2 -left-6 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />
            </div>

            {/* Tagline */}
            <div className="space-y-6 sm:space-y-8 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 font-bold leading-tight max-w-4xl mx-auto">
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
              </h2>

              {/* Feature Pills with stagger animation */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 max-w-4xl mx-auto">
                {[
                  { emoji: '✨', text: 'Culturally Customized', colors: 'purple' },
                  { emoji: '🎯', text: 'Habit-Focused', colors: 'pink' },
                  { emoji: '📱', text: 'Printable or Digital', colors: 'blue' },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className={`w-full sm:w-auto group px-6 sm:px-7 py-3 sm:py-3.5 bg-white/95 backdrop-blur-md rounded-full text-${feature.colors}-700 text-sm sm:text-base font-bold shadow-xl border-2 border-${feature.colors}-200 hover:border-${feature.colors}-400 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-default animate-fade-in-up`}
                    style={{
                      animationDelay: `${index * 150}ms`,
                    }}
                  >
                    <span className="inline-block group-hover:scale-110 group-hover:rotate-12 transition-transform mr-2">
                      {feature.emoji}
                    </span>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Subtitle */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
                Journals that{' '}
                <span className="text-purple-600 font-bold">understand your culture</span>,{' '}
                <span className="text-pink-600 font-bold">track your habits</span>, and{' '}
                <span className="text-blue-600 font-bold">reflect your story</span>
              </p>
            </div>

            {/* Status Badge */}
            <div className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-white via-purple-50 to-white backdrop-blur-md rounded-full shadow-2xl border-2 border-purple-300 hover:border-purple-400 hover:shadow-purple-200/50 hover:scale-105 transition-all duration-300">
              <div className="relative">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 bg-purple-500 rounded-full animate-ping" />
              </div>
              <span className="text-sm sm:text-base font-black text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text uppercase tracking-widest">
                Launching Soon
              </span>
            </div>

            {/* Animated dots */}
            <div className="flex justify-center gap-4 pt-6">
              <div className="w-3 h-3 rounded-full bg-purple-500 shadow-lg animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-3 h-3 rounded-full bg-pink-500 shadow-lg animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-3 h-3 rounded-full bg-blue-500 shadow-lg animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        </section>

        {/* Rating Section */}
        <section className="w-full px-4 pb-16 sm:pb-24">
          <RatingComponent />
        </section>
      </div>

      {/* Corner decorative accents */}
      <div className="hidden sm:block fixed top-8 left-8 w-16 h-16 border-t-4 border-l-4 border-purple-400/50 rounded-tl-3xl pointer-events-none" />
      <div className="hidden sm:block fixed bottom-8 right-8 w-16 h-16 border-b-4 border-r-4 border-blue-400/50 rounded-br-3xl pointer-events-none" />
      <div className="hidden sm:block fixed top-12 left-12 w-2 h-2 bg-purple-400 rounded-full pointer-events-none" />
      <div className="hidden sm:block fixed bottom-12 right-12 w-2 h-2 bg-blue-400 rounded-full pointer-events-none" />

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}