import React, { useState } from "react";
import "./createnote.css";

const CreateNote = (props) => {
  const [note, setNote] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const submitNote = (e) => {
    e.preventDefault();
    props.submitNote(note);
    setNote({ title: "", content: "" });
  };

  return (
    <div className="container">
      <h1 className="note-heading">My ToDo List</h1>
      <form className="note-form">
        <input className="note-title" type="text" name="title" placeholder="Enter Title" value={note.title} onChange={handleChange} />
        <textarea className="note-content" name="content" id="" cols="30" rows="5" placeholder="Write Your Note" value={note.content} onChange={handleChange}></textarea>
        <button className="note-add-btn" onClick={submitNote}>
          Add New Note
        </button>
      </form>
    </div>
  );
};

export default CreateNote;
