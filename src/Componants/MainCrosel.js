import React from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { HomeCroseldata } from "./HomeCroseldata";

const items = HomeCroseldata.map((items) => (
  <img
    className=""
    role="presentation"
    src={items.image}
    alt="img"
    style={{ maxWidth: "100%", padding: 10 }}
  />
));

const MainCrosel = () => {
  return (
    <div className="">
      <AliceCarousel
        autoPlay
        autoPlayInterval={1000}
        disableButtonsControls
        infinite
        items={items}
      />
    </div>
  );
};

export default MainCrosel;
