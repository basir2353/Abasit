import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useTheme } from '../Context/themecontext'; 
import './Navbar.css'; 
import ProfileDetails from './ProfileDetails';
import { Link as ScrollLink } from 'react-scroll';
const NavBar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme(); 

  const backgroundColorClass = isDarkMode ? 'bg-dark' : 'bg-light';
  const textColorClass = isDarkMode ? 'text-light' : 'text-dark';
  const iconColorClass = isDarkMode ? 'icon-dark' : 'icon-light';
  const iconSize = '20px';

  return (
    <Navbar className={`custom-navbar ${backgroundColorClass}`} variant="dark" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src={`${process.env.PUBLIC_URL}/images (1).png`}
          width="30"
          height="30"
          className={`d-inline-block align-top custom-logo ${textColorClass}`}
          alt="Logo"
        />{' '}
        <span className={`ml-2 custom-logo-text ${textColorClass}`}>AB</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        {isDarkMode ? (
          <img
            src={`${process.env.PUBLIC_URL}/close.png`}
            className={`bi ${iconColorClass}`}
            alt="Moon Icon"
            style={{ width: iconSize, height: iconSize }}
            />
            ) : (
              <img
              src={`${process.env.PUBLIC_URL}/menu.png`}
              className={`bi ${iconColorClass}`}
              alt="Sun Icon"
              style={{ width: iconSize, height: iconSize }}
              />
              )}
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
          <ScrollLink to="about" smooth={true} duration={500}>
            <Nav.Link className={textColorClass}>About</Nav.Link>
          </ScrollLink>
          <ScrollLink to="work" smooth={true} duration={500}>
            <Nav.Link className={textColorClass}>Work</Nav.Link>
          </ScrollLink>
          <ScrollLink to="testimonials" smooth={true} duration={500}>
            <Nav.Link className={textColorClass}>Testimonials</Nav.Link>
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500}>
            <Nav.Link className={textColorClass}>Contact</Nav.Link>
          </ScrollLink>
        </Nav>
        
        <Button variant="outline-light" onClick={toggleDarkMode} className={`custom-toggle-button ${textColorClass}`}>
          {isDarkMode ? (
            <img
            src={`${process.env.PUBLIC_URL}/brightness.png` }
            className={`bi ${iconColorClass}`}
            alt="Sun Icon"
            style={{ width: iconSize, height: iconSize }}
            />
            ) : (
              <img
              src={`${process.env.PUBLIC_URL}/night-mode.png`}
              className={`bi ${iconColorClass}`}
              alt="Moon Icon"
              style={{ width: iconSize, height: iconSize }}
              />
              )}
        </Button>
        |
        <Button variant="outline-light" className={`ml-3 custom-download-button ${textColorClass}`} href='https://drive.google.com/file/d/10Yey7xa_4RcPhoWSrZFwYEwl_O7zvuRD/view?usp=sharing'>
          Download CV
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};


export default NavBar;
