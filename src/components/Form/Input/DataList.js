import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";

const DataList = ({
  labelText,
  required,
  name,
  id,
  onFocus,
  placeholder,
  dataList,
  doctors,
  doctorDataListRef,
  doctorTextAreaRef,
  addDoctors,
  updateDoctors,
}) => {
  console.log("dataList component");
  return (
    <React.Fragment>
      {labelText ? (
        <div className="p-1">
          <label className="text-xs text-gray-700">{labelText}</label>
          {required === true && <span className="text-red-500 ml-1">*</span>}
        </div>
      ) : null}
      <textarea
        ref={doctorTextAreaRef}
        placeholder="All data you selected will show here..."
        className="block w-full focus:outline-none h-32 resize-none p-4 mb-2 bg-gray-100 rounded-lg focus:shadow-inner focus:bg-white border border-gray-400"
        name={name}
        onChange={updateDoctors}
        onFocus={onFocus}
        required={required}
        id={id}
        value={doctors}
      ></textarea>
      <div className="flex flex-nowrap items-center">
        <div className="flex-grow">
          <input
            ref={doctorDataListRef}
            className="block w-full focus:outline-none h-10 px-4 bg-gray-100 rounded-lg focus:shadow-inner focus:bg-white border border-gray-400"
            list="dataList"
            placeholder={placeholder}
          />
          <datalist id="dataList">
            {dataList.map((dl, index) => (
              <React.Fragment key={index}>
                <option value={dl} />
              </React.Fragment>
            ))}
          </datalist>
        </div>
        <Button className="ml-4" type="button" onClick={addDoctors}>
          <FontAwesomeIcon icon="plus" />
        </Button>
      </div>
    </React.Fragment>
  );
};

export default React.memo(
  DataList,
  (prevProps, nextProps) => prevProps.doctors === nextProps.doctors
);
