import { NavLink } from "react-router";
import "./Menu.css";

export function Menu() {
  return (
    <nav className="center">
      <NavLink to="/" className="nav-item" end>
        Home
      </NavLink>
      <NavLink to="/timer" className="nav-item">
        Timer
      </NavLink>
      <NavLink to="/Saved" className="nav-item">
        Saved
      </NavLink>
      <NavLink to="/about" className="nav-item">
        About
      </NavLink>
    </nav>
  );
}
