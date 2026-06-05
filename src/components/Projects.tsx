"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "./Section";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Attendify",
    tagline: "Attendance & Engagement Automation Platform",
    description: "Built an internal workflow automation platform that automatically validates attendance through productive learner feedback and engagement tracking.",
    tech: ["Next.js", "Node.js", "MongoDB", "REST APIs", "Tailwind CSS"],
    github: "https://github.com/sudhasatpathy",
    demo: "#",
    color: "from-orange-500/10 to-orange-500/5",
    accent: "bg-orange-500"
  },
  {
    title: "TaskGenie",
    tagline: "AI Productivity Agent",
    description: "Natural language workflow automation system powered by Gemini and Google APIs. Converts everyday requests into executable actions.",
    tech: ["Gemini LLM", "Google APIs", "n8n", "JavaScript"],
    github: "https://github.com/sudhasatpathy",
    demo: "#",
    color: "from-emerald-500/10 to-emerald-500/5",
    accent: "bg-emerald-500"
  },
  {
    title: "ERP Implementation",
    tagline: "Enterprise Resource Planning",
    description: "Microsoft Dynamics 365 Business Central implementation supporting 300+ institutions for Odisha Government.",
    tech: ["MS Dynamics 365", "Business Central", "ERP Configuration"],
    github: "https://github.com/sudhasatpathy",
    demo: "#",
    color: "from-orange-500/10 to-orange-500/5",
    accent: "bg-orange-500"
  },
  {
    title: "AI Shop Assistant",
    tagline: "Conversational Commerce AI",
    description: "Conversational AI assistant for automated product recommendations and customer interactions, significantly improving engagement.",
    tech: ["OpenAI", "React", "Node.js", "Vector DB"],
    github: "https://github.com/sudhasatpathy",
    demo: "#",
    color: "from-pink-500/10 to-pink-500/5",
    accent: "bg-pink-500"
  },
  {
    title: "Podcast Generator",
    tagline: "End-to-End Content Pipeline",
    description: "End-to-end AI pipeline that generates podcast scripts based on topics and converts them into lifelike audio.",
    tech: ["Whisper API", "LangChain", "Python", "React"],
    github: "https://github.com/sudhasatpathy",
    demo: "#",
    color: "from-indigo-500/10 to-indigo-500/5",
    accent: "bg-indigo-500"
  },
  {
    title: "IoT Healthcare",
    tagline: "Real-time Vital Tracking System",
    description: "Healthcare monitoring platform that tracks patient vitals through IoT sensors and generates emergency alerts for caregivers.",
    tech: ["IoT Sensors", "React", "Node.js", "WebSockets"],
    github: "https://github.com/sudhasatpathy",
    demo: "#",
    color: "from-cyan-500/10 to-cyan-500/5",
    accent: "bg-cyan-500"
  }
];

export function Projects() {
  return (
    <Section id="projects" className="bg-transparent">
      <SectionHeading 
        title="Other Featured Projects" 
        subtitle="A selection of applications, automation tools, and enterprise systems I've built."
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative glass-card rounded-2xl overflow-hidden flex flex-col h-full bg-white/60 backdrop-blur-md border border-slate-200/60 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-2 hover:border-orange-500/30 transition-all duration-500"
          >
            {/* Subtle top accent line */}
            <div className={`absolute top-0 left-0 right-0 h-1 ${project.accent} opacity-50 group-hover:opacity-100 transition-opacity`} />
            
            <div className={`pt-8 px-8 pb-4 bg-gradient-to-br ${project.color} transition-colors duration-500 group-hover:bg-transparent`}>
              <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-orange-500 transition-colors">
                {project.title}
              </h3>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {project.tagline}
              </h4>
            </div>
            
            <div className={`p-8 pt-4 flex flex-col flex-grow relative z-10 bg-blue-500/5 dark:bg-blue-500/10`}>
              <p className="text-slate-600 mb-6 flex-grow text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="px-2.5 py-1 bg-white/80 text-slate-600 rounded-md text-[10px] font-bold uppercase tracking-wider border border-slate-200/50 shadow-sm">
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-200/60">
                <a href={project.github} className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
                  <FaGithub size={16} />
                  <span>Source</span>
                </a>
                <a href={project.demo} className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-orange-500 transition-colors ml-auto">
                  <span>Demo</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
