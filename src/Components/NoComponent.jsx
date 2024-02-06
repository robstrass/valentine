import PropTypes from "prop-types";

import { phrases } from "../constants";
import "../App.css";

export default function NoComponent({ setIsYes, setNoCount, noCount }) {
  const yesBtnSize = noCount * 20 + 16;

  return (
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
          onClick={() => handleNo({ noCount, setNoCount })}
        >
          {getNoText({ noCount })}
        </button>
      </div>
    </>
  );
}

NoComponent.propTypes = {
  setIsYes: PropTypes.func.isRequired,
  setNoCount: PropTypes.func.isRequired,
  noCount: PropTypes.number.isRequired,
};

function handleNo({ noCount, setNoCount }) {
  setNoCount(noCount + 1);
}

function getNoText({ noCount }) {
  return phrases[Math.min(noCount, phrases.length - 1)];
}
