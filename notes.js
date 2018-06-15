console.log('Starting notes.js');
const fs = require('fs');

const addNote = (title, body) => {
    var notes = [];
    var note = {
        title, 
        body
    };

    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (err) {

    }

    var duplicateNotes  = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
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