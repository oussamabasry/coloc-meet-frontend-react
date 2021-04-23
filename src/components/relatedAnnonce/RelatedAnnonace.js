import React from "react";
import AnnonceDetails from "../annonceDetails/AnnonceDetails";
import CardAnnounce from "../cardAnnounce/CardAnnounce";

export const RelatedAnnonace = ({ relatedAnnounces }) => {
  const annouces = relatedAnnounces.map((announce) => (
    <CardAnnounce
      key={announce.id}
      title={announce.title}
      image={announce.image}
      description={announce.description}
      price={announce.price}
      buttonText={announce.buttonText}
      city= {announce.city}
    />
  ));

  return (
    <div class="wrapper">
      <div class="container">
        <h4 className="mb-3">Annonces Similaires</h4>
        <div class="row g-1">{annouces}</div>
      </div>
    </div>
  );
};

export default RelatedAnnonace;
