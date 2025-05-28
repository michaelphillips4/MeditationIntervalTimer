
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



  export {addToLocalStorage}