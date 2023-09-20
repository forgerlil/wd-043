// With DOM Manipulation:
// document.createElement('div')

import React from 'react';
import { createRoot } from 'react-dom/client';
import './globals.css';
import App from './App';

const rootElement = document.querySelector('#root');

// Reacts createElement function (runs under the hood with JSX)
// const firstReactDiv = React.createElement(
//   'div',
//   React.createElement(),
//   'This is my first React Div'
// );

// console.log(firstReactDiv);

createRoot(rootElement).render(<App />);
