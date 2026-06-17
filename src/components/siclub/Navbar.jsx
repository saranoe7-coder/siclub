import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Služby', href: '#sluzby' },
  { label: 'O nás', href: '#tim' },
  { label: 'Referencie', href: '#vysledky' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_0_0_hsl(210,30%,92%)]' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 h-20">
        <a href="#">
          <img src="https://media.base44.com/images/public/6a0dcd4ce5fb33a26b41c4d3/0a8a13155_Untitled_design_5_.png" alt="SiCLUB by Strength Institute" className="h-10 w-auto mix-blend-multiply" />
        </a>
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300">{link.label}</a>
          ))}
        </div>
        <a href="/rezervacia" className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full border border-primary text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300">Rezervovať konzultáciu</a>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-foreground" aria-label="Toggle menu">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white/95 backdrop-blur-xl border-t border-border overflow-hidden">
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className="text-lg font-medium text-foreground">{link.label}</a>
              ))}
              <a href="/rezervacia" onClick={() => setMobileOpen(false)} className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium">Rezervovať konzultáciu</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}