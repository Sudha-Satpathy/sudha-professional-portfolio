"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" className="bg-transparent py-10 md:py-16">
      <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8 px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900"
        >
          About Me
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-4 md:space-y-6 text-[15px] md:text-xl text-slate-600 leading-[1.7] md:leading-relaxed mx-auto max-w-3xl"
        >
          {/* Desktop Text */}
          <div className="hidden md:block space-y-6">
            <p>
              I am a Software Developer with 2+ years of experience bridging Full Stack Development, Microsoft Dynamics 365 ERP Implementations, and AI-driven Workflow Automation.
            </p>
            <p>
              My expertise lies in architecting scalable web applications, automating complex business processes, and delivering robust enterprise solutions. I thrive on stakeholder collaboration, rigorous requirement analysis, and end-to-end software engineering.
            </p>
          </div>

          {/* Mobile Text (shorter, scannable paragraphs) */}
          <div className="md:hidden space-y-4 text-left">
            <p>
              Software Developer with 2+ years of experience in Full Stack, ERP, and AI Automation.
            </p>
            <p>
              I build scalable web apps and automate complex enterprise workflows.
            </p>
            <p>
              Focused on robust engineering and solving high-impact business problems.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
