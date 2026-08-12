import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, CheckCircle2, ArrowRight, Building2, Mail, User, ShieldCheck, Loader2 } from 'lucide-react';
import type { DemoFormData } from '../../types';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<DemoFormData>({
    fullName: '',
    email: '',
    company: '',
    companySize: '50-250',
    productInterest: 'Custom Software & AI Integration',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulated network request state transition
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Auto-close / smoothly dismiss the modal after 2 seconds
      timerRef.current = setTimeout(() => {
        handleClose();
      }, 2000);
    }, 1000);
  };

  const handleReset = () => {
    setIsSubmitting(false);
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      company: '',
      companySize: '50-250',
      productInterest: 'Custom Software & AI Integration',
      message: ''
    });
  };

  const handleClose = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    onClose();
    setTimeout(() => {
      handleReset();
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 z-10 overflow-hidden"
          >
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white p-6 sm:p-8 flex items-center justify-between relative">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>Adroit Enterprise Demo</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white">
                  Schedule a Customized Walkthrough
                </h3>
                <p className="text-blue-200 text-xs sm:text-sm">
                  See how Adroit can accelerate your digital ecosystem in 30 minutes.
                </p>
              </div>

              <button
                onClick={handleClose}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors flex-shrink-0 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 space-y-6"
                >
                  {/* Success Toast / Feedback State Banner */}
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-4 rounded-2xl flex items-center justify-center gap-3 shadow-sm max-w-md mx-auto">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                    <div className="text-left">
                      <p className="font-extrabold text-sm text-emerald-950">
                        Demo Request Submitted!
                      </p>
                      <p className="text-xs font-medium text-emerald-800">
                        Our team will contact you within 24 hours.
                      </p>
                    </div>
                  </div>

                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl shadow-lg">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-2xl font-extrabold text-slate-900">
                      Thank You, {formData.fullName || 'Valued Partner'}!
                    </h4>
                    <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                      An Adroit Solution Architect will reach out to <strong className="text-blue-600 font-bold">{formData.email}</strong> within 24 hours with calendar invites and sandbox access.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl text-xs text-slate-500 max-w-md mx-auto border border-slate-200">
                    <span className="font-bold text-slate-700 block mb-1">Requested Solution:</span>
                    <span>{formData.productInterest} ({formData.companySize} employees)</span>
                  </div>

                  <p className="text-xs text-slate-400 font-medium italic">
                    Closing modal automatically...
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Jane Doe"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Work Email *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jane@company.com"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Company Name *
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Global Inc"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Company Size
                      </label>
                      <select
                        value={formData.companySize}
                        onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      >
                        <option value="1-50">1 - 50 Employees</option>
                        <option value="50-250">50 - 250 Employees</option>
                        <option value="250-1000">250 - 1,000 Employees</option>
                        <option value="1000+">1,000+ Enterprise</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Primary Solution Interest
                    </label>
                    <select
                      value={formData.productInterest}
                      onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    >
                      <option value="Custom Software & AI Integration">Custom Software & AI Integration</option>
                      <option value="Intelligent Talent Assessment Platform">Intelligent Talent Assessment Platform</option>
                      <option value="Remote Pair-Programming Interview Workspace">Remote Pair-Programming Interview Workspace</option>
                      <option value="EdTech & Adaptive Learning Systems">EdTech & Adaptive Learning Systems</option>
                      <option value="Autonomous AI Dev Agents">Autonomous AI Dev Agents</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Project Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your team setup or upcoming project timelines..."
                      className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      We respect your privacy. No spam guaranteed.
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-7 py-3 rounded-xl shadow-lg shadow-blue-600/25 flex items-center gap-2 transition-all disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                          <span>Submitting Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Request</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
