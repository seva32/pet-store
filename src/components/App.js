import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
// this import should enable import transpilation
import "react-imported-component/macro";
import { AppProvider } from "../context/AppProvider";

// splitting code
// import "./load.async-imports";
// import Load from "./load";
// const AsyncDynamicPAge = Load(() =>
//   import(/* webpackChunkName:'DynamicPage' */ "./DynamicPage")
// );
// const AsyncNoMatch = Load(() =>
//   import(/* webpackChunkName:'NoMatch' */ "./NoMatch")
// );

// alltoghether
import importedComponent from "react-imported-component";
import Loading from "./Loading";
const AsyncDynamicPAge = importedComponent(
  () => import(/* webpackChunkName:'DynamicPage' */ "./DynamicPage"),
  {
    LoadingComponent: Loading,
  }
);
const AsyncNoMatch = importedComponent(
  () => import(/* webpackChunkName:'NoMatch' */ "./NoMatch"),
  {
    LoadingComponent: Loading,
  }
);

const App = () => {
  return (
    <Router>
      <AppProvider>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dynamic" component={AsyncDynamicPAge} />
            <Route component={AsyncNoMatch} />
          </Switch>
        </div>
      </AppProvider>
    </Router>
  );
};

export default App;
