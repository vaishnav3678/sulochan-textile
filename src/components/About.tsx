import React from 'react';
import { ASSETS } from '../data/assets';

export const About: React.FC = () => {
  return (
    <section id="heritage" className="py-24 sm:py-32 bg-[#FAF7F2] relative overflow-hidden">
      {/* Delicate background pattern */}
      <div className="absolute inset-0 pattern-warp-weft opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A059]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
              Heritage &amp; Origins
            </span>
            <span className="w-8 h-[1px] bg-[#C5A059]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1A1918] font-normal tracking-tight text-balance">
            Rooted in Tradition.<br />
            <span className="italic text-[#4A1521] font-light">Woven for Today.</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#C5A059] mx-auto mt-6" />
        </div>

        {/* Editorial Layout: Image + Story Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase Column (Left) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image: Master artisan at loom */}
              <div className="relative z-10 overflow-hidden shadow-2xl border border-[#C5A059]/30">
                <img
                  src={ASSETS.artisanAtLoom}
                  alt="Master weaver crafting traditional Kosa silk at a pit loom in Champa"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1918]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#E8D39E]">
                    Champa Workshop · Chhattisgarh
                  </p>
                  <p className="font-serif text-base sm:text-lg text-[#FAF7F2]">
                    Master weaver at the traditional wooden pit loom
                  </p>
                </div>
              </div>

              {/* Secondary Overlapping Image: Workshop Scene */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-56 z-20 shadow-2xl border-4 border-[#FAF7F2] hidden sm:block">
                <img
                  src={ASSETS.weavingWorkshop}
                  alt="Traditional handloom weaving workshop hall supporting weavers in Champa"
                  className="w-full h-36 sm:h-44 object-cover"
                />
                <div className="bg-[#4A1521] text-[#FAF7F2] p-2 text-center">
                  <span className="text-[10px] uppercase tracking-widest font-medium">
                    185+ Associated Weavers
                  </span>
                </div>
              </div>

              {/* Decorative Accent Border Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#C5A059]/40 -z-0 pointer-events-none hidden sm:block" />
            </div>
          </div>

          {/* Narrative Content Column (Right) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="space-y-6 text-[#1A1918]/85 text-base sm:text-lg leading-relaxed font-sans font-light">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-[#4A1521] first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                Sulochana Dewagan Textile showcases traditional handloom textiles crafted by skilled weavers, with a dedicated focus on preserving Chhattisgarh’s historic textile heritage while thoughtfully adapting traditional techniques to contemporary designs and modern market requirements.
              </p>

              <p>
                Based in the storied weaving center of <strong className="font-medium text-[#4A1521]">Champa, Chhattisgarh</strong>, our initiative directly supports approximately <strong className="font-medium text-[#4A1521]">185 associated weavers</strong> through design development, skill enhancement, and direct market linkage.
              </p>

              <p>
                Every meter of fabric is born through patient, manual labor—from the selection of raw Kosa wild silk to yarn reeling, warp dressing, and fly-shuttle weaving on traditional pit looms. The result is an authentic handloom textile renowned for its natural earthy sheen, distinctive slub texture, and exceptional longevity.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="mt-10 pt-8 border-t border-[#C5A059]/30 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border-l-2 border-[#C5A059] pl-4">
                <h4 className="font-serif text-lg text-[#4A1521] font-semibold">
                  Handcrafted Production
                </h4>
                <p className="text-xs sm:text-sm text-[#1A1918]/70 mt-1 leading-normal">
                  Authentic pit-loom handlooms operated by generational artisan families.
                </p>
              </div>

              <div className="border-l-2 border-[#C5A059] pl-4">
                <h4 className="font-serif text-lg text-[#4A1521] font-semibold">
                  Contemporary Adaptation
                </h4>
                <p className="text-xs sm:text-sm text-[#1A1918]/70 mt-1 leading-normal">
                  Refined palettes and motifs meeting modern aesthetics across India.
                </p>
              </div>

              <div className="border-l-2 border-[#C5A059] pl-4">
                <h4 className="font-serif text-lg text-[#4A1521] font-semibold">
                  Traditional Materials
                </h4>
                <p className="text-xs sm:text-sm text-[#1A1918]/70 mt-1 leading-normal">
                  Genuine Chhattisgarh Kosa silk and time-tested handloom fibers.
                </p>
              </div>

              <div className="border-l-2 border-[#C5A059] pl-4">
                <h4 className="font-serif text-lg text-[#4A1521] font-semibold">
                  Weaver Empowerment
                </h4>
                <p className="text-xs sm:text-sm text-[#1A1918]/70 mt-1 leading-normal">
                  Direct livelihood support, skill training, and fair trade opportunities.
                </p>
              </div>
            </div>

            {/* Brand Quote */}
            <div className="mt-8 p-5 bg-[#F3ECE2] border-l-4 border-[#4A1521]">
              <blockquote className="font-serif italic text-base sm:text-lg text-[#4A1521]">
                “Preserving the sacred rhythm of the shuttle while weaving enduring stories for the modern Indian connoisseur.”
              </blockquote>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#C5A059] mt-2 font-semibold">
                — Sulochana Dewagan Textile · Champa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
