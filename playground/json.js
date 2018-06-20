// Converting Object to a string

// var obj = {
//     name: "Rick"
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

//Converting a string to a object

// var personString = '{"name": "Rick", "Age": 29}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
    title: 'Some Title',
    body: 'Some body'
};

//OriginalNoteString
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

//note
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
