import React from "react";

const Input = ({
  labelText,
  required,
  className,
  type,
  placeholder,
  value,
  name,
  onChange,
  onFocus,
  min,
  max,
  id,
  inputRef,
  error,
}) => {
  console.log("input component");
  return (
    <React.Fragment>
      {labelText ? (
        <div className="p-1">
          <label className="text-xs text-gray-700">{labelText}</label>
          {required === true && (
            <span className="text-red-500 ml-1">*</span>
          )}{" "}
          {error ? (
            <label className="text-xs text-red-700 pt-0 mt-0">
              ( {error} )
            </label>
          ) : null}
        </div>
      ) : null}
      <input
        className={`block focus:outline-none h-10 px-4 bg-gray-100 rounded-lg focus:shadow-inner focus:bg-white border ${
          error ? "border-red-400" : "border-gray-400"
        } ${className ? className : null}`}
        type={type}
        ref={inputRef}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        onFocus={onFocus}
        required={required}
        min={min}
        max={max}
        id={id}
      />
    </React.Fragment>
  );
};

export default React.memo(
  Input,
  (prevProps, nextProps) =>
    prevProps.value === nextProps.value && prevProps.error === nextProps.error
);
