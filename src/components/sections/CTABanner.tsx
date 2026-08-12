import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface CTABannerProps {
  onOpenDemoModal: () => void;
}

export const CTABanner: React.FC<CTABannerProps> = ({ onOpenDemoModal }) => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span>Transform Your Digital Operations Today</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
          Ready to Accelerate Engineering Output with Adroit AI Solutions?
        </h2>

        <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Join leading enterprises and EdTech platforms using Adroit to streamline technical assessment, pair-programming interviews, and AI workflow automation.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenDemoModal}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold text-base px-9 py-4 rounded-xl shadow-xl shadow-blue-600/40 hover:shadow-blue-500/60 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
          >
            <span>Request a Custom Demo</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenDemoModal}
            className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white font-bold text-base px-8 py-4 rounded-xl border border-slate-700 hover:border-slate-600 transition-all flex items-center justify-center gap-2"
          >
            <span>Talk to Engineering Team</span>
          </button>
        </div>

        {/* Security Badges */}
        <div className="pt-8 border-t border-slate-800 flex flex-wrap items-center justify-center gap-8 text-xs font-medium text-slate-400">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> SOC2 Type II Certified
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> ISO 27001 Security
          </span>
          <span className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-blue-400" /> 14-Day Enterprise Sandbox Trial
          </span>
        </div>

      </div>
    </section>
  );
};
