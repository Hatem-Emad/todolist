const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

const User = require('../models/User')
const Todo = require('../models/Todo')

router.get('/', (req,res) => res.send('Users route'));

//create a user
router.post('/', async (req,res) =>{
    const {name, email, password} = req.body;

    try {
        
        let user = await User.findOne({email})

        if(user){
            return res.status(400).json({msg:'User already exists'})
        }

        user = new User({
            name,
            email,
            password
        })

        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password,salt)

        await user.save()

        res.send('User registered')

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error')
    }
})


//delete a user
router.delete('/:id', async (req,res) => {
    try {
        const user = await User.findById(req.params.id).select('-password')
        if(!user)  return res.status(400).json({msg: 'there is no user'});

        await Todo.deleteMany({user: req.params.id})
        await user.remove()

        res.json({user, msg: "This user is removed"})

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error')
    }
})

module.exports = router;

