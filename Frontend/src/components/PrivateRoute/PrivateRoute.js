import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../../App";

export default function PrivateRoute(props) {
  const location = useLocation();
  const [loggedInUser, setloggedInUser] = useContext(UserContext);
  return loggedInUser.email ? (
    props.children
  ) : (
    <Navigate to="/account" replace state={{ from: location }} />
  );
}

//  PrivateRoute;
