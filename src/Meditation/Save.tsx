import "./Save.css";
import type { MeditationSaveProps } from "../Utils/typeDefinitions";

import FadeOutText from "../FadeOutText";

const Save = (meditationSaveProps: MeditationSaveProps) => {
  return (
    <div>
      <button
        className="save-button"
        onClick={() => {
          meditationSaveProps.setSave(true);
          const elem = document.getElementById("main");
          elem?.classList.add("blur");
        }}
      >
        Save
      </button>
      {meditationSaveProps.saved && (
        <FadeOutText
          text="Meditation saved successfully! You will see it listed in the Saved Section."
          duration={3000}
        />
      )}
    </div>
  );
};

export default Save;
