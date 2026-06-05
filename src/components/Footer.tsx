"use client";

import { Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/80 backdrop-blur-xl border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6 py-12 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Sudha Satpathy</h2>
            <p className="text-slate-500">Software Developer</p>
          </div>
          
          <div className="flex md:justify-end items-center gap-6">
            <a 
              href="https://github.com/sudhasatpathy" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/sudhasatpathy" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-purple-600 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:contact@sudhasatpathy.com" 
              className="text-slate-400 hover:text-red-500 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors bg-slate-50 px-4 py-2 rounded-full border border-slate-200"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} Sudha Satpathy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
