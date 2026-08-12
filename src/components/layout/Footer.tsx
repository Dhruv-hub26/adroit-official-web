import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  ArrowRight, 
  Sparkles,
  Share2
} from 'lucide-react';

interface FooterProps {
  onOpenDemoModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemoModal }) => {
  return (
    <footer id="footer" className="bg-slate-950 text-slate-300 pt-20 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Contact Bar */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 rounded-3xl p-8 sm:p-10 border border-slate-800 mb-16 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Stay Ahead in AI & Enterprise Tech</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Subscribe to Adroit Tech Insights
            </h3>
            <p className="text-slate-400 text-sm">
              Get monthly updates on enterprise software architecture, AI agent trends, and EdTech innovations.
            </p>
          </div>

          <div className="lg:col-span-6">
            <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed to Adroit Insights newsletter!'); }} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Enter your work email..."
                className="w-full px-4 py-3.5 bg-slate-900 border border-slate-700 rounded-xl text-sm font-medium text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-colors flex-shrink-0 flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* 4 Column Sitemap Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-800">
          
          {/* Column 1: Brand Info */}
          <div className="col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white p-1 shadow-md border border-slate-700 flex items-center justify-center">
                <img 
                  src="/adroit-logo-cropped.png" 
                  alt="Adroit Technologies Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-black text-white tracking-tight">
                  Adroit <span className="text-blue-500">Technologies</span>
                </h3>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                  Innovative Solutions Pvt Ltd
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Empowering global enterprise leaders and EdTech innovators with scalable AI-driven software, high-concurrency sandboxes, and intelligent remote workspaces.
            </p>

            <div className="space-y-2 text-xs text-slate-400 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>Adroit Tech Park, Cyber City, Connaught Place, New Delhi - 110001, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <a href="mailto:contact@adroit-tech.ai" className="hover:text-white transition-colors">contact@adroit-tech.ai</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <a href="tel:+911140008888" className="hover:text-white transition-colors">+91 (011) 4000-8888</a>
              </div>
            </div>

            <button
              onClick={onOpenDemoModal}
              className="mt-2 text-xs font-bold bg-blue-600/20 text-blue-300 border border-blue-500/30 px-3.5 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-all flex items-center gap-2"
            >
              <span>Schedule Enterprise Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Column 2: Products */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Products
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#features" className="hover:text-blue-400 transition-colors">Custom Software Engineering</a></li>
              <li><a href="#features" className="hover:text-blue-400 transition-colors">AI Integration & Automation</a></li>
              <li><a href="#features" className="hover:text-blue-400 transition-colors">Tech Talent Assessment</a></li>
              <li><a href="#features" className="hover:text-blue-400 transition-colors">Remote Interview Workspace</a></li>
              <li><a href="#features" className="hover:text-blue-400 transition-colors">Autonomous AI Dev Agents</a></li>
              <li><a href="#features" className="hover:text-blue-400 transition-colors">Code Execution Sandbox</a></li>
            </ul>
          </div>

          {/* Column 3: Solutions & Platform */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Platform & Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#ecosystem" className="hover:text-blue-400 transition-colors">Adaptive Learning Systems</a></li>
              <li><a href="#ecosystem" className="hover:text-blue-400 transition-colors">Enterprise Cloud Integration</a></li>
              <li><a href="#ecosystem" className="hover:text-blue-400 transition-colors">Bank-Grade AI Proctoring</a></li>
              <li><a href="#why-adroit" className="hover:text-blue-400 transition-colors">Developer Telemetry</a></li>
              <li><a href="#ecosystem" className="hover:text-blue-400 transition-colors">EdTech Skill Infrastructure</a></li>
              <li><a href="#why-adroit" className="hover:text-blue-400 transition-colors">Global Pod Engineering</a></li>
            </ul>
          </div>

          {/* Column 4: Company & Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Company & Legal
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Adroit Technologies</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400 transition-colors">Customer Success Stories</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers (We're Hiring!)</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Security & Trust Center</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Logo & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <img 
              src="/adroit-logo-cropped.png" 
              alt="Adroit Logo Mark" 
              className="w-7 h-7 object-contain bg-white rounded p-0.5"
            />
            <span>
              © {new Date().getFullYear()} Adroit Technologies Innovative Solutions Pvt Ltd. All rights reserved.
            </span>
          </div>

          {/* System Status Indicator */}
          <div className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300 font-semibold">All Systems Operational</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">99.99% SLA</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-slate-400">
            <a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-1">
              <Globe className="w-4 h-4" /> Global
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-1">
              <Share2 className="w-4 h-4" /> Connect
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
