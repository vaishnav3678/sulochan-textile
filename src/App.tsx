import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { KosaSilk } from './components/KosaSilk';
import { Collection } from './components/Collection';
import { Craftsmanship } from './components/Craftsmanship';
import { ImpactStats } from './components/ImpactStats';
import { WhyUs } from './components/WhyUs';
import { Gallery } from './components/Gallery';
import { MarketReach } from './components/MarketReach';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { EnquiryModal } from './components/EnquiryModal';
import { ProductItem } from './data/assets';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryProductName, setEnquiryProductName] = useState<string>('');

  const handleOpenEnquiry = (productName?: string) => {
    setEnquiryProductName(productName || '');
    setIsEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryModalOpen(false);
    setEnquiryProductName('');
  };

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1918] flex flex-col selection:bg-[#4A1521] selection:text-[#FAF7F2]">
      {/* Sticky Navigation */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* Main Page Layout */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onExploreCollection={() => scrollToSection('#collection')}
          onDiscoverStory={() => scrollToSection('#heritage')}
        />

        {/* Heritage / About Section */}
        <About />

        {/* Kosa Silk Feature Section */}
        <KosaSilk onOpenEnquiry={handleOpenEnquiry} />

        {/* Product Collection Section */}
        <Collection
          onSelectProduct={(product) => setSelectedProduct(product)}
          onOpenEnquiry={handleOpenEnquiry}
        />

        {/* Craftsmanship Horizontal Storytelling Section */}
        <Craftsmanship onOpenEnquiry={() => handleOpenEnquiry('Weaver Collaboration')} />

        {/* RAMP Impact Statistics Section */}
        <ImpactStats />

        {/* Why Sulochana Dewagan Textile (4 Feature Cards) */}
        <WhyUs />

        {/* Visual Masonry Gallery */}
        <Gallery />

        {/* Market Reach: From Champa to India */}
        <MarketReach />

        {/* Contact & Trade Enquiry Desk */}
        <Contact initialProduct={enquiryProductName} />
      </main>

      {/* Footer */}
      <Footer onOpenEnquiry={handleOpenEnquiry} />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onEnquire={(name) => {
          setSelectedProduct(null);
          handleOpenEnquiry(name);
        }}
      />

      {/* Quick Trade Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={handleCloseEnquiry}
        productName={enquiryProductName}
      />
    </div>
  );
}
