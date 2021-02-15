import React, { useContext } from "react";
import "../style/css/header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../App";
/*import axios from "axios"; */
const Header = () => {
  let [Auth, setAuth] = useContext(AuthContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg boot-nav fixed-top">
        <div className="container">
          <div className="logo">YC</div>
          <button
            className="navbar-toggler burger"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="burger-line">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </span>
          </button>
          <div className="collapse navbar-collapse navbarr" id="navbarNav">
            <ul className="navbar-nav ul">
              <li className="nav-item">
                <Link className="nav-link linkk" to="/home" id="1">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link linkk" to="/clothes" id="2">
                  Jackets
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link linkk" to="/pants" id="3">
                  Pants
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link linkk" to="/dresses" id="4">
                  Dresses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link linkk" to="/hijab" id="5">
                  Hijab & Scarf
                </Link>
              </li>

              <li className="contact nav-item">
                <Link className="nav-link linkk" to="/contact" id="7">
                  Contact
                </Link>
              </li>
              {Auth.userIsAdmin ? (
                <li className="admin nav-item">
                  <Link className="nav-link linkk" to="/admin" id="8">
                    Admin
                  </Link>
                </li>
              ) : null}
              <li className="basket nav-item">
                <Link className="nav-link linkk" to="/blog" id="10">
                  Blog
                </Link>
              </li>
              <li className="login nav-item">
                <Link className="nav-link linkk" to="/login" id="9">
                  login
                </Link>
              </li>

              <li className="about nav-item">
                <Link className="nav-link linkk" to="/about" id="6">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
