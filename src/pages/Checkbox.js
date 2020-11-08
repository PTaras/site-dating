import React from "react";

const Checkbox = ({ label, isSelected, onCheckboxChange, onClick }) => (
      <option
        type="checkbox"
        value={label}
        checked={isSelected}
        onClick={onClick}
        onChange={onCheckboxChange}
        className="form-check-input"
      >{label}</option>
);

export default Checkbox;