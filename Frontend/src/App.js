import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";

import ReviewOrder from "./components/ReviewOrder/ReviewOrder";

import Shipment from "./components/Shipment/Shipment";
import Inventory from "./components/Inventory/Inventory";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Auth from "./components/Authentication/Auth";
import ProductDetails from "./components/ProductDetails/ProductDetails";

export const CartContext = createContext();
export const ProductsContext = createContext();
export const UserContext = createContext();
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://emaa-john.herokuapp.com/products")
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
        console.log(result);
      });
  }, []);

  // console.log(products);
  const [cart, setCart] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState([]);

  return (
    // <Container>
    <ProductsContext.Provider value={[products, setProducts]}>
      <CartContext.Provider value={[cart, setCart]}>
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Router>
            <Routes>
              <Route path={"/"} element={<Home />}></Route>
              <Route path={"/shop"} element={<Shop />} />
              <Route path={"/product/:key"} element={<ProductDetails />} />
              <Route path="/account" element={<Auth />} />
              <Route
                path={"/shop/shipment"}
                element={
                  <PrivateRoute>
                    <Shipment />
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path={"/inventory"}
                element={
                  <PrivateRoute>
                    <Inventory />
                  </PrivateRoute>
                }
              ></Route>
              <Route path={"/shop"} element={<Shop />} />
              <Route
                path={"/shop/reviewOrder"}
                element={<ReviewOrder></ReviewOrder>}
              ></Route>
              {/* <Route path={"*"} element={<Home />} /> */}
            </Routes>
          </Router>
        </UserContext.Provider>
      </CartContext.Provider>
    </ProductsContext.Provider>
    // </Container>
  );
}

export default App;
