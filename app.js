
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

// customize yargs version
yargs.version("1.1.0")

// create add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
         title: {
             describe: "Note title",
             demandOption: true,
             type: "string"
         },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        notes.addNotes(argv.title, argv.body)
    }
})


// create remove command
yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})

// create list command
yargs.command({
    command: "list",
    describe: "List out all notes",
    handler(){
        console.log("Listing out all notes")
    }
})
// create read command
yargs.command({
    command: "read",
    describe: "Read a note",
    handler(){
        console.log("Reading a note")
    }
})


yargs.parse()

