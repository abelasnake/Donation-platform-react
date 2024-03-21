import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function NewsModal({ open, setOpen, news, id }) {
  const navigate = useNavigate();
  const [newsTitle, setNewsTitle] = useState(news?.title || "");
  const [newsDescription, setNewsDescription] = useState(
    news?.body || ""
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdateNews = (e) => {
    const newsData = {
      title: newsTitle,
      body: newsDescription,
    };

    axios
      .put(`http://127.0.0.1:3001/contents/${id}`, { payload: newsData })
      .then((response) => {
        navigate("/admin/dashboard");
      })
      .catch((error) => {
        console.error("Error creating product:", error);
      });

    handleClose();
    window.location.reload();
  };

  const handleCreateNews = (e) => {
    const newsData = {
      title: newsTitle,
      body: newsDescription,
    };

    axios
      .post("http://127.0.0.1:3001/contents", { payload: newsData })
      .then((response) => {
        navigate("/admin/dashboard");
      })
      .catch((error) => {
        console.error("Error creating product:", error);
      });

    handleClose();
    window.location.reload();
  };

  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{id ? "Update" : "Create"} News</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add Your News Information Here
          </DialogContentText>
          <TextField
            required
            margin="dense"
            label="News Title"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setNewsTitle(e.target.value)}
            value={newsTitle}
          />
          <TextField
            required
            margin="dense"
            label="News Description"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setNewsDescription(e.target.value)}
            value={newsDescription}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          {id ? (
            <Button
              variant="contained"
              onClick={handleUpdateNews}
              type="submit"
            >
              Update
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleCreateNews}
              type="submit"
            >
              Create
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
