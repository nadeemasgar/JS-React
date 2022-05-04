import React from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  const params = useParams();
  const userId = params.userId;
  return <div>Details of the User {userId}</div>;
}

export default UserDetails;
