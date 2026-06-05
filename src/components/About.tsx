"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { Code2, Cpu, Lightbulb, Rocket } from "lucide-react";

const principles = [
  {
    title: "Builder Mindset",
    description: "I approach software development with a product-first mentality, focusing on delivering tangible value rather than just writing code.",
    icon: <Rocket className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Engineering Excellence",
    description: "Writing clean, maintainable, and scalable code is my priority. I design architectures that stand the test of time.",
    icon: <Code2 className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Business Problem Solving",
    description: "Technology is a tool. My real expertise lies in understanding complex business challenges and architecting solutions to solve them.",
    icon: <Lightbulb className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Automation & AI",
    description: "I leverage the latest advancements in AI and workflow automation to eliminate repetitive tasks and 10x operational efficiency.",
    icon: <Cpu className="w-6 h-6 text-orange-500" />,
  }
];

export function About() {
  return (
    <Section id="about" className="bg-white/60 backdrop-blur-md">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Software Developer with 2+ years of experience bridging Full Stack Development, Microsoft Dynamics 365 Business Central ERP Implementations, Workflow Automation, and Technical Training.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            I am experienced in building scalable web applications, delivering enterprise ERP solutions, automating business processes, and developing data-driven applications. I thrive on stakeholder collaboration, rigorous requirement analysis, and end-to-end software delivery.
          </p>
          <div className="pt-4 flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-orange-100 dark:bg-orange-900/40 flex items-center justify-center text-orange-500 dark:text-orange-400 font-bold text-2xl shadow-inner">
              SS
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Sudha Satpathy</h4>
              <p className="text-sm text-slate-500 font-medium">Software Developer & ERP Consultant</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {principles.map((principle, index) => (
            <div key={index} className={`glass-card p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300 bg-blue-500/5 dark:bg-blue-500/10`}>
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
                {principle.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{principle.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
