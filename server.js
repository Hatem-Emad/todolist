const express = require('express')
const connectDB = require('./config/db')

const app = express()

//Connect to Database
connectDB()

// Init Middleware
app.use(express.json({extended: false}));

app.get('/', (_req,res) => res.send('API running'))
app.use('/api/users', require('./routes/users'))
app.use('/api/todos', require('./routes/todos'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`))