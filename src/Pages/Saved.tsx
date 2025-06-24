import { useState } from "react";
import {
  readFromLocalStorage,
  removeMeditationFromLocalStorage,
} from "../Utils/localStorage";
import type { StorageMeditation } from "../Utils/typeDefinitions";
import "./Saved.css";
import { FaTrashAlt } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import FadeOutText from "../FadeOutText";
import ImageAndQuote from "../ImageAndQuote";
import lotus from "/images/lotus.png";

const Saved = () => {
  const [items, setItems] = useState<StorageMeditation[]>(readFromLocalStorage());
  const navigate = useNavigate();

  const removeMeditation = (index:number) => {
      console.log(index);
    removeMeditationFromLocalStorage(index);
    setItems(readFromLocalStorage())
  };



  const redirectLoad = (meditation: StorageMeditation) => {
    const dataToPass: StorageMeditation = meditation;
    navigate("/timer", { state: dataToPass });
  };

  return (
    <>
      <h2>Saved Meditations</h2>

      {items.length === 0 && (
        <>
        <FadeOutText
          text={
            "You haven't saved any meditations yet. When you do they will be listed here. "
          }
          duration={12000}
        />
         <p className="center">
        <NavLink to="/timer" className="button">
          <img width="48" height="48" src={lotus} alt="lotus" />
          <br />
          Click here to create your meditation.
        </NavLink>
      </p>
</>
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
                <button onClick={()=>removeMeditation(index)}>
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <ImageAndQuote />
    
    </>
  );
};

export default Saved;
