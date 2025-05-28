import "./Heading.css";
import lotus from "./assets/images/lotus.png";

const Heading = () => (
  <header>
    <h1>
      <img width="48" height="48" src={lotus} alt="lotus" /> Meditation
      <img
        width="48"
        height="48"
        src={lotus}
        alt="lotus"
        className="hide"
        id="middle-lotus"
      />
      Timer <img width="48" height="48" src={lotus} alt="lotus" id="last-lotus" />
    </h1>
  </header>
);

export default Heading;
