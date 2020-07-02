import React, { useState } from "react";
import TravelsTable from "../TravelsTable";
import TravelsData from "../../data/TravelsData";
import AddTravelForm from "../TravelForm/AddTravelForm";

function App() {
  const [travels, setTravels] = useState(TravelsData);

  const addTravel = (travel) => {
    travel.id = travels.length + 1;
    setTravels([...travels, travel]);
  };

  return (
    <div className="App">
      <div className="app-container">
        <AddTravelForm />
        <TravelsTable travels={travels} />
      </div>
    </div>
  );
}

export default App;
