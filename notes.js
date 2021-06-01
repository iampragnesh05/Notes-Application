const fs = require('fs');
const { get } = require('http');
const { title } = require('process');


const getNotes = () => {
    return "I am Pragnesh Shrimal";
}

const addNotes = (title, body) => {
 const notes = loadNotes();

 const duplicateNote = notes.find((note) => note.title === title);

 if(!duplicateNote){
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes);
    console.log('Notes added')
 }else{
     console.log("Title is taken!")
 }

}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return [];
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const removeNote = (title) => {
   const notes = loadNotes();
   const notesToKeep = notes.filter((note) => note.title !== title);
   if(notes.length > notesToKeep.length){
       console.log('Notes Removed');
       saveNotes(notesToKeep);
   } else{
       console.log('Not Found')
   }
}

const readNotes = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title)
    if(note){
        console.log(note.title);
        console.log(note.body);
    }else{
        console.log('Not Found')
    }
}

const listNotes = (title) => {
   const notes = loadNotes();
   console.log("Your Notes");
   notes.forEach((note) => {
       console.log(note.title);
   })
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    readNotes: readNotes,
    listNotes: listNotes

}