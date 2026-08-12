import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Cpu, 
  Code2, 
  Bot, 
  Video, 
  Sparkles, 
  ShieldCheck, 
  Cloud, 
  Users, 
  Building2, 
  BookOpen, 
  GraduationCap, 
  ArrowRight,
  Zap,
  Globe
} from 'lucide-react';

interface NavbarProps {
  onOpenDemoModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemoModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navCategories = [
    {
      id: 'products',
      label: 'Products',
      items: [
        {
          title: 'Custom Software Engineering',
          desc: 'Scalable enterprise digital platforms tailored to mission-critical operations.',
          icon: Code2,
          badge: 'Core',
          href: '#features'
        },
        {
          title: 'AI Integration & Automation',
          desc: 'Seamlessly embed generative LLMs and autonomous agents into existing apps.',
          icon: Bot,
          badge: 'Popular',
          href: '#features'
        },
        {
          title: 'Tech Talent Assessment Platform',
          desc: 'Next-gen competency testing with live sandboxed coding environments.',
          icon: Cpu,
          badge: 'Enterprise',
          href: '#features'
        },
        {
          title: 'Remote Interview Workspace',
          desc: 'HD video, collaborative editor, and real-time candidate evaluation engine.',
          icon: Video,
          href: '#features'
        }
      ]
    },
    {
      id: 'solutions',
      label: 'Solutions',
      items: [
        {
          title: 'Enterprise Digital Transformation',
          desc: 'Modernize legacy stacks with microservices, cloud-native architecture & security.',
          icon: Building2,
          href: '#ecosystem'
        },
        {
          title: 'EdTech & Skill Ecosystems',
          desc: 'Interactive learning, automated grading, and adaptive curriculum engines.',
          icon: GraduationCap,
          href: '#ecosystem'
        },
        {
          title: 'Global Engineering Scalability',
          desc: 'Accelerate time-to-market with dedicated AI-powered engineering pods.',
          icon: Globe,
          href: '#why-adroit'
        }
      ]
    },
    {
      id: 'platform',
      label: 'Platform',
      items: [
        {
          title: 'Adaptive Learning Engine',
          desc: 'Personalized skill mapping powered by real-time performance telemetry.',
          icon: Sparkles,
          href: '#ecosystem'
        },
        {
          title: 'Code Execution Sandbox',
          desc: 'High-concurrency isolated execution across 30+ programming languages.',
          icon: Zap,
          href: '#ecosystem'
        },
        {
          title: 'Bank-Grade Security & Proctoring',
          desc: 'AI face verification, browser locking, and automated fraud prevention.',
          icon: ShieldCheck,
          href: '#ecosystem'
        },
        {
          title: 'Cloud Infrastructure & API',
          desc: '99.99% uptime SLA with REST & GraphQL developer APIs.',
          icon: Cloud,
          href: '#ecosystem'
        }
      ]
    },
    {
      id: 'company',
      label: 'Company',
      items: [
        {
          title: 'About Adroit Technologies',
          desc: 'Leading innovative tech solution provider transforming global businesses.',
          icon: Building2,
          href: '#footer'
        },
        {
          title: 'Client Success Stories',
          desc: 'Discover how Fortune 500 & top EdTechs scale engineering with Adroit.',
          icon: Users,
          href: '#testimonials'
        }
      ]
    },
    {
      id: 'resources',
      label: 'Resources',
      items: [
        {
          title: 'Developer Documentation',
          desc: 'Quick start guides, API references, and SDK integrations.',
          icon: BookOpen,
          href: '#footer'
        },
        {
          title: 'Engineering Blog & Case Studies',
          desc: 'In-depth articles on AI engineering, system architecture, and tech trends.',
          icon: Sparkles,
          href: '#footer'
        }
      ]
    }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-800 text-white text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2 border-b border-blue-600/30">
        <span className="bg-blue-500/30 border border-blue-400/40 text-blue-200 px-2 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider">
          NEW RELEASE
        </span>
        <span>Adroit AI 2.0: Autonomous Developer Agents & Enterprise Assessment Engine</span>
        <a href="#features" className="underline hover:text-blue-200 transition-colors inline-flex items-center gap-1 font-semibold ml-1">
          Learn More <ArrowRight className="w-3 h-3" />
        </a>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-slate-200/80 py-3' 
            : 'bg-white/70 backdrop-blur-md border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white p-1 shadow-md border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <img 
                src="/adroit-logo-cropped.png" 
                alt="Adroit Technologies Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-1">
                Adroit <span className="text-blue-600 font-black">Tech</span>
              </span>
              <span className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold leading-none">
                Innovative Solutions Pvt Ltd
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navCategories.map((cat) => (
              <div 
                key={cat.id}
                className="relative"
                onMouseEnter={() => setActiveDropdown(cat.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                    activeDropdown === cat.id 
                      ? 'text-blue-600 bg-blue-50/80' 
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100/60'
                  }`}
                >
                  {cat.label}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === cat.id ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === cat.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="absolute top-full left-0 mt-1 w-[420px] bg-white rounded-2xl shadow-2xl border border-slate-200/80 p-3 z-50 overflow-hidden"
                    >
                      <div className="bg-gradient-to-r from-blue-50/50 to-slate-50/50 p-2.5 rounded-xl mb-2 border border-blue-100/50">
                        <p className="text-xs font-semibold text-blue-800 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                          Adroit {cat.label} Suite
                        </p>
                      </div>
                      <div className="grid gap-1">
                        {cat.items.map((item, idx) => {
                          const IconComponent = item.icon;
                          return (
                            <a
                              key={idx}
                              href={item.href}
                              onClick={() => setActiveDropdown(null)}
                              className="group p-2.5 rounded-xl hover:bg-blue-50/70 transition-all duration-200 flex items-start gap-3.5"
                            >
                              <div className="w-9 h-9 rounded-lg bg-blue-100/80 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                                <IconComponent className="w-4 h-4" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <h4 className="text-sm font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                                    {item.title}
                                  </h4>
                                  {item.badge && (
                                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-blue-700">
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                                  {item.desc}
                                </p>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenDemoModal}
              className="text-sm font-bold text-slate-700 hover:text-blue-600 px-4 py-2 rounded-lg transition-colors"
            >
              Contact Sales
            </button>

            <button
              onClick={onOpenDemoModal}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 group"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 overflow-hidden shadow-2xl"
          >
            <div className="p-4 space-y-4 max-h-[80vh] overflow-y-auto">
              {navCategories.map((cat) => (
                <div key={cat.id} className="border-b border-slate-100 pb-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">
                    {cat.label}
                  </h3>
                  <div className="space-y-1">
                    {cat.items.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 text-slate-700 font-medium text-sm"
                      >
                        <item.icon className="w-4 h-4 text-blue-600" />
                        <span>{item.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDemoModal();
                  }}
                  className="w-full text-center py-2.5 text-slate-700 font-bold border border-slate-300 rounded-xl"
                >
                  Contact Sales
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDemoModal();
                  }}
                  className="w-full text-center py-3 bg-blue-600 text-white font-bold rounded-xl shadow-md"
                >
                  Request a Demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
