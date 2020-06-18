const fs = require("fs")

const getNotes = () => {
    return "Your notes..."
}

const addNotes = (title, body) => {
   const notes = loadNotes();
   console.log(notes)
}

const loadNotes = () => {
    try{
         const dataBuffer = fs.readFileSync("notes.json");
         const dataJson = dataBuffer.toString();
         return JSON.parse(dataJson)

    }catch(e){
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes
};