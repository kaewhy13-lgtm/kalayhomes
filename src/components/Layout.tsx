import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, ShoppingBag, Share2, Instagram, Facebook, Mail, HelpCircle, X, MessageCircle, Copy, Check } from "lucide-react";
import { useCart } from "../context/CartContext";

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.954.558 3.784 1.528 5.341L2.094 22l4.805-1.402A9.98 9.98 0 0012.03 22c5.536 0 10.031-4.495 10.031-10.031C22.062 6.495 17.567 2 12.031 2zm0 18.277a8.23 8.23 0 01-4.22-1.162l-.303-.18-2.852.832.846-2.781-.197-.314a8.243 8.243 0 01-1.264-4.382c0-4.562 3.71-8.272 8.272-8.272 4.562 0 8.272 3.71 8.272 8.272 0 4.562-3.71 8.272-8.272 8.272zm4.536-6.195c-.248-.124-1.469-.724-1.697-.807-.228-.083-.394-.124-.56.124-.166.248-.642.807-.787.973-.145.166-.29.186-.538.062-.248-.124-1.047-.386-1.995-1.231-.738-.658-1.236-1.471-1.381-1.719-.145-.248-.016-.382.108-.506.112-.111.248-.29.373-.435.124-.145.166-.248.248-.414.083-.166.041-.311-.021-.435-.062-.124-.56-1.349-.767-1.847-.202-.485-.407-.419-.56-.427l-.477-.008c-.166 0-.435.062-.663.311-.228.248-.87.85-.87 2.073 0 1.223.891 2.405 1.015 2.571.124.166 1.753 2.677 4.246 3.754.593.257 1.057.41 1.418.525.596.189 1.139.162 1.568.098.479-.071 1.469-.6 1.677-1.182.207-.58.207-1.077.145-1.182-.062-.105-.228-.166-.476-.29z"/>
    </svg>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { cartCount } = useCart();

  const siteUrl = typeof window !== "undefined" ? window.location.origin : "https://kalayhomes.com";
  const shareText = "Discover curated artisanal tableware, handcrafted ceramics, and home essentials at KalayHomes.";

  const handleShareClick = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "KalayHomes — Handcrafted Tableware & Home Essentials",
          text: shareText,
          url: siteUrl,
        });
        return;
      } catch (err) {
        // User cancelled or share sheet dismissed; fallback to modal
      }
    }
    setIsShareModalOpen(true);
  };

  const handleCopyLink = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(siteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <div className="font-body-md text-on-surface bg-background selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-stone-900/50 z-[60] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-64 bg-background z-[70] transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col border-r border-stone-200/50 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b border-stone-200/50">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <img src="/logo.png" alt="Kalay-Homes" className="h-10 w-auto object-contain opacity-80" />
          </Link>
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-stone-500 hover:text-primary transition-colors">
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col p-6 gap-6">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="font-sans text-sm tracking-wider uppercase text-stone-900 font-semibold hover:text-[#E7A823] transition-colors">Home</Link>
          <Link to="/collection" onClick={() => setIsMobileMenuOpen(false)} className="font-sans text-sm tracking-wider uppercase text-stone-900 font-semibold hover:text-[#E7A823] transition-colors">Collection</Link>
          <Link to="/our-story" onClick={() => setIsMobileMenuOpen(false)} className="font-sans text-sm tracking-wider uppercase text-stone-900 font-semibold hover:text-[#E7A823] transition-colors">Our Story</Link>
          <Link to="/cart" onClick={() => setIsMobileMenuOpen(false)} className="font-sans text-sm tracking-wider uppercase text-stone-900 font-semibold hover:text-[#E7A823] transition-colors flex items-center justify-between">
            Cart
            {cartCount > 0 && <span className="bg-primary-container text-[10px] px-2 py-0.5 rounded-full text-on-primary-container">{cartCount}</span>}
          </Link>
        </div>
      </div>

      <header className="bg-background dark:bg-stone-950 docked full-width top-0 z-50 border-b border-stone-200/50 dark:border-stone-800/50 shadow-[0_4px_20px_-10px_rgba(74,50,16,0.05)] sticky">
        <div className="flex items-center justify-between px-4 md:px-8 py-6 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-6 w-1/3">
            <button className="text-stone-500 dark:text-stone-400 hover:text-primary transition-colors duration-300 lg:hidden" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
            <div className="hidden lg:flex gap-8">
              <Link to="/" className="font-sans text-xs tracking-wider uppercase text-stone-900 dark:text-stone-50 font-semibold hover:text-[#E7A823] transition-colors">Home</Link>
              <Link to="/collection" className="font-sans text-xs tracking-wider uppercase text-stone-500 dark:text-stone-400 font-normal hover:text-[#E7A823] transition-colors">Collection</Link>
              <Link to="/our-story" className="font-sans text-xs tracking-wider uppercase text-stone-500 dark:text-stone-400 font-normal hover:text-[#E7A823] transition-colors">Our Story</Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center w-1/3">
            <Link to="/" className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300">
              <img src="/logo.png" alt="Kalay-Homes" className="h-16 md:h-20 w-auto object-contain" />
            </Link>
          </div>
          <div className="flex items-center justify-end gap-6 w-1/3">
            <button className="text-stone-500 dark:text-stone-400 hover:text-primary transition-colors duration-300 hidden md:block">
              <Search size={24} />
            </button>
            <Link to="/cart" className="text-stone-500 dark:text-stone-400 hover:text-primary transition-colors duration-300 relative">
              <ShoppingBag size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-container text-[10px] px-1.5 rounded-full text-on-primary-container min-w-[18px] text-center">{cartCount}</span>
              )}
            </Link>
          </div>
        </div>
      </header>

      <div className="flex-1">{children}</div>

      <footer className="full-width py-20 bg-background dark:bg-stone-950 border-t border-stone-200/50 dark:border-stone-800/50 mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-serif text-xl tracking-widest text-stone-900 dark:text-stone-100 uppercase">KALAYHOMES</span>
            </div>
            <div className="flex items-center flex-wrap gap-4 pt-2">
              <a 
                href="https://www.instagram.com/kalayhomes?stkn=cTlrOXUwdWU1bzFz"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs tracking-wider uppercase font-semibold px-3 py-1 rounded-full border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-primary hover:text-primary transition-colors"
              >
                Follow
              </a>
              <div className="flex items-center gap-4">
                <a className="text-stone-400 hover:text-primary transition-colors" href="https://www.instagram.com/kalayhomes?stkn=cTlrOXUwdWU1bzFz" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
                <a className="text-stone-400 hover:text-primary transition-colors" href="https://www.facebook.com/share/19Aqb3yJqb/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} /></a>
                <a className="text-stone-400 hover:text-primary transition-colors" href="mailto:support@kalayhomes.com" aria-label="Email"><Mail size={20} /></a>
                <button type="button" onClick={handleShareClick} className="text-stone-400 hover:text-primary transition-colors cursor-pointer" aria-label="Share" title="Share KalayHomes"><Share2 size={20} /></button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="font-label-caps text-label-caps text-stone-900 dark:text-stone-100">SHOP</h4>
              <ul className="space-y-2 font-sans text-xs tracking-wider uppercase">
                <li><Link to="/collection" className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all">Collection</Link></li>
                <li><Link to="/" className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all">New Arrivals</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-label-caps text-label-caps text-stone-900 dark:text-stone-100">ORDERS & SERVICES</h4>
              <ul className="space-y-2 font-sans text-xs tracking-wider uppercase">
                <li><Link to="/cart" className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all">Track Order</Link></li>
                <li><Link to="/terms" className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all">Shipping & Delivery</Link></li>
                <li><a className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all" href="mailto:support@kalayhomes.com">Customer Care</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-label-caps text-label-caps text-stone-900 dark:text-stone-100">COMPANY</h4>
              <ul className="space-y-2 font-sans text-xs tracking-wider uppercase">
                <li><Link to="/our-story" className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all">Our Story</Link></li>
                <li><a className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all" href="#">Sustainability</a></li>
                <li><a className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all" href="mailto:support@kalayhomes.com">Support</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-20 pt-8 border-t border-stone-200/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-sans text-xs tracking-wider uppercase text-stone-400 text-center">© 2025 KALAYHOMES. EVERYDAY INTENTIONALITY.</span>
          <div className="flex gap-8">
            <Link className="font-sans text-xs tracking-wider uppercase text-stone-500 hover:text-stone-900 transition-colors" to="/privacy">Privacy</Link>
            <Link className="font-sans text-xs tracking-wider uppercase text-stone-500 hover:text-stone-900 transition-colors" to="/terms">Terms</Link>
          </div>
        </div>
      </footer>

      {/* Share Modal */}
      {isShareModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs transition-opacity" 
            onClick={() => setIsShareModalOpen(false)} 
          />
          <div className="relative w-full max-w-md bg-background dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 shadow-2xl z-10 space-y-5 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200/60 dark:border-stone-800/60">
              <h3 className="font-serif text-lg font-normal tracking-wide text-stone-900 dark:text-stone-100">Share KalayHomes</h3>
              <button 
                onClick={() => setIsShareModalOpen(false)}
                className="text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 p-1 cursor-pointer transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <p className="font-sans text-xs text-stone-500 dark:text-stone-400">
              Share our handcrafted tableware & home essentials with friends and family:
            </p>

            <div className="grid grid-cols-4 gap-2 text-center">
              {/* WhatsApp */}
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + " " + siteUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <WhatsAppIcon size={24} />
                </div>
                <span className="font-sans text-[11px] font-medium text-stone-700 dark:text-stone-300">WhatsApp</span>
              </a>

              {/* Facebook */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Facebook size={24} />
                </div>
                <span className="font-sans text-[11px] font-medium text-stone-700 dark:text-stone-300">Facebook</span>
              </a>

              {/* Message (SMS) */}
              <a
                href={`sms:?&body=${encodeURIComponent(shareText + " " + siteUrl)}`}
                className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <MessageCircle size={24} />
                </div>
                <span className="font-sans text-[11px] font-medium text-stone-700 dark:text-stone-300">Message</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/kalayhomes?stkn=cTlrOXUwdWU1bzFz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-pink-500/10 text-pink-600 dark:text-pink-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Instagram size={24} />
                </div>
                <span className="font-sans text-[11px] font-medium text-stone-700 dark:text-stone-300">Instagram</span>
              </a>
            </div>

            {/* Copy Link Field */}
            <div className="pt-2">
              <div className="flex items-center gap-2 bg-stone-100 dark:bg-stone-800/60 p-2 rounded-xl border border-stone-200/60 dark:border-stone-700/60">
                <input 
                  type="text" 
                  readOnly 
                  value={siteUrl}
                  className="flex-1 bg-transparent border-none text-xs font-sans text-stone-600 dark:text-stone-300 px-2 focus:outline-none select-all"
                />
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 font-sans text-xs font-semibold hover:opacity-90 transition-opacity cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-400 dark:text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
