import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#cases', label: '案例' },
  { href: '#skills', label: '技能' },
  { href: '#contact', label: '联系' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0a0b]/80 backdrop-blur-xl border-b border-[#2a2a2e]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-sm font-bold text-[#f5f5f7] tracking-tight">
            Portfolio
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-[#888894] hover:text-[#f5f5f7] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-lg text-xs font-semibold transition-all duration-300"
            >
              联系我
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <motion.div
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-5 h-[2px] bg-[#f5f5f7] rounded"
            />
            <motion.div
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-5 h-[2px] bg-[#f5f5f7] rounded"
            />
            <motion.div
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-5 h-[2px] bg-[#f5f5f7] rounded"
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#0a0a0b]/95 backdrop-blur-xl border-b border-[#2a2a2e] md:hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-[#888894] hover:text-[#f5f5f7] py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2.5 bg-[#3b82f6] text-white rounded-lg text-sm font-semibold text-center mt-2"
              >
                联系我
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
