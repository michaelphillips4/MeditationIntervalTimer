import lotusImage from './assets/images/lotus.jpeg';
import {bowl,bell } from "./Sounds";
import "./About.css";

function About() {
  

  return (
    <>
    <main className="info">
      <h2>About</h2>
      <p>
        This is a simple meditation timer that allows you to set different
        sections for your meditation practice. You can customize the duration of
        each section and save your favorite meditation for later use.
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

      <p className='center'>
        <code>
          <span id="links">
            &lt;iframe <br />
            style="border:none" <br />
            height="800" <br />
            width="500" <br />
            title="Meditation Interval Timer" <br />
            src= "https://meditationintervaltimer.co.uk"             &gt;
            <br />
            &lt;/iframe &gt;
          </span>
          <br />
          <br />
          <button
            className="copy-button"
            onClick={() => {
              const text = document.getElementById('links')?.innerText || '';
              navigator.clipboard.writeText(text);
            }}
          >
            copy
          </button>
        </code>
      </p>

      <div className="center">
        <img src={lotusImage} alt="lotus" className="app-image center" />

        <p>
         v2 By Michael Phillips
          <a href="http:\\orca-tools.com">http:\\orca-tools.com</a>
        </p>
      </div>
    </main>
 
    </>
  )
}

export default About
