import { NavLink } from "react-router-dom";
import lotus from "/images/lotus.png";
import "./Home.css";
import pic0 from "/images/piclist/pic0.jpeg";
import pic1 from "/images/piclist/pic1.jpeg";
import pic2 from "/images/piclist/pic2.jpeg";
import pic3 from "/images/piclist/pic3.jpeg";
import pic4 from "/images/piclist/pic4.jpeg";

import data from "./quotes.json";

function Home() {
  
const randomIndex = Math.floor(Math.random() * data.quotes.length);
const images = [pic0, pic1, pic2, pic3, pic4];
const randomImageIndex = Math.floor(Math.random() * images.length);

  return (
     <main >
     
      <p>
        This is a simple meditation timer. It allows you to set different
        sections for your meditation practice. You can customize the duration of
        each section and save your favorite meditation for later use.
      </p>
      <p className="center">
        <NavLink to="/timer" className="button">
          <img width="48" height="48" src={lotus} alt="lotus" />
          <br />
         Click here for the Meditation Timer
        </NavLink>
      </p> 
      
      <blockquote id="quote">
        {data.quotes[randomIndex].quote}
      </blockquote>
      <div className="center"><cite id="author">{data.quotes[randomIndex].by}</cite></div>
      <p className="center">
        <img id="image" src={images[randomImageIndex]} alt="lotus" />
      </p>
    </main>
  )
}

export default Home
