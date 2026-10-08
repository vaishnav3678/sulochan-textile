import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { ASSETS } from '../data/assets';

interface HeroProps {
  onExploreCollection: () => void;
  onDiscoverStory: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCollection, onDiscoverStory }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1A1918]">
      {/* Background Photography with Warm Luxury Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.hero}
          alt="Traditional handwoven Kosa Silk textile crafted in Champa Chhattisgarh"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.72] contrast-[1.08] transition-transform duration-1000 ease-out"
        />
        {/* Editorial Gradients & Texture */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1918] via-[#2C0C14]/40 to-[#1A1918]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#1A1918]/50 to-[#1A1918]/90" />
      </div>

      {/* Decorative Traditional Border Framing Elements */}
      <div className="absolute inset-6 sm:inset-10 lg:inset-14 pointer-events-none border border-[#C5A059]/25 z-10 hidden sm:block">
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#C5A059]" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#C5A059]" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#C5A059]" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#C5A059]" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 sm:px-8 py-32 text-center flex flex-col items-center">
        {/* Heritage Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 sm:w-12 h-[1px] bg-[#C5A059]" />
          <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#C5A059] font-medium flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            Traditional Chhattisgarh Handloom · Champa
          </span>
          <span className="w-8 sm:w-12 h-[1px] bg-[#C5A059]" />
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#FAF7F2] leading-[1.08] tracking-tight max-w-4xl text-balance">
          Timeless Threads.<br />
          <span className="italic font-light text-[#E8D39E]">Crafted with Heritage.</span>
        </h1>

        {/* Divider Motifs */}
        <div className="my-6 flex items-center gap-2 text-[#C5A059]/80">
          <span className="w-16 h-[1px] bg-[#C5A059]/40" />
          <span className="text-xs font-serif tracking-widest text-[#C5A059]">❖</span>
          <span className="w-16 h-[1px] bg-[#C5A059]/40" />
        </div>

        {/* Subheading */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-[#FAF7F2]/90 max-w-2xl font-normal leading-relaxed text-balance">
          Discover the rich handloom heritage of Chhattisgarh through handcrafted Kosa silk and traditional textiles created by skilled artisans.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <button
            onClick={onExploreCollection}
            className="w-full sm:w-auto px-8 py-4 bg-[#C5A059] hover:bg-[#D4AF37] text-[#1A1918] text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-lg hover:shadow-[#C5A059]/20"
          >
            Explore Collection
          </button>
          <button
            onClick={onDiscoverStory}
            className="w-full sm:w-auto px-8 py-4 border border-[#C5A059]/80 text-[#FAF7F2] hover:bg-[#FAF7F2]/10 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium transition-all duration-300 backdrop-blur-sm"
          >
            Discover Our Story
          </button>
        </div>

        {/* Quiet Key Stats Bar */}
        <div className="mt-14 pt-8 border-t border-[#C5A059]/20 w-full max-w-2xl grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="font-serif text-2xl sm:text-3xl text-[#FAF7F2] font-semibold">185+</p>
            <p className="text-[10px] sm:text-xs tracking-widest text-[#E8D39E] uppercase mt-0.5">Weavers</p>
          </div>
          <div>
            <p className="font-serif text-2xl sm:text-3xl text-[#FAF7F2] font-semibold">Champa</p>
            <p className="text-[10px] sm:text-xs tracking-widest text-[#E8D39E] uppercase mt-0.5">Silk Origin</p>
          </div>
          <div>
            <p className="font-serif text-2xl sm:text-3xl text-[#FAF7F2] font-semibold">100%</p>
            <p className="text-[10px] sm:text-xs tracking-widest text-[#E8D39E] uppercase mt-0.5">Handcrafted</p>
          </div>
        </div>
      </div>

      {/* Subtle Premium Scroll Indicator */}
      <a
        href="#heritage"
        aria-label="Scroll down to heritage section"
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 group text-[#FAF7F2]/70 hover:text-[#C5A059] transition-colors"
      >
        <span className="text-[9px] uppercase tracking-[0.25em] text-[#FAF7F2]/60 group-hover:text-[#C5A059] transition-colors">
          Scroll Down
        </span>
        <div className="w-5 h-8 rounded-full border border-[#C5A059]/40 flex items-start justify-center p-1">
          <ArrowDown className="w-3 h-3 text-[#C5A059] animate-bounce" />
        </div>
      </a>
    </section>
  );
};
