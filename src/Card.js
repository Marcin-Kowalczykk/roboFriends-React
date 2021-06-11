import React from "react";

const Card = ({ id, name, email }) => {
  const apiLink = "https://robohash.org/";
  const roboIconSize = "?150x150";

  return (
    <div className=" tc bg-light-green dib br3 pa1 ma2 grow bw2 shadow-5">
      <img src={`${apiLink}${id}${roboIconSize}`} alt="roboFoto" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
