import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../views/Home";
import Foot from "../widgets/Foot";
import Navbar from "../widgets/Navbar";

const Root = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Foot />
    </BrowserRouter>
  );
};

export default Root;
