import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, SlidersHorizontal } from 'lucide-react';
import { PRODUCTS, ProductItem } from '../data/assets';

interface CollectionProps {
  onSelectProduct: (product: ProductItem) => void;
  onOpenEnquiry: (productName?: string) => void;
}

export const Collection: React.FC<CollectionProps> = ({ onSelectProduct, onOpenEnquiry }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProducts = activeFilter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((item) => item.id === activeFilter);

  return (
    <section id="collection" className="py-24 sm:py-32 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A059]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
              Handcrafted Catalogue
            </span>
            <span className="w-8 h-[1px] bg-[#C5A059]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1A1918] font-normal tracking-tight">
            Our Collection
          </h2>
          <p className="mt-4 font-sans text-base sm:text-lg text-[#1A1918]/75 font-light max-w-2xl mx-auto">
            Handcrafted Kosa silk creations blending ancient weaving traditions of Champa with contemporary elegance.
          </p>
          <div className="w-16 h-[2px] bg-[#C5A059] mx-auto mt-6" />
        </div>

        {/* Filter Segmented Control (Buttons, compliant with Zero-Pill discipline) */}
        <div className="flex items-center justify-center mb-14">
          <div className="inline-flex p-1 bg-[#F3ECE2] border border-[#C5A059]/30 rounded-none shadow-inner max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2.5 text-xs uppercase tracking-[0.16em] font-medium transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#4A1521] text-[#FAF7F2] shadow-sm'
                  : 'text-[#1A1918]/70 hover:text-[#4A1521]'
              }`}
            >
              All Offerings
            </button>
            <button
              onClick={() => setActiveFilter('kosa-silk-sarees')}
              className={`px-5 py-2.5 text-xs uppercase tracking-[0.16em] font-medium transition-all ${
                activeFilter === 'kosa-silk-sarees'
                  ? 'bg-[#4A1521] text-[#FAF7F2] shadow-sm'
                  : 'text-[#1A1918]/70 hover:text-[#4A1521]'
              }`}
            >
              Kosa Silk Sarees
            </button>
            <button
              onClick={() => setActiveFilter('dress-materials')}
              className={`px-5 py-2.5 text-xs uppercase tracking-[0.16em] font-medium transition-all ${
                activeFilter === 'dress-materials'
                  ? 'bg-[#4A1521] text-[#FAF7F2] shadow-sm'
                  : 'text-[#1A1918]/70 hover:text-[#4A1521]'
              }`}
            >
              Dress Materials
            </button>
            <button
              onClick={() => setActiveFilter('customised-silk-textiles')}
              className={`px-5 py-2.5 text-xs uppercase tracking-[0.16em] font-medium transition-all ${
                activeFilter === 'customised-silk-textiles'
                  ? 'bg-[#4A1521] text-[#FAF7F2] shadow-sm'
                  : 'text-[#1A1918]/70 hover:text-[#4A1521]'
              }`}
            >
              Customised Silk Textiles
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group bg-[#FFFDF9] border border-[#C5A059]/25 hover:border-[#C5A059] transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col justify-between"
            >
              {/* Product Image Container */}
              <div className="relative overflow-hidden aspect-[3/4] bg-[#F5EFEB]">
                <img
                  src={product.image}
                  alt={`${product.name} - Handcrafted Kosa Silk handloom from Champa`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1918]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Clean unboxed category label */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#1A1918] bg-[#FAF7F2]/90 backdrop-blur-sm px-3 py-1 border border-[#C5A059]/30">
                    {product.category}
                  </span>
                </div>

                {/* Price display tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white drop-shadow-md">
                  <span className="text-xs uppercase tracking-wider text-[#E8D39E]">
                    Handwoven in Champa
                  </span>
                  <span className="font-serif text-lg text-white font-medium">
                    Starting from {product.startingPrice}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-[#1A1918] font-normal group-hover:text-[#4A1521] transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-3 text-sm text-[#1A1918]/75 leading-relaxed font-light line-clamp-3">
                    {product.shortDesc}
                  </p>

                  {/* Craft Highlights */}
                  <div className="mt-4 pt-4 border-t border-[#C5A059]/20 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs text-[#5C4334]">
                      <Sparkles className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                      <span>{product.specs.weave}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#5C4334]">
                      <span className="text-[#C5A059] text-xs">·</span>
                      <span>{product.specs.material}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 pt-5 border-t border-[#C5A059]/20 flex items-center gap-3">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="flex-1 py-3 px-4 bg-[#FAF7F2] hover:bg-[#4A1521] text-[#4A1521] hover:text-[#FAF7F2] border border-[#4A1521]/30 hover:border-[#4A1521] text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onOpenEnquiry(product.name)}
                    className="py-3 px-4 bg-[#C5A059] hover:bg-[#D4AF37] text-[#1A1918] text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-300"
                    title={`Enquire for ${product.name}`}
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Catalogue Pricing Transparency Notice */}
        <div className="mt-14 max-w-3xl mx-auto p-5 sm:p-6 bg-[#F3ECE2] border border-[#C5A059]/30 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-[#4A1521] font-serif font-semibold">
            <span>Starting from ₹700</span>
          </div>
          <p className="mt-1 text-xs sm:text-sm text-[#1A1918]/70 font-light">
            Prices may vary depending on product, design and customization.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[#5C4334]">
            <span>Direct Handloom Procurement</span>
            <span aria-hidden="true">·</span>
            <span>Bulk &amp; Boutique Orders</span>
            <span aria-hidden="true">·</span>
            <span>Delivery All Over India</span>
          </div>
        </div>
      </div>
    </section>
  );
};
