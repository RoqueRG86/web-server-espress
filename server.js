const express = require('express');
const app = express();
var hbs = require('hbs');
require('./hbs/helpers');
const port = process.env.PORT || 3000;

//la exprecion .static sirve dar acceso para dominio publico
app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials', function(err) { console.log(err); });
app.set('view engine', 'hbs');

//Este funcion reduce el codigo de app, es similar a un endpoint
//configurado /

//Hay que tener cuidado en utilizar el callback app.use y una funcion get o post
app.get('/', (req, res) => {
    let persona = { nombre: 'Roque Ruiz Gonzalez', edad: 32, domicilio: 'CDMX' };
    //esto solo enviaba una respuesta de todo tipo
    // res.send(persona);

    //Esta funcion redereriza
    res.render('home', persona);
});
//un endpoint pero es una funcion de express
app.get('/acerca', (req, res) => {

    res.render('acerca');
});

app.listen(port, () => {

    console.log('Escuchando el puerto', port);

});