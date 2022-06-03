import React from "react";
import "./note.css";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
// import { deleteNote } from "../../App";

const Note = (props) => {

  const handleDelete = () => {
    props.deleteNote(props.id);
  };
  
  return (
    <div className="notes-container">
      <h2 className="notes-title">{props.title}</h2>
      <p className="notes-content">{props.content}</p>
      <Button variant="outlined" className="notes-delete-btn" onClick={handleDelete} startIcon={<DeleteIcon />}>Delete</Button>
    </div>
  );
};

export default Note;