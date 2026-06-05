"use client";

import { motion } from "framer-motion";

export function Navbar() {
  const links = [
    { name: "HOME", href: "#" },
    { name: "ABOUT ME", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "SERVICES", href: "#services" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT ME", href: "#contact" },
  ];

  return (
    <nav className="w-full bg-slate-100/80 backdrop-blur-md px-6 md:px-12 py-4 flex flex-col lg:flex-row justify-between items-center z-50 sticky top-0 border-b border-slate-200/50 transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-black text-xl tracking-tight text-blue-600 mb-4 lg:mb-0"
      >
        Sudha Satpathy<span className="text-orange-500">.</span>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center gap-6">
        <motion.ul 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {links.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-[11px] sm:text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </nav>
  );
}
