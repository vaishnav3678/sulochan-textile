import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/assets';
import { Maximize2, X } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const filteredItems = categoryFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === categoryFilter);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A059]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
              Visual Archives
            </span>
            <span className="w-8 h-[1px] bg-[#C5A059]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1A1918] font-normal tracking-tight">
            Handloom Gallery
          </h2>
          <p className="mt-4 font-sans text-base sm:text-lg text-[#1A1918]/75 font-light max-w-2xl mx-auto">
            Glimpses into our Champa workshops, master weavers at traditional pit looms, and authentic handcrafted Kosa silk creations.
          </p>
          <div className="w-16 h-[2px] bg-[#C5A059] mx-auto mt-6" />
        </div>

        {/* Category Filters (Buttons, adhering to zero-pill rules) */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex p-1 bg-[#F3ECE2] border border-[#C5A059]/30 max-w-full overflow-x-auto">
            {['all', 'Artisan', 'Workshop', 'Textile', 'Craft'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-all ${
                  categoryFilter === cat
                    ? 'bg-[#4A1521] text-[#FAF7F2]'
                    : 'text-[#1A1918]/70 hover:text-[#4A1521]'
                }`}
              >
                {cat === 'all' ? 'All Archives' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => {
            // Editorial variation in height for masonry feel
            const isSpan2 = index === 0 || index === 5;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className={`group relative overflow-hidden bg-[#1A1918] cursor-pointer border border-[#C5A059]/20 shadow-sm hover:shadow-xl transition-all duration-300 ${
                  isSpan2 ? 'sm:col-span-2 aspect-[16/10]' : 'aspect-square sm:aspect-[4/5]'
                }`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Dark Overlay with subtle caption on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1918]/95 via-[#1A1918]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <div className="flex justify-between items-center text-white/80">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#E8D39E]">
                      {item.category}
                    </span>
                    <Maximize2 className="w-4 h-4 text-[#C5A059]" />
                  </div>

                  <div>
                    <h3 className="font-serif text-lg sm:text-xl text-[#FAF7F2] font-medium">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#FAF7F2]/80 mt-1 line-clamp-2 font-light">
                      {item.caption}
                    </p>
                  </div>
                </div>

                {/* Always-visible quiet caption strip */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1A1918]/80 to-transparent p-3 group-hover:opacity-0 transition-opacity pointer-events-none">
                  <p className="text-xs text-[#FAF7F2] font-serif truncate">
                    {item.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-[#141312]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#1A1918] border border-[#C5A059]/40 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 transition-colors"
              aria-label="Close image lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />
            </div>

            <div className="p-6 bg-[#2C0C14] border-t border-[#C5A059]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium">
                  Sulochana Dewagan Textile · {selectedImage.category}
                </span>
                <h4 className="font-serif text-2xl text-[#FAF7F2] mt-0.5">
                  {selectedImage.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#FAF7F2]/80 mt-1 font-light">
                  {selectedImage.caption}
                </p>
              </div>

              <div className="shrink-0 text-right">
                <span className="text-[11px] uppercase tracking-widest text-[#E8D39E]">
                  Champa, Chhattisgarh
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
