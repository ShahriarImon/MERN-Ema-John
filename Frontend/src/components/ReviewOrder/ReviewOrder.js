import { Paper, Typography, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { CartContext } from "../../App";
import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import Product from "../Product/Product";
import ReviewCart from "../ReviewCart/ReviewCart";
import ReviewProduct from "../ReviewProduct/ReviewProduct";
import "./ReviewOrder.css";

const ReviewOrder = (props) => {
  let [cart, setCart] = useContext(CartContext);

  const handleRemoveFromCartBtn = (product) => {
    let newCart = cart.filter((element) => element.key !== product.key);
    // console.log('newCart', newCart);
    setCart(newCart);
  };

  // console.log(cart);
  // let kcart = JSON.parse(localStorage.getItem("key"));
  // localStorage.removeItem("cart");
  return (
    <div>
      <Header></Header>
      <br />
      <br />
      <Container>
        <div className="headings">
          <div className="first"></div>
          <div className="sec"></div>
          <div className="third">
            <p>PRODUCT</p>
          </div>
          <div className="forth">
            <p>PRICE</p>
          </div>
          <div className="fifth">
            <p>QUANTITY</p>
          </div>
          <div className="sixth">
            <p>SUBTOTAL</p>
          </div>
        </div>
        <div className="review-container">
          <div className="review">
            {cart.map((element) => (
              <ReviewProduct
                product={element}
                key={element.key}
                btnName="Remove"
                handleRemoveFromCartBtn={handleRemoveFromCartBtn}
              ></ReviewProduct>
            ))}
          </div>
          <div className="rightSide">
            <div className="orderSummery">
              <ReviewCart
                // todo cartBtn is used to dynamic the button name
                cartBtn="Proceed to checkout"
                isCartImg={true}
                isCartBtn={true}
                // orderTaken={orderTaken}
              ></ReviewCart>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ReviewOrder;
