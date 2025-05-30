import { useEffect, useState } from "react";
import "./Timer.css";
import type { Section, StorageMeditation } from "./typeDefinitions";
import Meditation from "./Meditation/Meditation";
import MeditationControls from "./Meditation/MeditationControls";
import Save from "./Meditation/Save";
import { useLocation } from "react-router-dom";

function Timer() {
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
      <Meditation sections={sections} setSections={setSections} name={name}/>
      <MeditationControls sections={sections} />
      <Save sections={sections} />
    </main>
  );
}

export default Timer;
