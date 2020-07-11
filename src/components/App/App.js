import React, { useState, useEffect } from "react";
import TravelsTable from "../TravelsTable";
import TravelsData from "../../data/TravelsData";
import AddTravelForm from "../TravelForm/AddTravelForm";
import EditTravelForm from "../TravelForm/EditTravelForm";
import Modal from "../Modal";
import Globe from "../Globe/Globe";

function App() {
  const initialFormState = { id: null, city: "", country: "", year: "" };
  const [travels, setTravels] = useState(TravelsData);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedTravel, setSelectedTravel] = useState(initialFormState);
  const [showAddEditModal, setShowAddEditModal] = useState(false);

  useEffect(() => {
    setTravels(travels.sort((a, b) => a.year - b.year));
  });

  const addTravel = (travel) => {
    travel.id = travels.length + 1;
    setTravels([...travels, travel]);
  };

  const editTravel = (travel) => {
    setIsEditing(true);
    setShowAddEditModal(true);

    setSelectedTravel({
      id: travel.id,
      year: travel.year,
      city: travel.city,
      country: travel.country,
    });
  };

  const updateTravel = (id, updatedTravel) => {
    setIsEditing(false);
    setShowAddEditModal(false);

    setTravels(
      travels
        .map((travel) => (travel.id === id ? updatedTravel : travel))
        .sort((a, b) => a.year - b.year)
    );
  };

  const deleteTravel = (id) => {
    setTravels(travels.filter((travel) => travel.id !== id));
  };

  return (
    <div className="App">
      <div className="app-container">
        <div className="app__title">
          <h1>World Travel Tracker</h1>
        </div>
        <div className="app__body">
          <div className="app__left-inner">
            <Globe />
          </div>
          <div className="app__right-inner">
            <TravelsTable
              travels={travels}
              editTravel={editTravel}
              setShowAddEditModal={setShowAddEditModal}
            />
          </div>
        </div>

        {showAddEditModal && (
          <Modal>
            {isEditing ? (
              <EditTravelForm
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                showAddEditModal={showAddEditModal}
                setShowAddEditModal={setShowAddEditModal}
                selectedTravel={selectedTravel}
                updateTravel={updateTravel}
                deleteTravel={deleteTravel}
              />
            ) : (
              <AddTravelForm
                addTravel={addTravel}
                showAddEditModal={showAddEditModal}
                setShowAddEditModal={setShowAddEditModal}
              />
            )}
          </Modal>
        )}
      </div>
    </div>
  );
}

export default App;
