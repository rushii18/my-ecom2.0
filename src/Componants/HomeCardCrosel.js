import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import HomeCroselCard from "./HomeCroselCard";

const HomeCardCrosel = ({ data, Selection }) => {
  const items = data.map((items) => <HomeCroselCard product={items} />);

  const responsive = {
    358: { items: 2 },
    440: { items: 2 },
    568: { items: 3 },
    1024: { items: 5 },
  };

  return (
    <div className=" ">
      <div>
        <h3 className="bold-text text-center">{Selection}</h3>
      </div>
      <AliceCarousel
        autoPlay
        autoPlayInterval={1000}
        // disableButtonsControls
        disableDotsControls
        infinite
        responsive={responsive}
        items={items}
        className="border border-dark"
      />
    </div>
  );
};

export default HomeCardCrosel;
