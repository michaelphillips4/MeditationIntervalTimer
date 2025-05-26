import Saved from "./Saved";
import { useState } from "react";
import "./Timer.css";
import type { Section } from "./types";
import guruIcon from "./assets/images/meditation-guru.png";
import MeditationSection from "./MeditationSection";
import {FaPause, FaSave, FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
 
function Timer() {
  const [lastSetTime, setLastSetTime] = useState(10);
  const [isRunning, setIsRunning] = useState(false);
  const [sections, setSections] = useState<Section[]>([
    { time: 10, sound: "bowl" },
  ]);

  const addSection = () => {
    const newSection: Section = { time: lastSetTime, sound: "bowl" }; // Default values
    setSections([...sections, newSection]);
  };

  const removeSection = (index: number) => {
    const newSections = sections.filter((_, i) => i !== index);
    setSections(newSections);
  };

  const updateSectionTime = (index: number, time: number) => {
    const newSections = [...sections];
    newSections[index].time = time;
    setLastSetTime(time);
    setSections(newSections);
  };

  const updateSectionSound = (index: number, sound: string) => {
    const newSections = [...sections];
    newSections[index].sound = sound;
    setSections(newSections);
  };

  return (
    <>
      <main>
        <Saved />

        <div id="meditation">
          <fieldset>
            <legend>&emsp;Meditation &emsp;</legend>

            <ol id="stagesList">
              {sections.map((section, index) => (
                <li key={index} className="section">
                  <MeditationSection
                    section={section}
                    index={index}
                    removeSection={removeSection}
                    updateSectionTime={updateSectionTime}
                    updateSectionSound={updateSectionSound}
                  />
                </li>
              ))}
            </ol>

            <button
              onClick={addSection}
              title="Add a Section of time, ending with a gong, to the meditation."
              accessKey="n"
            >
              <FaPlus /> Add Another Section
            </button>
          </fieldset>

          <div id="run-buttons">
            <button
              id="button-start"
              accessKey="s"
              onClick={() => setIsRunning(true)}
            >
              <img
                width="48"
                height="48"
                src={guruIcon}
                alt="meditation-guru"
              />
              <br />
              Start Meditation
            </button>
            {isRunning && (
              <>
                <br />
                <button id="button-pause">
                  <FaPause /> Pause Meditation
                </button>
                <button id="button-stop">
                  <IoClose /> Stop Meditation
                </button>
                <p id="timer"></p>
              </>
            )}
            <button
              onClick={() => alert("saveMeditationDialog")}
              title="This will save the time sections and name for future use. Saved meditations will be listed in the Saved meditations section at the top of the form. The Saved meditation area is only shown if there are saved meditations. Note currently any saved mediation are only currently stored in the browsers local storage."
            >
              <FaSave /> Save
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Timer;
