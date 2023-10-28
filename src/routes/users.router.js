const { getAll, create, getAllId, remove, update } = require('../controllers/users.controllers');
const express = require('express');

const usersRouter = express.Router();

usersRouter.route("/")
	.get(getAll)
    .post(create)

usersRouter.route("/:id")
    .get(getAllId)
    .delete(remove)
    .put(update)

module.exports = usersRouter;