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

      <div className={"top-nav " + (menuState === true ? "opened" : "closed")}>
        <div id="links">
          <NavLink to="/" onClick={clearOpacity} end>Home</NavLink>
          <NavLink to="/timer" onClick={clearOpacity}>Timer</NavLink>
          <NavLink to="/Saved" onClick={clearOpacity}>Saved</NavLink>
          <NavLink to="/about" onClick={clearOpacity}>About</NavLink>
        </div>
      </div>
    </nav>
  );
}
