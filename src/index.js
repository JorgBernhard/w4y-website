import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Pages/Header/Header';
import Main from './Pages/Main/Main';
import Projects from './Pages/Projects/Projects';
import Us from './Pages/Us/Us';
import Contact from './Pages/Contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Projects />
    <Us />
    <Contact />
  </React.StrictMode>
);
