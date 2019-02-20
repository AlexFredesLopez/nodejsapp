const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
// SE CREA UN MIDDLEWARE

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
//EXPRESS HBS ENGINE

//PARCIALES PARA PODER IMPORTAR CODIGO 
hbs.registerPartials(__dirname + '/views/parciales');

// INCLUIR HANDLEBARS (HBS) -> se renderiza con el códogo html
app.set('view engine', 'hbs');


app.get('/', function(req, res) {
    //FOrma para poder mandar variables a la vista del home
    res.render('home', {
        nombre: 'alex fredes lopez'
    });
})

app.get('/about', function(req, res) {

    //FOrma para poder mandar variables a la vista del home
    res.render('about');
})



app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port} `);
})