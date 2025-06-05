import "./Heading.css";
import { Menu } from "./Menu";
import lotus from "/images/lotus.png";

const Heading = () => (
  <header>
    
      <div className="heading-container">
        <div className="lotus">
           <img width="48" height="48" src={lotus} alt="lotus"  />
        </div>
       
        <h1>Meditation Timer </h1>
         <div className="lotus">
           <img width="48" height="48" src={lotus} alt="lotus"  />
        </div>
      </div>
   
    <Menu />
  </header>
);

export default Heading;
