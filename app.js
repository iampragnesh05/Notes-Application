const fs = require('fs')
const notes = require('./notes');
const chalk = require('chalk');
const yargs = require('yargs');
const { argv } = require('process');
const command = process.argv[2];


// Add Command
yargs.command({
    command: 'add',
    description: 'Add a new Notes',
    builder: {
        title: {
            describe: 'Notes Title',
            demandOption: true,
            type: 'string'
        }, body: {
            describe: 'Body Notes',
            demandOption: true,
            type: 'string'
        } 
    },
    handler: (argv) => {
    notes.addNotes(argv.title, argv.body)
    }
});

// Remove a Note
yargs.command({
    command: 'remove',
    description: 'Remove a Notes',
    builder: {
        title: {
            describe: 'Remove a Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title)
    }
});

// Read Command

yargs.command({
    command: 'read',
    description: 'Read a Note',
    handler: (argv) => {
        notes.readNotes(argv.title);
    }
})

// List Command 
yargs.command({
    command: 'list',
    description: 'Listing a Note',
    handler: (argv) => {
        notes.listNotes(argv.title);
    }
})

console.log(yargs.argv)



