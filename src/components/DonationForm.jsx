import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function DonationForm() {
  const [goodType, setGoodType] = useState("Money");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  const navigate = useNavigate();

  const handleSubmitDonation = (e) => {
    const donationData = {
      goods_type: goodType,
      description: description,
      quantity: quantity,
    };

    axios
      .post("http://127.0.0.1:3001/goods", { payload: donationData })
      .then((response) => {
        window.alert("Thank you for your donation!");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error creating product:", error);
      });
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          bgcolor: "background.paper",
          width: 500,
          margin: "auto",
          marginTop: "10%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Select
            value={goodType}
            label="Good Type"
            onChange={(e) => setGoodType(e.target.value)}
            defaultValue="Money"
          >
            <MenuItem value={"Money"}>Money Donation</MenuItem>
            <MenuItem value={"Goods"}>Goods Donation</MenuItem>
            <MenuItem value={"Voluntary"}>Voluntary Activity</MenuItem>
          </Select>

          <TextField
            required
            id="outlined-disabled"
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            defaultValue={"Donation"}
          />
          <TextField
            required
            id="outlined-disabled"
            label="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            defaultValue={"1"}
          />

          <Button
            size="large"
            variant="contained"
            onClick={handleSubmitDonation}
          >
            Submit
          </Button>
        </div>
      </Box>
    </>
  );
}
