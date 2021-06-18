import React from "react";
import "./CardHome.css";
import { Link } from "react-router-dom";

const CardHome = ({ props }) => {
  const domainName = "http://localhost:8000/";
  const fiveStars = () => {
    const stars = [];
    let primary = "text-warning";
    let secondary = "text-elegant-color-dark";
    for (let iteration = 1; iteration <= 5; iteration++) {
      stars.push(
        <li className="list-inline-item" key={iteration}>
          <i
            className={`fas fa-sm fa-star ${
              iteration <= props.stars ? primary : secondary
            }`}
          ></i>
        </li>
      );
    }
    return <ul className="rating list-inline">{stars}</ul>;
  };
  return (
    <div className="col">
      <div className="car">
        <img
          src={domainName + props.postImages[0]}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h4 style={{ textAlign: "center" }} className="card-title">
            {" "}
            <strong>{props.city}</strong>{" "}
          </h4>
          <hr />
          <p className="card-text">
            Rate <strong>:</strong>
            {fiveStars()} <br />
            <strong>Prix :</strong> Dès {props.price} DH/Mois
          </p>
          <div className="btni">
            <div className="info">
              <Link to={`/announce-details/${props._id}`}>
                <button type="button" class="btn btn-light">
                  More infos{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHome;
