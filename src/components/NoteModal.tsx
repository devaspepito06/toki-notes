import { useState, useEffect } from "react";
import type { Note } from "./types";
import "./NoteModal.css";

interface NoteModalProps {
  note: Note;
  onClose: () => void;
  onUpdate: (note: Note) => void;
  onDelete: (id: number) => void;
}

export function NoteModal({
  note,
  onClose,
  onUpdate,
  onDelete,
}: NoteModalProps) {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [isSaving, setIsSaving] = useState(false);

  // Auto-guardar cuando cambian title o content
  useEffect(() => {
    const timer = setTimeout(() => {
      if (title !== note.title || content !== note.content) {
        setIsSaving(true);
        onUpdate({
          ...note,
          title,
          content,
        });
        setTimeout(() => setIsSaving(false), 500);
      }
    }, 1000); // Espera 1 segundo después de dejar de escribir

    return () => clearTimeout(timer);
  }, [title, content, note, onUpdate]);

  const handleDelete = () => {
    if (window.confirm("¿Estás seguro de que deseas eliminar esta nota?")) {
      onDelete(note.id);
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button className="btn-close" onClick={onClose}>
            ✕
          </button>
          <span className={`save-indicator ${isSaving ? "saving" : "saved"}`}>
            {isSaving ? "Guardando..." : "Guardado"}
          </span>
        </div>

        <div className="modal-content">
          <input
            type="text"
            className="modal-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título de la nota"
          />

          <textarea
            className="modal-textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Escribe tu nota aquí..."
          />
        </div>

        <div className="modal-footer">
          <button className="btn-delete" onClick={handleDelete}>
            🗑️ Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
