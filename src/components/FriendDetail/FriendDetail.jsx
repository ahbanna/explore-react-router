import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetail = () => {
  const friend = useLoaderData();
  console.log(friend);
  return (
    <div>
      <h4>Name: {friend.name}</h4>
      <p>Phone: {friend.phone}</p>
      <p>Address: {friend.address.city}</p>
      <p>Company Name: {friend.company.name}</p>
      <p>Webiste: {friend.website}</p>
    </div>
  );
};

export default FriendDetail;
