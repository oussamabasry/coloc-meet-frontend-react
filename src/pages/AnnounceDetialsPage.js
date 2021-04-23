import React from "react";
import AnnonceDetails from "../components/annonceDetails/AnnonceDetails";
import RelatedAnnonace from "../components/relatedAnnonce/RelatedAnnonace";
import { RelatedAnnouncesProvider } from "../contexts/RelatedAnnouncesContext";

const AnnounceDetialsPage = () => {
  return (
    <>
      <AnnonceDetails />
      <RelatedAnnouncesProvider>
        <RelatedAnnonace />
      </RelatedAnnouncesProvider>
    </>
  );
};

export default AnnounceDetialsPage;
