import React, { useState, useEffect } from "react";
import Button from "../Button";
import InputField from "../InputField";
import Dropdown from "../Dropdown";
import CountriesData from "../../data/CountriesData";

const EditTravelForm = (props) => {
  const [travel, setTravel] = useState(props.selectedTravel);

  useEffect(() => {
    setTravel(props.selectedTravel);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setTravel({ ...travel, [name]: value });
  };

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();

      props.updateTravel(travel.id, travel);
    }
  };

  const handleOnClick = () => {
    props.setIsEditing(false);
    props.setShowAddEditModal(false);
  };

  return (
    <div className="travel-form-container">
      <form className="travel-form" onSubmit={handleSubmit}>
        <div className="travel-form__inputs">
          <InputField
            label="Year"
            type="text"
            name="year"
            value={travel.year}
            onChange={handleInputChange}
          />
          <InputField
            label="City"
            type="text"
            name="city"
            value={travel.city}
            onChange={handleInputChange}
          />
          <Dropdown
            label="Country"
            className={"dropdown__select"}
            name="country"
            value={travel.country}
            onChange={handleInputChange}
            data={CountriesData}
            placeholder="Select Country"
            required
          />
        </div>
        <div>
          <Button
            value="Delete"
            onClick={() => {
              props.deleteTravel(travel.id);
              handleOnClick();
            }}
          />
        </div>
        <div>
          <Button value="Save" type={"submit"} />
          <Button value="Cancel" onClick={handleOnClick} />
        </div>
      </form>
    </div>
  );
};

export default EditTravelForm;
