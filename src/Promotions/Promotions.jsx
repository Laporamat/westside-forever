import React from "react";
import { useNavigate } from "react-router-dom";
import "./Promacions.css";

function Promotions() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Promacions");
  };

  return (
    <div className="promo-title-container">
      <div className="promo-title">
        <h6>Promotions</h6>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          className="promo-chevron"
          viewBox="0 0 16 16"
          onClick={handleClick}
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
          />
        </svg>
      </div>
    </div>
  );
}

export default Promotions;
