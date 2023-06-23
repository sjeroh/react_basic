import React from "react";

const Card = ({ children, onClick }) => {
  return (
    <div>
      <div className="card mt-3 " onClick={onClick}>
        <div className="card-body d-flex justify-content-between align-items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
