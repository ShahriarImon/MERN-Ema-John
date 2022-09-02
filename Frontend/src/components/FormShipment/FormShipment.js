import { TextField } from "@mui/material";
import React from "react";
import { mb } from "../Shipment/Shipment";

const FormShipment = () => {
  return (
    <form>
      <TextField
        id="outlined-basic"
        name="name"
        type="text"
        label="Full Name"
        variant="outlined"
        size="small"
        sx={mb}
      />
      <TextField
        id="outlined-basic"
        name="email"
        type="email"
        label="Email"
        variant="outlined"
        size="small"
        sx={mb}
      />
      <TextField
        id="outlined-basic"
        name="phoneNo"
        type="text"
        label="Phone No"
        variant="outlined"
        size="small"
        sx={mb}
      />
      <TextField
        id="outlined-basic"
        name="address"
        type="text"
        label="Address"
        variant="outlined"
        size="small"
        // sx={mb}
        sx={mb}
      />
      <TextField
        id="outlined-basic"
        name="district"
        type="text"
        label="District"
        variant="outlined"
        size="small"
        // sx={mb}
        sx={mb}
      />
      <TextField
        id="outlined-basic"
        name="postCode"
        type="text"
        label="Post Code"
        variant="outlined"
        size="small"
        sx={mb}
      />
      <Button
        variant="contained"
        color="success"
        onClick={handleConfirm}
        type="submit"
        sx={{ position: "absolute", bottom: "3rem", right: "9rem" }}
      >
        submit
      </Button>
    </form>
  );
};

export default FormShipment;
