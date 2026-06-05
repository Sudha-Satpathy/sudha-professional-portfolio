"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "./Section";
import { Send, CheckCircle, Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// EmailJS not installed, using simulation

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Use FormSubmit.co to send the email directly without opening a mail client
      const response = await fetch("https://formsubmit.co/ajax/sudha.satpathy22@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company || "Not provided",
          message: data.message,
          _subject: `New Portfolio Message from ${data.name}`,
          _cc: "sudhasatpathy1222@gmail.com",
          _template: "table" // Uses a nice table format for the email
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message via FormSubmit");
      }
      
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Failed to send message", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="bg-slate-50/40 backdrop-blur-md border-t border-slate-200/50">
      <SectionHeading 
        title="Get In Touch" 
        subtitle="Looking to build something extraordinary? Let's discuss how we can work together."
        align="center"
      />

      <div className="max-w-2xl mx-auto mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card bg-blue-500/5 dark:bg-blue-500/10 rounded-3xl p-8 md:p-10 shadow-xl border border-slate-200/60 relative overflow-hidden"
        >
          {isSuccess ? (
            <div className="absolute inset-0 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center z-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center text-center p-6"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-600">Thank you for reaching out. I&apos;ll get back to you shortly.</p>
              </motion.div>
            </div>
          ) : null}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
                <input
                  id="name"
                  type="text"
                  {...register("name")}
                  className={`w-full px-4 py-2.5 rounded-lg bg-white border shadow-sm focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all text-slate-900 text-sm ${
                    errors.name ? "border-red-500" : "border-slate-200 hover:border-slate-300"
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className={`w-full px-4 py-2.5 rounded-lg bg-white border shadow-sm focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all text-slate-900 text-sm ${
                    errors.email ? "border-red-500" : "border-slate-200 hover:border-slate-300"
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium text-slate-700">Company (Optional)</label>
              <input
                id="company"
                type="text"
                {...register("company")}
                className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200 shadow-sm focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all hover:border-slate-300 text-slate-900 text-sm"
                placeholder="Acme Inc."
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
              <textarea
                id="message"
                rows={5}
                {...register("message")}
                className={`w-full px-4 py-3 rounded-lg bg-white border shadow-sm focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all resize-none text-slate-900 text-sm ${
                  errors.message ? "border-red-500" : "border-slate-200 hover:border-slate-300"
                }`}
                placeholder="How can I help you?"
              />
              {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/50 flex flex-col gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-11 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-md shadow-blue-600/20"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-slate-200/60"></div>
                <span className="flex-shrink-0 mx-4 text-slate-400 text-sm font-medium">Or prefer WhatsApp?</span>
                <div className="flex-grow border-t border-slate-200/60"></div>
              </div>

              <a 
                href="https://wa.me/916370366998"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-11 flex items-center justify-center gap-2 bg-white text-green-600 border border-green-200 hover:bg-green-50 hover:border-green-300 font-medium rounded-lg transition-all active:scale-[0.98] shadow-sm"
              >
                <span>Chat via WhatsApp</span>
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
