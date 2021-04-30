import React, { useState, useEffect } from "react";
import "./PostImages.css";

const PostImages = ({ postImages }) => {
  const domainName = "http://localhost:8000/";
  const [selectedImage, setSelectedImage] = useState(
    domainName + postImages[0]
  );

  useEffect(() => {
    setSelectedImage(domainName + postImages[0]);
  }, [postImages]);

  const onNextClick = () => {
    postImages.forEach((image, index) => {
      if (domainName + image === selectedImage) {
        setSelectedImage(domainName + postImages[(index + 1) % 4]);
        return;
      }
    });
  };

  const onPreviousClick = () => {
    postImages.forEach((image, index) => {
      if (domainName + image === selectedImage) {
        if (index === 0) index = 4;
        setSelectedImage(domainName + postImages[index - 1]);
        return;
      }
    });
  };

  const images = postImages.map((img, index) => {
    return (
      <div className="col-3 pointer" key={index}>
        <img
          alt="Item"
          src={domainName + img}
          onClick={() => setSelectedImage(domainName + img)}
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
          <div className="col-12 mb-3">
            <div
              id="carouselExampleControls"
              className="carousel  z-depth-1-half img-fluid-selected"
              data-interval="false"
            >
              <img
                src={selectedImage}
                className="d-block img-fluid-selected z-depth-1"
                alt="Principal"
              />
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
                onClick={onPreviousClick}
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                onClick={onNextClick}
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-12">
            <div className="row">{images}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostImages;
