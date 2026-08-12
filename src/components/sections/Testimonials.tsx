import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Building2, GraduationCap, Globe, CheckCircle2 } from 'lucide-react';
import type { Testimonial } from '../../types';

export const Testimonials: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Enterprise' | 'EdTech' | 'Global Talent'>('All');

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Jenkins',
      role: 'VP of Global Engineering',
      company: 'TechMahindra Digital Solutions',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      category: 'Enterprise',
      rating: 5,
      quote: 'Adroit’s talent assessment platform transformed our engineering recruitment. We evaluated over 4,000 developers seamlessly with automated sandboxes and zero proctoring breaches.',
      metrics: 'Hiring Speed +65% | Cost Saved $240K'
    },
    {
      id: '2',
      name: 'Dr. Rajesh Varma',
      role: 'Director of Academic Technology',
      company: 'GlobalEdu Innovation University',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80',
      category: 'EdTech',
      rating: 5,
      quote: 'Integrating Adroit Adaptive Learning engine into our university curriculum allowed 15,000+ students to execute real-world code in sandboxed environments with instant AI feedback.',
      metrics: 'Student Engagement +88%'
    },
    {
      id: '3',
      name: 'David Chen',
      role: 'Head of Developer Operations',
      company: 'CodeScale Labs Inc.',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
      category: 'Global Talent',
      rating: 5,
      quote: 'The remote interview workspace is exceptional. Crisp HD audio/video, collaborative pair-programming, and AI-generated candidate rubrics saved our senior architects 20 hours per week.',
      metrics: 'Interview Time Saved 20 hrs/wk'
    },
    {
      id: '4',
      name: 'Elena Rostova',
      role: 'Chief Technology Officer',
      company: 'CyberCore Defense Systems',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
      category: 'Enterprise',
      rating: 5,
      quote: 'Security and compliance are non-negotiable for us. Adroit passed our rigorous SOC2 Type II and vulnerability penetration tests with flying colors.',
      metrics: 'SOC2 & ISO Compliant'
    },
    {
      id: '5',
      name: 'Michael Chang',
      role: 'Director of Talent Acquisition',
      company: 'NextGen Cloud AI',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      category: 'Global Talent',
      rating: 5,
      quote: 'Adroit’s automated AI code review agents allowed us to scale our offshore engineering pod from 10 to 120 developers without sacrificing code quality.',
      metrics: 'Engineering Pod Scaled 12x'
    },
    {
      id: '6',
      name: 'Dr. Anita Sharma',
      role: 'Dean of Computer Science',
      company: 'Apex Institute of Technology',
      avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&auto=format&fit=crop&q=80',
      category: 'EdTech',
      rating: 5,
      quote: 'Adroit provided our faculty with unparalleled telemetry into student coding progress. Automated grading eliminated administrative backlog completely.',
      metrics: '100% Automated Grading'
    }
  ];

  const filteredTestimonials = activeCategory === 'All' 
    ? testimonials 
    : testimonials.filter(t => t.category === activeCategory);

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <Quote className="w-3.5 h-3.5" /> Customer Success & Impact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Don't Just Take Our Word For It.
          </h2>
          <p className="text-slate-600 text-lg">
            Hear from global CTOs, engineering directors, and academic leaders building with Adroit.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'All', label: 'All Reviews', icon: Star },
            { id: 'Enterprise', label: 'Enterprise Tech', icon: Building2 },
            { id: 'EdTech', label: 'EdTech Leaders', icon: GraduationCap },
            { id: 'Global Talent', label: 'Global Engineering', icon: Globe },
          ].map((tab) => {
            const IconC = tab.icon;
            const isSelected = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
                  isSelected 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-105' 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <IconC className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-slate-50 rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-700">
                    {item.category}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Metric Impact Pill & Profile */}
              <div className="pt-6 mt-6 border-t border-slate-200/80 space-y-4">
                {item.metrics && (
                  <div className="bg-blue-50/80 text-blue-800 border border-blue-200/60 p-2 rounded-lg text-xs font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>{item.metrics}</span>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {item.role} • <span className="text-blue-600 font-semibold">{item.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
