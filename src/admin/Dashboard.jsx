import React from "react";
import { useState } from "react";
import NewsCard from "./News";
import { Button } from "@mui/material";
import NewsModal from "./NewsModal";

const Dashboard = () => {

  const [open, setOpen] = React.useState(false);

  const handleDialog = () => {
    setOpen(true);
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 style={{ fontFamily: "Poppins" }}>Trending News</h1>
        <Button variant="contained" onClick={handleDialog}>Create News</Button>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          marginTop: "20px",
        }}
      >
        <NewsCard />
      </div>

      <NewsModal open={open} setOpen={setOpen} />
    </>
  );
};

export default Dashboard;
