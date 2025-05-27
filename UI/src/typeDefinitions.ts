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
  setSections: (sections: Section[]) => void;

}

interface MeditationControlsProps {
  sections: Section[];
}

interface MeditationSaveProps {
  sections: Section[];
}

interface StorageMeditation{
  sections: Section[];
  name: string;
  date: string; 
}

interface StorageMeditations {
  meditations: StorageMeditation[];
  
}

export type { Section, SectionProps, MeditationProps, MeditationControlsProps, MeditationSaveProps, StorageMeditation, StorageMeditations };


