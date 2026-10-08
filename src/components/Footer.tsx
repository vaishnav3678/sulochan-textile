import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#heritage' },
    { name: 'Collection', href: '#collection' },
    { name: 'Craftsmanship', href: '#craftsmanship' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#141312] text-[#FAF7F2] border-t border-[#C5A059]/30 relative overflow-hidden">
      {/* Decorative top gold line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Brand Identity (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A059] font-medium">
                Traditional Chhattisgarh Handloom
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-[#FAF7F2] mt-1">
                SULOCHANA DEWAGAN TEXTILE
              </h3>
              <p className="font-serif italic text-base text-[#E8D39E] mt-0.5">
                Traditional Chhattisgarh Handloom &amp; Kosa Silk
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#FAF7F2]/75 font-light leading-relaxed max-w-sm">
              Showcasing traditional handloom textiles crafted by skilled weavers in Champa, preserving regional heritage through contemporary design and sustained market linkages.
            </p>

            <div className="pt-2 text-xs text-[#FAF7F2]/60">
              <span className="text-[#C5A059] font-medium">Location:</span> Champa, Chhattisgarh, India
            </div>
          </div>

          {/* Quick Navigation (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-semibold block">
              Navigation
            </span>
            <ul className="space-y-2">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-xs uppercase tracking-[0.15em] text-[#FAF7F2]/80 hover:text-[#C5A059] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Trade Details & Reach (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-semibold block">
              Trade Enquiry
            </span>
            <p className="text-xs text-[#FAF7F2]/80 font-light leading-relaxed">
              Serving patrons, boutiques, and handloom retailers across <strong className="text-[#E8D39E]">ALL OVER INDIA</strong>.
            </p>
            <div className="space-y-1 text-xs text-[#FAF7F2]/70 font-light">
              <p>Trade Enquiry: <span className="text-[#FAF7F2]">SULOCHANA DEWAGAN TEXTILE</span></p>
              <p>Origin: <span className="text-[#FAF7F2]">Champa, Chhattisgarh</span></p>
              <p>Starting from: <span className="text-[#C5A059]">₹700</span></p>
            </div>
            <div>
              <button
                onClick={() => onOpenEnquiry()}
                className="px-5 py-2.5 bg-[#4A1521] hover:bg-[#5C1D24] text-[#FAF7F2] border border-[#C5A059]/40 text-xs uppercase tracking-[0.16em] font-medium transition-all"
              >
                Submit Trade Enquiry
              </button>
            </div>
          </div>
        </div>

        {/* Central Motto Banner */}
        <div className="my-12 py-6 border-y border-[#C5A059]/20 text-center">
          <p className="font-serif text-xl sm:text-2xl text-[#E8D39E] tracking-wider italic font-light">
            “Crafted with Heritage • Woven for Today”
          </p>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F2]/60 font-light">
          <p>
            © {new Date().getFullYear()} SULOCHANA DEWAGAN TEXTILE · All Rights Reserved. Traditional Champa Handloom.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[11px] tracking-widest uppercase text-[#C5A059]">
              185+ Associated Weavers
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 border border-[#C5A059]/30 hover:border-[#C5A059] text-[#C5A059] hover:text-[#FAF7F2] transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
