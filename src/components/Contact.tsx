import React, { useState } from 'react';
import { 
  Mail, Phone, MessageSquare, MapPin, Send, CheckCircle2, 
  AlertCircle, Copy, ExternalLink, Github, Linkedin, Loader2 
} from 'lucide-react';
import { socialLinks } from '../data/socialLinks';
import { ContactFormData, ContactFormErrors, ContactStatus } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<ContactStatus>('idle');
  const [submitError, setSubmitError] = useState('');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      console.warn('Spam detected via honeypot');
      return;
    }

    if (!validate()) return;

    setStatus('loading');
    setSubmitError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
      } else {
        const result: unknown = await response.json().catch(() => null);
        const responseError =
          typeof result === 'object' &&
          result !== null &&
          'error' in result &&
          typeof result.error === 'string'
            ? result.error
            : 'Email could not be sent. Please check the server configuration and try again.';
        setSubmitError(responseError);
        setStatus('fallback');
      }
    } catch {
      setSubmitError('The email server could not be reached. Start the Express server and try again.');
      setStatus('fallback');
    }
  };

  const mailtoFallbackUrl = `mailto:${socialLinks.email.address}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-20 relative bg-dark-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Let's Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in <span className="gradient-text-blue">Touch</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Have a project in mind, an internship or job opportunity, or just want to discuss web development? Reach out directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email */}
            <div className="glass-card p-5 rounded-2xl border border-slate-800/90 hover:border-sky-500/40 transition-all flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">Email Address</span>
                  <a 
                    href={socialLinks.email.mailto} 
                    className="text-sm font-semibold text-white hover:text-sky-300 transition-colors block mt-0.5 break-all"
                  >
                    {socialLinks.email.address}
                  </a>
                  <span className="text-[11px] text-slate-400">Click to open default mail app</span>
                </div>
              </div>
              {socialLinks.email.address && (
                <button
                  type="button"
                  onClick={() => handleCopy(socialLinks.email.address!, 'email')}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors shrink-0"
                  title="Copy Email"
                >
                  {copiedField === 'email' ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              )}
            </div>

            {/* Phone */}
            <div className="glass-card p-5 rounded-2xl border border-slate-800/90 hover:border-sky-500/40 transition-all flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">Phone Contact</span>
                  <a 
                    href={socialLinks.phone.tel} 
                    className="text-sm font-semibold text-white hover:text-indigo-300 transition-colors block mt-0.5"
                  >
                    {socialLinks.phone.number}
                  </a>
                  <span className="text-[11px] text-slate-400">Available for calls & inquiries</span>
                </div>
              </div>
              {socialLinks.phone.number && (
                <button
                  type="button"
                  onClick={() => handleCopy(socialLinks.phone.number!, 'phone')}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors shrink-0"
                  title="Copy Phone"
                >
                  {copiedField === 'phone' ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              )}
            </div>

            {/* WhatsApp */}
            <div className="glass-card p-5 rounded-2xl border border-slate-800/90 hover:border-emerald-500/40 transition-all flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">WhatsApp Direct</span>
                  <a 
                    href={socialLinks.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors block mt-0.5"
                  >
                    {socialLinks.whatsapp.number}
                  </a>
                  <span className="text-[11px] text-slate-400">Instant messaging & chat</span>
                </div>
              </div>
              <a
                href={socialLinks.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 hover:text-white transition-colors shrink-0"
                title="Open WhatsApp"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Location */}
            <div className="glass-card p-5 rounded-2xl border border-slate-800/90 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">Location</span>
                <div className="text-sm font-semibold text-white mt-0.5">
                  {socialLinks.location.formatted}
                </div>
                <span className="text-[11px] text-slate-400">Open to remote & local opportunities</span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="p-5 rounded-2xl bg-dark-900/60 border border-slate-800/80">
              <span className="text-xs font-mono uppercase text-slate-400 tracking-wider block mb-3">
                Social Profiles
              </span>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={socialLinks.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-200 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={socialLinks.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
               
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/90 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">Send Me a Message</h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the form below. I typically respond within 24 business hours.
              </p>

              {status === 'success' && (
                <div className="p-4 mb-6 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-sm block">Message Sent Successfully!</span>
                    Thank you for reaching out. I have received your message and will get back to you shortly.
                  </div>
                </div>
              )}

              {status === 'fallback' && (
                <div className="p-4 mb-6 rounded-xl bg-sky-500/15 border border-sky-500/30 text-sky-200 text-xs flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-sm block text-white">Automatic Email Failed</span>
                      <span>{submitError || 'Your message was not delivered by the server.'}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <a
                      href={mailtoFallbackUrl}
                      className="px-4 py-2 bg-sky-500 hover:bg-sky-400 text-dark-950 font-bold rounded-lg text-xs flex items-center gap-1.5 transition-colors shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" /> Launch Default Email App
                    </a>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs transition-colors"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full bg-dark-900 border rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-slate-800 focus:border-sky-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className={`w-full bg-dark-900 border rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-slate-800 focus:border-sky-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Full Stack Developer Opportunity / Project Inquiry"
                    className={`w-full bg-dark-900 border rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.subject
                        ? 'border-rose-500 focus:border-rose-400'
                        : 'border-slate-800 focus:border-sky-500'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Fatema, I would like to discuss..."
                    className={`w-full bg-dark-900 border rounded-xl p-4 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                      errors.message
                        ? 'border-rose-500 focus:border-rose-400'
                        : 'border-slate-800 focus:border-sky-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3.5 px-6 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white shadow-glow-primary transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
