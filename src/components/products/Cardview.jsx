import React, { useState, useEffect } from "react";
import Cards from "./Cards";


const Cardview = ({handleClick}) => {

  return (
    <section>
      <Cards handleClick={handleClick} />
    </section>
  );
};

export default Cardview;
