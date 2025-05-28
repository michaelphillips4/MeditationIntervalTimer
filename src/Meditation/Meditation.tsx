import { useState } from "react";
import type { MeditationProps,Section } from "../typeDefinitions";
import "./Meditation.css";
import { playSound } from "../Sounds";
import MeditationSection from "./MeditationSection";
import { FaPlus } from "react-icons/fa";

const Meditation = (meditationProps: MeditationProps) => {
 const [lastSetTime, setLastSetTime] = useState(10);

  const addSection = () => {
    const newSection: Section = { duration: lastSetTime, sound: "bowl" };
    meditationProps.setSections([...meditationProps.sections, newSection]);
  };

  const removeSection = (index: number) => {
    const newSections = meditationProps.sections.filter((_, i) => i !== index);
    meditationProps.setSections(newSections);
  };

  const updateSectionTime = (index: number, time: number) => {
    const newSections = [...meditationProps.sections];
    newSections[index].duration = time;
    setLastSetTime(time);
    meditationProps.setSections(newSections);
  };

  const updateSectionSound = (index: number, sound: string) => {
    const newSections = [...meditationProps.sections];
    newSections[index].sound = sound;
    meditationProps.setSections(newSections);
    playSound(sound);
  };


  return (
  
      <fieldset>
        <legend>{meditationProps.name}</legend>

        <ol>
          {meditationProps.sections.map((section, index) => (
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

  );
};

export default Meditation;
