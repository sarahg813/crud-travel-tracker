import React, { useState } from "react";
import TravelsTable from "../TravelsTable";
import TravelsData from "../../data/TravelsData";

function App() {
  const [travels, setTravels] = useState(TravelsData);
  return (
    <div className="App">
      <div className="app-container">
        <TravelsTable travels={travels} />
      </div>
    </div>
  );
}

export default App;
