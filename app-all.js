const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let persona = { nombre: 'Nombre', edad: 32, domicilio: 'CDMX', url: res.url };

    //res.write('Hola Mundo');
    res.write(JSON.stringify(persona));
    res.end();

}).listen(8282);

console.log("Escuchando el puerto 8282");