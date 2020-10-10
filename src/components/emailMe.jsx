import React, { Component } from "react";
import "../emailMe.css";

class EmailMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      person_name: "",
      email: "",
      phone: ""
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

    this.thankumsgRef = React.createRef();
    this.successMsg = this.successMsg.bind(this);
  }
  handleChange(event) {
    console.log(event.target.value);
    const target = event.target;
    const tar_name = target.name;
    if (tar_name == "person_name") {
      this.setState({ person_name: target.value });
    }
    if (tar_name == "email") {
      this.setState({ email: target.value });
    }
    if (tar_name == "phone") {
      this.setState({ phone: target.value });
    } else {
      this.setState({ message: target.value });
    }
  }

  // handleSubmit(event) {
  //   event.preventDefault();

  //   const { templateId } = this.props.env;

  //   this.sendFeedback(templateId, {
  //     message_body: this.state.message,
  //     from_name: this.state.name,
  //     reply_to: this.state.email,
  //     contact_Number: this.state.contactNumber
  //   });
  // }

  // sendFeedback(templateId, variables) {
  //   window.emailjs
  //     .send("gmail", templateId, variables)
  //     .then(res => {
  //       console.log("email successfully sent");
  //     })
  //     .catch(err => {
  //       console.error(
  //         "Oh well, you failed. Here some thoughts on the error that occured:",
  //         err
  //       );
  //     });
  // }

  successMsg(e) {
    e.preventDefault();
    var x = this.thankumsgRef.current;

    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  render() {
    return (
      <div className="container contact-form">
        <form
          className="gform"
          method="POST"
          data-email="vermakushal.28@gmail.com"
          action="https://script.google.com/macros/s/AKfycbxLck45QWBB0LzbqUgjIj7Sa6lCG9LwTeSy1dQE-Q/exec"
        >
          <input type="hidden" data-form-email="true"></input>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              name="person_name"
              required=""
              onChange={this.handleChange}
              placeholder="What your mom calls you"
              data-form-field="Name"
            ></input>
          </div>
          <label>Email:</label>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              required=""
              placeholder="Email"
              onChange={this.handleChange}
              data-form-field="Email"
            ></input>
          </div>
          <label>Contact Number:</label>
          <div className="form-group">
            <input
              type="tel"
              className="form-control"
              name="phone"
              placeholder="Phone"
              onChange={this.handleChange}
              data-form-field="Phone"
            ></input>
          </div>
          <label>Message:</label>
          <div className="form-group">
            <textarea
              className="form-control"
              name="message"
              placeholder="Tell me what's on your mind"
              rows="3"
              onChange={this.handleChange}
              data-form-field="Message"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-lg btn-danger"
              onClick={this.successMsg}
            >
              SUBMIT
            </button>
            <div
              ref={this.thankumsgRef}
              style={{ display: "none" }}
              className="thankyou_message"
            >
              <small>
                <em>
                  Thank you <strong>{this.state.person_name}</strong> for
                  contacting!
                </em>{" "}
                Will get back to you soon!
              </small>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default EmailMe;
