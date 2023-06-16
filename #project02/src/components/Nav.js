import React from "react";

const Nav = () => {
  return (
    <div>
      <nav className="navbar bg-dark">
        <div className="container">
          <a className="navbar-brand text-white" href="#">
            Navbar
          </a>

          <div id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-white" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
