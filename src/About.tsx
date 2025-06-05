import { bowl, bell } from "./Sounds";
import "./About.css";
import RandomImage from "./RandomImage";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <>
      <main className="info">
        <h2>About</h2>
        <p>
          This is a simple meditation timer that allows you to set different
          sections for your meditation practice. You can customize the duration
          of each section and save your favorite meditation for later use.
        </p>

        <h2>Sections</h2>
        <p>
          Add sections to you meditation and set the section duration. When the
          section ends a gong will sound.
        </p>
        <h2>Sounds</h2>
        <p>
          Bowl <br />
          <audio controls>
            <source src={bowl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <br />
          Bell <br />
          <audio controls>
            <source src={bell} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </p>
         <h2>Lists</h2>
        <ul >
          <li >
            <NavLink to="/quotes" className="left">Quotes</NavLink>
          </li>
          <li >
            <NavLink to="/images" className="left">Images</NavLink>
          </li>
        </ul>
        <h2>Saved Meditations</h2>
        <p>
          You can save your meditation to use them again later. Click on the
          "Save" button to save your current meditation.
          <br />
          To load a saved meditation, click on the "Load" button next to the
          meditation you want to use.
        </p>

        <h2>Embed Meditation Timer</h2>
        <p>
          You can embed the meditation timer in your own website. Just copy and
          paste the code below into your HTML file.
        </p>

        <p className="center">
          <code>
            <span id="links">
              &lt;iframe <br />
              style="border:none" <br />
              height="800" <br />
              width="500" <br />
              title="Meditation Interval Timer" <br />
              src= "https://meditationintervaltimer.co.uk" &gt;
              <br />
              &lt;/iframe &gt;
            </span>
            <br />
            <br />
            <button
              className="copy-button"
              onClick={() => {
                const text = document.getElementById("links")?.innerText || "";
                navigator.clipboard.writeText(text);
              }}
            >
              copy
            </button>
          </code>
        </p>
        <h2>Bug Log and Comments</h2>
        <p>
          Please add any comments of bugs via the link below. Please create a
          login if using it for the first time.{" "}
          <a href="https://main.d8oy8keixqflp.amplifyapp.com/" target="_blank">
            Click here
          </a>
        </p>
       

        <div className="center">
          <RandomImage />
        </div>
      </main>
    </>
  );
}

export default About;
