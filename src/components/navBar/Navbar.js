import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [toggler, setToggler] = useState(true);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="logo" src={logo} alt="Coloc Meet" />
          </a>
          <button
            className="navbar-toggler costmusetoggler shadow-none "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setToggler(!toggler)}
          >
            <FontAwesomeIcon icon={toggler ? faBars : faTimes} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Accueil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Offres
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Demandes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Contactez nous
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <button
                  className="btn btn-outline-dark mx-1 my-1 shadow-none"
                  type="button"
                >
                  Connexion
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-outline-dark mx-1 my-1 shadow-none"
                  type="button"
                >
                  Inscription
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
