const express = require('express')
const path = require('path')
const ejs = require('ejs')
const publicPath = path.join(__dirname, '/public')
const viewsPath = path.join(__dirname, '/public/templates')
const bodyParser = require('body-parser');

const app = express()

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Home
app.get('/', async (req, res) => {
    await res.render('index')
})

app.set('view engine', 'ejs')
app.set('views', viewsPath)


app.listen("8000", () => {
    console.log("Server is up on port 8000")
})