import React from "react";
import Slajder from "./Slajder";

const SmartPhone = ({ smartPhoneToShow }) => {
  return (
    <div className="smartPhone-container">
      <img
        className="smartPhone-img"
        src={smartPhoneToShow.slika}
        alt={smartPhoneToShow.title}
        width="100%"
      />
      <h2 className="smartPhone-title">
        {smartPhoneToShow.brand} - {smartPhoneToShow.title}
      </h2>
      <Slajder galerija={smartPhoneToShow.galerija} />
    </div>
  );
};

export default SmartPhone;
