import React from 'react';
import HeroIllustration from '../components/home/HeroIllustration';
import HeroContent from '../components/home/HeroContent';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page animate-fade-in">
      <section className="hero-section">
        <div className="container">
          <HeroIllustration />
          <HeroContent />
        </div>
      </section>
    </div>
  );
}
