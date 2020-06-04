import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./assets/main.css";

import DashboardLayout from "./layouts/Dashboard";

library.add(fas);

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/*" component={DashboardLayout} />
      </div>
    </Router>
  );
};

export default App;
