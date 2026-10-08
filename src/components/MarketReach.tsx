import React from 'react';
import { MapPin, Truck, Store, Award } from 'lucide-react';

export const MarketReach: React.FC = () => {
  const hubs = [
    { region: 'Central India', location: 'Champa & Raipur', note: 'Weaving Hub & Artisan Looms' },
    { region: 'Northern India', location: 'Delhi NCR, Lucknow, Jaipur', note: 'Exhibitions & Boutique Linkages' },
    { region: 'Western India', location: 'Mumbai, Pune, Ahmedabad', note: 'Handloom Connoisseurs & Boutiques' },
    { region: 'Southern India', location: 'Bengaluru, Hyderabad, Chennai', note: 'Silk Lovers & Direct Trade Supply' },
    { region: 'Eastern India', location: 'Kolkata, Bhubaneswar, Ranchi', note: 'Traditional Handloom Markets' },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#2C0C14] text-[#FAF7F2] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A059]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
              Nationwide Presence
            </span>
            <span className="w-8 h-[1px] bg-[#C5A059]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAF7F2] font-normal tracking-tight">
            From Champa to India
          </h2>
          <p className="mt-4 font-sans text-base sm:text-lg text-[#FAF7F2]/80 font-light max-w-2xl mx-auto">
            Crafted in the historic looms of Champa, our authentic Kosa silk textiles reach boutiques, retail patrons, and handloom lovers across all over India.
          </p>
          <div className="w-16 h-[2px] bg-[#C5A059] mx-auto mt-6" />
        </div>

        {/* Visual Map & Reach Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* India Map Stylized SVG Graphic (Left 6 Cols) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md p-6 bg-[#1A1918]/60 border border-[#C5A059]/30 shadow-2xl backdrop-blur-sm">
              <div className="text-center pb-4 border-b border-[#C5A059]/20">
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
                  Product Reach
                </span>
                <p className="font-serif text-2xl text-[#FAF7F2] font-normal mt-0.5">
                  ALL OVER INDIA
                </p>
              </div>

              {/* Stylized India Geometric Outline SVG */}
              <div className="relative py-6 flex items-center justify-center">
                <svg viewBox="0 0 320 360" className="w-full max-w-[280px] h-auto drop-shadow-xl" fill="none">
                  {/* Subtle India Silhouette stylized polygon */}
                  <path
                    d="M160 30 L180 50 L195 75 L180 90 L210 110 L260 120 L275 140 L240 160 L210 165 L210 200 L180 270 L160 320 L140 270 L110 210 L90 190 L70 170 L75 130 L110 120 L130 90 L135 60 Z"
                    fill="#361017"
                    stroke="#C5A059"
                    strokeWidth="1.5"
                    strokeDasharray="4 2"
                    className="opacity-80"
                  />
                  {/* Subtle inner state/grid lines */}
                  <path d="M110 120 Q160 140 210 165" stroke="#C5A059" strokeWidth="0.75" opacity="0.4" />
                  <path d="M160 30 L160 320" stroke="#C5A059" strokeWidth="0.75" opacity="0.3" strokeDasharray="3 3" />
                  <path d="M90 190 Q160 210 210 200" stroke="#C5A059" strokeWidth="0.75" opacity="0.4" />

                  {/* Radiating lines from Champa (Center-East coordinates ~180, 180) */}
                  <g className="text-[#C5A059]">
                    {/* Champa Origin Marker */}
                    <circle cx="180" cy="180" r="6" fill="#C5A059" className="animate-pulse" />
                    <circle cx="180" cy="180" r="14" stroke="#C5A059" strokeWidth="1" opacity="0.6" />
                    
                    {/* Routes to major Indian territories */}
                    {/* North (Delhi) */}
                    <line x1="180" y1="180" x2="150" y2="100" stroke="#C5A059" strokeWidth="1.2" strokeDasharray="2 2" />
                    <circle cx="150" cy="100" r="3.5" fill="#FAF7F2" />

                    {/* West (Mumbai) */}
                    <line x1="180" y1="180" x2="115" y2="200" stroke="#C5A059" strokeWidth="1.2" strokeDasharray="2 2" />
                    <circle cx="115" cy="200" r="3.5" fill="#FAF7F2" />

                    {/* East (Kolkata) */}
                    <line x1="180" y1="180" x2="235" y2="165" stroke="#C5A059" strokeWidth="1.2" strokeDasharray="2 2" />
                    <circle cx="235" cy="165" r="3.5" fill="#FAF7F2" />

                    {/* South (Bengaluru / Chennai) */}
                    <line x1="180" y1="180" x2="160" y2="265" stroke="#C5A059" strokeWidth="1.2" strokeDasharray="2 2" />
                    <circle cx="160" cy="265" r="3.5" fill="#FAF7F2" />
                  </g>

                  {/* Champa Label Pin */}
                  <text x="195" y="185" fill="#E8D39E" fontSize="11" fontFamily="serif" fontWeight="bold">
                    Champa, CG
                  </text>
                  <text x="140" y="85" fill="#FAF7F2" fontSize="9" opacity="0.8">
                    North India
                  </text>
                  <text x="75" y="220" fill="#FAF7F2" fontSize="9" opacity="0.8">
                    West India
                  </text>
                  <text x="238" y="180" fill="#FAF7F2" fontSize="9" opacity="0.8">
                    East India
                  </text>
                  <text x="170" y="285" fill="#FAF7F2" fontSize="9" opacity="0.8">
                    South India
                  </text>
                </svg>
              </div>

              <div className="pt-3 border-t border-[#C5A059]/20 text-center text-xs text-[#FAF7F2]/70 font-light">
                Direct dispatch and trade packaging from Champa, Chhattisgarh
              </div>
            </div>
          </div>

          {/* Hub Breakdown & Value Highlights (Right 6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
                Verified Domestic Distribution
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#FAF7F2] font-normal leading-tight">
                Connecting Handloom Heritage to Every Corner of the Nation
              </h3>
              <p className="text-sm sm:text-base text-[#FAF7F2]/80 font-light leading-relaxed">
                As documented in our official catalogue, Sulochana Dewagan Textile serves patrons and trade partners <strong className="text-[#C5A059] font-medium">ALL OVER INDIA</strong>. From individual connoisseurs seeking authentic Kosa silk to boutique owners procuring bulk handwoven yardages.
              </p>
            </div>

            {/* Hubs List */}
            <div className="space-y-3 pt-2">
              {hubs.map((hub) => (
                <div
                  key={hub.region}
                  className="p-3.5 bg-white/5 border border-[#C5A059]/20 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <div>
                      <span className="text-xs font-semibold text-[#FAF7F2] tracking-wider uppercase font-sans">
                        {hub.region}
                      </span>
                      <p className="text-xs text-[#E8D39E]/80">
                        {hub.location}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] text-[#FAF7F2]/60 hidden sm:block text-right">
                    {hub.note}
                  </span>
                </div>
              ))}
            </div>

            {/* Trust features */}
            <div className="pt-4 grid grid-cols-2 gap-4 border-t border-[#C5A059]/20">
              <div className="flex items-center gap-2 text-xs text-[#FAF7F2]/80">
                <Truck className="w-4 h-4 text-[#C5A059]" />
                <span>Pan-India Secure Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#FAF7F2]/80">
                <Store className="w-4 h-4 text-[#C5A059]" />
                <span>Boutique &amp; Trade Orders</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
