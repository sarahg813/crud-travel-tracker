import React, { useState } from "react";
import Button from "../Button";
import InputField from "../InputField";
import Dropdown from "../Dropdown";
import CountriesData from "../../data/CountriesData";

const AddTravelForm = (props) => {
  const initialState = { id: null, city: "", country: "", year: "" };
  const [travels, setTravels] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;

    setTravels({
      ...travels,
      [name]: type === "number" ? parseInt(value, 10) : value,
    });
  };

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();

      props.addTravel(travels);
      setTravels(initialState);
    }
  };

  return (
    <div className="travel-form-container">
      <form className="travel-form" onSubmit={handleSubmit}>
        <div className="travel-form__inputs">
          <InputField
            label="Year"
            type="number"
            name="year"
            value={travels.year}
            className={"input--small"}
            onChange={handleInputChange}
          />
          <InputField
            label="City"
            type="text"
            name="city"
            value={travels.city}
            className={"input--big"}
            onChange={handleInputChange}
          />
          <Dropdown
            label="Country"
            className={"dropdown__select"}
            name="country"
            value={travels.country}
            onChange={handleInputChange}
            data={CountriesData}
            placeholder="Select Country"
            required
          />
        </div>
        <div className="travel-form__buttons">
          <Button
            value="Cancel"
            className={"btn btn--tertiary"}
            onClick={() => props.setShowAddEditModal(false)}
          />
          <Button
            value="Save"
            className="btn btn--tertiary btn--seablue"
            type={"submit"}
          />
        </div>
      </form>
    </div>
  );
};

export default AddTravelForm;
