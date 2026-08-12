import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Zap, 
  Clock,
  Award,
  BarChart3, 
  CheckCircle2, 
  LineChart
} from 'lucide-react';

export const WhyAdroit: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState<'deployment' | 'quality' | 'hiring'>('deployment');

  const metricsData = {
    deployment: {
      title: 'Deployment Speed Up 40%',
      description: 'Streamlined continuous integration pipelines and automated test sandboxes reduce code release cycle time from weeks to hours.',
      stat: '+40%',
      subtext: 'Faster Time-to-Market',
      chartData: [20, 35, 45, 60, 75, 90, 100],
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    quality: {
      title: 'Code Quality Improved 25%',
      description: 'Adroit AI code auditing agents continuously detect static analysis issues, security vulnerabilities, and memory leaks before production deployment.',
      stat: '+25%',
      subtext: 'Fewer Bug Outages',
      chartData: [50, 60, 68, 75, 85, 92, 98],
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7']
    },
    hiring: {
      title: 'Hiring Cycle Reduced 60%',
      description: 'Automate technical competency screening and remote live interviews, enabling hiring teams to evaluate 10x more candidates with zero human bias.',
      stat: '-60%',
      subtext: 'Time-to-Hire Reduction',
      chartData: [90, 75, 60, 50, 42, 35, 28],
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
    }
  };

  const activeData = metricsData[selectedMetric];

  return (
    <section id="why-adroit" className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-50/70 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <BarChart3 className="w-3.5 h-3.5" /> Performance & Scalability Benchmark
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Achieve Peak Engineering Efficiency
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Empirical data from 500+ enterprise deployments demonstrating game-changing productivity gains.
          </p>
        </div>

        {/* Metric Selector Tabs */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {[
            {
              id: 'deployment',
              title: 'Deployment Speed',
              value: 'Up 40%',
              badge: 'CI/CD Speed',
              icon: Zap,
              color: 'text-blue-600',
              bg: 'bg-blue-50 border-blue-200'
            },
            {
              id: 'quality',
              title: 'Code Quality',
              value: 'Improved 25%',
              badge: 'Zero Flaws',
              icon: Award,
              color: 'text-emerald-600',
              bg: 'bg-emerald-50 border-emerald-200'
            },
            {
              id: 'hiring',
              title: 'Hiring Cycle',
              value: 'Reduced 60%',
              badge: 'HR Efficiency',
              icon: Clock,
              color: 'text-purple-600',
              bg: 'bg-purple-50 border-purple-200'
            }
          ].map((item) => {
            const IconComp = item.icon;
            const isSelected = selectedMetric === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedMetric(item.id as any)}
                className={`p-6 rounded-2xl text-left border transition-all duration-300 flex items-start justify-between cursor-pointer ${
                  isSelected 
                    ? 'bg-slate-900 text-white border-slate-900 shadow-2xl scale-[1.02]' 
                    : 'bg-white text-slate-800 border-slate-200 hover:border-blue-300 hover:bg-slate-50/80 shadow-sm'
                }`}
              >
                <div className="space-y-2">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full inline-block ${isSelected ? 'bg-blue-500/30 text-blue-300' : 'bg-slate-100 text-slate-600'}`}>
                    {item.badge}
                  </span>
                  <p className={`text-2xl font-black ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                    {item.value}
                  </p>
                  <p className={`text-xs ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                    {item.title}
                  </p>
                </div>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isSelected ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'}`}>
                  <IconComp className="w-5 h-5" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Dashboard Visualizer Container */}
        <motion.div 
          key={selectedMetric}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-800 grid lg:grid-cols-12 gap-8 items-center"
        >
          {/* Left Summary Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-500/30">
              <TrendingUp className="w-4 h-4 text-blue-400" />
              <span>Real-Time Enterprise Analytics</span>
            </div>

            <h3 className="text-3xl font-extrabold text-white tracking-tight">
              {activeData.title}
            </h3>

            <p className="text-slate-300 text-base leading-relaxed">
              {activeData.description}
            </p>

            <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-4">
              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                <span className="text-xs text-slate-400 block mb-1">Impact Metric</span>
                <span className="text-3xl font-black text-blue-400">{activeData.stat}</span>
              </div>
              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                <span className="text-xs text-slate-400 block mb-1">Key Outcome</span>
                <span className="text-sm font-bold text-slate-200 leading-tight block mt-1">
                  {activeData.subtext}
                </span>
              </div>
            </div>
          </div>

          {/* Right SVG Animated Bar & Line Chart Mockup */}
          <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800/80 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <LineChart className="w-5 h-5 text-blue-400" />
                <span className="font-bold text-sm text-slate-200">Telemetry Trend Line</span>
              </div>
              <span className="text-xs text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                7-Period Rolling Average
              </span>
            </div>

            {/* Bar & Line Graph Visualizer */}
            <div className="h-56 flex items-end justify-between gap-3 pt-6 px-2">
              {activeData.chartData.map((val, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                  <span className="text-[10px] font-bold text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    {val}%
                  </span>
                  
                  {/* Animated Bar Container */}
                  <div className="w-full bg-slate-900 rounded-t-lg h-44 flex items-end overflow-hidden p-1">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${val}%` }}
                      transition={{ duration: 0.8, delay: idx * 0.08, ease: 'easeOut' }}
                      className="w-full bg-gradient-to-t from-blue-700 via-blue-500 to-sky-400 rounded-t-md group-hover:from-blue-600 group-hover:to-sky-300 transition-colors shadow-lg"
                    />
                  </div>

                  <span className="text-xs text-slate-400 font-medium">
                    {activeData.labels[idx]}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Telemetry Legend */}
            <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-900">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-500" />
                <span>Adroit Automated System</span>
              </div>
              <div className="flex items-center gap-1 text-emerald-400 font-bold">
                <CheckCircle2 className="w-4 h-4" /> Live Benchmark Verified
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
