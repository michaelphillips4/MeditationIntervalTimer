import { NavLink } from "react-router";
import "./Menu.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export function Menu() {
  const [menuState, setMenuState] = useState(false);
  const clearOpacity = () => setMenuState(false);

  return (
    <nav>
      <a
        id="burger"
        onClick={() => {
          setMenuState(!menuState);
        }}
      >
        <GiHamburgerMenu />
      </a>

      <div className={"topnav " + (menuState === true ? "active" : "")}>
        <div id="links">
          <NavLink to="/" className="nav-item" onClick={clearOpacity} end>
            Home
          </NavLink>
          <NavLink to="/timer" className="nav-item" onClick={clearOpacity}>
            Timer
          </NavLink>
          <NavLink to="/Saved" className="nav-item" onClick={clearOpacity}>
            Saved
          </NavLink>
          <NavLink to="/about" className="nav-item" onClick={clearOpacity}>
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
