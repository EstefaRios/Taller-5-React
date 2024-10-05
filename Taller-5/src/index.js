import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Asegúrate de que este archivo esté importado
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

