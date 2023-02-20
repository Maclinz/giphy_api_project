import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalProvider } from './context/global';
import { ThemeProvider } from './context/themeContext';
import { GlobalStyle } from './styles/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </GlobalProvider>
  </React.StrictMode>
);

