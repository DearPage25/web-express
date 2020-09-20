const express = require('express')
const app = express()
const hbs = require('hbs');

require('./views/hbs/helpes');

const port = process.env.PORT || 3000;






app.use( express.static(__dirname + '/public'));


hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');




app.get('/', ( req, res ) => {
    res.render('home', {
        nombre: 'odalmi',
    });
})

app.get('/about', (req, res) => {
    res.render('about')
})
 
app.listen(port, () => {
    console.log(`Te escucho en el puerto ${port}`)
})