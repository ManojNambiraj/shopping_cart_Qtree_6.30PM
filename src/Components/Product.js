import React from "react";

const Product = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.product.productName}</h5>
        <p className="card-text">Rs.{props.product.price}</p>
        <p className="card-text">
          {props.product.desc}
        </p>
        <a href="#" className="btn btn-primary">
          Add to cart
        </a>
      </div>
    </div>
  );
};

export default Product;
