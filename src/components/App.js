import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
//import importedComponent from "react-imported-component";
//import "react-imported-component/macro";
import { imported, lazy, useImported } from "react-imported-component/macro";

import Home from "./Home";
import Loading from "./Loading";

const AsyncDynamicPAge = imported(
  () => import(/* webpackChunkName:'DynamicPage' */ "./DynamicPage"),
  {
    LoadingComponent: Loading,
  }
);
const AsyncNoMatch = imported(
  () => import(/* webpackChunkName:'NoMatch' */ "./NoMatch"),
  {
    LoadingComponent: Loading,
  }
);

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dynamic" component={AsyncDynamicPAge} />
          <Route component={AsyncNoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
