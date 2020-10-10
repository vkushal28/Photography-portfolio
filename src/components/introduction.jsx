import React, { Component } from "react";
import "./introduction.css";
import bgImage1 from "./bgImages/bgImage1";
import bgImage2 from "./bgImages/bgImage2";
import bgImage3 from "./bgImages/bgImage3";

class Introduction extends Component {
  render() {
    return (
      <div>
        <section
          id="colorlib-hero"
          className="js-fullheight"
          data-section="home"
        >
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={bgImage1}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1 style={{ color: "white" }}>
                            Hi! <br />
                            I'm Kushal
                          </h1>
                          <p>
                            <a
                              className="btn btn-default"
                              href="https://vkushal28.github.io/resume/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Resume
                              {/* <i className="icon-download4" /> */}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={bgImage2}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 style={{ color: "white" }}>
                            PASSION:
                            <br /> Photography
                          </h1>
                          <p>
                            <a
                              className="btn btn-default"
                              href="https://www.instagram.com/exp_click/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              My clicks
                              {/* <i className="icon-briefcase3" /> */}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={bgImage3}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 style={{ color: "white" }}>
                            PROFESSION:
                            <br />
                            CS Engineer
                          </h1>
                          <p>
                            {/* <a
                              className="btn btn-primary"
                              href="https://medium.com/@dhruv.barochia34788"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Drop me a mail
                              {/* <i className="icon-book" /> */}
                            {/* </a>  */}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
export default Introduction;
