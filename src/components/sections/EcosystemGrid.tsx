import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Cloud, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  LineChart, 
  ArrowRight,
  Layers
} from 'lucide-react';

interface EcosystemGridProps {
  onOpenDemoModal: () => void;
}

export const EcosystemGrid: React.FC<EcosystemGridProps> = ({ onOpenDemoModal }) => {
  const ecosystemItems = [
    {
      icon: Sparkles,
      tag: 'AI Learning',
      title: 'Adaptive Learning Systems',
      desc: 'Dynamic skill mapping engines that adjust technical curriculum difficulty based on real-time candidate execution metrics.',
      color: 'from-blue-500 to-indigo-600',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Cloud,
      tag: 'Cloud Infra',
      title: 'Cloud Ecosystem Integration',
      desc: 'Native connectors for AWS, Azure, GCP, Kubernetes clusters, and enterprise SSO/SAML authentication providers.',
      color: 'from-sky-500 to-blue-600',
      textColor: 'text-sky-600',
      bgColor: 'bg-sky-50'
    },
    {
      icon: Cpu,
      tag: 'AI Agents',
      title: 'Embedded Intelligence & Autonomous AI',
      desc: 'Fine-tuned LLM agents integrated into developer workflows for instant code generation, auditing, and automated bug fixing.',
      color: 'from-indigo-500 to-purple-600',
      textColor: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      icon: ShieldCheck,
      tag: 'Compliance',
      title: 'Bank-Grade Security & Proctoring',
      desc: 'SOC2 Type II, ISO 27001 certified security with biometric face matching, browser lockouts, and anti-cheating algorithms.',
      color: 'from-emerald-500 to-teal-600',
      textColor: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      icon: Zap,
      tag: 'Sandbox Engine',
      title: 'High-Concurrency Sandbox Architecture',
      desc: 'Containerized execution nodes handling 50,000+ simultaneous candidate submissions with sub-50ms execution latency.',
      color: 'from-amber-500 to-orange-600',
      textColor: 'text-amber-600',
      bgColor: 'bg-amber-50'
    },
    {
      icon: LineChart,
      tag: 'Analytics',
      title: 'Developer Telemetry & Analytics',
      desc: 'Comprehensive engineering intelligence dashboards revealing team velocity, code quality metrics, and competency trends.',
      color: 'from-rose-500 to-pink-600',
      textColor: 'text-rose-600',
      bgColor: 'bg-rose-50'
    }
  ];

  return (
    <section id="ecosystem" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" /> Adroit Digital Platform Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Integrated Enterprise Ecosystem Architecture
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Modular, highly resilient platform components designed to power next-generation software development and EdTech operations.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ecosystemItems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Highlight Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl ${item.bgColor} ${item.textColor} flex items-center justify-center font-bold group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={onOpenDemoModal}
                    className="text-xs font-extrabold text-blue-600 group-hover:text-blue-700 flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[10px] text-slate-400 font-mono">v2.4 Enterprise</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Footer inside Ecosystem */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-2xl font-bold text-white">Need a Customized Enterprise Architecture?</h4>
            <p className="text-blue-200 text-sm max-w-xl">
              Our solution architects design tailored cloud integrations, dedicated sandbox clusters, and custom AI agent workflows for your team.
            </p>
          </div>
          <button
            onClick={onOpenDemoModal}
            className="bg-white text-blue-900 hover:bg-blue-50 font-bold px-7 py-3.5 rounded-xl shadow-lg transition-colors flex-shrink-0"
          >
            Speak to a Solutions Architect
          </button>
        </div>

      </div>
    </section>
  );
};
