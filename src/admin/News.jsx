import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import NewsModal from "./NewsModal";

export default function NewsCard() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = React.useState(false);
  const [newsId, setNewsId] = React.useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:3001/contents")
      .then((response) => response.json())
      .then((data) => {
        setNewsData(data["data"]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  const handleEdit = (id) => {
    setNewsId(id);
    setOpen(true);
  };

  return (
    <>
      {newsData.map((news) => (
        <Card sx={{ maxWidth: 325 }} key={1}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {news.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {news.body}
            </Typography>
            <div style={{ marginTop: "1rem", textAlign: "right" }}>
              {window.location.pathname.includes("admin") && (
                <IconButton aria-label="update" onClick={()=>{
                  handleEdit(news.id)
                }}>
                  <EditIcon />
                </IconButton>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
      <NewsModal open={open} setOpen={setOpen} id={newsId}/>
    </>
  );
}
