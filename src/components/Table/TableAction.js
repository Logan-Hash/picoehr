import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "../Tooltip/Tooltip";

const TableAction = ({ actionData }) => {
  return (
    <div className="inline-flex flex-nowrap justify-between items-center">
      {actionData.map((ac, index) => (
        <React.Fragment key={index}>
          <div className="text-center px-2 inline-block cursor-pointer text-gray-600 hover:text-gray-900">
            <Tooltip toolTipText={ac.actionName}>
              <FontAwesomeIcon className="text-xs" icon={ac.actionIcon} />
            </Tooltip>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TableAction;
