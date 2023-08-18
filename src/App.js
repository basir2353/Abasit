import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { ThemeProvider, useTheme } from './Context/themecontext'; // Update path
import ProfileDetails from './components/ProfileDetails';
import AboutSection from './components/AboutUs';
import Skills from './components/Skills';
import Experience from './components/expernines';
import Card from './components/carad';
import ThreeCardLayout from './components/threecardlayout';
import ContactSection from './components/ContactUs';
import Footer from './components/Footer';
import './App.css';

function App() {
  const { isDarkMode } = useTheme(); // Get the dark mode state from context

  return (
    <ThemeProvider>
      <div className={`App ${isDarkMode ? 'dark' : ''}`}>
        <NavBar />
        <ProfileDetails />
        <AboutSection id="about" />
        <Skills id="work" />
        <Experience />
        <Card />
        <ThreeCardLayout />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
