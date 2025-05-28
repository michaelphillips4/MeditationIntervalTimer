import Saved from "./Meditation/Saved";
import { useState } from "react";
import "./Timer.css";
import type { Section } from "./typeDefinitions";

import Meditation from "./Meditation/Meditation";
import MeditationControls from "./Meditation/MeditationControls";
import Save from "./Meditation/Save";

function Timer() {
  const [sections, setSections] = useState<Section[]>([
    { duration: 10, sound: "bowl" },
  ]);

  return (
    <main>
      <Saved />
      <Meditation sections={sections} setSections={setSections} />
      <MeditationControls sections={sections} />
      <Save sections={sections}/>
    </main>
  );
}

export default Timer;
