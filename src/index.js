import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ProjectProvider from './context/ProjectContext';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProjectProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProjectProvider>
  </React.StrictMode>
);
