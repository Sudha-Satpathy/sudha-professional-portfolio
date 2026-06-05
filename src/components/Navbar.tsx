"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "HOME", href: "#" },
    { name: "ABOUT", href: "#about" },
    { name: "EXPERTISE", href: "#skills" },
    { name: "JOURNEY", href: "#experience" },
    { name: "CASE STUDIES", href: "#case-studies" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <nav className="w-full bg-slate-50/90 backdrop-blur-md px-6 md:px-12 py-3 md:py-4 flex justify-between items-center z-50 sticky top-0 border-b border-slate-200/50 transition-colors duration-300">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-black text-xl tracking-tight text-blue-600"
        >
          Sudha Satpathy<span className="text-orange-500">.</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <motion.ul 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {links.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-[13px] font-bold text-slate-700 hover:text-blue-600 transition-colors uppercase tracking-wider"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-slate-900 p-2 -mr-2"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[60px] z-40 bg-slate-50/95 backdrop-blur-xl pt-8 px-6 lg:hidden border-t border-slate-200/50 h-[calc(100vh-60px)]"
          >
            <ul className="flex flex-col gap-6 text-center">
              {links.map((link, i) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-black text-slate-900 hover:text-orange-500 transition-colors uppercase tracking-tight block py-2"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
