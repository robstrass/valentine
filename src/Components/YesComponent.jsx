import PropTypes from "prop-types";

import "../App.css";

export default function YesComponent({ setIsYes, setNoCount }) {
  return (
    <>
      <div className="imageContainer">
        <img
          alt="bears hugging with hearts"
          className="yesImg"
          src="https://tenor.com/view/milk-and-mocha-gif-21799600.gif"
        />
      </div>
      <h1>YAY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</h1>
      <div className="buttonContainer">
        <button
          className="restartButton"
          onClick={() => handleRestart({ setIsYes, setNoCount })}
        >
          Restart
        </button>
      </div>
    </>
  );
}

YesComponent.propTypes = {
  setIsYes: PropTypes.func,
  setNoCount: PropTypes.func,
};

function handleRestart({ setIsYes, setNoCount }) {
  setIsYes(false);
  setNoCount(0);
}
