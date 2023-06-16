import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const usenAvi = useNavigate();
  const submit = () => {
    console.log("실행");
    usenAvi("/about");
  };
  return (
    <div>
      Contact
      <button onClick={submit}>go to Aboutpage</button>
    </div>
  );
};

export default Contact;
