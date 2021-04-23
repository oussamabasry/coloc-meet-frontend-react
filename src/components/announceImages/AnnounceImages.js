import React, { useState, useContext } from "react";
import { AnnounceDetailsContext } from "../../contexts/AnnounceDetailsContext";
import "./AnnounceImages.css";

const AnnounceImages = () => {
  const announce = useContext(AnnounceDetailsContext)[0];

  const [selectedImage, setSelectedImage] = useState(announce.images[0]);

  const images = announce.images.map((img, index) => {
    return (
      <div className="col-3" key={index}>
        <img
         alt="Item"
          src={img}
          onClick={() => setSelectedImage(img)}
          className="img-fluid-item"
          height="600"
        />
      </div>
    );
  });

  return (
    <div className="col-md-6 mb-4 mb-md-0">
      <div id="mdb-lightbox-ui"></div>

      <div className="mdb-lightbox">
        <div className="row product-gallery mx-1">
          <div className="col-12 mb-0">
            <figure className="view overlay rounded z-depth-1 main-img">
              <img
                src={selectedImage}
                alt="Principal"
                className="img-fluid-selected z-depth-1"
              />
            </figure>
          </div>
          <div className="col-12">
            <div className="row">{images}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnounceImages;
