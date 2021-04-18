import React from "react";
import PropTypes from "prop-types";
import "./Footer.css";

const Footer = () => {
  return (
    <footer class="foot text-white pt-5 pb-4">
      <div class="container text-center text-md-left">
        <div class="row text-center text-md-left">
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
              Coloc Meet
            </h5>
            <p>
              Une plateforme dédiée aux étudiants pour les accompagner durant
              ces études en proposant plusieurs services , en commençant par la
              recherche d'une colocation.
            </p>
          </div>

          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
              Services
            </h5>
            <p>
              <a href="#" class="text-white" style={{ textDecoration: "none" }}>
                {" "}
                Offers
              </a>
            </p>
            <p>
              <a href="#" class="text-white" style={{ textDecoration: "none" }}>
                {" "}
                Demandes
              </a>
            </p>
          </div>

          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
              Liens
            </h5>
            <p>
              <a href="#" class="text-white" style={{ textDecoration: "none" }}>
                {" "}
                Accueil
              </a>
            </p>
            <p>
              <a href="#" class="text-white" style={{ textDecoration: "none" }}>
                {" "}
                Nos Services
              </a>
            </p>
            <p>
              <a href="#" class="text-white" style={{ textDecoration: "none" }}>
                Contactez Nous
              </a>
            </p>
          </div>

          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
              Contact
            </h5>
            <p>BP 159 Bd Hassan II Mohammedia</p>
            <p>contact@colocmeet.com</p>
            <p>05 23 32 22 20 - 05 23 32 35 30</p>
            <p>05 23 32 25 46</p>
          </div>
        </div>

        <hr class="mb-4" />

        <div class="row align-items-center">
          <div class="col-md-7 col-lg-8">
            <p>
              {" "}
              Copyright ©2021 All rights reserved by:
              <a href="#" style={{ textDecoration: "none" }}>
                <strong class="text-warning"> Coloc Meet</strong>
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
                    <i class="fab fa-facebook-f text-warning"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    href="#"
                    class="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i class="fab fa-twitter text-warning"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    href="#"
                    class="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i class="fab fa-google-plus text-warning"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    href="#"
                    class="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i class="fab fa-linkedin-in text-warning"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    href="#"
                    class="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i class="fab fa-youtube text-warning"></i>
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
