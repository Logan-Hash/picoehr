import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CheckBox = ({ name, checked, id, onChange, labelText, required }) => {
  return (
    <React.Fragment>
      <div className="flex flex-nowrap items-center">
        <div className="w-5 h-5 relative overflow-hidden cursor-pointer">
          <input
            type="checkbox"
            className="w-full h-full appearance-none focus:outline-none"
            checked={checked}
            onChange={onChange}
            name={name}
            id={id}
          />
          <div
            className={`pointer-events-none w-full h-full border absolute top-0 left-0 flex items-center justify-center text-xs text-white rounded shadow-inner ${
              checked
                ? "bg-green-500 border-green-500"
                : "bg-gray-200 border-gray-400"
            }`}
          >
            {checked ? <FontAwesomeIcon icon="check" /> : null}
          </div>
        </div>
        {labelText ? (
          <div className="ml-2">
            <label className="text-xs font-bold text-gray-700">
              {labelText}
            </label>
            {required === true && <span className="text-red-500 ml-1">*</span>}
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default CheckBox;
