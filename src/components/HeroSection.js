import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { HeroContainer } from '../styles/GlobalStyles'

const HeroSection = () => {
  return (
    <HeroContainer>
      <Container>
        <h2>Welcome to My Portfolio</h2>
        <p>Showcasing my projects and skills</p>
        <Button variant="primary">Explore</Button>
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;
