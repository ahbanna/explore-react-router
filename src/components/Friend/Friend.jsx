import React from "react";
import "./Friend.css";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
  // console.log(props.friend);
  const { name, email, id } = friend;
  return (
    <div className="single-fnd">
      <h3>Name: {name}</h3>
      <h5>Email: {email}</h5>
      <Link to={`/friend/${id}`}>Show Details</Link>
    </div>
  );
};

export default Friend;
