import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";
import { Divider, Image, Grid } from "semantic-ui-react";
import { MdCameraRoll } from "react-icons/md";
import { Router, Link, NavLink } from "react-router-dom";
import streetB64 from "./categoriesImages/street";
import portraitB64 from "./categoriesImages/portrait";
import travelB64 from "./categoriesImages/travel";
import moonB64 from "./categoriesImages/moon";
import compositionB64 from "./categoriesImages/composition";
import birdsB64 from "./categoriesImages/birds";
import geometryB64 from "./categoriesImages/geometry";
import manipulationB64 from "./categoriesImages/manipulation";
import landscapeB64 from "./categoriesImages/landscape";
import architectureB64 from "./categoriesImages/architecture";
import CategoriesRouter from "./categories.routes";

import { allCategories } from "./allCategories";
// import {PATHS} from './paths';

//gray background
const backDropStyle = {
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(0,0,0,0.8)",
  padding: 50,
  zIndex: 1040,
};

const modalStyle = {
  backgroundColor: "white",
  top: -40,
  left: 80,
  right: -10,
  width: 1000,
  height: 600,
  margin: "0 auto",
  padding: 20,
  position: "relative",
};

const polaroids = {
  position: "absolute",
  top: 70,
  left: "inherit",
  bottom: 30,
  overflow: "scroll",
  overflowX: "hidden",
  padding: 6,
  margin: "0 auto",
  right: "inherit",
  width: "inherit",
};
const footerStyle = {
  position: "absolute",
  left: 0,
  bottom: -45,
};

const polaroid = {
  float: "inherit",
  display: "inline-block",
  margin: "5",
  width: "30%",
  height: "68%",
};

const polaroidImages = {
  border: "12px solid #fff",
  borderBottom: "70px solid #fff",
  boxShadow: "3px 3px 3px 3px #888",
  height: "94%",
  width: "86%",
  top: "7%",
  position: "relative",
};

const polaroidPara = {
  color: "black",
  font: "500 18px/22px Arial, sans-serif",
  position: "absolute",
  top: "54",
  textAlign: "center",
  width: "26%",
};

class Categories extends Component {
  constructor(props) {
    super(props);
    this.navigateTo = this.navigateTo.bind(this);
  }

  componentDidMount() {
    console.log("calculating and saving the count and base64 links");
    for (var i = 0; i < allCategories.length; i++) {
      allCategories[i].qty = allCategories[i].photos.length;
    }
    for (var j = 0; j < allCategories.length; j++) {
      if (allCategories[j].type == "STREET") {
        let link = streetB64.src;
        allCategories[j].thumbSrc = { link };
      }
      if (allCategories[j].type == "PORTRAIT") {
        let link = portraitB64.src;
        allCategories[j].thumbSrc = { link };
      }
      if (allCategories[j].type == "TRAVEL") {
        let link = travelB64.src;
        allCategories[j].thumbSrc = { link };
      }
      if (allCategories[j].type == "MOON") {
        let link = moonB64.src;
        allCategories[j].thumbSrc = { link };
      }
      if (allCategories[j].type == "COMPOSITION") {
        let link = compositionB64.src;
        allCategories[j].thumbSrc = { link };
      }
      if (allCategories[j].type == "BIRDS") {
        let link = birdsB64.src;
        allCategories[j].thumbSrc = { link };
      }
      if (allCategories[j].type == "GEOMETRY") {
        let link = geometryB64.src;
        allCategories[j].thumbSrc = { link };
      }
      if (allCategories[j].type == "MANIPULATION") {
        let link = manipulationB64.src;
        allCategories[j].thumbSrc = { link };
      }
      if (allCategories[j].type == "LANDSCAPE") {
        let link = landscapeB64.src;
        allCategories[j].thumbSrc = { link };
      }
      if (allCategories[j].type == "ARCHITECTURE") {
        let link = architectureB64.src;
        allCategories[j].thumbSrc = { link };
      }
    }
  }

  onHide = (e) => {
    this.props.onHide && this.props.onHide(e);
  };

  navigateTo = (e) => {
    let selectedCategory = e.currentTarget.dataset.type;
    this.setState = {
      selectedCategory: this.selectedCategory,
    };
    console.log("section to navigate: ", selectedCategory);
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <React.Fragment>
        {/* <AllPhotos getCount={this.updateWithCount(this.state.counts)} /> */}
        {console.log("rendering and returning")}
        {/* <Router> */}
        <div style={backDropStyle}>
          <div style={modalStyle}>
            {this.props.children}
            <div style={polaroids}>
              {allCategories.map((allCat, index) => (
                <div
                  style={polaroid}
                  data-type={allCat.type}
                  onClick={this.navigateTo}
                  key={index}
                >
                  <NavLink to={`/${allCat.type}`} target="_blank">
                    <Image
                      key={allCat.type}
                      style={polaroidImages}
                      // className="col-md-3"
                      src={allCat.thumbSrc.link}
                    ></Image>
                  </NavLink>
                  <p style={polaroidPara}>
                    <strong>{allCat.type}</strong>
                    &nbsp;&nbsp; <MdCameraRoll />
                    {allCat.qty}
                  </p>
                  &nbsp; &nbsp; &nbsp; &nbsp;
                </div>
              ))}
            </div>

            {/* <AllPhotos /> */}

            <div style={footerStyle}>
              <button
                className="btn btn-primary"
                onClick={(e) => {
                  this.onHide(e);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Modal.propTypes = {
  onHide: PropTypes.func.isRequired,
};
export default Categories;
