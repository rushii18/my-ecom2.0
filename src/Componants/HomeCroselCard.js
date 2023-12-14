import React from "react";

function HomeCroselCard({ product }) {
  return (
    <div
      className="card   shadow p-3 mb-5  rounded"
      style={{ padding: 5, margin: 10, height: "500px" }}
    >
      <img
        src={product.imageUrl}
        className=""
        alt="img"
        style={{
          width: "100%",
          padding: "0px",
          // border: "2px ",
          height: "300px",
        }}
      />
      <div className="card-body">
        <h5 className="">{product.brand}</h5>
        <h4> Rs {product.price}</h4>
        <p className="card-text ">{product.title}</p>
      </div>
    </div>
  );
}

export default HomeCroselCard;
