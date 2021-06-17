import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import "./Navbar.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faBars,
  faLock,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
library.add(faTimes, faBars, faLock, faUserPlus);

const Navbar = () => {
  const [toggler, setToggler] = useState(true);
  return (
    <div className="navbarcomponent">
      <nav className="navbar navbar-expand-lg navbar-light">
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
            <FontAwesomeIcon
              color="#F0B90B"
              icon={toggler ? faBars : faTimes}
            />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  ACCUEIL
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  OFFRES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  DEMANDES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONTACTEZ NOUS
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto mb-0 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-user-edit"></i> CREER UN COMPTE
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-mdb-toggle="modal"
                  data-mdb-target="#staticBackdrop"
                  href="#"
                >
                  <i className="fas fa-lock"></i> SE CONNECTER
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
