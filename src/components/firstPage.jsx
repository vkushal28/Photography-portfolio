import React, { Component, Suspense, lazy } from "react";
import Introduction from "./introduction";
// const Introduction = React.lazy(() => import("./introduction"));
import Sidebar from "./sidebar";
// const Sidebar = React.lazy(() => import("./sidebar"));
// import About from "./about";
const About = React.lazy(() => import("./about"));
// import Timeline from "./timeline";
const Timeline = React.lazy(() => import("./timeline"));
// import ContactMe from "./contactMe";
const ContactMe = React.lazy(() => import("./contactMe"));

class FirstPage extends Component {
  render() {
    return (
      <Suspense>
        <div id="colorlib-page">
          <div id="container-wrap">
            <Sidebar />
            <div id="colorlib-main">
              <Introduction />
              <About />
              <Timeline />
              <ContactMe />
            </div>
          </div>
        </div>
      </Suspense>
    );
  }
}

export default FirstPage;
