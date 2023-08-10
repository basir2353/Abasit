import styled, { createGlobalStyle } from 'styled-components';
import { Button } from 'react-bootstrap';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

 export const HeaderContainer = styled.header`
  background-color: #f8f9fa;
  padding: 50px 0;
  text-align: center;
`;

export const HeroContainer = styled.section`
  background-image: url('path-to-your-image.jpg');
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: center;
  padding: 100px 0;

  h2 {
    font-size: 36px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    margin-bottom: 40px;
  }

  button {
    font-size: 18px;
  }
`;
