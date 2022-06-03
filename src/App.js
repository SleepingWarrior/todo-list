import { useState } from "react";
import "./App.css";
import CreateNote from "./components/create_notes/CreateNote";
// import Note from "./components/Note";
import NoteRev1 from "./components/Note_Rev1";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="App">
      <CreateNote className="app-create-notes" submitNote={addNote} />
      {notes.map((noteItem, index) => {
        return <NoteRev1 className="app-notes" key={index} id={index} title={(noteItem, index).title} content={noteItem.content} deleteNote={deleteNote} />;
      })}
    </div>
  );
}

export default App;
