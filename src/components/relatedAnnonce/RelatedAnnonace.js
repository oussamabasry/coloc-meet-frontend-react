import React, { useContext } from "react";
import { RelatedAnnouncesContext } from "../../contexts/RelatedAnnouncesContext";
import CardAnnounce from "../cardAnnounce/CardAnnounce";

export const RelatedAnnonace = () => {
  const relatedAnnounces = useContext(RelatedAnnouncesContext)[0];

  const annouces = relatedAnnounces.map((announce) => (
    <CardAnnounce
      key={announce.id}
      title={announce.title}
      image={announce.image}
      description={announce.description}
      price={announce.price}
      buttonText={announce.buttonText}
      city={announce.city}
    />
  ));

  return (
    <div className="wrapper">
      <div className="container">
        <h4 className="mb-3">Annonces Similaires</h4>
        <div className="row g-1">{annouces}</div>
      </div>
    </div>
  );
};

export default RelatedAnnonace;
