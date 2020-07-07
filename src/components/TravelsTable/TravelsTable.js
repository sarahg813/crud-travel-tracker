import React from "react";
import Button from "../Button";

const TravelsTable = (props) => {
  return (
    <div className="travels-container">
      <div className="travels__title">
        <h1>World Travel Tracker</h1>
      </div>
      <div className="travels-table-container">
        <table>
          <thead>
            <tr>
              <th>City</th>
              <th>Country</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {props.travels.length > 0 ? (
              props.travels.map((travel) => (
                <tr>
                  <td>{travel.year}</td>
                  <td>{travel.city}</td>
                  <td>{travel.country}</td>
                  <Button
                    value="Edit"
                    onClick={() => {
                      props.editTravel(travel);
                    }}
                  />
                </tr>
              ))
            ) : (
              <div>
                <h5>No travels</h5>
              </div>
            )}
          </tbody>
        </table>
      </div>
      <div className="travels-add-btn">
        <Button value="Add" onClick={() => props.setShowAddEditModal(true)} />
      </div>
    </div>
  );
};

export default TravelsTable;
