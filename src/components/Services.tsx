"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "./Section";
import { Code2, Server, Cpu, GraduationCap, Briefcase } from "lucide-react";

const services = [
  {
    title: "Full Stack Web Development",
    description: "Building scalable, responsive, and high-performance web applications using the MERN stack (MongoDB, Express, React, Node.js) and Next.js.",
    icon: <Code2 className="w-12 h-12" />,
  },
  {
    title: "ERP Implementation",
    description: "End-to-end implementation and customization of Microsoft Dynamics 365 Business Central to streamline enterprise operations and workflows.",
    icon: <Server className="w-12 h-12" />,
  },
  {
    title: "AI Automation",
    description: "Developing intelligent workflow automations using n8n, Generative AI (LLMs), and API integrations to eliminate manual tasks and boost productivity.",
    icon: <Cpu className="w-12 h-12" />,
  },
  {
    title: "Technical Training",
    description: "Delivering hands-on training programs and workshops on modern web development technologies, specifically focused on the MERN stack.",
    icon: <GraduationCap className="w-12 h-12" />,
  },
  {
    title: "Freelance Consulting",
    description: "Providing technical consulting, business process analysis, and custom software development services for startups and educational institutions.",
    icon: <Briefcase className="w-12 h-12" />,
  }
];

export function Services() {
  return (
    <Section id="services" className="bg-slate-50/40 dark:bg-slate-900/40 backdrop-blur-md border-y border-slate-200/50 dark:border-slate-800/50">
      <SectionHeading 
        title="My Services" 
        subtitle="Specialized technical solutions tailored for modern businesses and enterprises."
        align="center"
      />
      
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-7xl mx-auto mt-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] glass-card p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-2 hover:border-orange-500/30 transition-all duration-500 group flex flex-col bg-blue-500/5 dark:bg-blue-500/10"
          >
            <div className="flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-translate-y-2 text-blue-600 group-hover:text-orange-500 transition-all duration-500">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-orange-500 transition-colors duration-300">{service.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm flex-grow">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
