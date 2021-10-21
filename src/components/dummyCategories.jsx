import { Component, useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";
// const { Modal, Form, Button, Icon } = semanticUIReact;
import { Divider, Image, Grid } from "semantic-ui-react";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";

// const src =
//   "https://react.semantic-ui.comhttps://react.semantic-ui.com/images/wireframe/image.png"; //blank png for categories boxes

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
  backgroundColor: "#fff",
  // borderRadius: 5,
  top: -40,
  left: 80,
  right: -10,
  width: 1040,
  height: 600,
  // maxWidth: "100%",
  // maxHeight: "100%",
  // zIndex: 1100,
  // height: "auto",
  margin: "0 auto",
  padding: 20,
  position: "relative",
};

const polaroids = {
  position: "absolute",
  top: 70,
  left: 0,
  bottom: 30,
  // width: "100%",
  // height: "100%",
  overflow: "scroll",
  overflowX: "hidden",
  margin: "0 auto",
  padding: 6,
  // textAlign: "center",
  // backgroundColor: "lightgrey",
};
const footerStyle = {
  position: "absolute",
  left: 0,
  bottom: -45,
};

const mainImages = {
  display: "table",
  width: "100%",
};

const allCategories = [
  { type: "STREET", src: "/images/street.jpg" },
  { type: "PORTRAIT", src: "/images/portrait.jpg" },
  { type: "TRAVEL", src: "/images/travel.jpeg" },
  { type: "MOON", src: "/images/moon.jpg" },
  // { type: "COMPOSITION", src: "/images/composition.jpg" },
  // { type: "BIRDS", src: "/images/birds2.jpg" },
  // { type: "GEOMETRY", src: "/images/geometry.jpeg" },
  // { type: "MANIPULATION", src: "/images/manipulation.jpeg" },
  // { type: "LANDSCAPE", src: "/images/landscape.jpeg" },
  // { type: "ARCHITECTURE", src: "/images/architecture.jpeg" },
];

const polaroid = {
  display: "inline",
  margin: "5",
  position: "relative",
  width: "184",
  height: "290",
  top: "30",
  bottom: "30"
};

const polaroidImages = {
  border: "12px solid #fff",
  borderBottom: "70px solid #fff",
  // WebkitBoxShadow: "3px 3px 3px #888",
  boxShadow: "3px 3px 3px #888",
  // boxShadow: "3px 3px 3px #888",
  height: "auto",
  maxWidth: "30%",
};

const polaroidPara = {
  color: "#888",
  font: "500 18px/22px Arial, sans-serif",
  position: "absolute",
  bottom: "0",
  textAlign: "center",
  width: "100%",
};

class Categories extends Component {
  constructor(props) {
    super(props);
  }

  onHide = (e) => {
    this.props.onHide && this.props.onHide(e);
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div style={backDropStyle}>
        <div style={modalStyle}>
          {this.props.children}
          <div style={{ polaroids }}>
            {allCategories.map((allCat) => (
              <div style={polaroid}>
                <Image
                  style={polaroidImages}
                  key={allCat.type}
                  // className="col-md-3"
                  src={allCat.src}
                ></Image>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
            ))}
          </div>
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
    );
  }
}

Modal.propTypes = {
  onHide: PropTypes.func.isRequired,
};
export default Categories;
