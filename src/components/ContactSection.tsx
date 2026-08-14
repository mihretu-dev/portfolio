"use client";

import React, { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";
import {
  Mail,
  ExternalLink,
  Check,
  Copy,
  Briefcase,
  Send,
  User,
  MessageSquare,
  AlertCircle,
  Loader2,
} from "lucide-react";

export default function ContactSection() {
  const email = "mihretuhizkel380@gmail.com";
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "Portfolio Contact Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus("sent");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 4000);
      }
    } catch {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 4000);
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-10 scroll-mt-20"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="space-y-2"
      >
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
          <Mail className="w-3.5 h-3.5" />
          <span>Let&apos;s Connect</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
          Get In Touch
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
          Whether you have an open role, a project inquiry, or simply want to connect — feel free to reach out directly.
        </p>
      </motion.div>

      {/* 2 Separate Standalone Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

        {/* CARD 1: Direct Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 relative p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 backdrop-blur-sm shadow-sm dark:shadow-xl flex flex-col justify-between overflow-hidden"
        >
          {/* Card Ambient Glow */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
                <Send className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Send a Message
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Fill out the fields below and I&apos;ll respond directly to your inbox.
              </p>
            </div>

            <form
              id="contact-form"
              aria-label="Contact form"
              onSubmit={handleFormSubmit}
              className="space-y-4"
            >
              {/* Name & Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                    <User className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="e.g., Abebe Bikila"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-700/60 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                    <Mail className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="abebe.bikila@gmail.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-700/60 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="contact-subject" className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                  <Briefcase className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleFormChange}
                  placeholder="e.g., Mobile App & Web Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-700/60 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                  <MessageSquare className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Selam Mihretu, I would like to discuss a software development project..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-700/60 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all resize-none"
                />
              </div>

              {/* Submit Button + Status */}
              <div className="flex items-center gap-4 pt-1">
                <motion.button
                  type="submit"
                  disabled={formStatus === "sending"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:bg-emerald-500/60 text-slate-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 disabled:shadow-none disabled:cursor-not-allowed"
                >
                  {formStatus === "sending" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      Send Message
                    </>
                  )}
                </motion.button>

                <AnimatePresence>
                  {formStatus === "sent" && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400"
                    >
                      <Check className="w-4 h-4" />
                      Message sent successfully!
                    </motion.span>
                  )}
                  {formStatus === "error" && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-1.5 text-sm font-medium text-red-500 dark:text-red-400"
                    >
                      <AlertCircle className="w-4 h-4" />
                      Something went wrong. Try again.
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>
        </motion.div>

        {/* CARD 2: Direct Reach & Social Channels */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-5 relative p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 backdrop-blur-sm shadow-sm dark:shadow-xl flex flex-col justify-between overflow-hidden space-y-6"
        >
          {/* Card Ambient Glow */}
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6 flex-1 flex flex-col justify-between">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Direct Reach &amp; Socials
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Connect via direct email or messaging apps across these platforms.
              </p>
            </div>

            {/* Direct Email Card */}
            <button
              id="contact-copy-email"
              onClick={handleCopyEmail}
              className="group relative p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 text-left transition-all duration-200 flex items-center justify-between gap-4 shadow-sm w-full"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Mail className="w-[18px] h-[18px]" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                    Direct Email
                  </div>
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-slate-950 dark:group-hover:text-white truncate transition-colors">
                    {email}
                  </div>
                </div>
              </div>
              <span className={`shrink-0 transition-all duration-200 ${copied ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400 dark:text-slate-600 group-hover:text-slate-600 dark:group-hover:text-slate-400"}`}>
                {copied ? (
                  <span className="flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    <Check className="w-3.5 h-3.5" /> Copied!
                  </span>
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </span>
            </button>

            {/* Social Profiles Grid */}
            <div className="space-y-3 pt-2">
              <div className="text-[10px] font-mono tracking-widest text-slate-500 uppercase px-1">
                Social Channels
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: "contact-github", label: "GitHub", handle: "@mihretu-dev", href: "https://github.com/mihretu-dev", icon: FaGithub, iconBg: "bg-slate-200 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300", hoverBorder: "hover:border-slate-300 dark:hover:border-slate-700" },
                  { id: "contact-linkedin", label: "LinkedIn", handle: "Mihretu Hizkel", href: "https://www.linkedin.com/in/mihretu-hizkel-734105260/", icon: FaLinkedin, iconBg: "bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400", hoverBorder: "hover:border-blue-500/40" },
                  { id: "contact-instagram", label: "Instagram", handle: "@mh_mire_", href: "https://www.instagram.com/mh_mire_", icon: FaInstagram, iconBg: "bg-pink-500/10 border-pink-500/20 text-pink-600 dark:text-pink-400", hoverBorder: "hover:border-pink-500/40" },
                  { id: "contact-telegram", label: "Telegram", handle: "@Mihretu_H", href: "https://t.me/Mihretu_H", icon: FaTelegram, iconBg: "bg-sky-500/10 border-sky-500/20 text-sky-600 dark:text-sky-400", hoverBorder: "hover:border-sky-500/40" },
                ].map((social) => {
                  const SocialIcon = social.icon;
                  return (
                    <a
                      key={social.id}
                      id={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/90 ${social.hoverBorder} text-left transition-all duration-200 flex items-center justify-between gap-2 shadow-sm`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 ${social.iconBg}`}>
                          <SocialIcon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-slate-950 dark:group-hover:text-white truncate">
                            {social.label}
                          </div>
                          <div className="text-[10px] text-slate-500 truncate">
                            {social.handle}
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 group-hover:text-slate-600 dark:group-hover:text-slate-400 shrink-0" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
