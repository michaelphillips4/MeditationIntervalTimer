
import {  Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Timer from './Pages/Timer';
import Saved from './Pages/Saved';
import "./App.css";
import Quotes from './Pages/Quotes';
import Images from './Pages/Images';

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