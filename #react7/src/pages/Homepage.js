import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <div>Homepage</div>

      <Link to={"/about"}>go to about</Link>
    </div>
  );
};

export default Homepage;
