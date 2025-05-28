import bowl from "./assets/sounds/Bowl.mp3";
import bell from "./assets/sounds/Bell.mp3";

const soundsMap = new Map<string,HTMLAudioElement>() ;
soundsMap.set("bell", new Audio(bell));
soundsMap.set("bowl", new Audio(bowl));

  const playSound = (sound: string) => {
    console.log("playing sound:", sound);
    const audio = soundsMap.get(sound.toLocaleLowerCase());
    if (audio) {
      audio.play().catch((error) => {
        console.error("Error playing sound:", error);
      });
    } else {
      console.error(`Sound "${sound}" not found in soundsMap.`);
    }
  };

  export {playSound, bowl, bell};