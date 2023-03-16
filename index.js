require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8080;
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

//static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/openAi', require('./routes/openAiRouter'));

app.listen(port, ()=> console.log(`server running on port ${port}`))