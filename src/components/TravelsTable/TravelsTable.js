import React from "react";
import Button from "../Button";

const TravelsTable = (props) => {
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
              <th className="travels-table__year">Year</th>
              <th className="travels-table__city">City</th>
              <th className="travels-table__country">Country</th>
            </tr>
          </thead>
          <tbody>
            {props.travels.length > 0 ? (
              props.travels.map((travel) => (
                <tr key={travel.id}>
                  <td className="travels-table__year">{travel.year}</td>
                  <td className="travels-table__city">{travel.city}</td>
                  <td className="travels-table__country">{travel.country}</td>
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
