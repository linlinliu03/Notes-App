const fs = require("fs");
const chalk = require("chalk");

const addNotes = (title, body) => {
   const notes = loadNotes();

   const duplicates = notes.find(note => note.title === title)

   if(!duplicates){
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

    const leftData = notes.filter(note => note.title !== title)


    if(notes.length > leftData.length){
     
        saveNotes(leftData);

        console.log(chalk.bgGreen("Note emoved!"))
    }else{
        console.log(chalk.bgRed("No note found!"))
    }

}

const listNotes = () => {
    const notes = loadNotes();

    console.log(chalk.bgRed("Your notes"))

    notes.forEach(note => console.log(note.title))
}

const readNote = (title) => {
    const notes = loadNotes();

    const noteToRead = notes.find(note => note.title === title)

    if(noteToRead){
        console.log(chalk.bgGreen(noteToRead.title));
        console.log(noteToRead.body);
    }else{
        console.log(chalk.bgRed("There is no note with this title!"))
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
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
};