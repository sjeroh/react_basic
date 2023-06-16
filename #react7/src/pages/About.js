import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const naviagte = useNavigate();
  const gotohome = () => {
    naviagte("/");
  };
  return (
    <div>
      <>About</>
      <button onClick={gotohome}>go to Homepage</button>
    </div>
  );
};

export default About;
