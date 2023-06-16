import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="navbar bg-dark border-bottom border-bottom-dark">
        <div className="container ">
          <Link to={"/"} className="navbar-brand text-white">
            Home
          </Link>
          <div id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                to="/blogs"
                className="nav-link active text-white"
                aria-current="page"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
