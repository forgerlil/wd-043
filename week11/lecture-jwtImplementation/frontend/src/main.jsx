import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './globals.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthContext from './context/AuthContext';

const rootElement = document.querySelector('#root');

createRoot(rootElement).render(
  <BrowserRouter>
    <StrictMode>
      <AuthContext>
        <App />
      </AuthContext>
    </StrictMode>
  </BrowserRouter>
);
