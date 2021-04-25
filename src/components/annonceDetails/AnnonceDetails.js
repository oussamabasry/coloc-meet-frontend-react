import React from "react";
import AnnounceDescription from "../announceDescription/AnnounceDescription";
import AnnounceImages from "../announceImages/AnnounceImages";
import "./AnnonceDetails.css";

const AnnonceDetails = () => {
  return (
    <div className="container mt-3 p-5">
      <section className="mb-5">
        <div className="row">
          <h4 className="mb-3">Location Details</h4>
          <AnnounceImages />
          <AnnounceDescription />
        </div>
      </section>
    </div>
  );
};

export default AnnonceDetails;
