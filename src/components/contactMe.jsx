import React, { Component } from "react";
import EmailMe from "./emailMe";

class ContactMe extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-contact" data-section="contactMe">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">WANT TO CONTACT ME?</span>
                <h2 className="colorlib-heading animate-box">
                  DROP ME A MAIL <br />
                  <small>yeah that's what I used to say :p</small>
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="contact-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="contact-form"></div>
                    <EmailMe></EmailMe>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ContactMe;
