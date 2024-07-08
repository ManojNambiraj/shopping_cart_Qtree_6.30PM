import React from "react";

const Product = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.product.productName}</h5>
        <p className="card-text">Rs.{props.product.price}</p>
        <p className="card-text">{props.product.desc}</p>
        <h6>{props.product.isStock ? "- inStock" : "- Out of stock"}</h6>
        <button
          className="btn btn-primary"
          disabled={!props.product.isStock}
          onClick={() => props.handleAddToCart(props.product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
