// Initial setup and some test examples
const getNotes = require("./notes");
const chalk = require("chalk");


const command = process.argv[2]

if(command === "add"){
    console.log("add notes!")
}else if(command === "remove"){
    console.log("remove notes")
}

