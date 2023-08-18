import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Your main App component
import { ThemeProvider } from './Context/themecontext'; // Import your ThemeProvider

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider> {/* Wrap your App with the ThemeProvider */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
