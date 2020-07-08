import React, { useState } from "react";
import TravelsTable from "../TravelsTable";
import TravelsData from "../../data/TravelsData";
import AddTravelForm from "../TravelForm/AddTravelForm";
import EditTravelForm from "../TravelForm/EditTravelForm";
import Modal from "../Modal";
import Earth from "../Earth/Earth";

function App() {
  const initialFormState = { id: null, city: "", country: "", year: "" };
  const [travels, setTravels] = useState(TravelsData);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedTravel, setSelectedTravel] = useState(initialFormState);
  const [showAddEditModal, setShowAddEditModal] = useState(false);

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
      travels.map((travel) => (travel.id === id ? updatedTravel : travel))
    );
  };

  const deleteTravel = (id) => {
    setTravels(travels.filter((travel) => travel.id !== id));
  };

  return (
    <div className="App">
      <div className="app-container">
        <TravelsTable
          travels={travels}
          editTravel={editTravel}
          setShowAddEditModal={setShowAddEditModal}
        />
      </div>
      <div>
        <Earth />
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
  );
}

export default App;
