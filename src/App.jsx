import { useState } from "react";

import YesComponent from "./Components/YesComponent";
import NoComponent from "./Components/NoComponent";
import "./App.css";

export default function App() {
  const [noCount, setNoCount] = useState(0);
  const [isYes, setIsYes] = useState(false);

  return (
    <div className="valentineContainer">
      {isYes ? (
        <YesComponent setIsYes={setIsYes} setNoCount={setNoCount} />
      ) : (
        <NoComponent
          setIsYes={setIsYes}
          setNoCount={setNoCount}
          noCount={noCount}
        />
      )}
    </div>
  );
}
