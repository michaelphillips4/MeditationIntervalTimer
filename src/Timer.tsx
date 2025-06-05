import { useEffect, useState } from "react";
import "./Timer.css";
import type { Section, StorageMeditation } from "./typeDefinitions";
import Meditation from "./Meditation/Meditation";
import MeditationControls from "./Meditation/MeditationControls";
import Save from "./Meditation/Save";
import { useLocation } from "react-router-dom";
import RandomImage from "./RandomImage";
import RandomQuote from "./Quotes/RandomQuote";

function Timer() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(-1);
  const [name, setName] = useState("Meditation ");
  const [sections, setSections] = useState<Section[]>([
    { duration: 10, sound: "bowl" },
  ]);
  const location = useLocation();
  const data = location.state as StorageMeditation;

  useEffect(() => {
    if (data) {
      setSections(data.stages);
      setName(data.name);
    }
  }, []);

  return (
    <main>
      <Meditation
        sections={sections}
        setSections={setSections}
        name={name}
        currentSectionIndex={currentSectionIndex}
        setCurrentSectionIndex={setCurrentSectionIndex}
      />
      <MeditationControls
        sections={sections}
        currentSectionIndex={currentSectionIndex}
        setCurrentSectionIndex={setCurrentSectionIndex}
      />
      <Save sections={sections} />
      <RandomQuote />
      <RandomImage />
    </main>
  );
}

export default Timer;
