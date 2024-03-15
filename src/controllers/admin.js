const {Admin,notepad} = require('../models/admin'); // Assuming you have a note model

// Function to add a new note
const addNewNote = (note,text) => {
    console.log(note+" "+text);
    const newNote = new notepad({
        note1:note,
        text1: text
    });
    return newNote.save();
};

// Function to remove a note by ID
const removeNoteById = async (note) => {
    try {
        const result = await notepad.deleteMany({ note1 : note  });
        return result;
    } catch (error) {
        throw error;
    }
};
const getNotesByNote = async (note) => {
    try {
        const notes = await notepad.find({ note1: note });
        return notes;
    } catch (error) {
        throw error;
    }
};

const addAdmin = (user, password) => {
    console.log(user + " " + password);
    const newAdmin = new Admin({
        username: user,
        pass: password,
    });
    newAdmin.save();
};


module.exports = { addNewNote, removeNoteById , getNotesByNote,addAdmin};
