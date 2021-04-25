import React, { useContext } from "react";
import { connect } from "react-redux";

const AnnounceDescription = ({ selectedAnnounce }) => {
  const fiveStars = () => {
    const stars = [];
    let primary = "text-warning";
    let secondary = "text-elegant-color-dark";
    for (let iteration = 1; iteration <= 5; iteration++) {
      stars.push(
        <li className="list-inline-item" key={iteration}>
          <i
            className={`fas fa-sm fa-star ${
              iteration <= selectedAnnounce.stars ? primary : secondary
            }`}
          ></i>
        </li>
      );
    }
    return <ul className="rating list-inline">{stars}</ul>;
  };

  return (
    <div className="col-md-6">
      <h5>{selectedAnnounce.title}</h5>
      <p className="mb-2 text-muted text-uppercase small">
        {selectedAnnounce.city} - {selectedAnnounce.date}
      </p>
      {fiveStars()}
      <p>
        <span className="mr-1">
          <strong>1000 DHS </strong>
        </span>
      </p>
      <p className="text-right pt-1">{selectedAnnounce.description}</p>
      <strong>
        <h5>Conditions</h5>
      </strong>
      <div className="table-responsive">
        <table className="table table-sm table-borderless mb-0">
          <tbody>
            <tr>
              <th className="pl-0 w-50" scope="row">
                <strong>Sexe de colocs</strong>
              </th>
              <td>{selectedAnnounce.gender}</td>
            </tr>
            <tr>
              <th className="pl-0 w-25" scope="row">
                <strong>Nombre de colocs</strong>
              </th>
              <td>{selectedAnnounce.roommates_number}</td>
            </tr>
            <tr>
              <th className="pl-0 w-25" scope="row">
                <strong>Age</strong>
              </th>
              <td>
                {selectedAnnounce.roommate_min_age} ans-{" "}
                {selectedAnnounce.roommate_max_age} ans
              </td>
            </tr>
            <tr>
              <th className="pl-0 w-25" scope="row">
                <strong>Status</strong>
              </th>
              <td>{selectedAnnounce.status}</td>
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
                {selectedAnnounce.first_name} {selectedAnnounce.last_name}
              </td>
            </tr>
            <tr>
              <th className="pl-0 w-25" scope="row">
                <strong>Email</strong>
              </th>
              <td>{selectedAnnounce.email}</td>
            </tr>
            <tr>
              <th className="pl-0 w-25" scope="row">
                <strong>Tél</strong>
              </th>
              <td>{selectedAnnounce.phone}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedAnnounce: state.selectedAnnounce,
  };
};

export default connect(mapStateToProps)(AnnounceDescription);
