const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/', function (req, res) {
    res.send("Welcome to the database");
});

// Create user asynchronously
app.get('/create', async function (req, res) {
    try {
        let createdUser = await userModel.create({
            name: "priya",
            username: "priyapatel",
            email: "priya@gmail.com"
        });
        res.send(createdUser);
    } catch (error) {
        res.status(500).send("Error creating user: " + error.message);
    }
});

// Update user
app.get('/update', async function (req, res) {
    try {
        let updatedUser = await userModel.findOneAndUpdate(
            { username: "dhruvimodiya" },
            { name: "ishamodiya" },
            { new: true }
        );
        res.send(updatedUser);
    } catch (error) {
        res.status(500).send("Error updating user: " + error.message);
    }
});

// Read user
app.get('/read', async function (req, res) {
    try {
        let users = await userModel.find();
        res.send(users);
    } catch (error) {
        res.status(500).send("Error reading users: " + error.message);
    }
});

// Delete user
app.get('/delete', async function (req, res) {
    try {
        let user = await userModel.findOneAndDelete({ username: "dhruvipatel" });
        res.send(user);
    } catch (error) {
        res.status(500).send("Error deleting user: " + error.message);
    }
});

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
