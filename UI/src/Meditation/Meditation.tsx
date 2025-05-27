import type { MeditationProps } from "../types";
import guruIcon from "../assets/images/meditation-guru.png";
import MeditationSection from "./MeditationSection";
import { FaPlus } from "react-icons/fa";

function Meditation(meditationProps:MeditationProps) {
    
  return <div id="meditation">
    <fieldset>
      <legend>&emsp;Meditation &emsp;</legend>

      <ol id="stagesList">
        {meditationProps.sections.map((section, index) => (
          <li key={index} className="section">
            <MeditationSection
              section={section}
              index={index}
              removeSection={meditationProps.removeSection}
              updateSectionTime={meditationProps.updateSectionTime}
              updateSectionSound={meditationProps.updateSectionSound} />
          </li>
        ))}
      </ol>

      <button
        onClick={meditationProps.addSection}
        title="Add a Section of time, ending with a gong, to the meditation."
        accessKey="n"
      >
        <FaPlus /> Add Another Section
      </button>
    </fieldset>

    <div>
      <button
        id="button-start"
        accessKey="s"
        onClick={meditationProps.handleStart}
        disabled={meditationProps.isRunning}
      >
        <img
          width="48"
          height="48"
          src={guruIcon}
          alt="meditation-guru" />
        <br />
        Start Meditation
      </button>
      {meditationProps.isRunning && (
        <>
          <br />
          <button onClick={meditationProps.handlePause}>
            {meditationProps.isPaused ? "Resume " : "Pause "} Meditation
          </button>
          <button onClick={meditationProps.handleStop}>Stop Meditation</button>
          <p>
            {meditationProps.seconds} {meditationProps.currentSection?.time}
          </p>
        </>
      )}
    </div>
  </div>;
}

export default Meditation;
