const fs = require("fs");
const chalk = require("chalk");

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

       console.log(chalk.bgGreen("New note added!"))
   }else{
       console.log(chalk.bgRed("Note title already taken!"))
   }

   
}

const removeNotes = (title) => {
    const notes = loadNotes();

    const leftData = notes.filter(note => {
        return note.title !== title
    })


    if(notes.length > leftData.length){
     
        saveNotes(leftData);

        console.log(chalk.bgGreen("Note emoved!"))
    }else{
        console.log(chalk.bgRed("No note found!"))
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
    addNotes: addNotes,
    removeNotes: removeNotes
};