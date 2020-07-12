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
      <div className="travels-add-btn">
        <Button
          value="Add"
          className={"btn btn--primary"}
          onClick={() => props.setShowAddEditModal(true)}
        />
      </div>
      <div className="travels-table-container">
        <table className="travels-table">
          <thead>
            <tr>
              <th className="table-year">Year</th>
              <th className="table-city">City</th>
              <th className="table-country">Country</th>
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
                      className={"btn btn--quaternary"}
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
    </div>
  );
};

export default TravelsTable;
