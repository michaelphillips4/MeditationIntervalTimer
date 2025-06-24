import { NavLink, useNavigate } from "react-router-dom";
import "./Heading.css";
import { Menu } from "./Menu";

const Heading = () =>
 (

  
  <>
    <header>
      <h1><NavLink to="/timer">Meditation Timer</NavLink></h1>
      <Menu />
    </header>
  </>)


export default Heading;
