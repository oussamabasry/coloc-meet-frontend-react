import React, { useState, useEffect } from "react";
import "./RelatedPosts.css";
import serverApi from "../../apis/serverApi";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";

const RelatedPosts = ({ postId }) => {
  const domainName = "http://localhost:8000/";
  const [relatedPosts, setRelatedPosts] = useState(null);

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      setRelatedPosts(null);
      const response = await serverApi.get(`/posts/related/${postId}`);
      setRelatedPosts(response.data);
    };
    fetchRelatedPosts();
  }, [postId]);

  if (relatedPosts == null) return <Spinner />;

  const posts = relatedPosts.map((post) => (
    <div
      key={post._id}
      className="container  col-md-6  col-lg-3 mb-3  mt-5 d-flex justify-content-center align-items-center"
    >
      <div className="card">
        <div className="inner-card">
          {" "}
          <img
            src={domainName + post.postImages[0]}
            alt="related announce"
            className="card-img rounded"
          />
          <div className="d-flex justify-content-between align-items-center mt-3 px-2">
            <strong>{post.title}</strong>
          </div>
          <div className="px-2">
            <small>
              {post.price} DHS - {post.city}
            </small>
          </div>
          <div className="px-2 mt-3">
            {" "}
            <Link to={post._id}>Voir details</Link>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="wrapper">
      <div className="container">
        <h4 className="mb-3">Annonces Similaires</h4>
        <div className="row g-1">{posts}</div>
      </div>
    </div>
  );
};

export default RelatedPosts;
