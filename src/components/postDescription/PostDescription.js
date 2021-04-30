import React from "react";

const PostDescription = ({ post }) => {
  const fiveStars = () => {
    const stars = [];
    let primary = "text-warning";
    let secondary = "text-elegant-color-dark";
    for (let iteration = 1; iteration <= 5; iteration++) {
      stars.push(
        <li className="list-inline-item" key={iteration}>
          <i
            className={`fas fa-sm fa-star ${
              iteration <= post.stars ? primary : secondary
            }`}
          ></i>
        </li>
      );
    }
    return <ul className="rating list-inline">{stars}</ul>;
  };

  return (
    <div className="col-md-6">
      <h5>{post.title}</h5>
      <p className="mb-2 text-muted text-uppercase small">
        {post.city} - {post.date}
      </p>
      {fiveStars()}
      <p>
        <span className="mr-1">
          <strong>{post.price} DHS </strong>
        </span>
      </p>
      <p className="text-right pt-1">{post.description}</p>
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
              <td>{post.gender}</td>
            </tr>
            <tr>
              <th className="pl-0 w-25" scope="row">
                <strong>Nombre de colocs</strong>
              </th>
              <td>{post.roommatesNumber}</td>
            </tr>
            <tr>
              <th className="pl-0 w-25" scope="row">
                <strong>Age</strong>
              </th>
              <td>
                {post.roommatesMinAge} ans- {post.roommatesMaxAge} ans
              </td>
            </tr>
            <tr>
              <th className="pl-0 w-25" scope="row">
                <strong>Status</strong>
              </th>
              <td>{post.status}</td>
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
                {post.user.firstName} {post.user.lastName}
              </td>
            </tr>
            <tr>
              <th className="pl-0 w-25" scope="row">
                <strong>Email</strong>
              </th>
              <td>{post.user.email}</td>
            </tr>
            <tr>
              <th className="pl-0 w-25" scope="row">
                <strong>Tél</strong>
              </th>
              <td>{post.user.phone}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostDescription;
