"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "./Section";

const experiences = [
  {
    role: "Software Developer & Instructor",
    company: "NxtWave",
    period: "Mar 2025 – Present",
    description: "Developing workflow automation solutions and web applications using React.js, APIs, and modern tools. Building AI-powered applications including content automation, news summarization, and conversational assistants. Delivering technical training programs on MERN Stack.",
    skills: ["React.js", "AI Automation", "Full Stack", "MERN Stack"],
  },
  {
    role: "Technical Trainer – MERN Stack",
    company: "DataValley India Pvt. Ltd.",
    period: "Aug 2024 – Oct 2024",
    description: "Delivered hands-on training on React.js, Node.js, Express.js, MongoDB, and JavaScript development. Conducted practical sessions on REST APIs, database integration, and deployment workflows.",
    skills: ["React.js", "Node.js", "MongoDB", "Technical Training"],
  },
  {
    role: "Freelance Full Stack Developer",
    company: "TeachersNaukri",
    period: "Feb 2024 – Jul 2024",
    description: "Developed and deployed a job portal platform connecting educational institutions with teaching professionals. Built frontend interfaces and backend APIs for job posting, candidate management, and recruitment workflows.",
    skills: ["Full Stack", "Frontend", "Backend APIs", "Stakeholder Collaboration"],
  },
  {
    role: "Microsoft Dynamics 365 Technical Consultant",
    company: "Unikul Solutions Pvt. Ltd.",
    period: "Feb 2022 – Mar 2023",
    description: "Worked on Microsoft Dynamics 365 Business Central ERP implementation for Odisha Government supporting 300+ institutions. Configured Sales, Purchase, Inventory, and Master Data modules.",
    skills: ["MS Dynamics 365", "Business Central", "ERP Configuration", "Business Analysis"],
  }
];

export function Experience() {
  return (
    <Section id="experience" className="bg-transparent">
      <SectionHeading 
        title="Professional Experience" 
        subtitle="A track record of building production-grade software and enterprise solutions."
      />
      
      <div className="max-w-4xl mx-auto relative mt-16">
        {/* Vertical Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 transform md:-translate-x-1/2"></div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-orange-500 border-4 border-white shadow-sm transform -translate-x-1.5 md:-translate-x-2 mt-1.5 md:mt-0 z-10"></div>
              
              <div className="md:w-1/2 pl-8 md:pl-0">
                <div className={`glass-card p-6 md:p-8 rounded-2xl bg-blue-500/5 dark:bg-blue-500/10 border border-slate-200/60 dark:border-slate-800/60 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-2 hover:border-orange-500/30 transition-all duration-500 group ${
                  index % 2 === 0 ? "md:ml-12" : "md:mr-12"
                }`}>
                  <div className="flex flex-col gap-1 mb-4">
                    <span className="text-sm font-bold text-orange-500 tracking-wider uppercase">{exp.period}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-orange-500 transition-colors duration-300">{exp.role}</h3>
                    <h4 className="text-lg font-medium text-slate-500">{exp.company}</h4>
                  </div>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-white/60 text-slate-600 rounded-full text-xs font-medium border border-slate-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
