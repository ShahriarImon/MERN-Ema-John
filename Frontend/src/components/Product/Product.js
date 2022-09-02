import React from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  const {
    name,
    key,
    img,
    price,
    seller,
    features,
    stock,
    star,
    starCount,
    url,
  } = props.product;

  return (
    <div className="product">
      <div className="product-img">
        <Link
          to={"/product/" + key}
          style={{ textDecoration: "none", color: "black" }}
        >
          <img src={img} alt="" />
        </Link>
      </div>

      <div className="product-details">
        <div className="product-name">
          <Link
            to={"/product/" + key}
            style={{ textDecoration: "none", color: "black" }}
          >
            <p>{name}</p>
          </Link>
        </div>
        <div>
          <small>by: {seller}</small>
          <br />
        </div>
        <div className="product-desc">
          <div className="product-desc-left">
            <p>${price}</p>
            <p>only {stock} left in stock - order soon</p>
            <button
              className="Btn"
              onClick={() => props.handleAddCartBtn(props.product)}
            >
              <FontAwesomeIcon icon={faShoppingCart} /> {props.btnName}
            </button>
          </div>
          <div className="product-desc-right">
            <p>{star}</p>
            <h3>Features:</h3>
            <ul>
              {features.map((element) => (
                <li className="features-list">
                  {element.description} : <strong>{element.value}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
