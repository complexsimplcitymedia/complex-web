import React from 'react';
import { Layout } from './components/Layout';
import { HeroContent } from './components/HeroContent';
import { PortfolioSection } from './components/portfolio/PortfolioSection';

export default function App() {
  return (
    <Layout>
      <HeroContent />
      <PortfolioSection />
    </Layout>
  );
}
