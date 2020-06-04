import React, { useState, useCallback } from "react";
import { Route, Switch } from "react-router-dom";
import PatientList from "../pages/PatientList";
import Sidebar from "../components/Sidebar/Sidebar";
import PatientSetup from "../pages/PatientSetup";
import VisitRegList from "../pages/VisitRegList";
import VisitRegSetup from "../pages/VisitRegSetup";

const createMenuItem = (itemName, menuIcon, routeTo, subItems) => {
  return { itemName, menuIcon, routeTo, subItems };
};
const createSubMenuItem = (subItemName, subMenuIcon, subRouteTo) => {
  return { subItemName, subMenuIcon, subRouteTo };
};
const menuItems = [
  createMenuItem("Patients", "users", null, [
    createSubMenuItem("Patient List", "list", "/"),
    createSubMenuItem("Patient Setup", "plus", "/patientSetup"),
  ]),
  createMenuItem("Visit Reg.", "clipboard-list", null, [
    createSubMenuItem("Visit Reg. List", "list", "/visitRegList"),
    createSubMenuItem("Visit Reg. Setup", "plus", "/visitRegSetup"),
  ]),
  createMenuItem("Sample Menu", "circle", "/sampleLink"),
];
export const ToggleSidebarContext = React.createContext();
const DashboardLayout = () => {
  const [sidebarState, setSidebarState] = useState(false);

  const toggleSidebar = useCallback(() => {
    setSidebarState(!sidebarState);
  }, [sidebarState]);

  return (
    <div className="xl:flex min-h-screen bg-gray-300 text-gray-900">
      <ToggleSidebarContext.Provider value={toggleSidebar}>
        <Sidebar
          sidebarState={sidebarState}
          toggleSidebar={toggleSidebar}
          menuItems={menuItems}
        />
        <div className="flex-grow lg:p-4">
          <Switch>
            <Route exact path="/">
              <PatientList />
            </Route>
            <Route path="/patientSetup">
              <PatientSetup />
            </Route>
            <Route path="/visitRegList">
              <VisitRegList />
            </Route>
            <Route path="/visitRegSetup">
              <VisitRegSetup />
            </Route>
            <Route path="/sampleLink">
              <div>sampleLink</div>
            </Route>
          </Switch>
        </div>
      </ToggleSidebarContext.Provider>
    </div>
  );
};

export default DashboardLayout;
