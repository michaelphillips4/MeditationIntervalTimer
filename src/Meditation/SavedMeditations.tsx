import { useEffect, useState } from "react";
import {
  readFromLocalStorage,
  removeMeditationFromLocalStorage,
} from "../Utils/localStorage";
import type { StorageMeditation } from "../Utils/typeDefinitions";
import "./SavedMeditations.css";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import FadeOutText from "../FadeOutText";
import RandomImage from "../RandomImage";
import RandomQuote from "../Quotes/RandomQuote";

const Saved = () => {
  const [items, setItems] = useState<StorageMeditation[]>([]);

  useEffect(() => {
    const items = readFromLocalStorage();
    if (items) {
      setItems(items);
    }
  }, []);

  const removeMeditation = (meditation: StorageMeditation) => {
    removeMeditationFromLocalStorage(meditation);
    setItems((prevItems) =>
      prevItems.filter(
        (item) => item.name !== meditation.name || item.date !== meditation.date
      )
    );
  };

  const navigate = useNavigate();

  const redirectLoad = (meditation: StorageMeditation) => {
    const dataToPass: StorageMeditation = meditation;
    navigate("/timer", { state: dataToPass });
  };

  return (
    <>
      <h3>Saved Meditations</h3>

      {items.length === 0 && (
        <FadeOutText
          text={
            "You haven't saved any meditations yet. When you do they will be listed here. To Save a meditation create one in Timer and press the Save button. "
          }
          duration={12000}
        />
      )}

      <ol>
        {items.map((meditation, index) => (
          <li key={index} className="saved-item">
            <div className="saved-item-container">
              <div className="saved-item-first">
                <button
                  onClick={() => redirectLoad(meditation)}
                  title={`Load ${meditation.name} meditation`}
                >
                  Load
                </button>
              </div>
              <div className="saved-item-text">
                {meditation.name} (
                {meditation.stages.map((e) => e.duration).join("mins,")}mins).
              </div>
              <div className="saved-item-last">
                <i
                  className="fa fa-trash section-remove right"
                  title="Remove this meditation ."
                  role="button"
                  onClick={() => removeMeditation(meditation)}
                >
                  <FaTrashAlt />
                </i>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <RandomQuote />
      <RandomImage />
    </>
  );
};

export default Saved;
