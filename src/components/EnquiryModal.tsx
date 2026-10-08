import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  productName = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    cityState: '',
    product: productName || 'Kosa Silk Sarees',
    quantity: 'Retail',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#141312]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      onClick={handleClose}
    >
      <div
        className="relative max-w-xl w-full bg-[#FAF7F2] border border-[#C5A059]/40 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#4A1521] text-[#FAF7F2] px-6 py-4 flex items-center justify-between border-b border-[#C5A059]/30">
          <div>
            <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-semibold">
              Sulochana Dewagan Textile
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#FAF7F2]">
              Trade &amp; Textile Enquiry
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 text-white/70 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-14 h-14 bg-[#4A1521] text-[#C5A059] flex items-center justify-center mx-auto rounded-full">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl text-[#1A1918]">
                Enquiry Sent Successfully
              </h4>
              <p className="text-xs sm:text-sm text-[#1A1918]/80 max-w-sm mx-auto font-light leading-relaxed">
                Thank you for your interest in our handcrafted textiles. Our Champa handloom team will contact you promptly.
              </p>
              <button
                onClick={handleClose}
                className="mt-4 px-6 py-2.5 bg-[#4A1521] text-[#FAF7F2] text-xs uppercase tracking-[0.16em]"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#1A1918]/80 font-semibold mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full name"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#C5A059]/30 text-xs focus:outline-none focus:border-[#4A1521]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#1A1918]/80 font-semibold mb-1">
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91..."
                    className="w-full px-3.5 py-2.5 bg-white border border-[#C5A059]/30 text-xs focus:outline-none focus:border-[#4A1521]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#1A1918]/80 font-semibold mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@address.com"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#C5A059]/30 text-xs focus:outline-none focus:border-[#4A1521]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#1A1918]/80 font-semibold mb-1">
                    City &amp; State (India) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.cityState}
                    onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                    placeholder="e.g. Bangalore, Karnataka"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#C5A059]/30 text-xs focus:outline-none focus:border-[#4A1521]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#1A1918]/80 font-semibold mb-1">
                    Textile Category
                  </label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#C5A059]/30 text-xs focus:outline-none focus:border-[#4A1521]"
                  >
                    <option value="Kosa Silk Sarees">Kosa Silk Sarees</option>
                    <option value="Dress Materials">Dress Materials</option>
                    <option value="Customised Silk Textiles">Customised Silk Textiles</option>
                    <option value="General Catalogue / All">General Catalogue</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#1A1918]/80 font-semibold mb-1">
                    Order Type
                  </label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#C5A059]/30 text-xs focus:outline-none focus:border-[#4A1521]"
                  >
                    <option value="Retail">Retail / Individual (1-2)</option>
                    <option value="Boutique">Boutique Batch (5-20)</option>
                    <option value="Wholesale">Wholesale Bulk (20+)</option>
                    <option value="Bespoke">Custom Weaving</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#1A1918]/80 font-semibold mb-1">
                  Enquiry Note / Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Design preferences, customization, delivery timeline..."
                  className="w-full px-3.5 py-2.5 bg-white border border-[#C5A059]/30 text-xs focus:outline-none focus:border-[#4A1521] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 bg-[#4A1521] hover:bg-[#361017] text-[#FAF7F2] text-xs uppercase tracking-[0.18em] font-semibold flex items-center justify-center gap-2"
                >
                  <span>{submitting ? 'Sending...' : 'Submit Trade Enquiry'}</span>
                  <Send className="w-3.5 h-3.5 text-[#C5A059]" />
                </button>
              </div>

              <p className="text-center text-[10px] text-[#1A1918]/60 font-light">
                Prices starting from ₹700 · Champa Handloom · All Over India
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
