

const express = require('express');
const router = express.Router();

let users = []; // In-memory data store for simplicity

// Create a new user
router.post('/', (req, res) => {
    const user = req.body;
    user.id = users.length + 1; // Simple ID assignment
    users.push(user);
    res.status(201).json(user);
});

// Get all users
router.get('/', (req, res) => {
    res.json(users);
});

// Get a user by ID
router.get('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).send('User not found');
    }
    res.json(user);
});

// Update a user by ID
router.put('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex === -1) {
        return res.status(404).send('User not found');
    }
    users[userIndex] = { ...users[userIndex], ...req.body };
    res.json(users[userIndex]);
});

// Delete a user by ID
router.delete('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex === -1) {
        return res.status(404).send('User not found');
    }
    users.splice(userIndex, 1);
    res.status(204).send();
});

module.exports = router;
