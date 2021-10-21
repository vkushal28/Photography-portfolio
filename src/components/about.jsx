import  {createRef, usestate, useEffect, useRef, component } from "react";
import "../About.css";
import Categories from "./categories";
// const Categories = React.lazy(() => import("./categories"));
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { MdCamera } from "react-icons/md";
import streetB64 from "./categoriesImages/street";
// const streetB64 = React.lazy(() => import("./categoriesImages/street"));
import portraitB64 from "./categoriesImages/portrait";
// const portraitB64 = React.lazy(() => import("./categoriesImages/portrait"));

import travelB64 from "./categoriesImages/travel";
// const travelB64 = React.lazy(() => import("./categoriesImages/travel"));

import moonB64 from "./categoriesImages/moon";
// const moonB64 = React.lazy(() => import("./categoriesImages/moon"));

import compositionB64 from "./categoriesImages/composition";
// const compositionB64 = React.lazy(() =>
//   import("./categoriesImages/composition")
// );

import birdsB64 from "./categoriesImages/birds";
// const birdsB64 = React.lazy(() => import("./categoriesImages/birds"));

import geometryB64 from "./categoriesImages/geometry";
// const geometryB64 = React.lazy(() => import("./categoriesImages/geometry"));

import manipulationB64 from "./categoriesImages/manipulation";
// const manipulationB64 = React.lazy(() =>
//   import("./categoriesImages/manipulation")
// );

import landscapeB64 from "./categoriesImages/landscape";
// const landscapeB64 = React.lazy(() => import("./categoriesImages/landscape"));

import architectureB64 from "./categoriesImages/architecture";
// const architectureB64 = React.lazy(() =>
//   import("./categoriesImages/architecture")
// );

import muchmoreB64 from "./categoriesImages/muchmore";
// const muchmoreB64 = React.lazy(() => import("./categoriesImages/muchmore"));

// import allCategoriesBase64Images from "./allCategoriesBase64Images";

class About extends Component {
  constructor(props) {
    super(props);

    this.showCategories = this.showCategories.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);

    this.myRef = createRef();
    this.state = {
      showCat: false,
      // allCategoriesBase64: allCategoriesBase64Images,
    };
  }

  showModal = () => {
    console.log("opening modal");
    this.setState({ showCat: true });
    document.body.style.overflow = "hidden";
  };
  hideModal = () => {
    console.log("modal close triggered");
    this.setState({ showCat: false });
    document.body.style.overflow = "unset";
  };

  showCategories(e) {
    e.preventDefault();

    var x = this.myRef.current;
    if (x.style.display === "none") {
      x.style.display = "block";
    } else x.style.display = "none";
  }

  render() {
    return (
      <Router>
        <Switch>
          <div>
            <Categories
              className="col-md-12 col-sm-12"
              show={this.state.showCat}
              onHide={this.hideModal}
            >
              <h2>
                <strong>
                  Ph
                  <MdCamera />
                  tographs clicked so far...
                </strong>
              </h2>
            </Categories>
            <section className="colorlib-about" data-section="about">
              <div className="colorlib-narrow-content">
                <div className="row">
                  <div className="col-md-12">
                    <div
                      className="row row-bottom-padded-sm animate-box"
                      data-animate-effect="fadeInLeft"
                    >
                      <div className="col-md-12">
                        <div className="about-desc">
                          <span className="heading-meta">About Us</span>
                          <h2 className="colorlib-heading">Who Am I?</h2>
                          <p>
                            I am a computer science graduate from SRM-Institute
                            of Science and Technology, Chennai, India. I love
                            new next gen technologies and more than that I love
                            photography. Life is as beautiful as our eyes see,
                            that's why I love to capture and show people the way
                            I see the world through my photographs.
                          </p>
                          <p>
                            Apart from this I like sketching, coloring, origami
                            crafts, anything that involves creativity. Coffee is
                            my second love, it drives me crazy. Food experiments
                            as well as photography experiments is what I used to
                            carry out in my free/part times.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="colorlib-about">
              <div className="colorlib-narrow-content">
                <div className="row">
                  <div
                    className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <span className="heading-meta">What I do?</span>
                    <h2 className="colorlib-heading">Here are my skills</h2>
                  </div>
                </div>
                <div className="row row-pt-md">
                  <div className="col-md-4 text-center animate-box">
                    <div className="services">
                      <span className="icon">
                        <i className="icon-camera" />
                      </span>
                      <div className="desc">
                        <h3>Freelance photography</h3>
                        <p>
                          Being an Engineer, I love to figure out the best way
                          to anything. So, found learning photography from
                          online sources more reliable.
                        </p>
                        <br />
                        <a className="animated-arrow">
                          <span className="the-arrow -left">
                            <span className="shaft"></span>
                          </span>
                          <span className="main">
                            <span className="text">
                              <a
                                onMouseEnter={this.showCategories}
                                onMouseLeave={this.showCategories}
                                onClick={this.showModal}
                              >
                                See more of my works
                              </a>
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <section
                    //.........................add responsive className here....................
                    ref={this.myRef}
                    className="col-md-4 text-center parent"
                    style={{ display: "none" }}
                  >
                    <div className="image_categories ib">
                      <img src={streetB64.src} height="140px" width="140px" />
                      <h5>STREET</h5>
                    </div>

                    <div className="image_categories ib">
                      <img src={portraitB64.src} height="140px" width="140px" />
                      <h5>PORTRAIT</h5>
                    </div>

                    <div className="image_categories ib">
                      <img src={travelB64.src} height="140px" width="140px" />
                      <h5>TRAVEL</h5>
                    </div>

                    <div className="image_categories ib">
                      <img src={moonB64.src} height="140px" width="140px" />
                      <h5>MOON</h5>
                    </div>

                    <div>
                      {/* <div className="image_categories ib">
                        <img
                          src={compositionB64.src}
                          height="140px"
                          width="140px"
                        />
                        <h5>COMPOSITION</h5>
                      </div> */}

                      <div className="image_categories ib">
                        <img src={birdsB64.src} height="140px" width="140px" />
                        <h5>BIRDS</h5>
                      </div>

                      <div className="image_categories ib">
                        <img
                          src={geometryB64.src}
                          height="140px"
                          width="140px"
                        />
                        <h5>GEOMETRY</h5>
                      </div>

                      <div className="image_categories ib">
                        <img
                          src={manipulationB64.src}
                          height="140px"
                          width="140px"
                        />
                        <h5>MANIPULATION</h5>
                      </div>
                    </div>

                    <div>
                      <div className="image_categories ib">
                        <img
                          src={landscapeB64.src}
                          height="140px"
                          width="140px"
                        />
                        <h5>LANDSCAPE</h5>
                      </div>

                      <div className="image_categories ib">
                        <img
                          src={architectureB64.src}
                          height="140px"
                          width="140px"
                        />
                        <h5>ARCHITECTURE</h5>
                      </div>
                      <div className="image_categories ib">
                        <img
                          src={muchmoreB64.src}
                          height="140px"
                          width="140px"
                        />
                      </div>
                    </div>
                  </section>

                  <br />
                  <br />

                  {/* // insert more skills here */}
                </div>
              </div>
            </section>
          </div>
        </Switch>
      </Router>
    );
  }
}
const container = document.createElement("div");
document.body.appendChild(container);
export default About;
