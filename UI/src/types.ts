

type Section = { time: number; sound: string };

interface SectionProps {
  section: Section;
  index: number;
  removeSection: (index: number) => void;
  updateSectionTime: (index: number, time: number) => void;
  updateSectionSound: (index: number, sound: string) => void;   
}

interface MeditationProps {
  sections: Section[];
  removeSection: (index: number) => void;
  updateSectionTime: (index: number, time: number) => void;
  updateSectionSound: (index: number, sound: string) => void;
  addSection: () => void;
  handleStart: () => void;
  isRunning: boolean;
  handlePause: () => void;
  isPaused: boolean;
  handleStop: () => void;
  seconds: number;
  currentSection: Section | null;}



export type { Section,SectionProps,MeditationProps }
