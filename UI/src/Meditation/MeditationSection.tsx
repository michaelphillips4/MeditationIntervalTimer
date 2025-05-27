import { FaTrashAlt } from "react-icons/fa";
import type { SectionProps } from "../typeDefinitions";

const MeditationSection = (sectionProps: SectionProps) => {
  return (
    <>
      <div>
        <label className="section-range-label">
          <span className="section-time">{sectionProps.section.time}</span>
          minutes
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
          className="time-range"
          type="range"
          step="1"
          min="1"
          max="60"
          value={sectionProps.section.time}
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
