import React, { useState } from "react";
import Button from "../Button";

const TravelsTable = (props) => {
  // const sortYearAsc = () => {
  //   setTravels((travels) => {
  //     travels.sort((a, b) => a.year - b.year);
  //   });
  // };

  // const sortYearDesc = () => {
  //   setTravels((travels) => {
  //     travels.sort((a, b) => b.year - a.year);
  //   });
  // };

  return (
    <div className="travels-container">
      <div className="travels-table-container">
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>City</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {props.travels.length > 0 ? (
              props.travels.map((travel) => (
                <tr key={travel.id}>
                  <td>{travel.year}</td>
                  <td>{travel.city}</td>
                  <td>{travel.country}</td>
                  <td>
                    <Button
                      value="Edit"
                      onClick={() => {
                        props.editTravel(travel);
                      }}
                    />
                  </td>
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
