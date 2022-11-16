const express = require('express')
const router = express.Router();

const User = require('../models/User')
const Todo = require('../models/Todo')


// router.get('/', (req,res) => res.send('todos route'))

//create a todo
router.post('/', async (req,res) => {
    try {

        const newTodo = new Todo({
            text: req.body.text,
            // user: req.params.id
        })

        await newTodo.save()
        res.send({newTodo})

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error')
    }
})
//get all todos
router.get('/', async (req,res) => {
    try {
        const todos = await Todo.find()
        res.json({todos})
    } catch (error) {
        console.error(error.message).json('Server Error')
    }
})

//get todos of a user
router.get('/:id', async (req,res) => {
    try {
        const user = await User.findById(req.params.id).select('-password')
        const todos = await Todo.find({user}).sort({date:-1})
        res.json({todos})
    } catch (error) {
        console.error(error.message).json('Server Error')
    }
})

//delete a todo
router.delete('/:id', async (req,res)=>{
    try {
        const todo = await Todo.findByIdAndRemove(req.params.id)
        res.json({todo, msg:"This todo is removed"})
    } catch (error) {
        console.error(error.message).json('Server Error')
    }
})

module.exports = router;
