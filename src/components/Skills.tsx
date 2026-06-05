"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "./Section";
import { FaReact, FaNodeJs, FaMicrosoft, FaDatabase, FaGithub, FaChartBar, FaRobot, FaChartPie } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss, SiN8N, SiRedux } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

const technologies = [
  { name: "React.js", icon: <FaReact size={48} className="text-[#61DAFB]" /> },
  { name: "Next.js", icon: <SiNextdotjs size={48} className="text-slate-900 dark:text-white" /> },
  { name: "Redux", icon: <SiRedux size={48} className="text-[#764ABC]" /> },
  { name: "TypeScript", icon: <SiTypescript size={48} className="text-[#3178C6]" /> },
  { name: "JavaScript", icon: <IoLogoJavascript size={48} className="text-[#F7DF1E]" /> },
  { name: "Node.js", icon: <FaNodeJs size={48} className="text-[#339933]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={48} className="text-[#06B6D4]" /> },
  { name: "MongoDB", icon: <SiMongodb size={48} className="text-[#47A248]" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={48} className="text-[#4169E1]" /> },
  { name: "Dynamics 365", icon: <FaMicrosoft size={48} className="text-[#00A4EF]" /> },
  { name: "Power BI", icon: <FaChartBar size={48} className="text-[#F2C811]" /> },
  { name: "Tableau", icon: <FaChartPie size={48} className="text-[#E97627]" /> },
  { name: "n8n", icon: <SiN8N size={48} className="text-[#FF6B6B]" /> },
  { name: "Generative AI", icon: <FaRobot size={48} className="text-[#10A37F]" /> },
  { name: "REST APIs", icon: <FaDatabase size={48} className="text-slate-600 dark:text-slate-400" /> },
  { name: "Git & GitHub", icon: <FaGithub size={48} className="text-slate-800 dark:text-slate-200" /> },
];

export function Skills() {
  return (
    <Section id="skills" className="bg-slate-50/20 dark:bg-slate-950/20">
      <SectionHeading 
        title="Technical Expertise" 
        subtitle="A versatile toolkit combining modern web development, enterprise ERP solutions, and intelligent workflow automation."
        align="center"
      />
      
      <div className="max-w-5xl mx-auto mt-10 md:mt-12 mb-12 md:mb-16 px-4">
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-3 md:gap-4">
          <div className="bg-blue-500/5 hover:bg-blue-500/10 transition-colors py-3 md:py-4 px-4 md:px-6 rounded-xl md:rounded-2xl border border-slate-200/50 flex-1 flex items-center justify-center text-center">
            <span className="text-sm md:text-base font-bold text-blue-600">Software Developer</span>
          </div>
          <div className="bg-blue-500/5 hover:bg-blue-500/10 transition-colors py-3 md:py-4 px-4 md:px-6 rounded-xl md:rounded-2xl border border-slate-200/50 flex-1 flex items-center justify-center text-center">
            <span className="text-sm md:text-base font-bold text-blue-600">Full Stack Web Developer</span>
          </div>
          <div className="bg-blue-500/5 hover:bg-blue-500/10 transition-colors py-3 md:py-4 px-4 md:px-6 rounded-xl md:rounded-2xl border border-slate-200/50 flex-1 flex items-center justify-center text-center">
            <span className="text-sm md:text-base font-bold text-blue-600">Dynamics 365 Technical Consultant</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-8 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className={`flex flex-col items-center justify-center p-6 hover:-translate-y-2 transition-all duration-300 group cursor-default`}
            >
              <div className="mb-4 transform transition-transform duration-300 group-hover:rotate-6 drop-shadow-sm">
                {tech.icon}
              </div>
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300 text-center transition-colors group-hover:text-orange-500 dark:group-hover:text-orange-400">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
