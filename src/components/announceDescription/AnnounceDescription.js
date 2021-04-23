import React, { useContext } from "react";
import { AnnounceDetailsContext } from "../../contexts/AnnounceDetailsContext";

const AnnounceDescription = () => {
  const announce = useContext(AnnounceDetailsContext)[0];

  const fiveStars = () => {
    const stars = [];
    let primary = "text-warning";
    let secondary = "text-elegant-color-dark";
    for (let iteration = 1; iteration <= 5; iteration++) {
      stars.push(
        <li className="list-inline-item" key={iteration}>
          <i
            className={`fas fa-sm fa-star ${
              iteration <= announce.stars ? primary : secondary
            }`}
          ></i>
        </li>
      );
    }
    return <ul className="rating list-inline">{stars}</ul>;
  };

  return (
    <div className="col-md-6">
      <h5>{announce.title}</h5>
      <p className="mb-2 text-muted text-uppercase small">
        {announce.city} - {announce.date}
      </p>
      {fiveStars()}
      <p>
        <span className="mr-1">
          <strong>1000 DHS </strong>
        </span>
      </p>
      <p className="text-right pt-1">{announce.description}</p>
      <h5>Conditions</h5>
      <div className="table-responsive">
        <table className="table table-sm table-borderless mb-0">
          <tbody>
            <tr>
              <th className="pl-0 w-50" scope="row">
                <strong>Sexe de colocs</strong>
              </th>
              <td>{announce.gender}</td>
            </tr>
            <tr>
              <th className="pl-0 w-25" scope="row">
                <strong>Nombre de colocs</strong>
              </th>
              <td>{announce.roommates_number}</td>
            </tr>
            <tr>
              <th className="pl-0 w-25" scope="row">
                <strong>Age</strong>
              </th>
              <td>
                {announce.roommate_min_age} ans- {announce.roommate_max_age} ans
              </td>
            </tr>
            <tr>
              <th className="pl-0 w-25" scope="row">
                <strong>Status</strong>
              </th>
              <td>{announce.status}</td>
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
                {announce.first_name} {announce.last_name}
              </td>
            </tr>
            <tr>
              <th className="pl-0 w-25" scope="row">
                <strong>Email</strong>
              </th>
              <td>{announce.email}</td>
            </tr>
            <tr>
              <th className="pl-0 w-25" scope="row">
                <strong>Tél</strong>
              </th>
              <td>{announce.phone}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnnounceDescription;
