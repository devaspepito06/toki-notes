import { useState, useEffect } from "react";
import "./App.css";
import { Note, NoteModal } from "./components";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  // Cargar notas desde localStorage al montar el componente
  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  // Guardar notas en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    const newNote: Note = {
      id: Date.now(),
      title: "Nueva nota",
      content: "",
      createdAt: new Date().toISOString(),
    };
    setNotes([newNote, ...notes]);
    setSelectedNote(newNote);
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
    setSelectedNote(null);
  };

  const updateNote = (updatedNote: Note) => {
    setNotes(
      notes.map((note) => (note.id === updatedNote.id ? updatedNote : note)),
    );
    setSelectedNote(updatedNote);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Mis Notas</h1>
        <button className="btn-add" onClick={addNote}>
          + Agregar Nota
        </button>
      </header>

      <main className="notes-grid">
        {notes.length === 0 ? (
          <p className="no-notes">No hay notas. ¡Crea una nueva!</p>
        ) : (
          notes.map((note) => (
            <div
              key={note.id}
              className="note-card"
              onClick={() => setSelectedNote(note)}
            >
              <h3>{note.title}</h3>
              <p>{note.content.substring(0, 100)}...</p>
            </div>
          ))
        )}
      </main>

      {selectedNote && (
        <NoteModal
          note={selectedNote}
          onClose={() => setSelectedNote(null)}
          onUpdate={updateNote}
          onDelete={deleteNote}
        />
      )}
    </div>
  );
}

export default App;
