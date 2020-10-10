import React, { Component, Suspense } from "react";
import { allCategories } from "./allCategories";
// const allCategories = React.lazy(() => import("./allCategories"));
import PropTypes from "prop-types";
import { render } from "react-dom";
import { Divider, Image, Grid } from "semantic-ui-react";
import Gallery from "react-grid-gallery";
import { Modal, Button } from "react-bootstrap";
import ReactBnbGallery from "react-bnb-gallery";

const adminButton = {
  float: "left",
  width: 30,
  height: 30,
  borderRadius: 18,
};

const mainHeading = {
  textAlign: "center",
  fontFamily: "cursive",
  width: "auto",
};

const backDropStyle = {
  display: "none", //change this to none
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
  width: "50%",
  height: "auto",
  margin: "0 auto",
  padding: 20,
  position: "relative",
};
const footerStyle = {
  position: "absolute",
  left: 0,
  bottom: -45,
};

class AllPhotos extends Component {
  constructor(props) {
    super(props);
    this.showAdminPanel = this.showAdminPanel.bind(this);
    this.hideAdminPanel = this.hideAdminPanel.bind(this);
    this.passwordCheck = this.passwordCheck.bind(this);
    this.fileSelectorHandler = this.fileSelectorHandler.bind(this);
    this.fileUploadHandler = this.fileUploadHandler.bind(this);
    this.state = {
      adminPanel: false,
      allPicsArray: [],
      onlyPics: [],
      typeToShow: this.props.location.pathname.replace(/[^a-zA-Z0-9]/g, ""),
    };
  }
  showAdminPanel = () => {
    let elem = document.getElementById("adminPanelPopUp");
    elem.style.display = "block";
  };
  hideAdminPanel = () => {
    let elem = document.getElementById("adminPanelPopUp");
    elem.style.display = "none";
  };

  displayImages = () => {
    return (
      <div
        style={{
          display: "block",
          minHeight: "1px",
          width: "100%",
          padding: "10px",
          border: "2px solid #ddd",
          overflow: "auto",
          textAlign: "center",
          background: "white",
        }}
      >
        <Gallery images={this.state.onlyPics} enableImageSelection={false} />
      </div>
    );
  };

  passwordCheck = () => {
    let elem = document.getElementById("pass");
    let inputPass = elem.value;
    let elem2 = document.getElementById("warning");
    let elem3 = document.getElementById("fileInput");

    if (inputPass != "kushalverma") {
      elem2.style.display = "block";
      elem3.style.display = "none";
    } else {
      elem2.style.display = "none";
      elem3.style.display = "block";
    }
  };

  componentWillMount() {
    let tts = this.state.typeToShow;
    this.state.allPicsArray = allCategories.filter(function (item) {
      return item.type == tts;
    });

    for (var i = 0; i < this.state.allPicsArray.length; i++) {
      this.state.onlyPics = this.state.allPicsArray[i].photos;
    }
    console.log("this is the array in the state ", this.state.allPicsArray);
    console.log("array having all the src: ", this.state.onlyPics);
  }
  componentDidUpdate() {
    console.log(
      "this is the array in the state (new): ",
      this.state.allPicsArray
    );
    console.log("array having all the src (new): ", this.state.onlyPics);
  }

  fileSelectorHandler = (event) => {
    console.log("in fileSelector handler", event.target.files[0]);
  };

  fileUploadHandler = (e) => {
    let elem1 = document.getElementById("inputImage");
    let elem2 = document.getElementById("caption");
    let tts = this.state.typeToShow;
    let objToAdd = { src: "", thumbnail: "", caption: "" };
    objToAdd.src = "/images/streets/11.jpg";
    objToAdd.thumbnail = "/images/streets/11.jpg";
    objToAdd.caption = elem2.value;

    for (var i = 0; i < allCategories.length; i++) {
      let pointingAt = allCategories[i];
      if (pointingAt.type == tts) {
        pointingAt.photos.push(objToAdd);
      }
    }
    console.log("values added showing new array now:");
    this.componentDidUpdate();
  };

  adminPanel = () => {
    return (
      <div id="adminPanelPopUp" style={backDropStyle}>
        <div style={modalStyle}>
          Add Images to <strong>{this.state.typeToShow.toLowerCase()}</strong>
          <br />
          <label>Password: </label>
          <input type="password" id="pass" minlength="8" required />{" "}
          <button onClick={this.passwordCheck}>Proceed</button>
          <br />
          <p id="warning" style={{ color: "red", display: "none" }}>
            Incorrect password!
          </p>
          {/* ..........change the display of the div below to none .........*/}
          <div id="fileInput" style={{ display: "none" }}>
            <br />

            <label>Select image to upload: </label>
            <input
              type="file"
              id="inputImage"
              required
              onChange={this.fileSelectorHandler}
            />
            <br />
            <label>Add caption and EXIF (optional): </label>

            <input type="text" id="caption" required />
            <br />
            <button
              className="btn btn-primary"
              style={{
                float: "right",
                position: "relative",
                bottom: "36px",
              }}
              onClick={this.fileUploadHandler}
            >
              Upload
            </button>
          </div>
          <div style={footerStyle}>
            <button className="btn btn-primary" onClick={this.hideAdminPanel}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <React.Fragment>
        <button style={adminButton} onClick={this.showAdminPanel}>
          i
        </button>
        <h1 style={mainHeading}>{this.state.typeToShow}</h1>
        {this.adminPanel()}
        {this.displayImages()}
      </React.Fragment>
    );
  }
}

AllPhotos.propTypes = {
  onlyPic: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      srcset: PropTypes.photos,
      caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      thumbnailWidth: PropTypes.number.isRequired,
      thumbnailHeight: PropTypes.number.isRequired,
    })
  ).isRequired,
};

Modal.propTypes = {
  onHide: PropTypes.func.isRequired,
};
export default AllPhotos;
