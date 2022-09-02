import React from "react";
import "./ReviewProduct.css";
import { MdClear } from "react-icons/md";

const ReviewProduct = (props) => {
  const { name, key, img, price, count } = props.product;
  return (
    <div className="reviewProduct">
      <button
        className="crossBtn"
        onClick={() => props.handleRemoveFromCartBtn(props.product)}
      >
        <MdClear />
      </button>
      <div className="reviewProduct-img">
        <img src={img} alt="" />
      </div>

      <div className="reviewProduct-name">
        <p>{name}</p>
      </div>

      <div className="reviewProduct-price">
        <p>${price}</p>
      </div>

      <div className="reviewProduct-quantity">
        <p>{count}</p>
      </div>
      <div className="reviewProduct-subtotal">
        <p>${price * count}</p>
      </div>
    </div>
  );
};

export default ReviewProduct;
