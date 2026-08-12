import React from 'react';

// Custom Brand SVG Tech Logos
const TechMahindraLogo: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 36 36" fill="currentColor" className={className}>
    <rect x="4" y="6" width="6" height="24" rx="2" />
    <rect x="14" y="6" width="18" height="6" rx="2" />
    <rect x="14" y="15" width="18" height="6" rx="2" />
    <rect x="14" y="24" width="10" height="6" rx="2" />
  </svg>
);

const InfosysLogo: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 36 36" fill="currentColor" className={className}>
    <path d="M6 6h7v24H6V6zm9 0h15v6H15V6zm0 9h15v15H22V21h-7v-6z" />
    <circle cx="26.5" cy="25.5" r="3.5" />
  </svg>
);

const EnterpriseCloudLogo: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 22a6 6 0 0 1 2-11.7 8 8 0 0 1 15 2.7 5.5 5.5 0 0 1 2 10.7" />
    <path d="M12 28h12M15 24h6" />
  </svg>
);

const GlobalEduLogo: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <ellipse cx="18" cy="18" rx="14" ry="6" transform="rotate(-20 18 18)" />
    <circle cx="18" cy="18" r="7" />
    <path d="M18 4v4M18 28v4" />
  </svg>
);

const CodeScaleLogo: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10 12l-6 6 6 6M26 12l6 6-6 6M20 8l-4 20" />
  </svg>
);

const CyberCoreLogo: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 4l12 6v10c0 7.5-5.5 13.5-12 16C11.5 33.5 6 27.5 6 20V10l12-6z" />
    <circle cx="18" cy="18" r="4" fill="currentColor" />
  </svg>
);

const DataMatrixLogo: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 36 36" fill="currentColor" className={className}>
    <rect x="5" y="5" width="8" height="8" rx="2" />
    <rect x="17" y="5" width="8" height="8" rx="2" />
    <rect x="29" y="5" width="4" height="8" rx="1" />
    <rect x="5" y="17" width="8" height="8" rx="2" />
    <rect x="17" y="17" width="14" height="8" rx="2" />
    <rect x="5" y="29" width="20" height="4" rx="1" />
  </svg>
);

const CloudGridLogo: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="4" y="6" width="28" height="8" rx="2" />
    <rect x="4" y="18" width="28" height="8" rx="2" />
    <circle cx="9" cy="10" r="1" fill="currentColor" />
    <circle cx="9" cy="22" r="1" fill="currentColor" />
    <path d="M22 10h5M22 22h5M18 30v-4" />
  </svg>
);

interface ClientBrand {
  name: string;
  desc: string;
  Logo: React.FC<{ className?: string }>;
}

export const ClientLogos: React.FC = () => {
  const clients: ClientBrand[] = [
    { name: 'Tech Mahindra', desc: 'Enterprise Cloud Partner', Logo: TechMahindraLogo },
    { name: 'Infosys', desc: 'Global Digital Transformation', Logo: InfosysLogo },
    { name: 'Enterprise Cloud', desc: 'Scalable Infrastructure', Logo: EnterpriseCloudLogo },
    { name: 'GlobalEdu Systems', desc: 'EdTech Platform Scale', Logo: GlobalEduLogo },
    { name: 'CodeScale Labs', desc: 'Developer Engineering', Logo: CodeScaleLogo },
    { name: 'CyberCore Inc', desc: 'Security Infrastructure', Logo: CyberCoreLogo },
    { name: 'DataMatrix Global', desc: 'Big Data & Analytics', Logo: DataMatrixLogo },
    { name: 'CloudGrid Infra', desc: 'Hyperscale Architectures', Logo: CloudGridLogo },
  ];

  // Duplicate for seamless infinite marquee loop
  const marqueeItems = [...clients, ...clients, ...clients];

  return (
    <section className="py-12 bg-white border-y border-slate-200/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
          Trusted by Leading Enterprises & EdTech Innovators Worldwide
        </p>
      </div>

      {/* Marquee Wrapper with Smooth Fade Edges */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient Mask Overlays for Fading */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex w-max animate-marquee space-x-8 items-center py-2">
          {marqueeItems.map((client, index) => {
            const LogoComponent = client.Logo;
            return (
              <div 
                key={index}
                className="flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-slate-50/80 border border-slate-200/70 text-slate-600 hover:text-[#0056D2] hover:bg-blue-50/50 hover:border-[#0056D2]/40 hover:shadow-lg hover:shadow-[#0056D2]/10 hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer min-w-[200px]"
              >
                {/* SVG Brand Logo Container with Grayscale to Brand Blue (#0056D2) Hover Effect */}
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 group-hover:border-[#0056D2]/30 group-hover:bg-[#0056D2]/10 flex items-center justify-center text-slate-500 group-hover:text-[#0056D2] filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 shadow-sm flex-shrink-0">
                  <LogoComponent className="w-5 h-5" />
                </div>
                
                <div className="flex flex-col text-left">
                  <span className="font-extrabold text-sm text-slate-700 group-hover:text-[#0056D2] tracking-tight transition-colors duration-300">
                    {client.name}
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold group-hover:text-[#0056D2]/80 transition-colors duration-300">
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
