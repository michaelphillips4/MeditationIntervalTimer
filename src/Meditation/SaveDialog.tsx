import { useState } from "react";
import "./Save.css";
import type {
  MeditationSaveProps,
  StorageMeditation,
} from "../Utils/typeDefinitions";
import { addToLocalStorage } from "../Utils/localStorage";

const SaveDialog = (meditationSaveProps: MeditationSaveProps) => {
  const [meditationName, setMeditationName] = useState<string>("");

  const removeBackGroundBlur = ()=>{
    const elem = document.getElementById("main");
          elem?.classList.remove("blur");
  }


  return (
    <dialog className={meditationSaveProps.save ? "xd" : ""} open={meditationSaveProps.save}>
      <label htmlFor="name">
        Name Of Meditation {meditationSaveProps.save.toString()}
      </label>
      <input
        id="name"
        type="text"
        value={meditationName}
        onChange={(e) => setMeditationName(e.target.value)}
        list="meditations-datalist"
        required
      />
      <datalist id="meditations-datalist">
        <option value="Mindfulness of Breathing"></option>
        <option value="Metta Bhavana"></option>
      </datalist>

      <button
        onClick={() => {
          if (meditationName.length === 0) {
            alert("A meditation name is required.");
          } else {
            const currentMeditation: StorageMeditation = {
              name: meditationName,
              date: new Date().toISOString(),
              stages: meditationSaveProps.sections,
            };
            addToLocalStorage(currentMeditation);
            meditationSaveProps.setSave(false);
            meditationSaveProps.setSaved(true);
            removeBackGroundBlur();
          }
        }}
      >
        Save
      </button>
      <button onClick={() =>{ 
        meditationSaveProps.setSave(false); 
        removeBackGroundBlur()}}>Close</button>
    </dialog>
  );
};

export default SaveDialog;
