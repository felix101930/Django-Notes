import React from "react";

function Note({ note, onDelete }) {
  const formattedDate = new Date(note.created_at).toLocaleDateString();

  return (
    <div className="note-container">
      <p classname="note-title">{note.title}</p>
      <p classname="note-content">{note.content}</p>
      <p classname="note-date">{formattedDate}</p>
      <button classname="delete-button" onClick={() => onDelete(note.id)}>
        Delete
      </button>
    </div>
  );
}
