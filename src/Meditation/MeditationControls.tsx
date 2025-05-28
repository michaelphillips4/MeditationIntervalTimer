import type {MeditationControlsProps, Section } from "../typeDefinitions";
import guruIcon from "../assets/images/meditation-guru.png";
import { useEffect, useState } from "react";
import { playSound } from "../Sounds";
import FadeOutText from "../FadeOutText";
import { releaseWakeLock, setWakeLock } from "../wakeLock";

const MeditationControls = (meditationControlProps: MeditationControlsProps) => {
  const [seconds, setSeconds] = useState(0);
  const [endOfSectionSeconds, setEndOfSectionSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [currentSection, setCurrentSection] = useState<Section | null>(null);

  useEffect(() => {
    let interval: number;

    if (isRunning) {
      interval = setInterval(() => {
        if (!isPaused) {
          setSeconds((prevSeconds) => prevSeconds + 1);

          if (seconds >= endOfSectionSeconds) {
            if (currentSection) {
             playSound(currentSection.sound);

              const nextSectionIndex =
                meditationControlProps.sections.indexOf(currentSection) + 1;

              setCurrentSection(
                meditationControlProps.sections[nextSectionIndex]
              );

              setEndOfSectionSeconds(
                (x) =>
                  x +
                  meditationControlProps.sections[nextSectionIndex]?.duration * 60
              );

              if (
                currentSection === null ||
                nextSectionIndex >= meditationControlProps.sections.length
              ) {
                // If there are no more sections, stop the timer
                clearInterval(interval);
                setIsRunning(false);
                setIsPaused(false);
                setSeconds(0);
                setIsCompleted(true);
                releaseWakeLock
              }
            }
          }
        }
      }, 100); // Update every second
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning, isPaused, seconds, currentSection, endOfSectionSeconds]);

  const handleStart = () => {
    setWakeLock();
    setEndOfSectionSeconds(meditationControlProps.sections[0].duration * 60);
    console.log("Setting end of section so: ", endOfSectionSeconds);
    setCurrentSection(meditationControlProps.sections[0]);
    setIsRunning(true);
    setIsPaused(false);
    setSeconds(0);
  };

  const handlePause = () => setIsPaused(!isPaused);

  const handleStop = () => {
    setIsRunning(false);
    setIsPaused(false);
    setSeconds(0);
    releaseWakeLock();
  };

  return (
    <>
      <button
        id="button-start"
        accessKey="s"
        onClick={handleStart}
        disabled={isRunning}
      >
        <img width="48" height="48" src={guruIcon} alt="meditation-guru" />
        <br />
        Start Meditation
      </button>
      {isRunning && (
        <>
          <br />
          <button onClick={handlePause}>
            {isPaused ? "Resume " : "Pause "} Meditation
          </button>
          <button onClick={handleStop}>Stop Meditation</button>
          <p>
            Current Section <b>{currentSection && meditationControlProps.sections.indexOf(currentSection) + 1}</b> of {meditationControlProps.sections.length} (Section Duration: {currentSection ? currentSection.duration : 0} mins)
            </p>
            <span className="time">
            Total Meditation Time <b>{Math.floor(seconds / 60)}:
              {(seconds % 60).toString().padStart(2, "0")}</b>  of {meditationControlProps.sections.reduce((x, y) => x + y.duration, 0)} mins
            </span>
        
        </>
      )}
      {isCompleted && (
        <FadeOutText text="Meditation Completed!" duration={8000} />
        
      )}
    </>
  );
};

export default MeditationControls;
