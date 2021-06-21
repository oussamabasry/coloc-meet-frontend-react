import React, { useState } from "react";
import emailjs from "emailjs-com";
import toastr from "toastr";
import "toastr/build/toastr.css";

const Contact = () => {
  const [loading, setloading] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_sizqyzp",
        "template_mivvy1r",
        e.target,
        "user_ZcefhZ4PdOqaju667d18Q"
      )
      .then(
        (result) => {
          console.log(result.text);
          toastr.success("Your message sent succecfully", "Congratulation");
        },
        (error) => {
          console.log(error.text);
          toastr.error("A message fails to send", "Error");
        }
      );
  }

  return (
    <div>
      <section
        id="contact"
        className="py-5"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container pb-5">
          <h2 className="h1-responsive font-weight-bold text-center mb-5">
            Contactez-nous
          </h2>

          <div className="row">
            <div className="col-md-9 mb-md-0 mb-5 px-md-5">
              <form onSubmit={sendEmail}>
                <div className="row py-md-2">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="name" className="">
                        Nom 
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control shadow-none"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="email" className="">
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        className="form-control shadow-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <label htmlFor="subject" className="">
                      Sujet
                      </label>
                      <input
                        type="text"
                        className="form-control shadow-none"
                        name="subject"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <label htmlFor="message">Message</label>
                      <textarea
                        type="text"
                        name="message"
                        rows="3"
                        className="form-control md-textarea shadow-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col text-center text-md-left mt-3">
                    {!loading && (
                      <input
                        type="submit"
                        className="btn btn-primary shadow-none "
                        value="Send"
                      />
                    )}
                    {loading && (
                      <div
                        className="spinner-border text-primary"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>

            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="fa fa-map-marker fa-lg text-primary "></i>
                  <p>Casablanca, Mohammedia, Morocco</p>
                </li>
                <li>
                  <i className="fa fa-phone fa-lg mt-4 text-primary"></i>
                  <p>+212 5 43 56 82 27</p>
                </li>
                <li>
                  <i className="fa fa-envelope fa-lg mt-4 text-primary"></i>
                  <p className="mb-0">colocmeet@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
