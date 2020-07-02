import React from "react";
import PropTypes from "prop-types";

const Dropdown = ({
  className,
  label,
  value,
  name,
  data,
  onChange,
  placeholder,
}) => {
  return (
    <div className="dropdown">
      {label && <label htmlFor={name}>{label}</label>}
      <select
        className={className}
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="">{placeholder} &#9662;</option>
        {data.map((item, key) => (
          <option key={key} value={item.label}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  data: PropTypes.array.isRequired,
};

export default Dropdown;
