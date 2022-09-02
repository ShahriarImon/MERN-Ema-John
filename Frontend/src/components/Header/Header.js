import React, { useContext } from "react";
import logo from "../../images/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { logOut } from "../Authentication/AuthManager";
import { UserContext } from "../../App";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const handleSignOut = () => {
    logOut().then((response) => {
      // setUser(response);
      setLoggedInUser(response);
    });
  };
  return (
    <nav className="header">
      <div className="empty"></div>
      <div className="leftContent">
        <Link to="/shop">
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className="midContent">
        <Link to="/shop" style={{ textDecoration: "none", color: "black" }}>
          <a>Shop</a>
        </Link>
        <Link
          to="/shop/reviewOrder"
          style={{ textDecoration: "none", color: "black" }}
        >
          <a>Order review</a>
        </Link>
        <Link
          to="/inventory"
          style={{ textDecoration: "none", color: "black" }}
        >
          <a>Manage Inventory</a>
        </Link>
      </div>
      <div className="rightContent">
        {loggedInUser.isSignedIn == true ? (
          <div>
            <a
              style={{ width: "6rem" }}
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {loggedInUser.name}
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" onClick={handleSignOut}>
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <a
              style={{ width: "6rem" }}
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Account
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link to={"/account"}>
                  <a className="dropdown-item">Log In/Register</a>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
