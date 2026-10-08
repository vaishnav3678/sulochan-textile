import React, { useState } from 'react';
import { ASSETS } from '../data/assets';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CraftsmanshipProps {
  onOpenEnquiry: () => void;
}

export const Craftsmanship: React.FC<CraftsmanshipProps> = ({ onOpenEnquiry }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      label: 'TRADITION',
      subtitle: 'Generational Roots in Champa',
      description: 'Centuries of weaving wisdom handed down through artisan families in Chhattisgarh, preserving sacred loom practices and reverence for natural fibers.',
      image: ASSETS.artisanAtLoom,
      fact: 'Deeply anchored in the handloom clusters of Champa, where weaving is both lineage and livelihood.'
    },
    {
      label: 'CRAFT',
      subtitle: 'Manual Skill & Fly-Shuttle Looms',
      description: 'Every warp and weft thread is guided by human hands on traditional pit looms. From reeling raw wild Kosa filament to the rhythmic beat of the reed.',
      image: ASSETS.loomShuttleMacro,
      fact: 'Supports approximately 185 master weavers through continuous skill enhancement.'
    },
    {
      label: 'DESIGN',
      subtitle: 'Contemporary Adaptation',
      description: 'Incorporating contemporary design aesthetics, balanced motifs, and refined color harmonies while preserving authentic structural weaving integrity.',
      image: ASSETS.customSilk,
      fact: 'Post-RAMP support enabled modernized product development and tailored weave collections.'
    },
    {
      label: 'TEXTILE',
      subtitle: 'Authentic Kosa Silk Fabrics',
      description: 'Lustrous sarees, unstitched dress materials, and bespoke handloom yardages created with distinctive slub texture and natural golden sheen.',
      image: ASSETS.collectionSaree,
      fact: 'Starting from ₹700, making authentic handloom textiles directly accessible.'
    },
    {
      label: 'HERITAGE',
      subtitle: 'Sustaining Community & Livelihoods',
      description: 'Connecting Champa’s rural craftspeople to market linkages across all over India, fostering economic dignity and cultural preservation.',
      image: ASSETS.weavingWorkshop,
      fact: 'Producing 8,000–10,000 handloom pieces annually with ₹40 Lakh current turnover.'
    }
  ];

  return (
    <section id="craftsmanship" className="py-24 sm:py-32 bg-[#1A1918] text-[#FAF7F2] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2C0C14]/40 via-transparent to-[#1A1918] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A059]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
              Artisan Journey
            </span>
            <span className="w-8 h-[1px] bg-[#C5A059]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAF7F2] font-normal tracking-tight">
            Every Thread Has a Story
          </h2>
          <p className="mt-4 font-sans text-base sm:text-lg text-[#FAF7F2]/80 font-light max-w-2xl mx-auto">
            From the wild silkworm forests of Chhattisgarh to handlooms in Champa, explore the journey of each woven creation.
          </p>
          <div className="w-16 h-[2px] bg-[#C5A059] mx-auto mt-6" />
        </div>

        {/* Horizontal Storytelling Progression Layout */}
        <div className="mb-14">
          <div className="flex flex-col md:flex-row items-center justify-between border-y border-[#C5A059]/25 py-4 gap-2 md:gap-0 bg-[#2C0C14]/30 backdrop-blur-sm">
            {steps.map((step, idx) => (
              <React.Fragment key={step.label}>
                <button
                  onClick={() => setActiveStep(idx)}
                  className={`flex-1 py-3 px-4 text-center group transition-all w-full md:w-auto relative ${
                    activeStep === idx
                      ? 'text-[#C5A059]'
                      : 'text-[#FAF7F2]/60 hover:text-[#FAF7F2]'
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] tracking-widest text-[#E8D39E]/60 uppercase font-sans mb-1">
                      0{idx + 1}
                    </span>
                    <span className="font-serif text-base sm:text-lg tracking-wider font-semibold">
                      {step.label}
                    </span>
                  </div>
                  {activeStep === idx && (
                    <div className="absolute bottom-[-17px] left-1/2 -translate-x-1/2 w-8 h-[2px] bg-[#C5A059] hidden md:block" />
                  )}
                </button>
                {idx < steps.length - 1 && (
                  <div className="hidden md:flex items-center text-[#C5A059]/40 px-1">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Active Stage Showcase Panel */}
        <div className="bg-[#241B18] border border-[#C5A059]/30 p-6 sm:p-10 lg:p-12 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Story Text (Left 6 Cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
                  Stage 0{activeStep + 1}
                </span>
                <span className="text-[#C5A059]">·</span>
                <span className="text-xs uppercase tracking-[0.2em] text-[#FAF7F2]/60">
                  {steps[activeStep].label}
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#FAF7F2] font-normal leading-tight">
                {steps[activeStep].subtitle}
              </h3>

              <p className="text-sm sm:text-base text-[#FAF7F2]/80 leading-relaxed font-light">
                {steps[activeStep].description}
              </p>

              <div className="p-4 bg-[#1A1918]/80 border-l-2 border-[#C5A059] space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#E8D39E] font-medium">
                  Documented Fact
                </span>
                <p className="text-xs sm:text-sm text-[#FAF7F2]/90 font-sans">
                  {steps[activeStep].fact}
                </p>
              </div>

              {/* Step Navigation Controls */}
              <div className="pt-4 flex items-center gap-4">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 border border-[#C5A059]/40 text-xs uppercase tracking-wider text-[#FAF7F2] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/5 transition-colors"
                >
                  Previous
                </button>
                <button
                  disabled={activeStep === steps.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                  className="px-4 py-2 bg-[#C5A059] text-xs uppercase tracking-wider text-[#1A1918] font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#D4AF37] transition-colors"
                >
                  Next Stage
                </button>
              </div>
            </div>

            {/* Stage Photography (Right 6 Cols) */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden border border-[#C5A059]/40 shadow-2xl aspect-[4/3] group">
                <img
                  src={steps[activeStep].image}
                  alt={`Handloom craft step: ${steps[activeStep].label} in Champa`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1918]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#FAF7F2] font-serif">
                    {steps[activeStep].label} · Sulochana Dewagan Textile
                  </span>
                  <span className="text-[10px] tracking-widest text-[#C5A059] uppercase font-sans">
                    Champa Handloom
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenEnquiry}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent border border-[#C5A059] hover:bg-[#C5A059] text-[#C5A059] hover:text-[#1A1918] text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300"
          >
            <span>Collaborate With Our Weavers</span>
            <Sparkles className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
