import React from 'react'
import ReactDOM from 'react-dom/client'
import './orca.min.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { Menu } from './Menu.js';
import Heading from './Heading.js';
 
 
const root = ReactDOM.createRoot(document.getElementById("root")!)
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Heading />
      <Menu />
      <App />
    </BrowserRouter>
  </React.StrictMode>
)        