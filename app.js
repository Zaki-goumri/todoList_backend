const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');


const app = express();
const port = 3000;
// middleware to parse incoming request
app.use(express.json())

// connect to mongodb
mongoose.connect('mongodb://admin:admin@localhost:27017/todoList?authSource=admin',{useNewUrlParser:true, useUnifiedTopology:true})

const db = mongoose.connection;
db.on('error',() => console.log('Error in connecting to database'));
db.once('open',() => console.log('Connected to database'));
app.use(taskRoutes);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})