let notes = []

const setNotes = (noteArray) => {
    notes = noteArray.slice()
}

export const useNotes = () => notes.slice()

export const saveNote = note => {
    fetch('http://localhost:3000/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNotes)
}

export const getNotes = () => {
    // Load database state into application state
    return fetch("http://localhost:3000/notes")
        .then(response => response.json())
        .then((noteArray) => {
            notes = noteArray.slice
        })
}
  
export const deleteNote = (noteId) => {
    return fetch(`http://localhost:3000/notes/${noteId}`,{
    method: "DELETE"
        })
    }
// Edit Note
    const editNote = (note) => {
        return fetch(`http://localhost:3000/notes/${note.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(note)
        })
    }