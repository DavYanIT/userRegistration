const UsersController = require('./usersController');
const express = require('express');
const app = express();

app.get('/', UsersController.getAllUsers);

app.get('/:id', UsersController.getUser);

app.put('/', UsersController.updateUser);

app.post('/', UsersController.createUser);

app.delete('/:userId', UsersController.deleteUser);

module.exports = app;
