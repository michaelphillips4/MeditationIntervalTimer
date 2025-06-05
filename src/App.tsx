
import {  Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Timer from './Timer';
import Saved from './Meditation/Saved';
import "./App.css";
import Quotes from './Quotes/Quotes';
import Images from './Images';

const App = () => (
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/timer" element={<Timer />} />
      <Route path="/saved" element={<Saved />} />
      <Route path="/quotes" element={<Quotes />} />
      <Route path="/images" element={<Images />} />
    </Routes>
  
);

export default App;