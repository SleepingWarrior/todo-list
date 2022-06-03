import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import "./note.css";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: "left",
  color: "yellow",
}));

const NoteRev1 = (props) => {
  const handleDelete = () => {
    props.deleteNote(props.id);
  };

  return (
    <Box sx={{ width: "50%" }}>
      <Stack spacing={2}>
        <Item>
          {props.title},{props.content}
          <Button variant="outlined" className="notes-delete-btn" onClick={handleDelete} startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </Item>
      </Stack>
    </Box>
  );
};

export default NoteRev1;
