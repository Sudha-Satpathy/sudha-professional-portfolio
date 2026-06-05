"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "./Section";
import { useState } from "react";
import { CheckCircle2, ArrowRight, ArrowLeft, Briefcase, Database, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

const caseStudies = [
  {
    title: "Attendify",
    tagline: "Attendance & Engagement Automation",
    icon: <Briefcase className="w-16 h-16" />,
    color: "bg-blue-100 dark:bg-blue-900/40",
    glow: "shadow-blue-500/20",
    problem: "Manual attendance tracking and learner engagement monitoring created significant operational overhead and lacked actionable insights.",
    solution: "Built an automated attendance system that validates attendance through productive feedback submissions, creating a dual-purpose workflow.",
    architecture: "Next.js frontend, Node.js backend, MongoDB database, REST APIs, Vercel deployment.",
    impact: [
      "Reduced manual attendance tracking effort by 80%.",
      "Improved visibility into learner engagement.",
      "Centralized attendance and feedback workflows."
    ],
  },
  {
    title: "ERP Platform",
    tagline: "Odisha Government Implementation",
    icon: <Database className="w-16 h-16" />,
    color: "bg-blue-100 dark:bg-blue-900/40",
    glow: "shadow-blue-500/20",
    problem: "Over 300 ITI and Polytechnic institutions required standardized workflows and centralized management for operations.",
    solution: "Implemented and customized Microsoft Dynamics 365 Business Central modules tailored for educational administration.",
    architecture: "Microsoft Dynamics 365 Business Central, Sales, Purchase, Inventory, Master Data Management.",
    impact: [
      "Standardized business processes across 300+ institutions.",
      "Dramatically improved operational efficiency.",
      "Enabled smooth centralized ERP adoption."
    ],
  },
  {
    title: "Teacher's Naukri",
    tagline: "Educational Recruitment Portal",
    icon: <Bot className="w-16 h-16" />,
    color: "bg-blue-100 dark:bg-blue-900/40",
    glow: "shadow-blue-500/20",
    problem: "Educational institutions struggled with a fragmented recruitment process, while teachers lacked a centralized platform to find relevant roles.",
    solution: "Developed and deployed a robust job portal platform connecting educational institutions directly with teaching professionals.",
    architecture: "React.js frontend, Node.js backend, Express, MongoDB, REST APIs.",
    impact: [
      "Streamlined candidate management workflows.",
      "Centralized job postings for institutions.",
      "Improved recruitment efficiency by 60%."
    ],
  }
];

function FlipCaseStudyCard({ study, index }: { study: typeof caseStudies[0], index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-[600px] w-full [perspective:1000px]"
    >
      <motion.div
        className="w-full h-full relative [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
      >
        <div className={cn(
          `absolute inset-0 [backface-visibility:hidden] glass-card rounded-[3rem] p-8 md:p-10 flex flex-col items-center text-center border border-slate-200/60 dark:border-slate-800/60 shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-500/30 transition-all duration-500 bg-blue-500/5 dark:bg-blue-500/10 group`,
          study.glow
        )}>
          <div className={`flex items-center justify-center mb-8 text-blue-600 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-500`}>
            {study.icon}
          </div>
          
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors duration-300">{study.title}</h3>
          <p className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-6">{study.tagline}</p>
          
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-grow">
            {study.problem}
          </p>
          
          <div className="mt-auto pt-6 w-full border-t border-slate-200/50 dark:border-slate-800/50 flex justify-center">
            <button 
              onClick={() => setIsFlipped(true)}
              className="w-full flex justify-center items-center gap-2 text-sm font-bold text-white bg-blue-600 group-hover:bg-orange-500 transition-colors duration-300 py-3 rounded-xl shadow-md group-hover:shadow-lg group-hover:shadow-orange-500/20"
            >
              View Case Study <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Back Face */}
        <div className={cn(
          `absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] glass-card rounded-[3rem] p-8 flex flex-col border border-slate-200/60 dark:border-slate-800/60 shadow-xl bg-blue-500/5 dark:bg-blue-500/10`,
          study.glow
        )}>
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-200/50 dark:border-slate-800/50">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{study.title}</h3>
            <button 
              onClick={() => setIsFlipped(false)} 
              className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
            >
              <ArrowLeft size={16} />
            </button>
          </div>
          
          <div className="overflow-y-auto flex-grow space-y-6 pr-2">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-green-600 dark:text-green-400 mb-2">The Solution</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{study.solution}</p>
            </div>
            
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Architecture</h4>
              <p className="text-xs font-mono text-slate-700 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/80 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
                {study.architecture}
              </p>
            </div>
            
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">Measurable Impact</h4>
              <ul className="space-y-3">
                {study.impact.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-slate-200/50 dark:border-slate-800/50">
            <button 
              onClick={() => setIsFlipped(false)}
              className="w-full py-3 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold text-sm hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors flex justify-center items-center gap-2"
            >
              <ArrowLeft size={16} /> Back
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function CaseStudies() {
  return (
    <Section id="case-studies" className="bg-slate-50/20 dark:bg-slate-900/20 backdrop-blur-md border-y border-slate-200/50 dark:border-slate-800/50">
      <SectionHeading 
        title="Featured Case Studies" 
        subtitle="Deep dives into complex problems and the engineered solutions that drove business impact."
        align="center"
      />
      
      <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto">
        {caseStudies.map((study, index) => (
          <FlipCaseStudyCard 
            key={index} 
            study={study} 
            index={index} 
          />
        ))}
      </div>
    </Section>
  );
}
