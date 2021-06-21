import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggler, setToggler] = useState(true);
  return (
    <div className="navbarcomponent">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className="logo" src={logo} alt="Coloc Meet" />
          </Link>
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
            <i
              color="#F0B90B"
              className={`fas ${toggler ? "fa-bars" : "fa-times"} fa-2x`}
            ></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  ACCUEIL
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/announces">
                  ANNOUNCES
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  SERVICES
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactas">
                  CONTACTEZ NOUS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/team">
                  TEAM
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav  mb-0 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  <i className="fas fa-lock"></i> SE CONNECTER
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  data-mdb-toggle="modal"
                  data-mdb-target="#staticBackdrop"
                  to="/signin"
                >
                  <i className="fas fa-user-edit"></i> CREER UN COMPTE
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
