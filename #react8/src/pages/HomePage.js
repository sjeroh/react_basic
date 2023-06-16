import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <button>
        <Link to={"/about"}>About</Link>
      </button>
      <button>
        <Link to={"/contact"}>contact</Link>
      </button>
      <button>
        <Link to={"/help"}>help</Link>
      </button>
    </div>
  );
};

export default HomePage;
