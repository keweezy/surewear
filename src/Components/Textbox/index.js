import React from 'react';
import './style.scss';

const Textbox = ({
  label,
  onChange,
  name,
  value,
  placeholder,
  boxClasses,
  type,
  error,
  disabled,
  min,
  customRef,
}) => {
  return (
    <div className={`${boxClasses} textbox`}>
      <legend id="label-legend" className={`${error && 'label-error'}`}>
        {label}
      </legend>
      <fieldset
        className={`${error && 'error'} ${disabled && 'disabled-input'}`}
      >
        <div className="d-flex">
          <input
            autoComplete="off"
            min={min && min}
            onChange={onChange}
            name={name}
            value={value}
            placeholder={placeholder}
            type={type}
            disabled={disabled && disabled}
            ref={customRef}
          />
        </div>
      </fieldset>
      <p className={`${error ? 'd-block' : 'd-none'} input-error`}>{error}</p>
    </div>
  );
};

export default Textbox;
