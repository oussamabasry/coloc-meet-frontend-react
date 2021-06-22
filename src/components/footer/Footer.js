import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="foot text-white pt-5 pb-4 mt-5">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 style={{marginInline:"43px"}} className="text-uppercase mb-4 font-weight-bold title">
              Coloc Meet
            </h5>
            <p className="sub-title">
              Une plateforme dédiée aux étudiants pour les accompagner durant
              ces études en proposant plusieurs services, en commençant par la
              recherche d'une colocation.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 style={{marginInline:"-6px"}} className="text-uppercase mb-4 font-weight-bold title">
              Services
            </h5>
            <p className="link-hover">
              <Link
                to="#"
                className="sub-title"
                style={{ textDecoration: "none" }}
              >
                {" "}
                Offers
              </Link>
            </p>
            <p className="link-hover">
              <Link
                to="#"
                className="sub-title"
                style={{ textDecoration: "none" }}
              >
                {" "}
                Demandes
              </Link>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 style={{marginInline:"-5px"}} className="text-uppercase mb-4 font-weight-bold title">
              Liens
            </h5>
            <p className="link-hover">
              <Link
                to="#"
                className="sub-title"
                style={{ textDecoration: "none" }}
              >
                {" "}
                Accueil
              </Link>
            </p>
            <p className="link-hover">
              <Link to="#" className="sub-title">
                {" "}
                Nos Services
              </Link>
            </p>
            <p className="link-hover">
              <Link
                to="#"
                className="sub-title"
                style={{ textDecoration: "none" }}
              >
                Contactez Nous
              </Link>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 sub-title">
            <h5 style={{marginInline:"43px"}} className="text-uppercase mb-4 font-weight-bold title">
              Contact
            </h5>
            <p>BP 159 Bd Hassan II Mohammedia</p>
            <p>contact@colocmeet.com</p>
            <p>05 23 32 22 20 - 05 23 32 35 30</p>
            <p>05 23 32 25 46</p>
          </div>
        </div>

        <hr className="mb-4" />

        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p>
              {" "}
              Copyright ©2021 All rights reserved by:
              <Link to="#" style={{ textDecoration: "none" }}>
                <strong className="title link-hover"> Coloc Meet</strong>
              </Link>
            </p>
          </div>

          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <Link
                    to="#"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i className="fab fa-facebook-f icons-color"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    to="#"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i className="fab fa-twitter icons-color"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    to="#"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i className="fab fa-google-plus icons-color"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    to="#"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i className="fab fa-linkedin-in icons-color"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    to="#"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i className="fab fa-youtube icons-color"></i>
                  </Link>
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
