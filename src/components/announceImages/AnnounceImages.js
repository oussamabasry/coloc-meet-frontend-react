import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./AnnounceImages.css";

const AnnounceImages = ({ selectedAnnounce }) => {
  const [selectedImage, setSelectedImage] = useState(
    selectedAnnounce.images[0]
  );

  useEffect(() => {
    setSelectedImage(selectedAnnounce.images[0]);
    window.scrollTo(0, 0);
  }, [selectedAnnounce]);

  const onNextClick = () => {
    selectedAnnounce.images.map((image, index) => {
      if (image === selectedImage) {
        setSelectedImage(selectedAnnounce.images[(index + 1) % 4]);
      }
    });
  };

  const onPreviousClick = () => {
    selectedAnnounce.images.map((image, index) => {
      if (image === selectedImage) {
        if (index === 0) index = 4;
        setSelectedImage(selectedAnnounce.images[index - 1]);
      }
    });
  };

  const images = selectedAnnounce.images.map((img, index) => {
    return (
      <div className="col-3 pointer" key={index}>
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

const mapStateToProps = (state) => {
  return {
    selectedAnnounce: state.selectedAnnounce,
  };
};

export default connect(mapStateToProps)(AnnounceImages);
