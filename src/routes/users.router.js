const { getAll, create, getAllId, remove, update } = require('../controllers/users.controllers');
const express = require('express');

const usersRouter = express.Router();

usersRouter.route("/")
	.get(getAll)
    .post(create)

usersRouter.route("/:id")
    .get(getAllId)
    .delete(remove)
    .patch(update)

module.exports = usersRouter;