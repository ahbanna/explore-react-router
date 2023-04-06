import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import "./PostDetails.css";

const PostDetails = () => {
  const post = useLoaderData();
  // console.log(post);

  // for back to previous page
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="post-details">
      <p>Post ID: {post.id}</p>
      <h2>Title: {post.title}</h2>
      <p>Description: {post.body}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;
