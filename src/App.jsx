import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Mega sure?",
  "Mega ultra sure?",
  "Mega ultra premium supreme sure?",
  "Wait pls no...",
  "Y u do this to me?",
  "Pls, am gonna be sad",
  "Gonna cry :(",
];

export default function App() {
  const [noCount, setNoCount] = useState(0);
  const [isYes, setIsYes] = useState(false);
  const yesBtnSize = noCount * 20 + 16;

  return (
    <div className="valentineContainer">
      {isYes ? (
        <>
          <div className="imageContainer">
            <img
              alt="bears hugging with hearts"
              className="yesImg"
              src="https://tenor.com/view/milk-and-mocha-gif-21799600.gif"
            />
          </div>
          <h1>
            YAY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          </h1>
          <div className="buttonContainer">
            <button className="restartButton" onClick={() => setIsYes(false)}>
              Restart
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="imageContainer">
            <img
              alt="bear bouncing with flowers in mouth"
              className="noImg"
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            />
          </div>
          <div>Will you be my Valentine?</div>
          <div className="buttonContainer">
            <button
              className="yesButton"
              onClick={() => setIsYes(true)}
              style={{ fontSize: yesBtnSize }}
            >
              Yes
            </button>
            <button
              className="noButton"
              onClick={() => handleClick({ noCount, setNoCount })}
            >
              {getNoText({ noCount })}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function handleClick({ noCount, setNoCount }) {
  setNoCount(noCount + 1);
}

function getNoText({ noCount }) {
  return phrases[Math.min(noCount, phrases.length - 1)];
}
