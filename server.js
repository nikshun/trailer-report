const express = require('express')
const path = require('path')
const ejs = require('ejs')
const publicPath = path.join(__dirname, '/public')
const viewsPath = path.join(__dirname, '/public/templates')
const bodyParser = require('body-parser');
require('dotenv').config({path:__dirname+'/.env'});
// import{ init } from 'emailjs-com';
// init("user_5v0M9R0u5GcR6baxunaZd");

const app = express()

app.use(express.static(path.join(__dirname, '/public')));

// Home
app.get('/', async (req, res) => {
    await res.render('index')
})

// Home
app.get('/email', async (req, res) => {
    await res.render('index')
})

app.set('view engine', 'ejs')
app.set('views', viewsPath)


app.listen(process.env.PORT, () => {
    console.log("Server is up on port " + process.env.PORT)
})
