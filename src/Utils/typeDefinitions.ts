type Section = { duration: number; sound: string };

interface SectionProps {
  section: Section;
  index: number;
  removeSection: (index: number) => void;
  updateSectionTime: (index: number, duration: number) => void;
  updateSectionSound: (index: number, sound: string) => void;
}

interface MeditationProps {
  sections: Section[];
  setSections: (sections: Section[]) => void;
  name:string;
   currentSectionIndex:number;
  setCurrentSectionIndex: (currentSectionIndex:number) => void;
}

interface MeditationControlsProps {
  sections: Section[];
  currentSectionIndex:number;
  setCurrentSectionIndex: (currentSectionIndex:number) => void;
}

interface MeditationSaveProps {
  sections: Section[];
}

interface MeditationLoadProps {
    setSections: (sections: Section[]) => void;
}

interface StorageMeditation{
  stages: Section[];
  name: string;
  date: string; 
}

interface StorageMeditations {
  meditations: StorageMeditation[];
  
}

export type { Section, SectionProps, MeditationProps, MeditationControlsProps, MeditationSaveProps, StorageMeditation, StorageMeditations, MeditationLoadProps };


