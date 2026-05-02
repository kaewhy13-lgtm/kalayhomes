import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, ShoppingBag, Share, Camera, Mail, HelpCircle, X } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();

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
          <span className="font-display text-xl tracking-[0.25em] text-stone-900 uppercase">KALAY</span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-stone-500 hover:text-primary transition-colors">
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col p-6 gap-6">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="font-sans text-sm tracking-wider uppercase text-stone-900 font-semibold hover:text-[#E7A823] transition-colors">Home</Link>
          <Link to="/collection" onClick={() => setIsMobileMenuOpen(false)} className="font-sans text-sm tracking-wider uppercase text-stone-900 font-semibold hover:text-[#E7A823] transition-colors">Collection</Link>
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
            </div>
          </div>
          <div className="flex-1 flex justify-center w-1/3">
            <Link to="/" className="font-display text-2xl md:text-3xl tracking-[0.25em] text-stone-900 dark:text-stone-100 uppercase text-center">KALAYHOMES</Link>
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
            <p className="font-body-md text-on-secondary-container max-w-md">Curating objects of intentional beauty for the modern home. Handcrafted quality that bridges heritage and contemporary living.</p>
            <div className="flex gap-6 mt-4">
              <a className="text-stone-400 hover:text-primary transition-colors" href="#"><Camera size={24} /></a>
              <a className="text-stone-400 hover:text-primary transition-colors" href="#"><Mail size={24} /></a>
              <a className="text-stone-400 hover:text-primary transition-colors" href="#"><Share size={24} /></a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-label-caps text-label-caps text-stone-900 dark:text-stone-100">SHOP</h4>
              <ul className="space-y-2 font-sans text-xs tracking-wider uppercase">
                <li><Link to="/collection" className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all">Collection</Link></li>
                <li><Link to="/" className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all">New Arrivals</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-label-caps text-label-caps text-stone-900 dark:text-stone-100">COMPANY</h4>
              <ul className="space-y-2 font-sans text-xs tracking-wider uppercase">
                <li><a className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all" href="#">Our Story</a></li>
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
    </div>
  );
}
