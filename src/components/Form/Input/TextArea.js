import React from "react";

const TextArea = ({
  labelText,
  required,
  className,
  name,
  id,
  cols,
  rows,
  placeholder,
  value,
  onChange,
  onFocus,
  error,
}) => {
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
      <textarea
        className={`block resize-none focus:outline-none h-32 p-4 bg-gray-100 rounded-lg focus:shadow-inner focus:bg-white border ${
          error ? "border-red-400" : "border-gray-400"
        } ${className ? className : null}`}
        name={name}
        id={id}
        cols={cols}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        required={required}
      ></textarea>
    </React.Fragment>
  );
};

export default React.memo(
  TextArea,
  (prevProps, nextProps) =>
    prevProps.value === nextProps.value && prevProps.error === nextProps.error
);
