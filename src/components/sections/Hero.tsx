import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Code, 
  Cpu, 
  ShieldCheck, 
  Terminal, 
  Activity
} from 'lucide-react';

interface HeroProps {
  onOpenDemoModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemoModal }) => {
  const [activeTab, setActiveTab] = useState<'ai' | 'sandbox' | 'analytics'>('ai');
  const [isRunningCode, setIsRunningCode] = useState(false);
  const [codeOutput, setCodeOutput] = useState<string | null>(null);

  const handleRunDemo = () => {
    setIsRunningCode(true);
    setCodeOutput('Compiling Adroit AI Pipeline...');
    setTimeout(() => {
      setCodeOutput('[SUCCESS] AI Agent Verified: 489 test cases passed in 0.042s (Quality Score: 99.8%)');
      setIsRunningCode(false);
    }, 1200);
  };

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden hero-gradient-bg bg-grid-pattern">
      {/* Background Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-sm text-blue-700 font-semibold text-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
              <span>Next-Gen Enterprise Digital Ecosystems</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Accelerating Innovation with{' '}
              <span className="blue-gradient-text">AI-Driven</span> Software Solutions.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Adroit Technologies empowers global enterprises and ed-tech leaders with advanced, scalable digital ecosystems and intelligent software. Move faster, scale smarter.
            </p>

            {/* Key Value Pill Bullets */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-700 pt-1">
              <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Autonomous AI Agents</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>High-Concurrency Sandboxes</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Enterprise Security SLA</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOpenDemoModal}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-8 py-4 rounded-xl shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-3 group"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenDemoModal}
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 font-bold text-base px-7 py-4 rounded-xl border border-slate-300 shadow-sm hover:border-slate-400 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Contact Sales</span>
              </button>
            </div>

            {/* Trust Micro Stat Bar */}
            <div className="pt-6 border-t border-slate-200/60 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <p className="text-2xl font-black text-slate-900">10M+</p>
                <p className="text-xs text-slate-500 font-medium">Evaluations Executed</p>
              </div>
              <div>
                <p className="text-2xl font-black text-blue-600">99.99%</p>
                <p className="text-xs text-slate-500 font-medium">Platform Uptime SLA</p>
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900">500+</p>
                <p className="text-xs text-slate-500 font-medium">Global Enterprise Clients</p>
              </div>
            </div>
          </motion.div>

          {/* Right 3D Visual & Interactive Platform Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            {/* Interactive 3D Perspective Card Box */}
            <div className="relative rounded-2xl bg-white p-3 shadow-2xl border border-slate-200/90 blue-glow animate-float">
              
              {/* Window Bar Header */}
              <div className="bg-slate-900 text-white rounded-t-xl px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono text-slate-400 ml-2">adroit-ai-sandbox.v2</span>
                </div>
                <div className="flex items-center gap-1 bg-slate-800 rounded-lg p-1">
                  <button 
                    onClick={() => setActiveTab('ai')}
                    className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${activeTab === 'ai' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
                  >
                    AI Agent
                  </button>
                  <button 
                    onClick={() => setActiveTab('sandbox')}
                    className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${activeTab === 'sandbox' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
                  >
                    Code IDE
                  </button>
                  <button 
                    onClick={() => setActiveTab('analytics')}
                    className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${activeTab === 'analytics' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
                  >
                    Telemetry
                  </button>
                </div>
              </div>

              {/* Card Body Content according to Active Tab */}
              <div className="bg-slate-950 p-5 rounded-b-xl font-mono text-sm text-slate-200 min-h-[340px] flex flex-col justify-between">
                {activeTab === 'ai' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2">
                      <span className="flex items-center gap-2 text-blue-400 font-semibold">
                        <Terminal className="w-4 h-4" /> Adroit Autonomous AI Core
                      </span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" /> Live
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <p className="text-slate-400">// Initializing Adroit Enterprise Engine...</p>
                      <p className="text-blue-400">&gt; adroit init --stack=react-typescript-ai</p>
                      <p className="text-slate-300">✔ Connected to Adroit Distributed Sandbox (Latency: 14ms)</p>
                      <p className="text-slate-300">✔ AI Proctoring & Compliance: ACTIVE</p>
                      <p className="text-slate-300">✔ Auto Code Quality Auditor: RUNNING</p>
                    </div>

                    {/* Code Snippet Box */}
                    <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-lg space-y-1 text-xs">
                      <span className="text-purple-400">async function</span> <span className="text-blue-300">evaluateCode</span>(<span className="text-amber-300">candidateSubmission</span>) {'{'}
                      <div className="pl-4 text-slate-300">
                        <span className="text-purple-400">const</span> score = <span className="text-purple-400">await</span> AdroitAI.<span className="text-blue-300">analyzeCompetency</span>({'{'}
                        <div className="pl-4 text-slate-400">
                          correctness: <span className="text-emerald-400">0.99</span>,<br/>
                          efficiency: <span className="text-emerald-400">"O(N log N)"</span>,<br/>
                          securityScore: <span className="text-emerald-400">100</span>
                        </div>
                        {'}'});
                      </div>
                      {'}'}
                    </div>

                    {codeOutput && (
                      <motion.div 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 p-2.5 rounded text-xs"
                      >
                        {codeOutput}
                      </motion.div>
                    )}
                  </div>
                )}

                {activeTab === 'sandbox' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2">
                      <span className="flex items-center gap-2 text-sky-400 font-semibold">
                        <Code className="w-4 h-4" /> Multi-Language Sandbox Editor
                      </span>
                      <span className="bg-slate-800 px-2 py-0.5 rounded text-[10px] text-slate-300">Python 3.11</span>
                    </div>
                    <pre className="text-xs text-slate-300 bg-slate-900 p-3 rounded-lg overflow-x-auto">
{`def calculate_enterprise_roi(teams, velocity):
    # Adroit Automated Optimization
    efficiency_gain = teams * 1.40
    bug_reduction = 0.25
    return {
        "speedup": f"{efficiency_gain:.1f}%",
        "quality_boost": f"{bug_reduction * 100}%"
    }`}
                    </pre>
                    <p className="text-xs text-slate-400">Press Run to execute test cases against isolated sandbox worker.</p>
                  </div>
                )}

                {activeTab === 'analytics' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2">
                      <span className="flex items-center gap-2 text-indigo-400 font-semibold">
                        <Activity className="w-4 h-4" /> Real-time System Telemetry
                      </span>
                      <span className="text-xs text-emerald-400 font-bold">Healthy</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                        <span className="text-slate-400 block mb-1">Sandbox Concurrency</span>
                        <span className="text-lg font-bold text-white">45,210 / sec</span>
                      </div>
                      <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                        <span className="text-slate-400 block mb-1">Avg Execution Time</span>
                        <span className="text-lg font-bold text-emerald-400">38 ms</span>
                      </div>
                      <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                        <span className="text-slate-400 block mb-1">AI Proctoring Flags</span>
                        <span className="text-lg font-bold text-blue-400">0.001% (Zero False Positive)</span>
                      </div>
                      <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                        <span className="text-slate-400 block mb-1">Security Score</span>
                        <span className="text-lg font-bold text-sky-400">SOC2 Type II</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom Interactive Simulation Bar */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-[11px] text-slate-400">Engine Status: Ready</span>
                  </div>

                  <button
                    onClick={handleRunDemo}
                    disabled={isRunningCode}
                    className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors disabled:opacity-50"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    {isRunningCode ? 'Evaluating...' : 'Simulate Engine'}
                  </button>
                </div>
              </div>

              {/* Floating Floating Badges around Card */}
              <div className="absolute -bottom-5 -left-6 bg-white p-3 rounded-xl shadow-xl border border-slate-200 hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">AI Code Auditor</p>
                  <p className="text-[10px] text-slate-500 font-medium">Automated Evaluation Engine</p>
                </div>
              </div>

              <div className="absolute -top-5 -right-6 bg-slate-900 text-white p-3 rounded-xl shadow-xl border border-slate-800 hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">ISO 27001 Certified</p>
                  <p className="text-[10px] text-slate-400 font-medium">Enterprise Security Grade</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
