
import { useState } from "react";
import type { MeditationSaveProps,StorageMeditation } from "../typeDefinitions";


const Save = (meditationSaveProps:MeditationSaveProps) => {
 const [save, setSave] = useState<boolean>(false);
 const [meditationName, setMeditationName] = useState<string>("")


 const saveToLocalStorage = () => {
   const storageMeditation:StorageMeditation = {
     sections: meditationSaveProps.sections,
     name: meditationName,
     date: new Date().toISOString(),
   };
   console.log("Saving meditation:", storageMeditation);
 };
 

  return (
    <div>
     
        <button className="save-button" onClick={() =>setSave(true)}>Save</button>
  
      {save && (
      <div className="save-form">
        <label>
          Meditation Name:
          <input
            type="text"
            value={meditationName}
            onChange={(e) => setMeditationName(e.target.value)}
          placeholder="Enter meditation name"
          />
        </label> 
          <button onClick={saveToLocalStorage}>Ok </button>
    </div>
    )}
    </div>)
}

export default Save;