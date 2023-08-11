import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { ThemeProvider, useTheme } from './Context/themecontext';
import ProfileDetails from './components/ProfileDetails';
import AboutSection from './components/AboutUs';
import Skills from './components/Skills';
import Experience from './components/expernines';
import Card from './components/carad';
import ThreeCardLayout from './components/threecardlayout';
import ContactSection from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  const { isDarkMode } = useTheme();


  return (
    <ThemeProvider>
      <div className={`App ${isDarkMode ? 'dark' : ''}`}>
        <NavBar />
        <ProfileDetails />
        <AboutSection id="about"  />
        <Skills id="work" />
        <Experience />
        <Card />
        <ThreeCardLayout id="testimonials" />
        <ContactSection id="contact" />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
