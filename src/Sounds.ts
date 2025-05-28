import bowl from "./assets/sounds/Bowl.mp3";
import bell from "./assets/sounds/Bell.mp3";


  const playSound = (sound: string) => {
    console.log("playing sound:", sound);
    const audio = new Audio(sound === "bowl" ? bowl : bell);
    audio.play().catch((error) => {
      console.error("Error playing sound:", error);
    });
  };

  export {playSound, bowl, bell};