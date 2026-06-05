"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Section } from "./Section";
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
    <div ref={ref} className={`flex flex-col items-center justify-center p-8 glass-card rounded-2xl ${bgClass}`}>
      {icon && <div className="mb-4 text-blue-600">{icon}</div>}
      <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-sm md:text-base font-medium text-slate-600 text-center uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export function Metrics() {
  return (
    <Section className="py-12 md:py-20 bg-slate-50/40 backdrop-blur-sm border-y border-slate-200/50">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <Counter end={2} suffix="+" label="Years Experience" icon={<Briefcase className="w-8 h-8" />} bgClass="bg-blue-500/5 dark:bg-blue-500/10" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <Counter end={10} suffix="+" label="Applications Built" icon={<LayoutGrid className="w-8 h-8" />} bgClass="bg-blue-500/5 dark:bg-blue-500/10" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          <Counter end={300} suffix="+" label="Institutions Impacted" icon={<Building2 className="w-8 h-8" />} bgClass="bg-blue-500/5 dark:bg-blue-500/10" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
          <Counter end={5} suffix="+" label="AI Automation Systems" icon={<Cpu className="w-8 h-8" />} bgClass="bg-blue-500/5 dark:bg-blue-500/10" />
        </motion.div>
      </div>
    </Section>
  );
}
