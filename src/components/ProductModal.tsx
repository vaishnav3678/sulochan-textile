import React from 'react';
import { X, Check, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { ProductItem } from '../data/assets';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onEnquire: (productName: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onEnquire }) => {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#141312]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-[#FAF7F2] border border-[#C5A059]/40 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#4A1521] text-[#FAF7F2] px-6 py-4 flex items-center justify-between border-b border-[#C5A059]/30">
          <div>
            <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-semibold">
              Catalogue Specification
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#FAF7F2]">
              {product.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close product details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Image */}
            <div className="relative aspect-[3/4] overflow-hidden border border-[#C5A059]/30 bg-[#1A1918]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-3 left-3 bg-[#1A1918]/80 text-[#E8D39E] text-xs px-2.5 py-1 font-serif">
                Champa Handloom
              </div>
            </div>

            {/* Overview & Specs */}
            <div className="space-y-4">
              <div>
                <span className="text-xs uppercase tracking-[0.16em] text-[#4A1521] font-semibold">
                  {product.category}
                </span>
                <p className="mt-1 font-serif text-2xl text-[#1A1918] font-normal">
                  Starting from {product.startingPrice}
                </p>
                <p className="text-[11px] text-[#1A1918]/60 mt-0.5 italic">
                  Prices may vary depending on product, design and customization.
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#1A1918]/80 leading-relaxed font-light">
                {product.fullDesc}
              </p>

              {/* Technical Specifications */}
              <div className="p-4 bg-[#F3ECE2] border-l-2 border-[#C5A059] space-y-1.5 text-xs">
                <p><strong className="text-[#4A1521]">Origin:</strong> {product.specs.origin}</p>
                <p><strong className="text-[#4A1521]">Weave:</strong> {product.specs.weave}</p>
                <p><strong className="text-[#4A1521]">Material:</strong> {product.specs.material}</p>
                <p><strong className="text-[#4A1521]">Weaver Support:</strong> {product.specs.artisanSupport}</p>
              </div>
            </div>
          </div>

          {/* Craft Nuances */}
          <div>
            <h4 className="font-serif text-lg text-[#1A1918] font-medium border-b border-[#C5A059]/20 pb-2 mb-3">
              Handloom Attributes
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#1A1918]/75">
              {product.craftDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="bg-[#F5EFEB] px-6 py-4 border-t border-[#C5A059]/30 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[11px] text-[#1A1918]/65 font-light">
            Shipping available ALL OVER INDIA from Champa
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 border border-[#1A1918]/30 text-xs uppercase tracking-wider text-[#1A1918]"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onEnquire(product.name);
              }}
              className="w-1/2 sm:w-auto px-6 py-2.5 bg-[#4A1521] hover:bg-[#361017] text-[#FAF7F2] text-xs uppercase tracking-[0.16em] font-medium flex items-center justify-center gap-1.5"
            >
              <span>Enquire for {product.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
