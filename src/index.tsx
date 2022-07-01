import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './components/App';
import GlobalStyles from './globalStyles';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
    <App />
    <GlobalStyles />
  </>,

);

