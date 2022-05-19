//Dotenv
require('dotenv').config();
//Paquetes para webapp
const express = require('express')
const app = express()
const port = process.env.PORT;
const path = require('path')
const hbs = require('hbs');


//HandleBars
hbs.registerPartials(__dirname + '/views/partials');


app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '/views')));


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Sebastian Wilches',
        titulo: 'Usando parametros por Handlebar'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Sebastian Wilches',
        titulo: 'Usando parametros por Handlebar'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Sebastian Wilches',
        titulo: 'Usando parametros por Handlebar'
    });
})


app.get('*', (req, res) => {

    res.sendFile(__dirname + '/public/404.html');

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})