const express = require('express')
const app = express()
const port = 8080;


//Servir contenido estático
/*Esto nos va a permitir mostrarle una pág al usuario
Indicandole la ruta donde se encuentran estos archivos estaticos */

app.use(express.static('TemplatePages/templated-roadtrip')); //<--Siempre va a intentar buscar el index.html


app.get('/', (req, res) => {
    // res.send('Home page');
    res.sendFile(__dirname + '/TemplatePages/templated-roadtrip/index.html')

})

app.get('/Home', (req, res) => {
    // res.send('Home page');
    res.sendFile(__dirname + '/TemplatePages/templated-roadtrip/index.html')

})

app.get('/Generic', (req, res) => {
    res.sendFile( __dirname + '/TemplatePages/templated-roadtrip/generic.html')
})

app.get('/Elements', (req, res) => {
    res.sendFile( __dirname + '/TemplatePages/templated-roadtrip/elements.html')
})


//Controlar cualquier ruta que no existe
app.get('*', (req, res) => {

    res.sendFile(__dirname + '/public/404.html');

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})