import React from "react";
import emailjs from "@emailjs/browser";
import Emaail from './Emaail.css'
export default function Email() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_3zxflt6", e.target, "HWItwUWU8B6HKw3Ns")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="container" data-aos="fade-up">
      <div className="row pt-5 pb-2 rowBg text-center" id="email">
        <div className="col-12">
          <h3 className="email-name ">
            Contact Us
          </h3>
          <p> PLEASE COMPLETE THE FORM BELOW. WE’LL BE IN TOUCH WITH YOU SOON.</p>
          <form onSubmit={sendEmail}>
            <div className="row pt-5 mx-auto">
              <div className="col-8 form-group mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="email"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <textarea
                  className="form-control"
                  id=""
                  cols="30"
                  rows="8"
                  placeholder="Your message"
                  name="message"
                ></textarea>
              </div>
              <div className="col-8 pt-3 mx-auto">
                <input
                  type="submit"
                  className="btn btn-dark"
                  value="Send Message"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
