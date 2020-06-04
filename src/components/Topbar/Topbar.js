import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToggleSidebarContext } from "../../layouts/Dashboard";
const style = {
  backdropBlur: {
    backdropFilter: "blur(3px)",
    WebkitBackdropFilter: "blur(3px)",
    background: "rgba(255, 255, 255, 0.925)",
  },
};

const Topbar = ({ pageTitle }) => {
  console.log("topbar");
  const toggleSidebar = useContext(ToggleSidebarContext);
  return (
    <div
      style={style.backdropBlur}
      className="flex w-full px-4 py-3 border-b lg:border shadow md:shadow-md items-center justify-between lg:rounded-lg sticky z-20 top-0"
    >
      <div className="flex items-center">
        <div
          className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer text-gray-600 mr-4 xl:hidden"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon="bars"></FontAwesomeIcon>
        </div>
        <h3 className="text-lg font-bold">{pageTitle}</h3>
      </div>
      <div className="flex items-center cursor-pointer hover:bg-gray-200 hover:text-gray-800 px-3 py-1 text-sm rounded-full text-gray-600">
        <FontAwesomeIcon
          icon="sign-out-alt"
          className="md:mr-2"
        ></FontAwesomeIcon>
        <span className="hidden md:inline">Logout</span>
      </div>
    </div>
  );
};

export default React.memo(Topbar);
