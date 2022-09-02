import { Box, Button, Container, Paper, TextField } from "@mui/material";
import fakeData from "../../fakeData/products.json";
import { colFlex, mb } from "../Shipment/Shipment";
const Inventory = () => {
  const handleAddInventoryAll = () => {
    fetch("https://emaa-john.herokuapp.com/addAllproducts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fakeData),
    }).then((result) => console.log(result));
  };
  return (
    <Container>
      <h1>Welcome to inventory</h1>
      {/*  <button onClick={handleAddInventoryAll}>Add All Products</button> */}
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
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            size="small"
            sx={mb}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            size="small"
            sx={mb}
          />
          <TextField
            id="outlined-basic"
            label="Phone No"
            variant="outlined"
            size="small"
            sx={mb}
          />

          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            size="small"
            // sx={mb}
            sx={mb}
          />
          <TextField
            id="outlined-basic"
            label="District"
            variant="outlined"
            size="small"
            // sx={mb}
            sx={mb}
          />
          <TextField
            id="outlined-basic"
            label="Post Code"
            variant="outlined"
            size="small"
            sx={mb}
          />
          <Button variant="outlined">Submit</Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default Inventory;
