import React from "react";
import colocation from "../../assets/images/colocation.png";

const OurServices = () => {
  return (
    <div
      className="container-fluid mx-auto mt-5 mb-5 col-12 root"
      style={{ textAlign: "center" }}
    >
      <h3 className="hd">Pourquoi les gens croient en nous</h3>
      <p className="text-muted">
        Rendez toujours un service plus important et meilleur que ce qui est
        attendu de vous, quelle que soit votre demande.
      </p>
      <div className="row" style={{ justifyContent: "center" }}>
        <div className="card col-md-3 col-12">
          <div className="card-content">
            <div className="card-body">
              {" "}
              <img width="80px" src={colocation} />
              <div className="shadow"></div>
              <h3 className="card-title mb-5">
                Nous fournissons le service de colocation
              </h3>
              <div className="card-subtitle">
                <p className="text-muted">
                  Colocation avec colocmeet.com. Trouvez votre colocataire
                  ideal. Déposez gratuitement votre annonce de colocation.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{marginInline:"30px"}} className="card col-md-3 col-12 ml-2">
          <div className="card-content">
            <div className="card-body">
              {" "}
              <img className="img" src="https://i.imgur.com/xUWJuHB.png" />
              <h3 className="card-title mb-5">
                Nous fournissons des services de publicité
              </h3>
              <div className="card-subtitle">
                <p className="text-muted">
                  Affichez votre annonce dans la section PREMIUM, un emplacement
                  exclusif et privilégié en grand format à droite de la liste
                  d’annonces
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div   className="card col-md-3 col-12 ml-2">
          <div className="card-content">
            <div className="card-body">
              {" "}
              <img className="img rck mb-4" src="https://i.imgur.com/rG3CGn3.png" />
              <h3 className="card-title mb-5">
                Nous fournissons le service de suivi
              </h3>
              <div className="card-subtitle">
                <p className="text-muted">
                    Nous offrons également un excellent service de suivi après
                    colocation pour ameliorer notre plateforme afin que tous les utilisateurs soient satisfaits.
                  {" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
