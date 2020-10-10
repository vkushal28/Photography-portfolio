import React, { Component, Suspense, lazy } from "react";
import { Route } from "react-router";
// import Streets from './allPhotos';
import { PATHS } from "./paths";
// import AllPhotos from "./allPhotos";

import FirstPage from "./firstPage";
// const FirstPage = React.lazy(() => import("./firstPage"));
const AllPhotos = React.lazy(() => import("./allPhotos"));
// import { allCategories } from "./allCategories";

class CategoriesRouter extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<div>Loading.....</div>}>
          <Route exact path="/" component={FirstPage} />
          <Route path="/STREET" component={AllPhotos} />
          <Route path="/ARCHITECTURE" component={AllPhotos} />
          <Route path="/BIRDS" component={AllPhotos} />
          <Route path="/COMPOSITION" component={AllPhotos} />
          <Route path="/GEOMETRY" component={AllPhotos} />
          <Route path="/LANDSCAPE" component={AllPhotos} />
          <Route path="/MANIPULATION" component={AllPhotos} />
          <Route path="/MOON" component={AllPhotos} />
          <Route path="/PORTRAIT" component={AllPhotos} />
          <Route path="/TRAVEL" component={AllPhotos} />
        </Suspense>
      </div>
    );
  }
}

export default CategoriesRouter;
