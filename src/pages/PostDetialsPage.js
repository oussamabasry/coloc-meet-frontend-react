import React, { useEffect } from "react";
import PostDetails from "../components/postDetails/PostDetails";
import RelatedPosts from "../components/relatedPosts/RelatedPosts";
import { useParams } from "react-router-dom";

const PostDetialsPage = () => {
  const { postId } = useParams();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [postId]);

  return (
    <div>
      <PostDetails postId={postId} />
      <RelatedPosts postId={postId} />
    </div>
  );
};

export default PostDetialsPage;
