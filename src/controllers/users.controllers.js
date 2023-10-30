const catchError = require('../utils/catchError');
const users = require('../models/users');

const getAll = catchError(async(req, res) => {
    // Operaciones...
    const Users = await users.findAll();
    return res.json(Users)
});

const create = catchError(async(req, res) => {
    // Operaciones...
    const { first_name, last_name, email, password, birthday} = req.body;
    const user = await users.create({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        birthday: birthday
    })
    return res.status(201).json(user)
});

// users/:id
const getAllId = catchError(async(req, res) => {
    // Operaciones...
    const { id } = req.params;
    const user = await users.findByPk( id );
    return res.json(user)
});

// users/:id
const remove = catchError(async(req, res) => {
    // Operaciones...
    const { id } = req.params;
    await users.destroy({ where: { id: id } });
    return res.sendStatus(204)
});

const update = catchError(async(req, res) => {
    // Operaciones...
    const { id } = req.params;
    const { first_name, last_name, email, password, birthday } = req.body;
    const user = await users.update(
        { first_name, last_name, email, password, birthday },
        { where: { id }, returning: true }
    )
    const updatedUser = user[1][0];
    return res.json(updatedUser)
});

module.exports = {
    getAll,
    create,
    getAllId,
    remove,
    update
}