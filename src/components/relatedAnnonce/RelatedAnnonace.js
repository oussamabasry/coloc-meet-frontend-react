import React from "react";
import { connect } from "react-redux";
import { selectedAnnounce } from "../../actions";
import "./RelatedAnnounce.css";


export const RelatedAnnonace = ({ relatedAnnounces, selectedAnnounce }) => {
  const annouces = relatedAnnounces.map((announce) => (
    <div className="container  col-md-6  col-lg-3 mb-3  mt-5 d-flex justify-content-center align-items-center">
      <div className="card">
        <div className="inner-card">
          {" "}
          <img
            src={announce.images[0]}
            alt="related announce"
            className="card-img rounded"
          />
          <div className="d-flex justify-content-between align-items-center mt-3 px-2">
            <strong>{announce.title}</strong>
          </div>
          <div className="px-2">
            <small>
              {announce.price} DHS - {announce.city}
            </small>
          </div>
          <div className="px-2 mt-3">
            {" "}
            <button className="btn" onClick={() => selectedAnnounce(announce)}>
              Voir details
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
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

const mapStateToProps = (state) => {
  return {
    relatedAnnounces: state.relatedAnnounces,
  };
};

export default connect(mapStateToProps, {
  selectedAnnounce,
})(RelatedAnnonace);
