import React from 'react';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import PartnersSection from '../components/PartnersSection';
import AboutSection from '../components/AboutSection';
import TechnologiesSlider from '../components/TechnologiesSlider';
import WebsiteShowcaseSection from '../components/WebsiteShowcaseSection';
import TestimonialsSection from '../components/TestimonialsSection';
import DigitalSuccessSection from '../components/DigitalSuccessSection';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <PartnersSection />
      <TechnologiesSlider />
      <Portfolio />
      <WebsiteShowcaseSection />
      <TestimonialsSection />
      <DigitalSuccessSection />
    </div>
  );
};

export default Home;