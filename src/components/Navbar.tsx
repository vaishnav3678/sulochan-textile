import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#heritage' },
    { name: 'Kosa Silk', href: '#kosa-silk' },
    { name: 'Collection', href: '#collection' },
    { name: 'Craftsmanship', href: '#craftsmanship' },
    { name: 'Impact', href: '#impact' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#4A1521]/95 text-[#FAF7F2] backdrop-blur-md shadow-lg py-3.5 border-b border-[#C5A059]/30'
            : 'bg-gradient-to-b from-[#1A1918]/80 via-[#1A1918]/40 to-transparent text-[#FAF7F2] py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#home"
              className="group flex flex-col focus:outline-none"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
            >
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-medium">
                  Traditional Handloom
                </span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-[#FAF7F2] group-hover:text-[#C5A059] transition-colors">
                  SULOCHANA DEWAGAN
                </span>
                <span className="text-[10px] sm:text-xs font-light tracking-[0.25em] text-[#E8D39E]">
                  TEXTILE
                </span>
              </div>
              <span className="text-[9px] tracking-widest text-[#FAF7F2]/70 uppercase">
                Champa · Chhattisgarh
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-xs uppercase tracking-[0.18em] text-[#FAF7F2]/90 hover:text-[#C5A059] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right Side Action */}
            <div className="hidden sm:flex items-center gap-4">
              <button
                onClick={() => onOpenEnquiry()}
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium tracking-[0.16em] uppercase text-[#1A1918] bg-[#C5A059] hover:bg-[#D4AF37] transition-all duration-300 shadow-sm active:scale-95"
              >
                <span>Enquire Now</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden items-center gap-3">
              <button
                onClick={() => onOpenEnquiry()}
                className="sm:hidden px-3 py-1.5 text-[11px] font-medium tracking-wider uppercase text-[#1A1918] bg-[#C5A059]"
              >
                Enquire
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#FAF7F2] hover:text-[#C5A059] focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-[#2C0C14]/98 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between animate-fadeIn">
          <div className="flex flex-col gap-5 border-t border-[#C5A059]/20 pt-6">
            <span className="text-[11px] tracking-[0.25em] text-[#C5A059] uppercase font-medium">
              Navigation
            </span>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="font-serif text-2xl text-[#FAF7F2] hover:text-[#C5A059] transition-colors py-1 flex items-center justify-between border-b border-white/5"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#C5A059] tracking-widest font-sans uppercase">
                  Explore
                </span>
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-[#C5A059]/20 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-3.5 bg-[#C5A059] text-[#1A1918] text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2"
            >
              <span>Enquire About Our Textiles</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="text-center text-[10px] tracking-widest text-[#FAF7F2]/60 uppercase">
              Champa · Chhattisgarh · All Over India
            </p>
          </div>
        </div>
      )}
    </>
  );
};
