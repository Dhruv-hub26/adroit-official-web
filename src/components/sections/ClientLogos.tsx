import React from 'react';
import { 
  Building2, 
  Globe2, 
  Cpu, 
  Terminal, 
  Database, 
  Layers, 
  Cloud, 
  ShieldCheck 
} from 'lucide-react';

export const ClientLogos: React.FC = () => {
  const clients = [
    { name: 'Tech Mahindra', icon: Building2, desc: 'Enterprise Cloud Partner' },
    { name: 'GlobalEdu Systems', icon: Globe2, desc: 'EdTech Scalability' },
    { name: 'CodeScale Labs', icon: Terminal, desc: 'Developer Engineering' },
    { name: 'CyberCore Inc', icon: ShieldCheck, desc: 'Security Infrastructure' },
    { name: 'DataMatrix Global', icon: Database, desc: 'Big Data Solutions' },
    { name: 'CloudGrid Infra', icon: Cloud, desc: 'Cloud Architectures' },
    { name: 'NextGen AI', icon: Cpu, desc: 'Intelligent Automation' },
    { name: 'Synapse Tech', icon: Layers, desc: 'Enterprise Software' },
  ];

  // Duplicate for seamless infinite loop
  const marqueeItems = [...clients, ...clients, ...clients];

  return (
    <section className="py-12 bg-white border-y border-slate-200/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
          Trusted by Leading Enterprises & EdTech Innovators Worldwide
        </p>
      </div>

      {/* Marquee Wrapper with Fade Edges */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient Mask Overlays for Smooth Fading */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex w-max animate-marquee space-x-12 items-center">
          {marqueeItems.map((client, index) => {
            const IconComponent = client.icon;
            return (
              <div 
                key={index}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-50/80 border border-slate-200/60 text-slate-500 hover:text-blue-600 hover:bg-blue-50/60 hover:border-blue-200/80 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-200/60 group-hover:bg-blue-100 flex items-center justify-center text-slate-600 group-hover:text-blue-600 transition-colors">
                  <IconComponent className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-extrabold text-sm text-slate-700 group-hover:text-slate-900 tracking-tight transition-colors">
                    {client.name}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {client.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
