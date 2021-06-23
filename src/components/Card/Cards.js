import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Cards.css";
import { getPost } from "../../action/Action";

import { useSelector, useDispatch } from "react-redux";
function Cards() {
  const dispatch = useDispatch();

  const p = useSelector((state) => state);
  console.log(p)
  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  const obj = {
    price: "2500 DH/mois",
    surface: "20 m²",
    adress: "Mohammedia",
    title: "Studio de 46 m² à louer",
    type: "Studio",
    description:
      "Idéalement situé en face du pôle universitaire Grandmont, la résidence est proche de nombreuses commodités : supermarché, transports et du Parc de Grandmont.",
    img: {
      src: "https://www.immojeunepro.com/bundles/boresidence/uploads/documents/1200x800/8d33a221983556848aab5dd8ee21781d8cb49c1c-1200x800.jpeg?timestamp=1619116884",
      alt: "descriptive image",
    },
  };
  const data = {
    header: "Liste des Offres disponibles",
    cards: Array(15).fill(obj),
  };

  console.log(p.post);

  const cardsTwo =
    p.post &&
    p.post.map((card) => (
      <div className="col-12 col-md-6 col-lg-4 col-sm-12">
        <div className="card m-2">
          <a href="#">
            <img
              src={`http://localhost:8000/${card.postImages[0]}`}
              className="card-img-top"
              alt="..."
            />
          </a>
          <div className="card-body">
            <div className="flex">
              <a href="#">
                <p className="card-text">{card.title} </p>
              </a>
              <p className="property-type">{card.type}</p>
            </div>
            <div className="flex">
              <div className="price-adress">
                <h5 style={{ marginTop: "10px" }} className="">
                  {" "}
                  {card.price} Dh/Mois
                </h5>
                <p style={{ marginTop: "10px" }} className="">
                  Pour {card.gender} 
                </p>
                <div className>
                  <img
                    src="https://www.immojeune.com//img/icon-location.svg"
                    alt="Ville"
                  />{" "}
                  {card.city}
                </div>
              </div>
              <Link to={`/announce-details/${card._id}`}>
                <button name id className=" voir-btn btn btn-primary">
                  Voir
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ));

  return (
    <div>
      <div className=" container all-cards">
        <h3 className=" header m-2">{data.header}</h3>
        <div className="row"> {cardsTwo} </div>
      </div>

      <nav aria-label="..." className="pagination-navbar">
        <ul className="pagination pagination-lg justify-content-center ">
          <li className="page-item">
            <a className="page-link" href="#">
              Pevious
            </a>
          </li>
          <li className="page-item active" aria-current="page">
            <span className="page-link">1</span>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              4
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              5
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              6
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              ...
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Cards;
