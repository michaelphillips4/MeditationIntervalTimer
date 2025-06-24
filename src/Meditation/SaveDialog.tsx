import { useState } from "react";
import type {
  MeditationSaveProps,
  StorageMeditation,
} from "../Utils/typeDefinitions";
import { addToLocalStorage } from "../Utils/localStorage";
import { useNavigate } from "react-router-dom";

const SaveDialog = (meditationSaveProps: MeditationSaveProps) => {
  const [meditationName, setMeditationName] = useState<string>("");
  const navigate = useNavigate();
  const removeBackGroundBlur = () => {
    const elem = document.getElementById("main");
    elem?.classList.remove("blur");
  }


  return (
    <dialog open={meditationSaveProps.save}>
      <label htmlFor="name">
        Name Of Meditation
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
            navigate("/saved");
          }
        }}
      >
        Save
      </button>
      <button onClick={() => {
        meditationSaveProps.setSave(false);
        removeBackGroundBlur()
      }}>Close</button>
    </dialog>
  );
};

export default SaveDialog;
