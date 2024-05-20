import React from 'react';
import "./FormGroup.css"
const FormGroup = ({ label, id, type, value, onChange, options, maxLength, max }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    {type === 'select' ? (
      <select id={id} name={id} value={value} onChange={onChange} required>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    ) : (
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        required
        maxLength={maxLength}
        max={max}
      />
    )}
  </div>
);

export default FormGroup;
