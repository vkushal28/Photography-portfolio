import React, { Component } from "react";
import { Router, Route, Switch } from "react-router";
import createHistory from "history/createBrowserHistory";
import CategoriesRouter from "./components/categories.routes";
// const CategoriesRouter = React.lazy(() =>
//   import("./components/categories.routes")
// );

class AppRoute extends Component {
  render() {
    const history = createHistory();
    return (
      <Router history={history}>
        <Switch>
          <CategoriesRouter />
        </Switch>
      </Router>
    );
  }
}

export default AppRoute;
