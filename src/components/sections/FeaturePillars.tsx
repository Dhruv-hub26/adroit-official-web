import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Video, 
  Bot, 
  Code2, 
  Sparkles, 
  ArrowRight, 
  Terminal, 
  Users, 
  FileCheck,
  Check
} from 'lucide-react';

interface FeaturePillarsProps {
  onOpenDemoModal: () => void;
}

export const FeaturePillars: React.FC<FeaturePillarsProps> = ({ onOpenDemoModal }) => {
  const [activeLang, setActiveLang] = useState('TypeScript');
  const [interviewStatus, setInterviewStatus] = useState('Coding Phase');

  return (
    <section id="features" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Core Platform Pillars
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Built for High-Scale Enterprise Engineering & Talent Ecosystems
          </h2>
          <p className="text-slate-600 text-lg">
            Reinventing technical evaluations, remote pair-programming interviews, and AI-driven workflow automation.
          </p>
        </div>

        {/* ================= PILLAR 1: Assessment Platform ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-lg shadow-blue-600/30">
              <Cpu className="w-6 h-6" />
            </div>
            
            <span className="text-xs font-black uppercase tracking-widest text-blue-600">Product Pillar 01</span>
            
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Intelligent Tech Talent Assessment Platform
            </h3>

            <p className="text-slate-600 text-base leading-relaxed">
              Empower HR leaders and engineering managers with real-time, sandboxed coding assessments. Adroit’s competency platform evaluates candidate code efficiency, memory footprint, architectural clean-code practices, and automated fraud prevention.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                'Automated multi-language code execution sandbox (30+ languages)',
                'AI Proctoring with eye-tracking & multi-screen breach detection',
                'Deep telemetry reports with benchmark skill mapping',
                'Custom company problem creation with automated test suites'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700 font-medium text-sm">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <button
                onClick={onOpenDemoModal}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/25 flex items-center gap-2 group transition-all"
              >
                <span>Explore Assessment Suite</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Visual Mockup */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-4 shadow-xl border border-slate-200 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 group">
              <div className="bg-slate-900 rounded-xl p-4 text-white font-mono text-xs space-y-4">
                {/* Top Control Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-blue-400" />
                    <span className="font-bold text-slate-200">Adroit Candidate Assessment ID: #94021</span>
                  </div>
                  <div className="flex gap-1">
                    {['TypeScript', 'Python', 'Java', 'Go'].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setActiveLang(lang)}
                        className={`px-2 py-1 rounded text-[10px] font-bold ${activeLang === lang ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'}`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Simulated Editor Screen */}
                <div className="space-y-2 text-slate-300">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 bg-slate-800/60 p-2 rounded">
                    <span>Task: Implement High-Concurrency Message Queue Buffer</span>
                    <span className="text-emerald-400 font-bold">Proctoring: Clear ✓</span>
                  </div>
                  <pre className="p-3 bg-slate-950 rounded-lg text-slate-200 text-xs overflow-x-auto">
{activeLang === 'TypeScript' && `class AdroitQueue<T> {
  private items: T[] = [];
  enqueue(item: T): void {
    this.items.push(item);
  }
  processBatch(): number {
    // Automated test verification...
    return this.items.length;
  }
}`}
{activeLang === 'Python' && `class AdroitQueue:
    def __init__(self):
        self.items = []
    def enqueue(self, item):
        self.items.append(item)
    def process_batch(self):
        return len(self.items)`}
{activeLang === 'Java' && `public class AdroitQueue<T> {
    private List<T> items = new ArrayList<>();
    public void enqueue(T item) { items.add(item); }
}`}
{activeLang === 'Go' && `type AdroitQueue struct {
    items []interface{}
}`}
                  </pre>
                </div>

                {/* Score Summary Box */}
                <div className="bg-slate-800/80 p-3 rounded-lg flex items-center justify-between">
                  <div>
                    <span className="text-slate-400 text-[11px]">Evaluation Score:</span>
                    <p className="text-base font-bold text-emerald-400">98.5 / 100 (Percentile 99th)</p>
                  </div>
                  <span className="bg-blue-500/20 text-blue-300 border border-blue-400/30 px-3 py-1 rounded-full text-xs font-bold">
                    VERIFIED CANDIDATE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= PILLAR 2: Remote Interview Solutions ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Visual Mockup */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="bg-white rounded-2xl p-4 shadow-xl border border-slate-200 hover:shadow-2xl hover:border-blue-200 transition-all duration-300">
              <div className="bg-slate-900 rounded-xl p-4 text-white space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-rose-400 animate-pulse" />
                    <span className="text-xs font-bold text-slate-200">Live HD Interview Room: Senior Staff Engineer</span>
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                    REC 00:34:12
                  </span>
                </div>

                {/* Video Streams Grid Mockup */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative bg-slate-800 rounded-lg h-32 overflow-hidden flex flex-col justify-end p-2 border border-slate-700">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-xs font-bold text-white flex items-center gap-1">
                        <Users className="w-3 h-3 text-blue-400" /> Alex R. (Interviewer)
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                  </div>

                  <div className="relative bg-slate-800 rounded-lg h-32 overflow-hidden flex flex-col justify-end p-2 border border-slate-700">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-xs font-bold text-white flex items-center gap-1">
                        <Users className="w-3 h-3 text-sky-400" /> Priya M. (Candidate)
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                  </div>
                </div>

                {/* Collaborative Tool Bar */}
                <div className="bg-slate-950 p-3 rounded-lg flex items-center justify-between text-xs">
                  <span className="text-slate-400">Current Phase: <strong className="text-white">{interviewStatus}</strong></span>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setInterviewStatus('Whiteboarding')}
                      className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded text-[10px] text-slate-300"
                    >
                      Whiteboard
                    </button>
                    <button 
                      onClick={() => setInterviewStatus('System Architecture')}
                      className="px-2 py-1 bg-blue-600 rounded text-[10px] text-white font-bold"
                    >
                      System Arch
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center font-bold shadow-lg shadow-sky-600/30">
              <Video className="w-6 h-6" />
            </div>

            <span className="text-xs font-black uppercase tracking-widest text-sky-600">Product Pillar 02</span>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Seamless, Secure Remote Interview Solutions
            </h3>

            <p className="text-slate-600 text-base leading-relaxed">
              Conduct high-fidelity technical interviews with built-in real-time code editing, architectural whiteboard canvas, candidate feedback scorecards, and end-to-end encryption.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                'Zero-latency synchronized pair programming editor',
                'AI-generated interview scorecards and structured rubrics',
                'Integrated system architecture canvas with cloud diagrams',
                'Full interview recording, transcript searching & team playback'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700 font-medium text-sm">
                  <div className="w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <button
                onClick={onOpenDemoModal}
                className="bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-sky-600/25 flex items-center gap-2 group transition-all"
              >
                <span>Demo Remote Interview Studio</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* ================= PILLAR 3: AI Agents & Automation ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold shadow-lg shadow-indigo-600/30">
              <Bot className="w-6 h-6" />
            </div>

            <span className="text-xs font-black uppercase tracking-widest text-indigo-600">Product Pillar 03</span>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Automate Workflows with Integrated AI Agents
            </h3>

            <p className="text-slate-600 text-base leading-relaxed">
              Supercharge your engineering lifecycle with autonomous AI development agents. From automated code reviews and security audits to continuous integration triggers and synthetic test generation.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                'Autonomous code review bots for GitHub, GitLab & Bitbucket',
                'Synthetic test generation and automated regression suites',
                'Real-time dependency security vulnerability patching',
                'AI architectural documentation and API schema generation'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700 font-medium text-sm">
                  <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <button
                onClick={onOpenDemoModal}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-indigo-600/25 flex items-center gap-2 group transition-all"
              >
                <span>Deploy AI Agents</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Visual Mockup */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-4 shadow-xl border border-slate-200 hover:shadow-2xl hover:border-indigo-200 transition-all duration-300">
              <div className="bg-slate-950 rounded-xl p-4 text-white font-mono text-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="flex items-center gap-2 text-indigo-400 font-bold">
                    <Bot className="w-4 h-4" /> Adroit Agent Orchestrator v2
                  </span>
                  <span className="text-[10px] bg-indigo-900/60 text-indigo-300 px-2 py-0.5 rounded border border-indigo-700">
                    AUTOMATION ACTIVE
                  </span>
                </div>

                {/* Workflow Agent Pipeline Cards */}
                <div className="space-y-3">
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileCheck className="w-5 h-5 text-emerald-400" />
                      <div>
                        <p className="font-bold text-slate-200">Agent: CodeReviewer-Pro</p>
                        <p className="text-[11px] text-slate-400">Scanned PR #1421: 0 vulnerabilities found</p>
                      </div>
                    </div>
                    <span className="text-emerald-400 font-bold text-xs">Passed ✓</span>
                  </div>

                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Terminal className="w-5 h-5 text-blue-400" />
                      <div>
                        <p className="font-bold text-slate-200">Agent: TestGen-AI</p>
                        <p className="text-[11px] text-slate-400">Generated 64 unit tests (Coverage: 96%)</p>
                      </div>
                    </div>
                    <span className="text-blue-400 font-bold text-xs">Complete</span>
                  </div>

                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-purple-400" />
                      <div>
                        <p className="font-bold text-slate-200">Agent: AutoDeploy-Pipeline</p>
                        <p className="text-[11px] text-slate-400">Pushed build to Staging Cluster #4</p>
                      </div>
                    </div>
                    <span className="text-purple-400 font-bold text-xs">Deploying</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
