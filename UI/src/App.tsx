
import {  Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Timer from './Timer';

const App = () => (
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/timer" element={<Timer />} />
    </Routes>
  
);

export default App;