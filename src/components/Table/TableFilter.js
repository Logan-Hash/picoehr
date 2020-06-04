import React from "react";
import Input from "../Form/Input/Input";

const TableFilter = ({ filteredData }) => {
  console.log("table filter");
  return (
    <React.Fragment>
      <form action="" className="flex flex-wrap items-center">
        <Input
          className="w-full md:w-64 m-2"
          type="text"
          placeholder="Search..."
          onChange={(e) => filteredData(e.target.value.toLowerCase())}
        />
      </form>
    </React.Fragment>
  );
};

export default TableFilter;
