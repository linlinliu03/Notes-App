// Initial setup and some test examples
const getNotes = require("./notes");
const validator = require("validator");


const note = getNotes();

console.log(note)

console.log(validator.isEmail("test@example.com"));
console.log(validator.isURL("https://example.com"));