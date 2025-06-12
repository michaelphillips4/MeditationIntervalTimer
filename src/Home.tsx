import { NavLink } from "react-router-dom";
import lotus from "/images/lotus.png";
import "./Home.css";
import RandomImage from "./RandomImage";
import RandomQuote from "./Quotes/RandomQuote";

function Home() {

  return (
    <>
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

     <RandomQuote />
      <p className="center">
        <RandomImage />
      </p>
    </>
  );
}

export default Home;
