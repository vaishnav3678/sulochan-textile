import React from 'react';

export const WhyUs: React.FC = () => {
  const features = [
    {
      title: 'Traditional Heritage',
      description: 'Centuries-old handloom legacy of Champa, preserving authentic Chhattisgarh wild Kosa silk weaving and native cultural roots.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-[#C5A059]">
          {/* Subtle temple motif / heritage arch */}
          <path d="M12 2L2 9V21H22V9L12 2Z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 6V10M8 10V18M16 10V18" strokeLinecap="round" />
          <circle cx="12" cy="14" r="2" />
        </svg>
      ),
    },
    {
      title: 'Skilled Artisans',
      description: 'A collective of 185+ dedicated weavers bringing generational master-craftsmanship, fine tensioning, and meticulous manual execution.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-[#C5A059]">
          {/* Hands holding the craft / thread spool */}
          <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.5 21C5.5 17 8.5 14 12 14C15.5 14 18.5 17 18.5 21" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 18H22" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Handcrafted Textiles',
      description: 'Pure authentic handloom fabrics woven on traditional pit looms without automated industrial imitation, offering breathable slub texture.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-[#C5A059]">
          {/* Handloom shuttle and interlocking threads */}
          <rect x="3" y="5" width="18" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 10H21M3 14H21M8 5V19M16 5V19" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Contemporary Designs',
      description: 'Sophisticated aesthetics, tasteful color palettes, and adaptable motifs aligned with contemporary Indian festive and everyday wardrobes.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-[#C5A059]">
          {/* Traditional Indian buti / stylized lotus mandala */}
          <path d="M12 3C12 3 7 8 7 13C7 16 9.5 19 12 21C14.5 19 17 16 17 13C17 8 12 3 12 3Z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 7V17M9 13H15" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 sm:py-28 bg-[#FFFDF9] border-y border-[#C5A059]/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A059]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
              The Dewagan Distinction
            </span>
            <span className="w-8 h-[1px] bg-[#C5A059]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1918] font-normal tracking-tight">
            Why Sulochana Dewagan Textile
          </h2>
          <div className="w-16 h-[2px] bg-[#C5A059] mx-auto mt-6" />
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="bg-[#FAF7F2] border border-[#C5A059]/25 p-8 flex flex-col justify-between hover:border-[#4A1521] hover:shadow-lg transition-all duration-300 relative group"
            >
              <div>
                <div className="mb-6 p-3.5 bg-white border border-[#C5A059]/20 inline-block shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#1A1918] font-normal group-hover:text-[#4A1521] transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#1A1918]/70 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#C5A059]/15 flex items-center justify-between text-[10px] tracking-widest uppercase text-[#C5A059] font-medium">
                <span>Pillar 0{idx + 1}</span>
                <span>Champa Weave</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
