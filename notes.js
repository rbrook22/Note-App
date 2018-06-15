console.log('Starting notes.js');
const fs = require('fs');
var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (err) {
        return [];
    }
};
var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title, 
        body
    };
    var duplicateNotes  = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    };
};

const getAll = () => {
    console.log('Getting all notes');
};

const getNote = (title) => {
    console.log('Getting Note', title);
};

const removeNote = (title) => {
    console.log('Removing Note', title);
};
module.exports = {
    addNote,
    getAll,
    getNote, 
    removeNote
}