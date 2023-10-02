import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './globals.css';
import App from './App';

const rootElement = document.querySelector('#root');

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
