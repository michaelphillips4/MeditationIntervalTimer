import { useEffect, useState } from "react";
import type { Section, StorageMeditation } from "./Utils/typeDefinitions";
import Meditation from "./Meditation/Meditation";
import MeditationControls from "./Meditation/MeditationControls";
import OpenSaveDialogButton from "./Meditation/OpenSaveDialogButton";
import { useLocation } from "react-router-dom";
import RandomImage from "./RandomImage";
import RandomQuote from "./Quotes/RandomQuote";
import SaveDialog from "./Meditation/SaveDialog";

function Timer() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(-1);
  const [name, setName] = useState("Meditation ");
  const [save, setSave] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);
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
    <>
    <main id="main">
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
      <OpenSaveDialogButton saved={saved} 
      setSave={setSave} />
      <RandomQuote />
      <RandomImage />
    </main>
    <SaveDialog saved={saved} setSaved={setSaved} 
      sections={sections} save={save} setSave={setSave} />
    </>
  );
}

export default Timer;
