
import type { StorageMeditation } from "./typeDefinitions";


 const key = "SeriesTimerKey" ;

  const addToLocalStorage = (value: StorageMeditation) => {
    const existingMeditations = localStorage.getItem(key);
    const meditations: StorageMeditation[] = existingMeditations
      ? JSON.parse(existingMeditations)
      : [];
    meditations.push(value);
    localStorage.setItem(key, JSON.stringify(meditations));
  };

  const readFromLocalStorage = (): StorageMeditation[] => {
    const existingMeditations = localStorage.getItem(key);
    return existingMeditations ? JSON.parse(existingMeditations) : []; 
  }


  const removeMeditationFromLocalStorage = (meditation: StorageMeditation) => {
    const existingMeditations = localStorage.getItem(key);
    if (existingMeditations) {
      const meditations: StorageMeditation[] = JSON.parse(existingMeditations);
      const updatedMeditations = meditations.filter(
        (m) => m.name !== meditation.name || m.date !== meditation.date
      );
      localStorage.setItem(key, JSON.stringify(updatedMeditations));
    }
  };


  export {addToLocalStorage,readFromLocalStorage, removeMeditationFromLocalStorage};