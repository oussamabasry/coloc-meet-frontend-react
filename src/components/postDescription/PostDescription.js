import React from "react";
import moment from "moment";

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
      <p className="mb-2 text-muted">
        {post.city} - {moment(post.date).format("MMMM Do YYYY, h:mm:ss a")}
      </p>
      {fiveStars()}
      <p>
        <span className="mr-1">
          <strong>{post.price} DHS </strong>
        </span>
      </p>
      <p className="text-right pt-1">{post.description}</p>
      <strong>
        <h4 className="mb-3">Conditions</h4>
      </strong>
      <div>
        <table>
          <tbody>
            <tr>
              <th className="pl-0 w-50" scope="row">
                <strong>Sexe de colocs</strong>
              </th>
              <td>&nbsp;&nbsp;&nbsp;</td>
              <td>{post.gender}</td>
            </tr>
            <tr>
              <th className="pl-0 w-25" scope="row">
                <strong>Nombre de colocs</strong>
              </th>
              <td>&nbsp;</td>
              <td>{post.roommatesNumber}</td>
            </tr>
            <tr>
              <th className="pl-0 w-25" scope="row">
                <strong>Age</strong>
              </th>
              <td>&nbsp;</td>
              <td>
                {post.roommatesMinAge} ans- {post.roommatesMaxAge} ans
              </td>
            </tr>
            <tr>
              <th className="pl-0 w-25" scope="row">
                <strong>Status</strong>
              </th>
              <td>&nbsp;</td>
              <td>{post.status}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
      <h4>Contact Informations</h4>
      <div>
        <table>
          <tbody>
            <tr>
              <th className="pl-0 w-50" scope="row">
                <strong>Prénom & NOM</strong>
              </th>
              <td>
                <p style={{ marginLeft: "30px" }}>
                  {post.user.firstName} {post.user.lastName}
                </p>
              </td>
            </tr>
            <tr>
              <th className="pl-0 w-25" scope="row">
                <strong>Email</strong>
              </th>
              <td>
                <p style={{ marginLeft: "30px" }}>{post.user.email}</p>
              </td>
            </tr>
            <tr>
              <th className="pl-0 w-25" scope="row">
                <strong>Tél</strong>
              </th>
              <td>
                <p style={{ marginLeft: "30px" }}>{post.user.phone}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostDescription;
