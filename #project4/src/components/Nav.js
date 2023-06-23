import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-danger-subtle">
      <div className="container">
        <Link to={"/"} className="navbar-brand text-dark fw-semibold">
          HOME
        </Link>
        <div className="navbar ms-auto" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to={"/blogs"}
                className="nav-link text-dark-emphasis fw-semibold"
                aria-current="page"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
