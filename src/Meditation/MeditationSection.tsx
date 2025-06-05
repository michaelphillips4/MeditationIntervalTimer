import { FaTrashAlt } from "react-icons/fa";
import type { SectionProps } from "../Utils/typeDefinitions";





const MeditationSection = (sectionProps: SectionProps) => {
  const rangeInputId = "range-" + sectionProps.index;
 
  return (
    <>
      <div>
        <span className="section-index">{sectionProps.index+1}</span>
        <label className="section-range-label" htmlFor={rangeInputId}>
          <span className="section-time">{sectionProps.section.duration}</span> minutes
          <span
            className="fa fa-trash section-remove right"
            onClick={() => sectionProps.removeSection(sectionProps.index)}
            title="Remove this section from the meditation."
            role="button"
          >
            <FaTrashAlt />
          </span>
        </label>
      </div>
      <div className="center">
        <input
          id={rangeInputId}
          className="time-range"
          type="range"
          step="1"
          min="1"
          max="60"
          value={sectionProps.section.duration}
          onChange={(e) =>
            sectionProps.updateSectionTime(
              sectionProps.index,
              Number(e.target.value)
            )
          }
        />
        <label
          htmlFor={`sound-${sectionProps.index}`}
          className="sound-select-label"
        >
          Select an end sound.
        </label>
        <select
          id={`sound-${sectionProps.index}`}
          className="sound-select"
          value={sectionProps.section.sound}
          onChange={(e) => {
            sectionProps.updateSectionSound(sectionProps.index, e.target.value);
          }}
        >
          <option value="bowl">Bowl</option>
          <option value="bell">Bell</option>
        </select>
      </div>
    </>
  );
};

export default MeditationSection;
