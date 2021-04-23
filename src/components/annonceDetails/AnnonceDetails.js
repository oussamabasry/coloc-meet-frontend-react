import React, { useEffect, useState } from "react";
import "./AnnonceDetails.css";

const AnnonceDetails = () => {
  const [annonce, setAnnonces] = useState({
    id: "1",
    title: "Chambre Double",
    city: "Mohammedia",
    date: "20 Avril 2021",
    stars: 3,
    price: 1000,
    description:
      "Chambres classiques et élégantes, aux détails contemporains et au décor raffiné. Très accueillantes, elles offrent une sensation de confort intemporel créée pour des moments spéciaux et un séjourpaisible. Les chambres ont entre 20 et 25 m2 et donnent sur laville d'Estoril. Lits simples ou lit double, queen ou king size,salle de bains en marbre, dont certaines avec baignoire et douche séparées.",
    gender: "Masculin",
    roommates_number: 4,
    roommate_min_age: 20,
    roommate_max_age: 25,
    status: "Etudiant",
    images: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxODg2ODV8MHwxfHNlYXJjaHwyfHxiZWRyb29tfGVufDB8fHx8MTYxODcwNzE4Mw&ixlib=rb-1.2.1&q=85",
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxODg2ODV8MHwxfHNlYXJjaHwzfHxiZWRyb29tfGVufDB8fHx8MTYxODcwNzE4Mw&ixlib=rb-1.2.1&q=85",
      "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?ixid=MnwxODg2ODV8MXwxfHNlYXJjaHwxfHxiZWRyb29tfGVufDB8fHx8MTYxODcwNzE4Mw&ixlib=rb-1.2.1",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxODg2ODV8MHwxfHNlYXJjaHw0fHxiZWRyb29tfGVufDB8fHx8MTYxODcwNzE4Mw&ixlib=rb-1.2.1&q=85",
    ],
    first_name: "Oussama",
    last_name: "BASRY",
    email: "obasry@gmail.com",
    phone: "+212 6 50 56 38 27",
  });

  const [selectedImage, setSelectedImage] = useState(annonce.images[0]);

  const fiveStars = () => {
    const stars = [];
    let primary = "text-warning";
    let secondary = "text-elegant-color-dark";
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <li className="list-inline-item" key={i}>
          <i
            className={`fas fa-sm fa-star ${
              i <= annonce.stars ? primary : secondary
            }`}
          ></i>
        </li>
      );
    }
    return <ul className="rating list-inline">{stars}</ul>;
  };

  const images = annonce.images.map((img) => {
    return (
      <div class="col-3">
        <img
          src={img}
          class="img-fluid-item"
          height="600"
          onClick={() => setSelectedImage(img)}
        />
      </div>
    );
  });

  return (
    <div className="container mt-3 p-5">
      <section className="mb-5">
        <div className="row">
          <h4 className="mb-3">Location Details</h4>
          <div class="col-md-6 mb-4 mb-md-0">
            <div id="mdb-lightbox-ui"></div>

            <div class="mdb-lightbox">
              <div class="row product-gallery mx-1">
                <div class="col-12 mb-0">
                  <figure class="view overlay rounded z-depth-1 main-img">
                    <img
                      src={selectedImage}
                      class="img-fluid-selected z-depth-1"
                    />
                  </figure>
                </div>
                <div class="col-12">
                  <div class="row">{images}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <h5>{annonce.title}</h5>
            <p className="mb-2 text-muted text-uppercase small">
              {annonce.city} - {annonce.date}
            </p>
            {fiveStars()}
            <p>
              <span className="mr-1">
                <strong>1000 DHS </strong>
              </span>
            </p>
            <p className="text-right pt-1">{annonce.description}</p>
            <h5>Conditions</h5>
            <div className="table-responsive">
              <table className="table table-sm table-borderless mb-0">
                <tbody>
                  <tr>
                    <th className="pl-0 w-50" scope="row">
                      <strong>Sexe de colocs</strong>
                    </th>
                    <td>{annonce.gender}</td>
                  </tr>
                  <tr>
                    <th className="pl-0 w-25" scope="row">
                      <strong>Nombre de colocs</strong>
                    </th>
                    <td>{annonce.roommates_number}</td>
                  </tr>
                  <tr>
                    <th className="pl-0 w-25" scope="row">
                      <strong>Age</strong>
                    </th>
                    <td>
                      {annonce.roommate_min_age} ans- {annonce.roommate_max_age}{" "}
                      ans
                    </td>
                  </tr>
                  <tr>
                    <th className="pl-0 w-25" scope="row">
                      <strong>Status</strong>
                    </th>
                    <td>{annonce.status}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr />
            <h5>Contact Informations</h5>
            <div className="table-responsive">
              <table className="table table-sm table-borderless mb-0">
                <tbody>
                  <tr>
                    <th className="pl-0 w-50" scope="row">
                      <strong>Prénom & NOM</strong>
                    </th>
                    <td>
                      {annonce.first_name} {annonce.last_name}
                    </td>
                  </tr>
                  <tr>
                    <th className="pl-0 w-25" scope="row">
                      <strong>Email</strong>
                    </th>
                    <td>{annonce.email}</td>
                  </tr>
                  <tr>
                    <th className="pl-0 w-25" scope="row">
                      <strong>Tél</strong>
                    </th>
                    <td>{annonce.phone}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnnonceDetails;
