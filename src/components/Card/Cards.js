import React from "react";
import "./Cards.css"

function Cards() {
  const obj = {
    price: "2500 DH/mois",
    surface: "20 m²",
    adress: "Mohammedia",
    title: "Studio de 46 m² à louer",
    type : "Studio",
    description: "Idéalement situé en face du pôle universitaire Grandmont, la résidence est proche de nombreuses commodités : supermarché, transports et du Parc de Grandmont.",
    img: {
      src: "https://www.immojeunepro.com/bundles/boresidence/uploads/documents/1200x800/8d33a221983556848aab5dd8ee21781d8cb49c1c-1200x800.jpeg?timestamp=1619116884",
      alt: "descriptive image"
    }
  };
  const data = {
    header: "Liste des Offres disponibles",
    cards: Array(15).fill(obj)
  };

  

  const cardsTwo = data.cards.map(card => (
    <div className="col-12 col-md-6 col-lg-4 col-sm-12">
    <div className="card m-2" >
      <a href="#">
      <img src="https://www.immojeune.com/uploads/housing/1200x800/52d6d9d09d1279fb8379a57ab76dbd74e6b88f2c-1200x800.jpeg?timestamp=1620365832" className="card-img-top" alt="..." /></a>
      <div className="card-body">
        <div className="flex">
        <a href="#"><p className="card-text">{card.title}</p></a>
        <p className="property-type">{card.type}</p>
        </div>
        <div className="flex">
          <div className="price-adress">
            <h5 className="">{card.surface} - {card.price}</h5>
            <div className>
              <img src="https://www.immojeune.com//img/icon-location.svg" alt="Ville" /> {card.adress}
            </div>
            
          </div>
          <button name id className=" voir-btn btn btn-primary">Voir</button>
          
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
  <li className="page-item"><a className="page-link" href="#">Pevious</a></li>
    <li className="page-item active" aria-current="page">
      <span className="page-link">1</span>
    </li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item"><a className="page-link" href="#">4</a></li>
    <li className="page-item"><a className="page-link" href="#">5</a></li>
    <li className="page-item"><a className="page-link" href="#">6</a></li>
    <li className="page-item"><a className="page-link" href="#">...</a></li>
    <li className="page-item"><a className="page-link" href="#">Next</a></li>
  </ul>
</nav>


    </div>
  );
}

export default Cards;
