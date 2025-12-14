'use client';

import { useState } from 'react';

export default function RetroContactScroll() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="relative">
      {/* Game Over Style Header */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="pixel-font text-2xl md:text-4xl lg:text-5xl text-[#ff006e] glow-pink mb-4 uppercase animate-blink leading-relaxed">
          Continue?
        </h2>
        <p className="pixel-font text-xs md:text-sm text-[#00f3ff] uppercase">
          Insert Coin to Send Message
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto bg-[#050816] border-4 border-[#00f3ff] p-4 md:p-8 retro-card pixel-shadow-cyan">
        {submitted ? (
          // Success Screen
          <div className="text-center py-12 md:py-16">
            <div className="text-6xl md:text-8xl mb-6 animate-bounce-pixel">🎉</div>
            <h3 className="pixel-font text-xl md:text-2xl lg:text-3xl text-[#39ff14] glow-green mb-4 uppercase leading-relaxed">
              Level Complete!
            </h3>
            <p className="pixel-font text-[10px] md:text-xs text-gray-400">
              Message sent successfully
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            {/* Name Input */}
            <div>
              <label className="pixel-font text-[10px] md:text-xs text-[#ffed4e] uppercase block mb-2">
                Player Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#0a0e27] border-4 border-[#00f3ff]/40 px-3 md:px-4 py-2 md:py-3 text-white pixel-font text-xs md:text-sm focus:border-[#00f3ff] focus:outline-none transition-colors"
                placeholder="Enter your name..."
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="pixel-font text-[10px] md:text-xs text-[#ffed4e] uppercase block mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#0a0e27] border-4 border-[#ff006e]/40 px-3 md:px-4 py-2 md:py-3 text-white pixel-font text-xs md:text-sm focus:border-[#ff006e] focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            {/* Message Input */}
            <div>
              <label className="pixel-font text-[10px] md:text-xs text-[#ffed4e] uppercase block mb-2">
                Quest Message
              </label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full bg-[#0a0e27] border-4 border-[#39ff14]/40 px-3 md:px-4 py-2 md:py-3 text-white pixel-font text-xs md:text-sm focus:border-[#39ff14] focus:outline-none transition-colors resize-none"
                placeholder="Type your message..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full retro-btn retro-btn-green text-sm md:text-base py-3 md:py-4 flex items-center justify-center gap-3 animate-pulse hover:animate-none"
            >
              <span>▶</span>
              Press Start
              <span>◀</span>
            </button>
          </form>
        )}
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4 md:gap-6 mt-8 md:mt-12">
        <a 
          href="https://github.com/Tushar365" 
          target="_blank"
          className="w-12 h-12 md:w-16 md:h-16 bg-[#ff006e] border-4 border-[#b30050] flex items-center justify-center hover:scale-110 transition-transform retro-card"
        >
          <span className="text-xl md:text-2xl">💻</span>
        </a>
        <a 
          href="https://www.kaggle.com/tushar365" 
          target="_blank"
          className="w-12 h-12 md:w-16 md:h-16 bg-[#00f3ff] border-4 border-[#00a8b3] flex items-center justify-center hover:scale-110 transition-transform retro-card"
        >
          <span className="text-xl md:text-2xl">📊</span>
        </a>
        <a 
          href="https://huggingface.co/Tushar365" 
          target="_blank"
          className="w-12 h-12 md:w-16 md:h-16 bg-[#39ff14] border-4 border-[#2db30f] flex items-center justify-center hover:scale-110 transition-transform retro-card"
        >
          <span className="text-xl md:text-2xl">🤗</span>
        </a>
      </div>
    </div>
  );
}
