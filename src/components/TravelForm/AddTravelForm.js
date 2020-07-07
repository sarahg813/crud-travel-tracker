import React, { useState } from "react";
import Button from "../Button";
import InputField from "../InputField";

const AddTravelForm = (props) => {
  const initialState = { id: null, city: "", country: "", year: "" };
  const [travels, setTravels] = useState(initialState);

  // This updates the travels state when a user types
  // in the InputFields
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setTravels({ ...travels, [name]: value });
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
            type="text"
            name="year"
            value={travels.year}
            onChange={handleInputChange}
          />
          <InputField
            label="City"
            type="text"
            name="city"
            value={travels.city}
            onChange={handleInputChange}
          />
          <InputField
            label="Country"
            type="text"
            name="country"
            value={travels.country}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Button value="Save" type={"submit"} />
          <Button value="Cancel" />
        </div>
      </form>
    </div>
  );
};

export default AddTravelForm;
