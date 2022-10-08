import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.scss';
import Header from './headerComp';
import NavMenu from './menuComp';
import Container from './container';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Header />
    <Container />
    <NavMenu />
  </React.StrictMode>
  </BrowserRouter>
);
reportWebVitals();
