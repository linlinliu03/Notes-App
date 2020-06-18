const fs = require("fs")

const getNotes = () => {
    return "Your notes..."
}

const addNotes = (title, body) => {
   const notes = loadNotes();

   const duplicates = notes.filter(note => {
       return note.title === title
   })

   if(duplicates.length === 0){
       notes.push({
           title: title,
           body: body
       })

       saveNotes(notes)

       console.log("New note added!")
   }else{
       console.log("Note title already taken!")
   }

   
}

const saveNotes = (notes) => {
   const dataJson = JSON.stringify(notes);
   fs.writeFileSync("notes.json", dataJson); 
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