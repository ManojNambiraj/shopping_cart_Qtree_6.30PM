import React from "react";

const CartItems = (props) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{props.item.productName}</div>
        {props.item.price}
      </div>
      <button
        className="badge text-bg-primary rounded-pill"
        onClick={() => {
          props.handleRemoveItem(props.item);
        }}
      >
        x
      </button>
    </li>
  );
};

export default CartItems;
