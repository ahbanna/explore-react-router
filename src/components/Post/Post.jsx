import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Post.css";

const Post = ({ post }) => {
  const { title, id } = post;

  // for handler
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="single-post">
      <h2>Post title: {title}</h2>
      <Link to={`/post/${id}`}>Read More</Link>
      {/* with button (2nd way) */}
      <Link to={`/post/${id}`}>
        <button style={{ background: "#9370db" }}>With Button</button>
      </Link>
      {/* with handler (3rd way) */}
      <button onClick={handleNavigation} style={{ background: "#9370db" }}>
        With Handler
      </button>
    </div>
  );
};

export default Post;
