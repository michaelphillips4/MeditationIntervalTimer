import Saved from "./Saved";
import { useState, useEffect } from "react";
import "./Timer.css";
import type { Section } from "./types";

import bowl from "./assets/sounds/Bowl.mp3";
import bell from "./assets/sounds/Bell.mp3";
import Meditation from "./Meditation/Meditation";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [endOfSectionSeconds, setEndOfSectionSeconds] = useState(0);
  const [lastSetTime, setLastSetTime] = useState(10);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentSection, setCurrentSection] = useState<Section | null>(null);
  const [sections, setSections] = useState<Section[]>([
    { time: 10, sound: "bowl" },
  ]);

  const addSection = () => {
    const newSection: Section = { time: lastSetTime, sound: "bowl" };
    setSections([...sections, newSection]);
  };

  const removeSection = (index: number) => {
    const newSections = sections.filter((_, i) => i !== index);
    setSections(newSections);
  };

  const updateSectionTime = (index: number, time: number) => {
    const newSections = [...sections];
    newSections[index].time = time;
    setLastSetTime(time);
    setSections(newSections);
  };

  const updateSectionSound = (index: number, sound: string) => {
    const newSections = [...sections];
    newSections[index].sound = sound;
    setSections(newSections);
    playSound(sound);
  };

  const playSound = (sound: string) => {
    const audio = new Audio(sound === "bowl" ? bowl : bell);
    audio.play().catch((error) => {
      console.error("Error playing sound:", error);
    });
  };

  useEffect(() => {
    let interval: number;

    if (isRunning) {
      interval = setInterval(() => {
        if (!isPaused) {
          setSeconds((prevSeconds) => prevSeconds + 1);

          if (seconds >= endOfSectionSeconds) {
            if (currentSection) {
              playSound(currentSection.sound);

              const nextSectionIndex = sections.indexOf(currentSection) + 1;

              setCurrentSection(sections[nextSectionIndex]);

              setEndOfSectionSeconds(
                (x) => x + sections[nextSectionIndex]?.time * 60
              );

              if (
                currentSection === null ||
                nextSectionIndex >= sections.length
              ) {
                // If there are no more sections, stop the timer
                clearInterval(interval);
                setIsRunning(false);
                setIsPaused(false);
                setSeconds(0);
              }
            }
          }
        }
      }, 250);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning, isPaused, seconds, currentSection, endOfSectionSeconds]);

  const handleStart = () => {
    setEndOfSectionSeconds(sections[0].time * 60);
    console.log("Setting end of section so: ", endOfSectionSeconds);
    setCurrentSection(sections[0]);
    setIsRunning(true);
    setIsPaused(false);
    setSeconds(0);
  };

  const handlePause = () => setIsPaused(!isPaused);

  const handleStop = () => {
    setIsRunning(false);
    setIsPaused(false);
    setSeconds(0);
  };

  return (

      <main>

        <Saved />

       <Meditation
         sections={sections}
         removeSection={removeSection}
         updateSectionTime={updateSectionTime}
         updateSectionSound={updateSectionSound}
         addSection={addSection}
         isRunning={isRunning}
         isPaused={isPaused}
         currentSection={currentSection}
         seconds={seconds}
         handleStart={handleStart}
         handlePause={handlePause}
         handleStop={handleStop}
       />

      </main>
 
  );
}

export default Timer;

