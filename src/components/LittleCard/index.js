import React from "react";

const LittleCard = (title, icon) => {
  return (
    <>
      <img src={icon} />
      <p>{title}</p>
    </>
  );
};

export default LittleCard;
