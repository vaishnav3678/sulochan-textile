import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';

interface ContactProps {
  initialProduct?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialProduct = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    cityState: '',
    productCategory: initialProduct || 'Kosa Silk Sarees',
    quantity: 'Retail / Single Piece',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate instantaneous graceful submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A059]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
              Get in Touch
            </span>
            <span className="w-8 h-[1px] bg-[#C5A059]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1A1918] font-normal tracking-tight">
            SULOCHANA DEWAGAN TEXTILE
          </h2>
          <p className="mt-3 font-serif italic text-lg sm:text-xl text-[#4A1521]">
            Traditional Chhattisgarh Handloom &amp; Kosa Silk Textiles
          </p>
          <div className="w-16 h-[2px] bg-[#C5A059] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Left Column: Official Business Details & Trade Enquiry Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FFFDF9] border border-[#C5A059]/30 p-8 shadow-sm">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
                Official Location
              </span>
              <h3 className="font-serif text-2xl text-[#1A1918] font-normal mt-1">
                Champa, Chhattisgarh
              </h3>
              <p className="text-xs text-[#1A1918]/65 uppercase tracking-wider mt-0.5">
                India · Pin Code 495671
              </p>

              <div className="mt-6 pt-6 border-t border-[#C5A059]/20 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-[#F5EFEB] text-[#4A1521] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#1A1918] font-semibold">
                      Production &amp; Handloom Centre
                    </h4>
                    <p className="text-xs text-[#1A1918]/70 mt-0.5">
                      Champa, District Janjgir-Champa, Chhattisgarh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-[#F5EFEB] text-[#4A1521] shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#1A1918] font-semibold">
                      Trade Enquiry Designation
                    </h4>
                    <p className="text-xs text-[#4A1521] font-serif font-medium mt-0.5">
                      SULOCHANA DEWAGAN TEXTILE
                    </p>
                    <p className="text-[11px] text-[#1A1918]/60">
                      Direct handloom weaver-linkage desk
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trade & Wholesale Notice */}
            <div className="p-6 bg-[#2C0C14] text-[#FAF7F2] border border-[#C5A059]/30 space-y-3">
              <div className="flex items-center gap-2 text-[#C5A059]">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs uppercase tracking-[0.2em] font-medium">
                  Trade &amp; Bulk Orders
                </span>
              </div>
              <h4 className="font-serif text-lg text-[#FAF7F2]">
                Wholesale &amp; Customization Available
              </h4>
              <p className="text-xs text-[#FAF7F2]/80 leading-relaxed font-light">
                We cater to boutique owners, textile designers, institutions, and handloom retailers across India. Customized yardages and borders woven to order.
              </p>
              <div className="pt-2 text-[11px] text-[#E8D39E] tracking-wider uppercase">
                Starting from ₹700 · Minimum Orders Flexible
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Trade Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFDF9] border border-[#C5A059]/35 p-8 sm:p-10 shadow-lg">
              <div className="mb-6">
                <span className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-semibold">
                  Trade &amp; Retail Desk
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1918] font-normal mt-1">
                  Enquire About Our Textiles
                </h3>
                <p className="text-xs sm:text-sm text-[#1A1918]/70 mt-1 font-light">
                  Submit your request for sarees, dress materials, or bespoke silk yardages.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 px-6 text-center bg-[#F5EFEB] border border-[#C5A059]/40 space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 bg-[#4A1521] text-[#C5A059] flex items-center justify-center mx-auto rounded-full">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl text-[#1A1918]">
                    Enquiry Received Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-[#1A1918]/80 max-w-md mx-auto font-light">
                    Thank you for contacting <strong className="font-medium text-[#4A1521]">Sulochana Dewagan Textile</strong>. Our Champa trade representative will review your requirements and respond shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        cityState: '',
                        productCategory: 'Kosa Silk Sarees',
                        quantity: 'Retail / Single Piece',
                        message: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 bg-[#4A1521] text-[#FAF7F2] text-xs uppercase tracking-[0.16em]"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.14em] text-[#1A1918]/80 font-medium mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Radhika Sharma"
                        className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#C5A059]/30 text-sm focus:outline-none focus:border-[#4A1521] text-[#1A1918]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-[0.14em] text-[#1A1918]/80 font-medium mb-1.5">
                        Contact Phone / Mobile *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#C5A059]/30 text-sm focus:outline-none focus:border-[#4A1521] text-[#1A1918]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.14em] text-[#1A1918]/80 font-medium mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@domain.com"
                        className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#C5A059]/30 text-sm focus:outline-none focus:border-[#4A1521] text-[#1A1918]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-[0.14em] text-[#1A1918]/80 font-medium mb-1.5">
                        City &amp; State (India) *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.cityState}
                        onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                        placeholder="e.g. Mumbai, Maharashtra"
                        className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#C5A059]/30 text-sm focus:outline-none focus:border-[#4A1521] text-[#1A1918]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.14em] text-[#1A1918]/80 font-medium mb-1.5">
                        Product of Interest
                      </label>
                      <select
                        value={formData.productCategory}
                        onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#C5A059]/30 text-sm focus:outline-none focus:border-[#4A1521] text-[#1A1918]"
                      >
                        <option value="Kosa Silk Sarees">Kosa Silk Sarees</option>
                        <option value="Dress Materials">Dress Materials</option>
                        <option value="Customised Silk Textiles">Customised Silk Textiles</option>
                        <option value="All Collections / Catalogue">All Collections / Catalogue</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-[0.14em] text-[#1A1918]/80 font-medium mb-1.5">
                        Order Requirement Type
                      </label>
                      <select
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#C5A059]/30 text-sm focus:outline-none focus:border-[#4A1521] text-[#1A1918]"
                      >
                        <option value="Retail / Single Piece">Individual / Retail Purchase</option>
                        <option value="Boutique / Small Batch (5–20 pcs)">Boutique / Small Batch (5–20 pcs)</option>
                        <option value="Wholesale / Bulk Handloom (25+ pcs)">Wholesale / Bulk Trade (25+ pcs)</option>
                        <option value="Custom Weaving / Bespoke Project">Custom Weaving Specification</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.14em] text-[#1A1918]/80 font-medium mb-1.5">
                      Enquiry Details / Customization Notes
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please mention color preferences, border specifications, or trade quantity requirements..."
                      className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#C5A059]/30 text-sm focus:outline-none focus:border-[#4A1521] text-[#1A1918] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 bg-[#4A1521] hover:bg-[#361017] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-md flex items-center justify-center gap-2 group"
                  >
                    <span>{submitting ? 'Submitting Enquiry...' : 'Enquire About Our Textiles'}</span>
                    <Send className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-center text-[11px] text-[#1A1918]/60 font-light">
                    Direct handloom dispatch from Champa, Chhattisgarh · Starting from ₹700
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
