import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Select = ({
  labelText,
  required,
  className,
  name,
  id,
  onChange,
  value,
  onFocus,
  preViewData,
  optionData,
  inputRef,
  error,
}) => {
  console.log("select component");
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
      <div className={`inline-block relative ${className ? className : null}`}>
        <select
          className={`block appearance-none w-full focus:outline-none h-10 pl-4 pr-10 bg-gray-100 rounded-lg focus:shadow-inner focus:bg-white border ${
            error ? "border-red-400" : "border-gray-400"
          }`}
          name={name}
          ref={inputRef}
          id={id}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
        >
          <option value="">{preViewData}</option>
          {optionData.map((opt, index) => (
            <React.Fragment key={index}>
              <option value={opt.optionValue}> {opt.optionText} </option>
            </React.Fragment>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-xs">
          <FontAwesomeIcon icon="chevron-down" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default React.memo(
  Select,
  (prevProps, nextProps) =>
    prevProps.value === nextProps.value && prevProps.error === nextProps.error
);
