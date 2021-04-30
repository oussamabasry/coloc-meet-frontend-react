import React, { useEffect, useState } from "react";
import PostDescription from "../postDescription/PostDescription";
import PostImages from "../postImages/PostImages";
import "./PostDetails.css";
import serverApi from "../../apis/serverApi";
import Spinner from "../Spinner/Spinner";

const PostDetails = ({ postId }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      setPost(null);
      const response = await serverApi.get(`/posts/${postId}`);
      setPost(response.data);
    };
    fetchPost();
  }, [postId]);

  if (!post) return <Spinner />;

  return (
    <div className="container mt-3 p-5">
      <section className="mb-5">
        <div className="row">
          <h4 className="mb-3">Location Details</h4>
          <PostImages postImages={post.postImages} />
          <PostDescription post={post} />
        </div>
      </section>
    </div>
  );
};

export default PostDetails;
