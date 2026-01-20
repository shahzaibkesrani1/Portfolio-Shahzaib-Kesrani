
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Skills from './components/Skills';
import WhyHireMe from './components/WhyHireMe';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ProjectIdea from './components/ProjectIdea';
import TickerTape from './components/TickerTape';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <TickerTape />
        <WhyHireMe />
        <Services />
        <Skills />
        <Portfolio />
        <Testimonials />
        <ProjectIdea />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
