import React from "react";
import { AnnounceDetailsProvider } from "../../contexts/AnnounceDetailsContext";
import AnnounceDescription from "../announceDescription/AnnounceDescription";
import AnnounceImages from "../announceImages/AnnounceImages";
import "./AnnonceDetails.css";

const AnnonceDetails = () => {
  return (
    <div className="container mt-3 p-5">
      <section className="mb-5">
        <div className="row">
          <h4 className="mb-3">Location Details</h4>
          <AnnounceDetailsProvider>
            <AnnounceImages />
            <AnnounceDescription />
          </AnnounceDetailsProvider>
        </div>
      </section>
    </div>
  );
};

export default AnnonceDetails;
