import React from "react";
import { Route, Routes as Switch } from "react-router";
import Customers from "../pages/Customers";
import Dashboard from "../pages/Dashboard";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" element={<Dashboard />} />
      <Route path="/customers" element={<Customers />} />
    </Switch>
  );
};

export default Routes;
