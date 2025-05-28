import { useState } from "react";
import "./Save.css";
import type {
  MeditationSaveProps,
  StorageMeditation,
} from "../typeDefinitions";
import { addToLocalStorage } from "../localStorage";
import FadeOutText from "../FadeOutText";

const Save = (meditationSaveProps: MeditationSaveProps) => {
  const [save, setSave] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);
  const [meditationName, setMeditationName] = useState<string>("");

  return (
    <div>
      <dialog open={save}>
        <label htmlFor="name"> Name Of Meditation </label>
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
            }
            else{
              const currentMeditation: StorageMeditation = {
                name: meditationName,
                date: new Date().toISOString(),
                stages: meditationSaveProps.sections,
              };
              addToLocalStorage(currentMeditation);
              setSave(false);
              setSaved(true);
            }
          }}
        >
          Save
        </button>
        <button onClick={() => setSave(false)}>Close</button>
      </dialog>
      <button className="save-button" onClick={() => setSave(true)}>
        Save
      </button>
      {saved && (
        <FadeOutText text="Meditation saved successfully!" duration={3000} />
      )}

    </div>
  );
};

export default Save;
