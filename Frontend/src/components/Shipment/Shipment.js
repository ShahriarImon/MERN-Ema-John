import { useState } from "react";
import { Box, Paper, TextField, Button, Alert } from "@mui/material";
import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import React from "react";

import ReviewCart from "../ReviewCart/ReviewCart";
import { useContext } from "react";
import { CartContext, UserContext } from "../../App";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Header from "../Header/Header";

const Shipment = () => {
  // let success = false;
  const [shipmentInfo, setShipmentInfo] = useState({});
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [cart, setCart] = useContext(CartContext);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phoneNo: yup.string().min(11).max(11).required(),
    address: yup.string().required(),
    district: yup.string().required(),
    postCode: yup.number().integer().positive().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setShipmentInfo(data);
  };
  const handleConfirm = (e) => {
    const orderInfo = {
      ...loggedInUser,
      cart: cart,
      shipmentInfo: shipmentInfo,
      date: new Date(),
    };
    console.log(orderInfo);
    if (shipmentInfo.email) {
      fetch("https://emaa-john.herokuapp.com/addorder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderInfo),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result) {
            alert("Order Placed Successfully");
            setCart([]);
            <Navigate to="/shop" />;
          }
        });
    } else {
      alert("Please Provide Shipping Information Correctly");
    }
    // handleClose();
  };

  console.log("shipment", shipmentInfo);
  return (
    <div>
      <Header></Header>
      <br />
      <br />
      <Container>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: "31%",
            },
          }}
        >
          <Paper elevation={2} sx={colFlex}>
            <Box sx={{ marginBottom: "1rem" }}>
              <strong>Shipping Address</strong>
            </Box>
            <form id="shipmentForm" onSubmit={handleSubmit(onSubmit)}>
              <TextField
                id="outlined-basic"
                name="name"
                type="text"
                label="Full Name"
                variant="outlined"
                size="small"
                sx={mt}
                {...register("name")}
              />
              {errors.name && (
                <p>
                  <small sx={errorMessage}>* Please Enter your name</small>
                </p>
              )}

              <TextField
                id="outlined-basic"
                name="email"
                type="email"
                label="Email"
                variant="outlined"
                size="small"
                sx={mt}
                {...register("email")}
              />
              {errors.email && (
                <p>
                  <small sx={errorMessage}>* Invalid Email</small>
                </p>
              )}

              <TextField
                id="outlined-basic"
                name="phoneNo"
                type="number"
                label="Phone No"
                variant="outlined"
                size="small"
                sx={mt}
                {...register("phoneNo")}
              />
              {errors.phoneNo && (
                <p>
                  <small sx={errorMessage}>* Invalid Mobile No</small>
                </p>
              )}

              <TextField
                id="outlined-basic"
                name="address"
                type="text"
                label="Address"
                variant="outlined"
                size="small"
                // sx={mb}
                sx={mt}
                {...register("address")}
              />
              {errors.address && (
                <p>
                  <small sx={errorMessage}>
                    *Please Enter your current address
                  </small>
                </p>
              )}

              <TextField
                id="outlined-basic"
                name="district"
                type="text"
                label="District"
                variant="outlined"
                size="small"
                // sx={mb}
                sx={mt}
                {...register("district")}
              />
              {errors.district && (
                <p>
                  <small sx={errorMessage}>*Please Enter your District</small>
                </p>
              )}
              <TextField
                id="outlined-basic"
                name="postCode"
                type="number"
                label="Post Code"
                variant="outlined"
                size="small"
                sx={mt}
                {...register("postCode")}
              />
              {errors.postCode && (
                <p sx={errorMessage}>
                  <small>*Please Enter your PostCode</small>
                </p>
              )}
            </form>
          </Paper>

          <Paper elevation={2} sx={colFlex}>
            <Box sx={{ marginBottom: "1rem" }}>
              <strong>Payment Method</strong>
              <p>Coming Soon</p>
            </Box>
          </Paper>
          <Paper elevation={2} sx={orderSummery}>
            <ReviewCart
              // todo cartBtn is used to dynamic the button name
              cartBtn="Proceed to checkout"
              isCartImg={true}
              isCartBtn={false}
              // orderTaken={orderTaken}
            ></ReviewCart>
            <Box sx={flex}>
              <Button
                variant="contained"
                color="success"
                onClick={handleOpen}
                type="submit"
                form="shipmentForm"
                value="Submit"
              >
                Confirm Order
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Do you want to Confirm the order
          </Typography>
          <Box sx={flex}>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                handleConfirm();
                handleClose();
              }}
              sx={{ margin: "10px" }}
            >
              Yes
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={handleClose}
              sx={{ margin: "10px" }}
            >
              No
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default Shipment;
export const flex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  // "& > :not(style)": {
  //   m: 1,
  //   width: "45%",
  //   height: 128,
  // },
};
export const colFlex = {
  padding: "3rem",
  display: "flex",
  flexDirection: "column",
  // justifyContent: "center",
  alignItems: "center",
  backgroundColor: "wheat",
  // "& > :not(style)": {
  //   m: 1,
  //   width: "45%",
  //   height: 128,
  // },
};
export const orderSummery = {
  padding: "3rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "wheat",
  // "& > :not(style)": {
  //   m: 1,
  //   width: "45%",
  //   height: 128,
  // },
};
export const errorMessage = {
  color: "red",
};
export const mb = {
  marginBottom: "1rem",
  width: "85%",
};
const mt = {
  marginTop: "1rem",
  width: "85%",
  backgroundColor: "white",
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
