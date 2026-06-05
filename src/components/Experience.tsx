"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "./Section";

const experiences = [
  {
    role: "Software Developer & Instructor",
    company: "NxtWave",
    period: "Mar 2025 – Present",
    description: "Developing workflow automation solutions and web applications using React.js. Building AI-powered applications.",
    skills: ["React.js", "AI Automation", "Full Stack"],
  },
  {
    role: "Technical Trainer – MERN",
    company: "DataValley India Pvt. Ltd.",
    period: "Aug 2024 – Oct 2024",
    description: "Delivered hands-on training on React.js, Node.js, Express.js, MongoDB, and JavaScript development.",
    skills: ["React.js", "Node.js", "MongoDB"],
  },
  {
    role: "Full Stack Developer",
    company: "TeachersNaukri",
    period: "Feb 2024 – Jul 2024",
    description: "Developed and deployed a job portal platform connecting educational institutions with teaching professionals.",
    skills: ["Frontend", "Backend APIs"],
  },
  {
    role: "Dynamics 365 Consultant",
    company: "Unikul Solutions Pvt. Ltd.",
    period: "Feb 2022 – Mar 2023",
    description: "Microsoft Dynamics 365 Business Central ERP implementation for Odisha Government supporting 300+ institutions.",
    skills: ["MS Dynamics 365", "ERP"],
  }
];

export function Experience() {
  return (
    <Section id="experience" className="bg-transparent py-16">
      <SectionHeading 
        title="Career Journey" 
        subtitle="A track record of building production-grade software and enterprise solutions."
        align="center"
      />
      
      <div className="max-w-7xl mx-auto mt-16 px-4">
        <div className="relative">
          {/* Horizontal Line (Desktop) */}
          <div className="hidden lg:block absolute top-[2.2rem] left-[10%] right-[10%] h-0.5 bg-slate-200"></div>
          
          {/* Vertical Line (Mobile/Tablet) */}
          <div className="lg:hidden absolute left-[15px] top-4 bottom-4 w-0.5 bg-slate-200"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-10 lg:pl-0 group"
              >
                {/* Timeline Node */}
                <div className="absolute left-[3px] lg:left-1/2 lg:-translate-x-1/2 top-1.5 lg:top-[1.9rem] w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_0_4px_white] z-10 transition-transform duration-300 group-hover:scale-150"></div>
                
                <div className="flex flex-col h-full lg:text-center">
                  <div className="lg:h-[2rem] flex flex-col justify-end lg:mb-8">
                    <span className="text-xs font-bold text-orange-500 tracking-wider uppercase mb-1">{exp.period}</span>
                  </div>
                  
                  <div className="glass-card p-6 rounded-2xl bg-white/60 border border-slate-200/60 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-2 hover:border-orange-500/30 transition-all duration-300 h-full flex flex-col items-start lg:items-center text-left lg:text-center mt-2 lg:mt-0">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-500 transition-colors mb-1">{exp.role}</h3>
                    <h4 className="text-sm font-semibold text-slate-500 mb-4">{exp.company}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-auto justify-start lg:justify-center">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-blue-500/5 text-blue-600 rounded-md text-[10px] font-bold uppercase tracking-wider border border-blue-500/10">
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
      </div>
    </Section>
  );
}
