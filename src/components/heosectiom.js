import React from 'react';
import { useTheme } from '../Context/themecontext';

const HeroSection1 = () => {
  const { isDarkMode } = useTheme();

  const sectionStyles = {
    backgroundColor: isDarkMode ? '#333' : '#f5f5f5',
    color: isDarkMode ? '#fff' : '#333',
    padding: '50px',
  };

  return (
    <section style={sectionStyles}>
      <h1>Welcome to My Website</h1>
      <p>This is the hero section of my website.</p>
    </section>
  );
};

export default HeroSection1;
