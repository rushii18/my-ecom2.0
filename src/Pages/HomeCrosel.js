import React from "react";
import MainCrosel from "../Componants/MainCrosel";
import HomeCardCrosel from "../Componants/HomeCardCrosel";
import { Mens_kurta } from "../Data/Mens_kurta";
import { Mens_jeans } from "../Data/Mens_jeans";
import { Mens_shirt } from "../Data/Mens_shirt";
import { Women_leheng } from "../Data/Women_leheng";
import { Women_dress } from "../Data/Women_dress";

const HomeCrosel = () => {
  return (
    <div>
      <MainCrosel />

      <div className="py-20 flex flex-col justify-center ">
        <HomeCardCrosel data={Women_dress} Selection={"Women's Dress"} />
        <HomeCardCrosel data={Mens_jeans} Selection={"Men's Jeans"} />
        <HomeCardCrosel data={Mens_shirt} Selection={"Men's Shirt"} />
        <HomeCardCrosel data={Women_leheng} />
      </div>
    </div>
  );
};

export default HomeCrosel;
