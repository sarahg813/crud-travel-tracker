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
            type="number"
            name="year"
            value={travel.year}
            className={"input--big"}
            onChange={handleInputChange}
          />
          <InputField
            label="City"
            type="text"
            name="city"
            value={travel.city}
            className={"input--big"}
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
        <div className="travel-form__buttons">
          <div>
            <Button
              value="Delete"
              className={"btn btn--quaternary btn--gray"}
              onClick={() => {
                props.deleteTravel(travel.id);
                handleOnClick();
              }}
            />
          </div>
          <div className="travel-form__main-btn">
            <Button
              value="Cancel"
              className={"btn btn--quaternary"}
              onClick={handleOnClick}
            />
            <Button
              value="Save"
              className={"btn btn--quaternary btn--seablue"}
              type={"submit"}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditTravelForm;
