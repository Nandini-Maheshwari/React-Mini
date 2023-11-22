import React from "react";
import { useParams } from "react-router-dom"; 
//used to access and extract URL parameters from the current route

function User () {
  const { userid } = useParams()
  return (
    <div className="text-center">User: {userid}</div>
  );
}

export default User;