"use client";

import { motion } from "framer-motion";
import { Mail, Download, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaMicrosoft, FaChartBar } from "react-icons/fa";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs, 
  SiMongodb, 
  SiPostgresql, 
  SiTailwindcss,
  SiN8N
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Briefcase, LayoutGrid, Building2, Cpu } from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
  icon?: React.ReactNode;
  bgClass?: string;
}

function Counter({ end, suffix = "", label, duration = 2, icon, bgClass = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [end, duration, isInView]);

  return (
    <div ref={ref} className={`flex flex-col items-center justify-center p-6 glass-card rounded-2xl ${bgClass} shadow-lg border border-slate-200/60 dark:border-slate-800/60 group transition-all duration-300 hover:border-orange-500/30`}>
      {icon && <div className="mb-3 text-blue-600 group-hover:text-orange-500 transition-colors duration-300">{icon}</div>}
      <div className="text-3xl sm:text-4xl font-bold text-blue-600 group-hover:text-orange-500 transition-colors duration-300 mb-1">
        {count}
        {suffix}
      </div>
      <div className="text-xs sm:text-sm font-medium text-slate-600 text-center uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export function Hero() {

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-12">
      <div className="container relative z-10 px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="space-y-8 text-center lg:text-left pt-10 lg:pt-0 w-full flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-6"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] font-black tracking-tight text-slate-900 dark:text-white leading-[1.1] mt-6">
                Sudha Satpathy
              </h1>

              <div className="inline-flex items-center text-sm md:text-base font-bold text-orange-500 flex-wrap justify-center lg:justify-start gap-y-2 mt-2">
                Software Developer
                <span className="hidden sm:inline-block mx-3 h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                Fullstack Web Developer
                <span className="hidden sm:inline-block mx-3 h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                Microsoft Dynamics 365 Technical Consultant
              </div>
              
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed mt-4">
                Building scalable web applications, enterprise ERP solutions, and automated workflows.
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed font-medium"
            >
              Software Developer with 2+ years of experience bridging Full Stack Development, Microsoft Dynamics 365 Business Central ERP Implementations, Workflow Automation, and Technical Training.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 pt-4"
            >
              <a
                href="#projects"
                className="inline-flex h-12 sm:h-14 items-center justify-center rounded-full bg-blue-600 px-8 text-sm sm:text-base font-bold text-white shadow-xl shadow-blue-600/20 transition-all hover:bg-blue-700 hover:scale-105 hover:shadow-blue-600/30 active:scale-95"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                className="inline-flex h-12 sm:h-14 items-center justify-center rounded-full border-2 border-slate-200 bg-white/50 backdrop-blur-sm px-8 text-sm sm:text-base font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300 active:scale-95"
              >
                Download Resume
                <Download className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-5 pt-8"
            >
              <SocialLink href="https://github.com/Sudha-Satpathy" icon={<FaGithub className="h-6 w-6" />} />
              <SocialLink href="https://linkedin.com/in/sudha-satpathy-12a149282" icon={<FaLinkedin className="h-6 w-6" />} />
              <SocialLink href="mailto:sudha.satpathy22@gmail.com" icon={<Mail className="h-6 w-6" />} />
            </motion.div>
          </div>

          <div className="w-full">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}>
                <Counter end={2} suffix="+" label="Years Experience" icon={<Briefcase className="w-6 h-6" />} bgClass="bg-blue-500/5 dark:bg-blue-500/10" />
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}>
                <Counter end={10} suffix="+" label="Applications Built" icon={<LayoutGrid className="w-6 h-6" />} bgClass="bg-blue-500/5 dark:bg-blue-500/10" />
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}>
                <Counter end={300} suffix="+" label="Institutions Impacted" icon={<Building2 className="w-6 h-6" />} bgClass="bg-blue-500/5 dark:bg-blue-500/10" />
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }}>
                <Counter end={5} suffix="+" label="AI Automations" icon={<Cpu className="w-6 h-6" />} bgClass="bg-blue-500/5 dark:bg-blue-500/10" />
              </motion.div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/80 border border-slate-200 shadow-sm text-slate-600 transition-all hover:scale-110 hover:text-orange-500 hover:border-orange-200 hover:shadow-md hover:-translate-y-1 glass-card"
    >
      {icon}
    </a>
  );
}
