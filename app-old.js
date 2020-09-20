const http = require( 'http' );


http.createServer( (req, res) => {
    
    res.writeHead(200, {'Content-Type' : 'application/json'});
    
    let salida ={
        nombre: 'Odalmi',
        edad: 23,
        url: req.url
    }
    res.write(JSON.stringify( salida ))
    res.end();

})
.listen(8080);

console.log(`Estamos escuchandote en el port: 8080`)