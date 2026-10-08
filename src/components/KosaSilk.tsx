import React from 'react';
import { ASSETS } from '../data/assets';
import { Feather, Compass, Sparkles, ShieldCheck } from 'lucide-react';

interface KosaSilkProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const KosaSilk: React.FC<KosaSilkProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="kosa-silk" className="py-24 sm:py-32 bg-[#2C0C14] text-[#FAF7F2] relative overflow-hidden">
      {/* Background Subtle Buti Pattern */}
      <div className="absolute inset-0 pattern-buti opacity-15 pointer-events-none" />

      {/* Decorative Golden Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#4A1521]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A059]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
              The Golden Fiber of Chhattisgarh
            </span>
            <span className="w-8 h-[1px] bg-[#C5A059]" />
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl text-[#FAF7F2] font-normal tracking-tight">
            Kosa Silk
          </h2>
          <p className="mt-4 font-sans text-base sm:text-lg text-[#FAF7F2]/80 font-light max-w-2xl mx-auto">
            Celebrated for its distinct dull-gold luster, breathable natural slub, and organic texture hand-harvested from the wild forests of Chhattisgarh.
          </p>
          <div className="w-16 h-[2px] bg-[#C5A059] mx-auto mt-6" />
        </div>

        {/* Editorial Layout: Large Textile Image with Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Narrative & Craft Pillars (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#E8D39E]">
                Traditional Craftsmanship · Handmade Production
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF7F2] font-normal leading-snug">
                Born in Champa, Revered Across India
              </h3>
              <p className="text-sm sm:text-base text-[#FAF7F2]/80 leading-relaxed font-light">
                Kosa is a special variety of wild tassar silk derived exclusively from the cocoons of wild silkworms indigenous to the deciduous sal and arjun forests of Chhattisgarh. Unlike cultivated mulberry silk, Kosa yields an organic, irregular filament that creates its coveted, tactile slub texture and muted golden sheen.
              </p>
              <p className="text-sm sm:text-base text-[#FAF7F2]/80 leading-relaxed font-light">
                In <strong className="text-[#C5A059] font-medium">Champa</strong>, generations of Dewagan weaver artisans have perfected the art of hand-reeling the delicate filaments and weaving them on pit looms, turning raw natural fiber into heirloom wearable art.
              </p>
            </div>

            {/* 4 Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#C5A059]/20">
              <div className="flex items-start gap-4 p-4 bg-white/5 border border-[#C5A059]/15 backdrop-blur-sm">
                <div className="p-2.5 bg-[#4A1521] text-[#C5A059] shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#FAF7F2] font-semibold">
                    Origin: Champa
                  </h4>
                  <p className="text-xs text-[#FAF7F2]/70 mt-1">
                    Geographically and culturally anchored in Chhattisgarh’s primary silk weaving cluster.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white/5 border border-[#C5A059]/15 backdrop-blur-sm">
                <div className="p-2.5 bg-[#4A1521] text-[#C5A059] shrink-0">
                  <Feather className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#FAF7F2] font-semibold">
                    100% Handmade Production
                  </h4>
                  <p className="text-xs text-[#FAF7F2]/70 mt-1">
                    Manual reeling and pit-loom weaving without mechanized synthetic processing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white/5 border border-[#C5A059]/15 backdrop-blur-sm">
                <div className="p-2.5 bg-[#4A1521] text-[#C5A059] shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#FAF7F2] font-semibold">
                    Contemporary Designs
                  </h4>
                  <p className="text-xs text-[#FAF7F2]/70 mt-1">
                    Adapting age-old weaving disciplines to modern silhouettes, palettes, and tastes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white/5 border border-[#C5A059]/15 backdrop-blur-sm">
                <div className="p-2.5 bg-[#4A1521] text-[#C5A059] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#FAF7F2] font-semibold">
                    Handloom &amp; Handicrafts
                  </h4>
                  <p className="text-xs text-[#FAF7F2]/70 mt-1">
                    Guaranteed authentic artisan production with thermal comfort in all seasons.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="pt-2 flex items-center gap-6">
              <button
                onClick={() => onOpenEnquiry('Kosa Silk')}
                className="px-7 py-3.5 bg-[#C5A059] hover:bg-[#D4AF37] text-[#1A1918] text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300"
              >
                Inquire for Authentic Kosa Silk
              </button>
              <div className="text-xs text-[#FAF7F2]/60 hidden sm:block">
                Direct weaver pricing starting from ₹700
              </div>
            </div>
          </div>

          {/* Large Image Presentation (Right 5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-[#C5A059]/30 p-2 sm:p-3 bg-gradient-to-b from-[#4A1521]/60 to-[#1A1918]/80 shadow-2xl">
              <div className="relative overflow-hidden group">
                <img
                  src={ASSETS.kosaSilkDetail}
                  alt="Authentic wild Kosa silk cocoons and hand-reeled golden filament threads from Champa"
                  className="w-full h-[440px] sm:h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1918]/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-semibold">
                    Natural Wild Tassar Filament
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl text-[#FAF7F2] font-normal mt-1">
                    Raw Cocoons to Lustrous Silk
                  </h4>
                  <p className="text-xs text-[#FAF7F2]/80 mt-1.5 leading-relaxed">
                    Sourced from Chhattisgarh forests and transformed through generations of Dewagan artisan expertise.
                  </p>
                </div>
              </div>

              {/* Decorative Corner Filigree Marks */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#C5A059]" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#C5A059]" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#C5A059]" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#C5A059]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
