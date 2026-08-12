import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { ClientLogos } from './components/sections/ClientLogos';
import { FeaturePillars } from './components/sections/FeaturePillars';
import { WhyAdroit } from './components/sections/WhyAdroit';
import { EcosystemGrid } from './components/sections/EcosystemGrid';
import { Testimonials } from './components/sections/Testimonials';
import { CTABanner } from './components/sections/CTABanner';
import { Footer } from './components/layout/Footer';
import { DemoModal } from './components/modals/DemoModal';

export const App: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemoModal = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden w-full max-w-full relative"
    >
      {/* Top Navbar */}
      <Navbar onOpenDemoModal={handleOpenDemoModal} />

      {/* Main Content Sections */}
      <main className="flex-grow overflow-x-hidden w-full max-w-full">
        {/* Hero Section */}
        <Hero onOpenDemoModal={handleOpenDemoModal} />

        {/* Client Logos Marquee */}
        <ClientLogos />

        {/* Product Feature Pillars */}
        <FeaturePillars onOpenDemoModal={handleOpenDemoModal} />

        {/* Why Adroit Performance Showcase */}
        <WhyAdroit />

        {/* Ecosystem Overview Grid */}
        <EcosystemGrid onOpenDemoModal={handleOpenDemoModal} />

        {/* Customer Testimonials */}
        <Testimonials />

        {/* Call to Action Banner */}
        <CTABanner onOpenDemoModal={handleOpenDemoModal} />
      </main>

      {/* Footer */}
      <Footer onOpenDemoModal={handleOpenDemoModal} />

      {/* Interactive Demo Request Modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemoModal} />
    </motion.div>
  );
};

export default App;
