import React, { Component } from "react";
import About from "./about";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Introduction from "./introduction";
import Timeline from "./timeline";
import ContactMe from "./contactMe";

class Sidebar extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <nav
              href="#navbar"
              className="js-colorlib-nav-toggle colorlib-nav-toggle"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <i />
            </nav>
            <aside id="colorlib-aside" className="border js-fullheight">
              <div className="text-center">
                <div
                  className="author-img"
                  style={{ backgroundImage: "url(images/about.webp)" }}
                />
                <h1 id="colorlib-logo">
                  <a href="index.html">Kushal Verma</a>
                </h1>
                <span className="email">
                  <i className="icon-mail"></i> vermakushal.28@gmail.com
                </span>
              </div>
              <nav id="colorlib-main-menu" role="navigation" className="navbar">
                <div id="navbar" className="collapse">
                  <ul>
                    <li className="active">
                      <a href="#home" data-nav-section="home">
                        Introduction
                      </a>
                      {/* <Link to="/">Introduction</Link> */}
                    </li>
                    <li>
                      {/* <a href="#about" data-nav-section="about">
                      About
                    </a> */}
                      <a href="#about" data-nav-section="about">
                        About
                      </a>
                      {/* <Link to="/about">About</Link> */}
                    </li>
                    <li>
                      <a href="#timeline" data-nav-section="timeline">
                        Timeline
                      </a>
                      {/* <Link to="/timeline">Timeline</Link> */}
                    </li>
                    <li>
                      <a href="#contactMe" data-nav-section="contactMe">
                        Contact Me
                      </a>
                      {/* <Link to="/contactMe">Contact Me</Link> */}
                    </li>
                    <li>
                      <a
                        // href="#blogs"
                        // data-nav-section="blogs"
                        onClick={() => {
                          console.log("blog section clicked");
                          window.alert("Stay tuned!! will be added soon.");
                        }}
                      >
                        Blogs
                      </a>
                      {/* <Link to="/blogs">Blogs</Link> */}
                    </li>
                  </ul>
                </div>
              </nav>
              <nav id="colorlib-main-menu">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/kushal.verma.313"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="icon-facebook2" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/Vermakushal28"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="icon-twitter2" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/kush2896/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="icon-instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/kushalverma28/  "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="icon-linkedin2" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/vkushal28"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="icon-github"></i>
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="colorlib-footer">
                {/* <p>
                <small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and{" "}
                  <i className="icon-beer" aria-hidden="true"></i>
                  <br></br>
                </small>
              </p> */}
                <p>
                  <small>Stay tuned for more updates and learnings...</small>
                </p>
              </div>
            </aside>
          </div>
        </Router>
      </div>
    );
  }
}

export default Sidebar;
