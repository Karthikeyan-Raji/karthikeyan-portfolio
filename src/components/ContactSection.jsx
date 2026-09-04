import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 }
      });

      // Construct mailto link
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry from ' + formData.name
      )}&body=${encodeURIComponent(
        `Hi Karthikeyan,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.open(mailtoUrl, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      {/* Background Lighting Gradients */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-cyan-500/10 via-violet-600/10 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Mail className="w-3.5 h-3.5" />
            <span>Let's Build Something Great</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get In <span className="text-gradient-cyan-violet">Touch</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Have a project in mind, software engineering opening, or want to collaborate? I'd love to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info & Quick Actions (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Contact Information
                </h3>
                <p className="text-xs text-slate-400">
                  Direct channels for inquiries & discussions
                </p>
              </div>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-mono">EMAIL</div>
                      <a href={`mailto:${personalInfo.email}`} className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-300">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    title="Copy Email"
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-mono">PHONE</div>
                      <a href={`tel:${personalInfo.phone}`} className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-300">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/917397503790?text=${encodeURIComponent("Hello Karthikeyan! I saw your portfolio and would like to connect.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-semibold border border-emerald-500/30 flex items-center gap-1"
                  >
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-white/5">
                  <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono">LOCATION</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">CONNECT ON:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-blue-600/20 text-blue-400 border border-white/10 hover:border-blue-500/40 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 transition-all"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right: Interactive Message Form (Span 7) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span>Send Direct Message</span>
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the form below or trigger your native mail client directly.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto text-2xl">
                    ✓
                  </div>
                  <h4 className="text-xl font-bold text-white">Thank You!</h4>
                  <p className="text-sm text-slate-300 max-w-sm mx-auto">
                    Your message draft has been initiated. I'll get back to you as soon as possible!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs sm:text-sm placeholder-slate-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Your Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs sm:text-sm placeholder-slate-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Job Opportunity"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs sm:text-sm placeholder-slate-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Message *</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, or open opportunity..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs sm:text-sm placeholder-slate-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
