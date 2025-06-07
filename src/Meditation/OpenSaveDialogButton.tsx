import type { OpenSaveDialogButtonProps } from "../Utils/typeDefinitions";
import FadeOutText from "../FadeOutText";

const OpenSaveDialogButton = (props: OpenSaveDialogButtonProps) => {
  return (
    <div>
      <button
        className="save-button"
        onClick={() => {
          props.setSave(true);
          const elem = document.getElementById("main");
          elem?.classList.add("blur");
        }}
      >
        Save
      </button>
      {props.saved && (
        <FadeOutText
          text="Meditation saved successfully! You will see it listed in the Saved Section."
          duration={3000}
        />
      )}
    </div>
  );
};

export default OpenSaveDialogButton;
