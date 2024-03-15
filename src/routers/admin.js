const express = require('express');
const NoteController = require('../controllers/admin');
const {Admin} = require("../models/admin")
const bcrypt = require('bcrypt');
const router = express.Router();
var User = [];
router.post('/add', async (req, res) => {
    try {
        const { note, text } = req.body;
        const newNote = await NoteController.addNewNote(note,text);
        res.status(201).json(newNote);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});
router.route('/remove').delete(async (req, res) => {
    try {
        const { note } = req.body;
        const result = await NoteController.removeNoteById(note);
        res.send("Deleted successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}).get()
router.post('/view', async (req, res) => {
    try {
        const { note } = req.body;
        const notes = await NoteController.getNotesByNote(note);
        res.status(200).json(notes);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});
router.post('/addUser', async (req, res) => {
    const { user, pass } = req.body;
    console.log(user + "  " + pass);
    try {
        const password = await bcrypt.hash(pass, 10); // await the hashing operation
        const result = await NoteController.addAdmin(user, password); // pass hashed password to addAdmin function
        res.send('Account created successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


router.post('/login', async (req, res) => {
    const { user, password } = req.body;
    try {
        const foundUser = await Admin.findOne({ username: user });
        if (!foundUser) {
            res.status(404).send("User not found");
        } else {
            const isPassMatch = await bcrypt.compare(password, foundUser.pass);
            if (isPassMatch) {
                res.send('Login Successfully');
            } else {
                res.status(401).send('Incorrect password');
            }
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = {router};
