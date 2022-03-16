import React from "react";
import "./form-input.styles.scss";

export default function FormInput({ label, ...otherProps }) {

  return (
    <div className="group">
      <input {...otherProps} className="form-input" />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : null
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
}
