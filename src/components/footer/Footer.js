import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <footer class="bg-dark text-white pt-5 pb-4">
      <div class="container text-center text-md-left">
        <div class="row text-center text-md-left">
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
              Coloc Meet
            </h5>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, ital consectetur lorem ipsum dolor sit
              amet adipisicing elit.
            </p>
          </div>

          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
              Products
            </h5>
            <p>
              <a href="#" class="text-white" style={{ textDecoration: "none" }}>
                {" "}
                TheProviders
              </a>
            </p>
            <p>
              <a href="#" class="text-white" style={{ textDecoration: "none" }}>
                {" "}
                Creativity
              </a>
            </p>
            <p>
              <a href="#" class="text-white" style={{ textDecoration: "none" }}>
                {" "}
                SourceFiles
              </a>
            </p>
            <p>
              <a href="#" class="text-white" style={{ textDecoration: "none" }}>
                {" "}
                bootstrap 5 alpha
              </a>
            </p>
          </div>

          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
              Useful links
            </h5>
            <p>
              <a href="#" class="text-white" style={{ textDecoration: "none" }}>
                {" "}
                Your Account
              </a>
            </p>
            <p>
              <a href="#" class="text-white" style={{ textDecoration: "none" }}>
                {" "}
                Become an Affiliates
              </a>
            </p>
            <p>
              <a href="#" class="text-white" style={{ textDecoration: "none" }}>
                Shipping Rates
              </a>
            </p>
            <p>
              <a href="#" class="text-white" style={{ textDecoration: "none" }}>
                {" "}
                Help
              </a>
            </p>
          </div>

          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
              Contact
            </h5>
            <p>
              <i class="fas fa-home mr-3"></i>New York, NY 2333, US
            </p>
            <p>
              <i class="fas fa-envelope mr-3"></i>theproviders98@gmail.com
            </p>
            <p>
              <i class="fas fa-phone mr-3"></i>+92 3162859445
            </p>
            <p>
              <i class="fas fa-print	 mr-3"></i>+01 335 633 77
            </p>
          </div>
        </div>

        <hr class="mb-4" />

        <div class="row align-items-center">
          <div class="col-md-7 col-lg-8">
            <p>
              {" "}
              Copyright ©2021 All rights reserved by:
              <a href="#" style={{ textDecoration: "none" }}>
                <strong class="text-warning">The Providers</strong>
              </a>
            </p>
          </div>

          <div class="col-md-5 col-lg-4">
            <div class="text-center text-md-right">
              <ul class="list-unstyled list-inline">
                <li class="list-inline-item">
                  <a
                    href="#"
                    class="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i class="fab fa-facebook"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    href="#"
                    class="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    href="#"
                    class="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i class="fab fa-google-plus"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    href="#"
                    class="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    href="#"
                    class="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i class="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
