import { useEffect, useState} from "react";
import type { Section, StorageMeditation } from "./Utils/typeDefinitions";
import Meditation from "./Meditation/Meditation";
import MeditationControls from "./Meditation/MeditationControls";
import OpenSaveDialogButton from "./Meditation/OpenSaveDialogButton";
import { useLocation } from "react-router-dom";

import SaveDialog from "./Meditation/SaveDialog";
import ChildC from "./ImageAndQuote";

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
      <div id="main" className="center">
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
        <OpenSaveDialogButton saved={saved} setSave={setSave} />
        <ChildC/>
        
      </div>
   
      <SaveDialog
        saved={saved}
        setSaved={setSaved}
        sections={sections}
        save={save}
        setSave={setSave}
      />
    </>
  );
}

export default Timer;
