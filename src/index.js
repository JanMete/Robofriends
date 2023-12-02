import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import App from './Containers/App';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(<App />);

reportWebVitals();
