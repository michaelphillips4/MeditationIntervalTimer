

type Section = { time: number; sound: string };

interface SectionProps {
  section: Section;
  index: number;
  removeSection: (index: number) => void;
  updateSectionTime: (index: number, time: number) => void;
  updateSectionSound: (index: number, sound: string) => void;   
}

export type { Section,SectionProps }
