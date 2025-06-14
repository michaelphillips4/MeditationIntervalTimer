import type {
  MeditationControlsProps,
  Section,
} from "../Utils/typeDefinitions";
import guruIcon from "/images/meditation-guru.png";
import { useEffect, useState } from "react";
import { playSound, preloadSounds } from "../Utils/Sounds";
import FadeOutText from "../FadeOutText";
import { releaseWakeLock, setWakeLock } from "../Utils/wakeLock";
import "./MeditationControls.css";
import ProgressBar from "@ramonak/react-progress-bar";

const MeditationControls = (
  meditationControlProps: MeditationControlsProps
) => {
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

              meditationControlProps.setCurrentSectionIndex(nextSectionIndex);

              setEndOfSectionSeconds(
                (x) =>
                  x +
                  meditationControlProps.sections[nextSectionIndex]?.duration *
                    60
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
                meditationControlProps.setCurrentSectionIndex(-1);
                releaseWakeLock;
              }
            }
          }
        }
      }, 1000); // Update every second
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning, isPaused, seconds, currentSection, endOfSectionSeconds]);

  const handleStart = () => {
    preloadSounds();
    setIsCompleted(false);
    setWakeLock();
    setEndOfSectionSeconds(meditationControlProps.sections[0].duration * 60);
    console.log("Setting end of section so: ", endOfSectionSeconds);
    setCurrentSection(meditationControlProps.sections[0]);
    meditationControlProps.setCurrentSectionIndex(0);
    setIsRunning(true);
    setIsPaused(false);
    setSeconds(0);
    const b = document.getElementById("button-start") as HTMLButtonElement;
    b.scrollIntoView();
  };

  const handlePause = () => setIsPaused(!isPaused);

  const handleStop = () => {
    setIsRunning(false);
    setIsPaused(false);
    setSeconds(0);
    meditationControlProps.setCurrentSectionIndex(-1);
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
          <button onClick={handlePause} id="button-resume">
            {isPaused ? "Resume " : "Pause "} Meditation
          </button>
          <button onClick={handleStop}>Stop Meditation</button>
          <div className="time">
            <p>
              Current Section <b>{currentSection &&
                  meditationControlProps.sections.indexOf(currentSection) + 1}
              </b> of {meditationControlProps.sections.length} (Section Duration:
              {currentSection ? currentSection.duration : 0} mins)
            </p>
            <p>
              Total Meditation Time <b>
                {Math.floor(seconds / 60)}:
                {(seconds % 60).toString().padStart(2, "0")}
              </b> of {meditationControlProps.sections.reduce(
                (x, y) => x + y.duration,
                0
              )} mins
            </p>
        
         
            <ProgressBar
              completed={Math.floor(seconds / meditationControlProps.sections.reduce(
                (x, y) => x + y.duration * 60,
                0 ) * 100)}
              bgColor="#c8eaf2"
    baseBgColor="#f4f4f4"
    labelColor="#070707"
                        animateOnRender
              
            />
        
          </div>
        </>
      )}
      {isCompleted && (
        <FadeOutText text="Meditation Completed!" duration={8000} />
      )}
    </>
  );
};

export default MeditationControls;
